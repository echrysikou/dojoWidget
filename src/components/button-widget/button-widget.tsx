import { Component, h, Host } from '@stencil/core';
import { state } from '../../store/store';

@Component({
  tag: 'button-widget',
  styleUrl: './button-widget.css',
  shadow: true,
})
export class ButtonWidget {
  render() {
    return (
      <Host>
        <button
          class="donate-button"
          style={{
            backgroundColor: state.widgetDetails.themeColor,
            color: state.widgetDetails.fontColor,
            borderColor: state.widgetDetails.borderColor,
            fontFamily: state.widgetDetails.font ?? 'inherit',
          }}
        >
          <span class="taktak-icon">
            <img src="/assets/t-icon.svg" class="t-icon-image" />
          </span>
          <span class="button-text">{state.widgetDetails.label}</span>
        </button>
      </Host>
    );
  }
}
