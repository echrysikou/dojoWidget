import { p as proxyCustomElement, H, h } from './p-2189282e.js';
import { b as getSafeDangerColor, i as instance } from './p-2042c337.js';
import { s as state, o as onChange } from './p-14a59560.js';
import { d as defineCustomElement$1 } from './p-95c91de4.js';

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
            } }, instance.t('enterAmount')), h("div", { key: 'aac977ad06e6bd8ba4b6ae7fa11ee6f47f64aacc', class: "form-control", onMouseOver: () => (this.isHovered = true), onMouseOut: () => (this.isHovered = false), style: { height: '56px' } }, h("div", { key: '1c079b7924e6c2c0cb614e7c571a6d606025f1d1', class: "input-container", style: { border: `${this.isHovered ? '2px' : '0.5px'} solid ${secondaryColor}`, height: '56px' } }, h("span", { key: 'f01cb6f1c9629072553c91ea30d8f2fae5709f73', class: "input-adornment", style: { fontFamily: font } }, "\u20AC"), h("input", { key: 'faf85c3be9c254f0f7cdc85151f8931f5333ab8e', id: `outlined-adornment-amount${this.selectedAmount}`, ref: el => (this.inputRef = el), style: { fontFamily: font }, type: "number", onInput: event => this.handleInput(event), step: "0.01", min: "1", value: this.selectedAmount })), this.amountTooLow && (h("app-typography", { key: '5e4a29602f39b809d2cc7118c7437c4061f5bb3d', variant: "secondaryMessage", class: "low-amount-error", style: { color: getSafeDangerColor(bgColor) } }, instance.t('minStripeAmount'))))));
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

//# sourceMappingURL=p-d57f8c7a.js.map