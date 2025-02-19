import { Component, Env, getAssetPath, h, Host } from '@stencil/core';
import { state } from '../../store/store';

@Component({
  tag: 'button-widget',
  styleUrl: './button-widget.css',
  shadow: true,
  assetsDirs: ['assets']

})
export class ButtonWidget {
  private handleClick = () => {
    window.location.href = Env.PLATFORM_URL + 'donate?id=' + state.widgetDetails.uuid; // Change to your URL source
  };

  render() {

    const imageSrc= getAssetPath('../assets/t-icon.svg');
    

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
            <img src={imageSrc} class="t-icon-image" />
          </span>
          <span class="button-text">{state.widgetDetails.label}</span>
        </button>
      </Host>
    );
  }
}
