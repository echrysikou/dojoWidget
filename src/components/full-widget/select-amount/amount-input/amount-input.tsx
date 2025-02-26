import { Component, Element, h, Prop, State, Watch } from '@stencil/core';
import i18n from '@src/utils/i18n';
import { onChange, state } from '@src/store/store';
import { getSafeDangerColor } from '@src/utils/utils';

@Component({
  tag: 'amount-input',
  styleUrl: 'amount-input.css',
  shadow: false,
})
export class AmountInput {
  @Element() el: HTMLElement;
  private inputRef: HTMLInputElement;

  @Prop() maxDecimals: number = 2;

  @State() selectedAmount: string = '';
  @State() isHovered: boolean = false;
  @State() amountTooLow: boolean = false; // Stripe allows amounts greater than 1Euro

  @Watch('selectedAmount')
  watchAmount(newValue: string) {
    const amount = newValue ? parseFloat(newValue) : 0;

    state.stripe = { paymentElementIntentAmount: amount * 100 };
    this.amountTooLow = amount < 1;
  }

  componentWillLoad() {
    this.selectedAmount = '';
  }

  // Validate input is a number with max two decimals
  isValidNumber(value: string): boolean {
    const regex = new RegExp(`^\\d*(\\.\\d{0,${this.maxDecimals}})?$`);
    return regex.test(value);
  }

  handleInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const inputValue = input.value;

    if (this.isValidNumber(inputValue)) {
      this.selectedAmount = inputValue;
    } else {
      // If invalid, revert to the last valid value
      input.value = this.selectedAmount;
    }
  }

  // handle external state changes
  handleStateChange = () => {
    this.selectedAmount = (state.stripe.paymentElementIntentAmount / 100).toString();
    if (this.inputRef) {
      this.inputRef.value = this.selectedAmount; // Update the input's value directly
    }
  };

  componentDidLoad() {
    onChange('stripe', this.handleStateChange);
  }

  disconnectedCallback() {
    onChange('stripe', this.handleStateChange); // Remove the listener
  }

  render() {
    const { font, themeColor: bgColor, borderColor: secondaryColor } = state.widgetDetails;

    return (
      <div class="enter-amount-container">
        <app-typography
          variant="secondaryCaption"
          fontFamily={font.includes('Baloo Bhaijaan 2') ? 'Raleway, sans-serif' : font}
          styleProps={{
            fontWeight: '500',
          }}
        >
          {i18n.t('enterAmount')}
        </app-typography>

        <div class="form-control" onMouseOver={() => (this.isHovered = true)} onMouseOut={() => (this.isHovered = false)} style={{ height: '56px' }}>
          <div class="input-container" style={{ border: `${this.isHovered ? '2px' : '0.5px'} solid ${secondaryColor}`, height: '56px' }}>
            <span class="input-adornment" style={{ fontFamily: font }}>
              €
            </span>

            <input
              id={`outlined-adornment-amount${this.selectedAmount}`}
              ref={el => (this.inputRef = el)}
              style={{ fontFamily: font }}
              type="number"
              onInput={event => this.handleInput(event)}
              step="0.01"
              min="1"
              value={this.selectedAmount}
            />
          </div>
          {this.amountTooLow && (
            <app-typography variant="secondaryMessage" class="low-amount-error" style={{ color: getSafeDangerColor(bgColor) }}>
              {i18n.t('minStripeAmount')}
            </app-typography>
          )}
        </div>
      </div>
    );
  }
}
