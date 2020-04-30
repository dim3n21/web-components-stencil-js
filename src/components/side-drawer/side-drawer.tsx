import { Component, Prop, State, Method, h } from '@stencil/core';

@Component ({
    tag: 'wc-side-drawer',
    styleUrl: './side-drawer.css',
    shadow: true
})

export class SideDrawer {
    @State() showContactInfo = false;
    @Prop({reflect: true}) title: string;
    @Prop({reflect: true, mutable: true}) opened: boolean;

    onCloseDrawer() {
        this.opened = false;
    }

    onContentChange(content: string) {
        this.showContactInfo = content === 'contact';
      }
    
    @Method()
    open() {
        this.opened = true;
    }

    render() {
        let mainContent = <slot />;
        if (this.showContactInfo) {
            mainContent = (
                <div class="contact-information js-contact-information">
                  <h2>Contact Information</h2>
                  <p>You can reach us via phone or email.</p>
                  <ul>
                    <li>Phone: 49802384032</li>
                    <li>
                      E-Mail:
                      <a href="mailto:something@something.com">
                        something@something.com
                      </a>
                    </li>
                  </ul>
                </div>
              );
        }
        return (
            <aside>
                <header><h1>{this.title}</h1></header>
                <button class='js-close-drawer' onClick={this.onCloseDrawer.bind(this)}>x</button>
                <section class='js-tabs tabs'>
                    <button class={!this.showContactInfo ? 'active' : ''} onClick={this.onContentChange.bind(this, 'nav')}>Navigation</button>
                    <button class={this.showContactInfo ? 'active' : ''} onClick={this.onContentChange.bind(this, 'contact')}>Contact</button>
                </section>
                <main>
                    {mainContent}
                </main>
            </aside>
        )
    }
}