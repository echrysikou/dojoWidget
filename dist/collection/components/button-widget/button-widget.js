import { Env, getAssetPath, h, Host } from "@stencil/core";
import { state } from "../../store/store";
export class ButtonWidget {
    constructor() {
        this.handleClick = () => {
            window.location.href = Env.PLATFORM_URL + 'donate?id=' + state.widgetDetails.uuid; // Change to your URL source
        };
    }
    render() {
        var _a;
        const imageSrc = getAssetPath('../assets/t-icon.svg');
        return (h(Host, { key: '7d28df275327a5348a1c8c669a73c6b4901a886b' }, h("button", { key: '91213e1024a7cdb35b0dc1cb7870b7f1535d15d2', class: "donate-button", style: {
                backgroundColor: state.widgetDetails.themeColor,
                color: state.widgetDetails.fontColor,
                borderColor: state.widgetDetails.borderColor,
                fontFamily: (_a = state.widgetDetails.font) !== null && _a !== void 0 ? _a : 'inherit',
            }, onClick: this.handleClick }, h("span", { key: 'dca33cd82211fc2a626b7fccef5d15b8807b8a46', class: "taktak-icon" }, h("img", { key: '28c1582bcfa1f19c14cb6635ea3147e548d8524e', src: imageSrc, class: "t-icon-image" })), h("span", { key: '7694b02977fde860037181e5fdfc236ab26de2b7', class: "button-text" }, state.widgetDetails.label))));
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
