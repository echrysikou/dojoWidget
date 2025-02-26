import { h } from "@stencil/core";
import i18n from "../../../../utils/i18n";
import { state } from "../../../../store/store";
import { predefinedThemes, WG_DEFAULT_BUTTON_BG, WG_DEFAULT_ELEMENT_BORDER } from "../../../../utils/constants";
import { areColorArraysEqual, getContrastColor } from "../../../../utils/utils";
export class AmountButtons {
    constructor() {
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
            } }, i18n.t('selectAmount')), h("div", { key: 'a2260639d4f21e991ada6645bbb44396be23dfa9', class: "amount-btns-container" }, btnAmounts.map(amount => {
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
    static get is() { return "amount-buttons"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["amount-buttons.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["amount-buttons.css"]
        };
    }
    static get states() {
        return {
            "hoveredButton": {}
        };
    }
}
//# sourceMappingURL=amount-buttons.js.map
