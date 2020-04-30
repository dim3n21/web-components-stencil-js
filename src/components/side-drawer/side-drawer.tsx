import { Component, Prop, h } from '@stencil/core';

@Component ({
    tag: 'wc-side-drawer',
    styleUrl: './side-drawer.css',
    shadow: true
})

export class SideDrawer {
    @Prop({reflect: true}) title: string;
    @Prop({reflect: true, mutable: true}) open: boolean;

    onCloseDrawer() {
        this.open = false;
    }

    render() {
        return (
            <aside>
                <header><h1>{this.title}</h1></header>
                <button class='js-close-drawer' onClick={this.onCloseDrawer.bind(this)}>x</button>
                <main>
                    <slot />
                </main>
            </aside>
        )
    }
}