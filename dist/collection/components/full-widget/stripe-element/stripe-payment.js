import { state } from "../../../store/store";
import { getContrastColor, getSafeDangerColor, getStripeElementAppearance } from "../../../utils/utils";
import { Env, h, Host } from "@stencil/core";
import { loadStripe } from "@stripe/stripe-js";
import i18n from "../../../utils/i18n";
import { createPaymentIntent } from "../../../services/services";
export class StripePayment {
    constructor() {
        this.stripe = null;
        this.elements = null;
        this.paymentElement = null;
        this.paymentElementOptions = undefined;
        this.appearance = {};
        this.isLoading = false;
        this.disablePayButton = false;
        this.isHovered = false;
        this.errorMsg = '';
    }
    async componentDidLoad() {
        this.stripe = await loadStripe(Env.STRIPE_PUBLISHABLE_KEY);
        if (this.stripe) {
            const options = {
                appearance: this.appearance,
                loader: 'auto',
                mode: 'payment',
                amount: state.stripe.paymentElementIntentAmount,
                currency: 'eur',
            };
            // Set up Stripe.js and Elements to use in checkout form
            this.elements = this.stripe.elements(options);
            // Create and mount the Payment Element
            this.paymentElementOptions = { layout: 'tabs' };
            this.paymentElement = this.elements.create('payment', this.paymentElementOptions);
            this.paymentElement.mount('#payment-element');
        }
        if (!state.widgetDetails) {
            this.disablePayButton = true;
        }
        else {
            this.disablePayButton = false;
        }
    }
    render() {
        const { font, fontColor, themeColor: primaryColor, borderColor: secondaryColor } = state.widgetDetails;
        this.appearance = getStripeElementAppearance(fontColor, primaryColor, secondaryColor);
        const handleError = error => {
            if (typeof error === 'string') {
                this.errorMsg = error;
            }
            else if (error.type && error.type === 'validation_error') {
                this.errorMsg = i18n.t('validationError');
            }
            else if (error.message && typeof error.message === 'string') {
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
            }
            catch (error) {
                console.error('Failed to create payment intent:', error);
                handleError(error);
                throw error; // Re-throw the error to stop further execution
            }
        };
        const handlePaymentConfirmation = async (clientSecret) => {
            try {
                await this.stripe.confirmPayment({
                    elements: this.elements,
                    clientSecret,
                    confirmParams: {
                        return_url: window.location.href,
                    },
                });
            }
            catch (error) {
                console.error('Failed to confirm payment:', error);
                handleError(error);
                throw error; // Re-throw the error to stop further execution
            }
        };
        const handleSubmit = async (event) => {
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
            }
            catch (error) {
                // Errors are already handled in the individual functions
            }
            finally {
                this.isLoading = false;
            }
        };
        return (h(Host, null, h("div", { class: "stripe-container" }, h("app-typography", { variant: "secondaryP", fontFamily: font, styleProps: {
                fontWeight: '700',
            } }, i18n.t('choosePaymentMethod')), h("form", { id: "payment-form", class: "stripe-form", onSubmit: event => handleSubmit(event) }, h("div", { id: "payment-element" }), h("button", { title: !state.stripe.paymentElementIntentAmount || !state.stripe.amountIsValid ? i18n.t('missingAmount') : '', class: "stripe-pay-button", disabled: this.isLoading || !this.stripe || !this.elements || !state.stripe.paymentElementIntentAmount || !state.stripe.amountIsValid || this.disablePayButton, id: "submit", style: {
                backgroundColor: secondaryColor,
                color: getContrastColor(secondaryColor).blackOrWhite,
                transform: this.isHovered ? 'scale(1.01)' : 'none',
            }, onMouseOver: () => (this.isHovered = true), onMouseOut: () => (this.isHovered = false) }, this.isLoading ? h("app-loader", { height: 25, color: getContrastColor(secondaryColor).blackOrWhite }) : i18n.t('payNow')), h("div", { id: "error-message" }, h("app-typography", { variant: "secondaryP", class: "stripe-error", fontFamily: font, style: { color: getSafeDangerColor(primaryColor) } }, this.errorMsg))))));
    }
    static get is() { return "stripe-payment"; }
    static get originalStyleUrls() {
        return {
            "$": ["./stripe-payment.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["stripe-payment.css"]
        };
    }
    static get states() {
        return {
            "stripe": {},
            "elements": {},
            "paymentElement": {},
            "paymentElementOptions": {},
            "appearance": {},
            "isLoading": {},
            "disablePayButton": {},
            "isHovered": {},
            "errorMsg": {}
        };
    }
}
//# sourceMappingURL=stripe-payment.js.map
