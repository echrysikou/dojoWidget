import { state } from '@src/store/store';
import { getContrastColor, getSafeDangerColor, getStripeElementAppearance } from '@src/utils/utils';
import { Component, Env, h, Host, State } from '@stencil/core';
import { Appearance, Layout, loadStripe, Stripe, StripeElement, StripeElements, StripeElementsOptions } from '@stripe/stripe-js';
import i18n from '@src/utils/i18n';
import { createPaymentIntent } from '@src/services/services';

@Component({
  tag: 'stripe-payment',
  styleUrl: './stripe-payment.css',
  shadow: false, //Stripe requires shadow to be false
})
export class StripePayment {
  @State() stripe: Stripe | null = null;
  @State() elements: StripeElements | null = null;
  @State() paymentElement: StripeElement | null = null;
  @State() paymentElementOptions: { layout: Layout };
  @State() appearance: Appearance = {};
  @State() isLoading: boolean = false;
  @State() disablePayButton: boolean = false;
  @State() isHovered = false;
  @State() errorMsg: string = '';

  async componentDidLoad() {
    this.stripe = await loadStripe(Env.STRIPE_PUBLISHABLE_KEY);

    if (this.stripe) {
      const options: StripeElementsOptions | undefined = {
        appearance: this.appearance,
        loader: 'auto',
        mode: 'payment',
        amount: state.stripe.paymentElementIntentAmount,
        currency: 'eur',
      };

      // Set up Stripe.js and Elements to use in checkout form
      this.elements = this.stripe.elements(options);

      // Create and mount the Payment Element
      this.paymentElementOptions = { layout: 'tabs' as Layout };

      this.paymentElement = this.elements.create('payment', this.paymentElementOptions);
      this.paymentElement.mount('#payment-element');
    }
    if (!state.widgetDetails) {
      this.disablePayButton = true;
    } else {
      this.disablePayButton = false;
    }
  }

  render() {
    const { font, fontColor, themeColor: primaryColor, borderColor: secondaryColor } = state.widgetDetails;

    this.appearance = getStripeElementAppearance(fontColor, primaryColor, secondaryColor);

    const handleError = error => {
      if (typeof error === 'string') {
        this.errorMsg = error;
      } else if (error.type && error.type === 'validation_error') {
        this.errorMsg = i18n.t('validationError');
      } else if (error.message && typeof error.message === 'string') {
        this.errorMsg = error.message;
      }
      this.isLoading = false;
    };

    const handlePaymentIntentCreation = async () => {
      try {
        const res = await createPaymentIntent({
          amount: state.stripe.paymentElementIntentAmount,
          elementId: state.widgetDetails.uuid,
        });
        return res.clientSecret;
      } catch (error) {
        console.error('Failed to create payment intent:', error);
        handleError(error);
        throw error; // Re-throw the error to stop further execution
      }
    };

    const handlePaymentConfirmation = async (clientSecret: string) => {
      try {
        await this.stripe.confirmPayment({
          elements: this.elements,
          clientSecret,
          confirmParams: {
            return_url: window.location.href,
          },
        });
      } catch (error) {
        console.error('Failed to confirm payment:', error);
        handleError(error);
        throw error; // Re-throw the error to stop further execution
      }
    };

    const handleSubmit = async (event: Event) => {
      event.preventDefault();

      if (this.isLoading || !this.stripe || !this.elements || !state.stripe.paymentElementIntentAmount || !state.stripe.amountIsValid || this.disablePayButton) {
        return;
      }

      this.isLoading = true;
      this.errorMsg = '';

      // Trigger form validation and wallet collection
      const { error: submitError } = await this.elements.submit();

      if (submitError) {
        handleError(submitError);
        return;
      }

      try {
        const clientSecret = await handlePaymentIntentCreation();
        await handlePaymentConfirmation(clientSecret);
      } catch (error) {
        // Errors are already handled in the individual functions
      } finally {
        this.isLoading = false;
      }
    };

    return (
      <Host>
        <div class="stripe-container">
          <app-typography
            variant="secondaryP"
            fontFamily={font}
            styleProps={{
              fontWeight: '700',
            }}
          >
            {i18n.t('choosePaymentMethod')}
          </app-typography>
          <form id="payment-form" class="stripe-form" onSubmit={event => handleSubmit(event)}>
            <div id="payment-element"></div>
            <button
              title={!state.stripe.paymentElementIntentAmount || !state.stripe.amountIsValid ? i18n.t('missingAmount') : ''}
              class="stripe-pay-button"
              disabled={this.isLoading || !this.stripe || !this.elements || !state.stripe.paymentElementIntentAmount || !state.stripe.amountIsValid || this.disablePayButton}
              id="submit"
              style={{
                backgroundColor: secondaryColor,
                color: getContrastColor(secondaryColor).blackOrWhite,
                transform: this.isHovered ? 'scale(1.01)' : 'none',
              }}
              onMouseOver={() => (this.isHovered = true)}
              onMouseOut={() => (this.isHovered = false)}
            >
              {this.isLoading ? <app-loader height={25} color={getContrastColor(secondaryColor).blackOrWhite} /> : i18n.t('payNow')}
            </button>
            <div id="error-message">
              <app-typography variant="secondaryP" class="stripe-error" fontFamily={font} style={{ color: getSafeDangerColor(primaryColor) }}>
                {this.errorMsg}
              </app-typography>
            </div>
          </form>
        </div>
      </Host>
    );
  }
}
