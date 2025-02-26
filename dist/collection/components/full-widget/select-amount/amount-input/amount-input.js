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
        state.stripe = { paymentElementIntentAmount: amount * 100, amountIsValid: amount >= 1 };
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
        return (h("div", { key: '47a7b1de7236cc8a58ed1ed52cce3b93b4d6bc0b', class: "enter-amount-container" }, h("app-typography", { key: '86f11504143290b67943e9bc7eff7dd1453d4e1a', variant: "secondaryCaption", fontFamily: font.includes('Baloo Bhaijaan 2') ? 'Raleway, sans-serif' : font, styleProps: {
                fontWeight: '500',
            } }, i18n.t('enterAmount')), h("div", { key: '1de04268f9c025dcfbecf828a283eeaf85289b0d', class: "form-control", onMouseOver: () => (this.isHovered = true), onMouseOut: () => (this.isHovered = false), style: { height: '56px' } }, h("div", { key: 'fe71ac6d984547fb0a0d5660c03dce0e0a9ce1fb', class: "input-container", style: { border: `${this.isHovered ? '2px' : '0.5px'} solid ${secondaryColor}`, height: '56px' } }, h("span", { key: '327860d11c724e592bd9f2d017ded94b30d42ad6', class: "input-adornment", style: { fontFamily: font } }, "\u20AC"), h("input", { key: '89faaa14125054bf28c09e8e07cf68ae1ff51035', id: `outlined-adornment-amount${this.selectedAmount}`, ref: el => (this.inputRef = el), style: { fontFamily: font }, type: "number", onInput: event => this.handleInput(event), step: "0.01", min: "1", value: this.selectedAmount })), this.amountTooLow && (h("app-typography", { key: 'eba50d24677ba8e6f67db01c93691a3ad0111ceb', variant: "secondaryMessage", class: "low-amount-error", style: { color: getSafeDangerColor(bgColor) } }, i18n.t('minStripeAmount'))))));
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
