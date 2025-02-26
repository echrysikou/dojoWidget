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
        return (h("div", { key: 'ec36cfd3cc705426ed7034323b866a34deb9928f', class: "select-amount-container" }, h("app-typography", { key: '709a8ecb805342a6e6d7b58225703e9d26862809', variant: "secondaryP", fontFamily: font, styleProps: {
                fontWeight: '700',
            } }, i18n.t('selectAmount')), h("div", { key: '7302cca9417f299df3555d86943ec4d17b7f5151', class: "amount-btns-container" }, btnAmounts.map(amount => {
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
