import { p as proxyCustomElement, H, h } from './p-2189282e.js';
import { g as getWidgetButtonAndBorderColors, a as getContrastColor, i as instance } from './p-032d2676.js';
import { s as state } from './p-703964f3.js';
import { d as defineCustomElement$1 } from './p-9c5a097d.js';

const amountButtonsCss = ".select-amount-container{display:flex;flex-direction:column;gap:14px;margin-top:60px}.amount-btns-container{display:flex;flex-direction:row;gap:8px;justify-content:space-between;margin-top:2px}.widgetButton{border-radius:5px;box-shadow:0px 0px 14px 0px rgba(0, 0, 0, 0.05);font-weight:400;width:30%;min-width:64px;display:flex;justify-content:center;align-items:center;font-size:16px;line-height:36px;height:44px;pointer-events:auto;padding-top:1px;padding-left:16px;padding-right:16px;transition:all 0.3s ease-out;letter-spacing:0.2px;text-align:center;text-shadow:none !important;white-space:nowrap;cursor:pointer}";
const AmountButtonsStyle0 = amountButtonsCss;

const AmountButtons = /*@__PURE__*/ proxyCustomElement(class AmountButtons extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.hoveredButton = null;
    }
    render() {
        const { font, themeColor: primaryColor, borderColor: secondaryColor } = state.widgetDetails;
        const btnAmounts = [3, 10, 15];
        const buttonBgColor = getWidgetButtonAndBorderColors(primaryColor, secondaryColor).buttonBgColor;
        const elemBorderColor = getWidgetButtonAndBorderColors(primaryColor, secondaryColor).elemBorderColor;
        const updateAmount = (amount) => {
            state.stripe = { paymentElementIntentAmount: amount * 100, amountIsValid: true }; //in cents
        };
        return (h("div", { key: 'ec36cfd3cc705426ed7034323b866a34deb9928f', class: "select-amount-container" }, h("app-typography", { key: '709a8ecb805342a6e6d7b58225703e9d26862809', variant: "secondaryP", fontFamily: font, styleProps: {
                fontWeight: '700',
            } }, instance.t('selectAmount')), h("div", { key: '7302cca9417f299df3555d86943ec4d17b7f5151', class: "amount-btns-container" }, btnAmounts.map(amount => {
            const isHovered = this.hoveredButton === amount;
            const currentBg = isHovered ? secondaryColor : buttonBgColor;
            const currentBorder = isHovered ? secondaryColor : elemBorderColor;
            const contrastColor = getContrastColor(currentBg).blackOrWhite;
            return (h("button", { key: `amount_${amount}_btn`, class: "widgetButton", onClick: () => updateAmount(amount), style: {
                    fontFamily: font,
                    border: `0.5px solid ${currentBorder}`,
                    backgroundColor: currentBg,
                    color: contrastColor,
                }, onMouseOver: () => (this.hoveredButton = amount), onMouseOut: () => (this.hoveredButton = null) }, amount, "\u20AC"));
        }))));
    }
    static get style() { return AmountButtonsStyle0; }
}, [1, "amount-buttons", {
        "hoveredButton": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["amount-buttons", "app-typography"];
    components.forEach(tagName => { switch (tagName) {
        case "amount-buttons":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AmountButtons);
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

export { AmountButtons as A, defineCustomElement as d };

//# sourceMappingURL=p-132e8c46.js.map