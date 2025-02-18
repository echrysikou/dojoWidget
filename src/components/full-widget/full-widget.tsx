import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'full-widget',
  styleUrl: './full-widget.css',
  shadow: true,
})
export class FullWidget {
  render() {
    return (
      <Host>
        <div>Widget</div>
      </Host>
    );
  }
}
