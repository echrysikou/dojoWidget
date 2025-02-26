import { h } from "@stencil/core";
import i18n from "../../../../utils/i18n";
import { onChange, state } from "../../../../store/store";
import { getSafeDangerColor } from "../../../../utils/utils";
export class AmountInput {
    constructor() {
        // handle external state changes
        this.handleStateChange = () => {
            this.selectedAmount = (state.stripe.paymentElementIntentAmount / 100).toString();
            if (this.inputRef) {
                this.inputRef.value = this.selectedAmount; // Update the input's value directly
            }
        };
        this.maxDecimals = 2;
        this.selectedAmount = '';
        this.isHovered = false;
        this.amountTooLow = false;
    }
    watchAmount(newValue) {
        const amount = newValue ? parseFloat(newValue) : 0;
        state.stripe = { paymentElementIntentAmount: amount * 100 };
        this.amountTooLow = amount < 1;
    }
    componentWillLoad() {
        this.selectedAmount = '';
    }
    // Validate input is a number with max two decimals
    isValidNumber(value) {
        const regex = new RegExp(`^\\d*(\\.\\d{0,${this.maxDecimals}})?$`);
        return regex.test(value);
    }
    handleInput(event) {
        const input = event.target;
        const inputValue = input.value;
        if (this.isValidNumber(inputValue)) {
            this.selectedAmount = inputValue;
        }
        else {
            // If invalid, revert to the last valid value
            input.value = this.selectedAmount;
        }
    }
    componentDidLoad() {
        onChange('stripe', this.handleStateChange);
    }
    disconnectedCallback() {
        onChange('stripe', this.handleStateChange); // Remove the listener
    }
    render() {
        const { font, themeColor: bgColor, borderColor: secondaryColor } = state.widgetDetails;
        return (h("div", { key: '4ba263a37d2c2edb17a11d9da2416d45520925df', class: "enter-amount-container" }, h("app-typography", { key: 'cd48619a9404ce2b8c896b11a006dad575218753', variant: "secondaryCaption", fontFamily: font.includes('Baloo Bhaijaan 2') ? 'Raleway, sans-serif' : font, styleProps: {
                fontWeight: '500',
            } }, i18n.t('enterAmount')), h("div", { key: 'aac977ad06e6bd8ba4b6ae7fa11ee6f47f64aacc', class: "form-control", onMouseOver: () => (this.isHovered = true), onMouseOut: () => (this.isHovered = false), style: { height: '56px' } }, h("div", { key: '1c079b7924e6c2c0cb614e7c571a6d606025f1d1', class: "input-container", style: { border: `${this.isHovered ? '2px' : '0.5px'} solid ${secondaryColor}`, height: '56px' } }, h("span", { key: 'f01cb6f1c9629072553c91ea30d8f2fae5709f73', class: "input-adornment", style: { fontFamily: font } }, "\u20AC"), h("input", { key: 'faf85c3be9c254f0f7cdc85151f8931f5333ab8e', id: `outlined-adornment-amount${this.selectedAmount}`, ref: el => (this.inputRef = el), style: { fontFamily: font }, type: "number", onInput: event => this.handleInput(event), step: "0.01", min: "1", value: this.selectedAmount })), this.amountTooLow && (h("app-typography", { key: '5e4a29602f39b809d2cc7118c7437c4061f5bb3d', variant: "secondaryMessage", class: "low-amount-error", style: { color: getSafeDangerColor(bgColor) } }, i18n.t('minStripeAmount'))))));
    }
    static get is() { return "amount-input"; }
    static get originalStyleUrls() {
        return {
            "$": ["amount-input.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["amount-input.css"]
        };
    }
    static get properties() {
        return {
            "maxDecimals": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "max-decimals",
                "reflect": false,
                "defaultValue": "2"
            }
        };
    }
    static get states() {
        return {
            "selectedAmount": {},
            "isHovered": {},
            "amountTooLow": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "selectedAmount",
                "methodName": "watchAmount"
            }];
    }
}
//# sourceMappingURL=amount-input.js.map
