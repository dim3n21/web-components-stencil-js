import { Component, State, Element, h, Prop, Watch, Listen } from '@stencil/core';

@Component({
  tag: 'wc-stock-price',
  styleUrl: './stock-price.css',
  shadow: true
})
export class StockPrice {
  stockInput: HTMLInputElement;

  @Element() el: HTMLElement;

  @State() fetchedPrice: number;
  @State() stockUserInput: string;
  @State() stockInputValid = false;
  @State() error: string;
  @State() loading = false;

  @Prop() stockSymbol: string;

  @Watch('stockSymbol')
  stockSymbolChanged(newValue: string, oldValue: string) {
    if (newValue !== oldValue) {
      this.stockUserInput = newValue;
      this.stockInputValid = true;
      this.fetchStockPrice(newValue);
    }
  }

  onUserInput(event: Event) {
    this.stockUserInput = (event.target as HTMLInputElement).value;
    if (this.stockUserInput.trim() !== '') {
      this.stockInputValid = true;
    } else {
      this.stockInputValid = false;
    }
  }

  onFetchStockPrice(event: Event) {
    event.preventDefault();
    // const stockSymbol = (this.el.shadowRoot.querySelector('#stock-symbol') as HTMLInputElement).value;
    this.stockSymbol = this.stockInput.value;
    // this.fetchStockPrice(stockSymbol);
  }

  componentWillLoad() {
    console.log('componentWillLoad');
    console.log(this.stockSymbol);
  }

  componentDidLoad() {
    console.log('componentDidLoad');
    if (this.stockSymbol) {
      this.stockUserInput = this.stockSymbol;
      this.stockInputValid = true;
      this.fetchStockPrice(this.stockSymbol);
    }
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentDidUnload() {
    console.log('componentDidUnload');
  }

  @Listen('body:wcSymbolSelected')
  onStockSymbolSelected(event: CustomEvent) {
    console.log('stock symbol selected: ' + event.detail);
    if (event.detail && event.detail !== this.stockSymbol) {
      this.stockSymbol = event.detail;
    }
  }


  fetchStockPrice(stockSymbol: string) {
    this.loading = true;
    fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=demo`
    )
      .then(res => {
        if (res.status !== 200) {
          throw new Error('Invalid!');
        }
        return res.json();
      })
      .then(parsedRes => {
        if (!parsedRes['Global Quote']['05. price']) {
          throw new Error('Invalid symbol!');
        }
        this.error = null;
        this.fetchedPrice = +parsedRes['Global Quote']['05. price'];
        this.loading = false;
      })
      .catch(err => {
        this.error = err.message;
        this.fetchedPrice = null;
        this.loading = false;
      });
  }

  hostData() {
    return { class: this.error ? 'error' : '' };
  }

  render() {
    let dataContent = <p>Please enter a symbol!</p>;
    if (this.error) {
      dataContent = <p>{this.error}</p>;
    }
    if (this.fetchedPrice) {
      dataContent = <p>Price: ${this.fetchedPrice}</p>;
    }
    return [
      <form onSubmit={this.onFetchStockPrice.bind(this)}>
        <input
          id="stock-symbol"
          ref={el => (this.stockInput = el)}
          value={this.stockUserInput}
          onInput={this.onUserInput.bind(this)}
        />
        <button type="submit" disabled={!this.stockInputValid}>
          Fetch
        </button>
      </form>,
      <div>{dataContent}</div>
    ];
  }
}
