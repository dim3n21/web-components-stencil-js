/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface WcSideDrawer {
        "open": () => Promise<void>;
        "opened": boolean;
        "title": string;
    }
    interface WcStockPrice {
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLWcSideDrawerElement extends Components.WcSideDrawer, HTMLStencilElement {
    }
    var HTMLWcSideDrawerElement: {
        prototype: HTMLWcSideDrawerElement;
        new (): HTMLWcSideDrawerElement;
    };
    interface HTMLWcStockPriceElement extends Components.WcStockPrice, HTMLStencilElement {
    }
    var HTMLWcStockPriceElement: {
        prototype: HTMLWcStockPriceElement;
        new (): HTMLWcStockPriceElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "wc-side-drawer": HTMLWcSideDrawerElement;
        "wc-stock-price": HTMLWcStockPriceElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface WcSideDrawer {
        "opened"?: boolean;
        "title"?: string;
    }
    interface WcStockPrice {
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "wc-side-drawer": WcSideDrawer;
        "wc-stock-price": WcStockPrice;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "wc-side-drawer": LocalJSX.WcSideDrawer & JSXBase.HTMLAttributes<HTMLWcSideDrawerElement>;
            "wc-stock-price": LocalJSX.WcStockPrice & JSXBase.HTMLAttributes<HTMLWcStockPriceElement>;
        }
    }
}
