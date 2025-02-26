import { p as proxyCustomElement, H, h } from './p-2189282e.js';
import { b as getSafeDangerColor, i as instance } from './p-032d2676.js';
import { s as state, o as onChange } from './p-703964f3.js';
import { d as defineCustomElement$1 } from './p-9c5a097d.js';

const amountInputCss = ".enter-amount-container{display:flex;flex-direction:column;gap:14px;margin-top:15px}.form-control{width:100%;margin-top:-5px;background-color:var(--common-white);border-radius:5px;box-shadow:0px 0px 14px 0px rgba(0, 0, 0, 0.05);box-sizing:border-box}.input-container{display:flex;align-items:center;border-radius:5px;padding:8px;transition:all 0.3s ease-in-out;box-sizing:border-box}.input-adornment{margin-right:8px;font-size:16px;color:var(--text);line-height:normal;box-sizing:border-box}input{flex:1;border:none;outline:none;font-size:16px;font-family:var(--font-secondary);font-weight:400;color:var(--text);background:transparent;line-height:normal;box-sizing:border-box}input:focus{border:none;outline:none}.low-amount-error{margin-left:0px;margin-top:6px;font-weight:500}";
const AmountInputStyle0 = amountInputCss;

const AmountInput = /*@__PURE__*/ proxyCustomElement(class AmountInput extends H {
    constructor() {
        super();
        this.__registerHost();
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
            } }, instance.t('enterAmount')), h("div", { key: '1de04268f9c025dcfbecf828a283eeaf85289b0d', class: "form-control", onMouseOver: () => (this.isHovered = true), onMouseOut: () => (this.isHovered = false), style: { height: '56px' } }, h("div", { key: 'fe71ac6d984547fb0a0d5660c03dce0e0a9ce1fb', class: "input-container", style: { border: `${this.isHovered ? '2px' : '0.5px'} solid ${secondaryColor}`, height: '56px' } }, h("span", { key: '327860d11c724e592bd9f2d017ded94b30d42ad6', class: "input-adornment", style: { fontFamily: font } }, "\u20AC"), h("input", { key: '89faaa14125054bf28c09e8e07cf68ae1ff51035', id: `outlined-adornment-amount${this.selectedAmount}`, ref: el => (this.inputRef = el), style: { fontFamily: font }, type: "number", onInput: event => this.handleInput(event), step: "0.01", min: "1", value: this.selectedAmount })), this.amountTooLow && (h("app-typography", { key: 'eba50d24677ba8e6f67db01c93691a3ad0111ceb', variant: "secondaryMessage", class: "low-amount-error", style: { color: getSafeDangerColor(bgColor) } }, instance.t('minStripeAmount'))))));
    }
    get el() { return this; }
    static get watchers() { return {
        "selectedAmount": ["watchAmount"]
    }; }
    static get style() { return AmountInputStyle0; }
}, [0, "amount-input", {
        "maxDecimals": [2, "max-decimals"],
        "selectedAmount": [32],
        "isHovered": [32],
        "amountTooLow": [32]
    }, undefined, {
        "selectedAmount": ["watchAmount"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["amount-input", "app-typography"];
    components.forEach(tagName => { switch (tagName) {
        case "amount-input":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AmountInput);
            }
            break;
        case "app-typography":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}
defineCustomElement();

export { AmountInput as A, defineCustomElement as d };

//# sourceMappingURL=p-bbe1b8d6.js.map