import { Component, Env, h, Host } from '@stencil/core';
import { state } from '@src/store/store';

@Component({
  tag: 'full-widget',
  styleUrl: './full-widget.css',
  shadow: false, //Stripe requires shadow to be false
})
export class FullWidget {
  render() {
    const logo = Env.CDN_PATH + '/assets/TaktakLogo.png';
    const { font, label, themeColor } = state.widgetDetails;

    return (
      <Host>
        <div
          class="widget-container"
          style={{
            backgroundColor: themeColor,
            color: state.widgetDetails.fontColor,
          }}
        >
          <img src={logo} class="taktak-logo" alt="Taktak logo" />

          <app-typography variant="h3" fontFamily={font} styleProps={{ marginTop: '10px', height: '20px' }}>
            {label}
          </app-typography>

          <select-amount />
          <collaborators-list />
          <stripe-payment />
        </div>
      </Host>
    );
  }
}
