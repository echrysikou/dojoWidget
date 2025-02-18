import { getAssetPath, h, Host } from "@stencil/core";
import { state } from "../../store/store";
export class ButtonWidget {
    render() {
        var _a;
        const imageSrc = getAssetPath('assets/t-icon.svg');
        return (h(Host, { key: 'd2bdebf98dac24c317b31b1b1091eba29b44f649' }, h("button", { key: '34bbb4f83125fefb06976a41a841c0daf7ffc352', class: "donate-button", style: {
                backgroundColor: state.widgetDetails.themeColor,
                color: state.widgetDetails.fontColor,
                borderColor: state.widgetDetails.borderColor,
                fontFamily: (_a = state.widgetDetails.font) !== null && _a !== void 0 ? _a : 'inherit',
            } }, h("span", { key: '02821030834919942e2d5aacca1859dbf95daa54', class: "taktak-icon" }, h("img", { key: 'baaf3a1f1ddb005ed5993820dddc5f3df30f9cf1', src: imageSrc, class: "t-icon-image" })), h("span", { key: 'a59fcd9b68257df4a9e60bd5547a88f5977756ed', class: "button-text" }, state.widgetDetails.label))));
    }
    static get is() { return "button-widget"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./button-widget.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["button-widget.css"]
        };
    }
}
//# sourceMappingURL=button-widget.js.map
