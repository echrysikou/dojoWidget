import { p as proxyCustomElement, H, h } from './p-2189282e.js';
import { a as areColorArraysEqual, g as getContrastColor, i as instance } from './p-2042c337.js';
import { s as state } from './p-14a59560.js';
import { p as predefinedThemes, W as WG_DEFAULT_BUTTON_BG, a as WG_DEFAULT_ELEMENT_BORDER } from './p-d614ea73.js';
import { d as defineCustomElement$1 } from './p-95c91de4.js';

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
        var _a, _b;
        const { font, themeColor: primaryColor, borderColor: secondaryColor } = state.widgetDetails;
        const btnAmounts = [3, 10, 15];
        let buttonBgColor = WG_DEFAULT_BUTTON_BG;
        let elemBorderColor = WG_DEFAULT_ELEMENT_BORDER;
        if (primaryColor && secondaryColor) {
            const theme = predefinedThemes.find(t => areColorArraysEqual(t.colors, [primaryColor, secondaryColor]));
            buttonBgColor = (_a = theme === null || theme === void 0 ? void 0 : theme.buttonBgColor) !== null && _a !== void 0 ? _a : WG_DEFAULT_BUTTON_BG;
            elemBorderColor = (_b = theme === null || theme === void 0 ? void 0 : theme.elementBorderColor) !== null && _b !== void 0 ? _b : WG_DEFAULT_ELEMENT_BORDER;
        }
        const updateAmount = (amount) => {
            state.stripe = { paymentElementIntentAmount: amount * 100 }; //in cents
        };
        return (h("div", { key: '59c95a19e835085d6cc0d3d3e172612fc8ea39b3', class: "select-amount-container" }, h("app-typography", { key: '3457d31c0af4987e0f9e0635583c8f7fa022ca2f', variant: "secondaryP", fontFamily: font, styleProps: {
                fontWeight: '700',
            } }, instance.t('selectAmount')), h("div", { key: 'a2260639d4f21e991ada6645bbb44396be23dfa9', class: "amount-btns-container" }, btnAmounts.map(amount => {
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

//# sourceMappingURL=p-86d29b7a.js.map