import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'qr-code-widget',
  styleUrl: './qr-code-widget.css',
  shadow: true,
})
export class QrCodeWidget {
  @Prop() wId: string;

  render() {
    return (
      <Host>
        <div>QR code</div>
      </Host>
    );
  }
}
