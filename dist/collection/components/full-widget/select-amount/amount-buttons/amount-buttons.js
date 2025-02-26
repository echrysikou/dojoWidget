import { h } from "@stencil/core";
import i18n from "../../../../utils/i18n";
import { state } from "../../../../store/store";
import { getContrastColor, getWidgetButtonAndBorderColors } from "../../../../utils/utils";
export class AmountButtons {
    constructor() {
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
        return (h("div", { key: 'e871ca9262c4a36b0a7ff905efa8cbee82b6ca55', class: "select-amount-container" }, h("app-typography", { key: '9b62bba7a12f856488183273185914d73d53eca2', variant: "secondaryP", fontFamily: font, styleProps: {
                fontWeight: '700',
            } }, i18n.t('selectAmount')), h("div", { key: '96631f545428fe779e50a756eebbed4fd7b73589', class: "amount-btns-container" }, btnAmounts.map(amount => {
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
