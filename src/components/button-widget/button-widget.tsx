import { Component, Env, h, Host } from '@stencil/core';
import { state } from '@src/store/store';

@Component({
  tag: 'button-widget',
  styleUrl: './button-widget.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class ButtonWidget {
  private handleClick = () => {
    const url = Env.PLATFORM_URL + '/donate?id=' + state.widgetDetails.uuid;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  render() {
    const imageSrc = Env.CDN_PATH + '/assets/t-icon.svg';
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
          onClick={this.handleClick}
        >
          <span class="taktak-icon">
            <img src={imageSrc} alt="Taktak Icon" class="t-icon-image" />
          </span>
          <span class="button-text">{state.widgetDetails.label}</span>
        </button>
      </Host>
    );
  }
}
