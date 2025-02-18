import { h, Host } from "@stencil/core";
import { state } from "../../store/store";
export class ButtonWidget {
    render() {
        var _a;
        return (h(Host, { key: 'ca1c4d10b1830724a54374a9a3c9d1b1925c1c90' }, h("button", { key: 'f6a29fa0a3e010ce11b6632f0416a668d9745a4a', class: "donate-button", style: {
                backgroundColor: state.widgetDetails.themeColor,
                color: state.widgetDetails.fontColor,
                borderColor: state.widgetDetails.borderColor,
                fontFamily: (_a = state.widgetDetails.font) !== null && _a !== void 0 ? _a : 'inherit',
            } }, h("span", { key: '89190256d7d187e688266c470ee8fd5742bc749a', class: "taktak-icon" }, h("img", { key: 'e845874b54316eb45adc0bba28eb084fc5057a77', src: "/assets/t-icon.svg", class: "t-icon-image" })), h("span", { key: '871392e644229a004b05b331bb9d85d5f4f8da66', class: "button-text" }, state.widgetDetails.label))));
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
