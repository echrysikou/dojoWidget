import { Env, getAssetPath, h, Host } from "@stencil/core";
import { state } from "../../store/store";
console.log("Elena", getAssetPath(''));
export class ButtonWidget {
    constructor() {
        this.handleClick = () => {
            window.location.href = Env.PLATFORM_URL + 'donate?id=' + state.widgetDetails.uuid; // Change to your URL source
        };
    }
    render() {
        var _a;
        const imageSrc = getAssetPath('/assets/t-icon.svg');
        return (h(Host, { key: 'cf6cfd3ead7b3f050aa397ea7b5f0ef4cf662143' }, h("button", { key: '5ee9e063792e910eb9932fb0b2a47fbf66d4d211', class: "donate-button", style: {
                backgroundColor: state.widgetDetails.themeColor,
                color: state.widgetDetails.fontColor,
                borderColor: state.widgetDetails.borderColor,
                fontFamily: (_a = state.widgetDetails.font) !== null && _a !== void 0 ? _a : 'inherit',
            }, onClick: this.handleClick }, h("span", { key: '6be34ab298d60b6c1bf925215aca4a29042a5794', class: "taktak-icon" }, h("img", { key: '7216f8764db546ba4c02478b63a4ae02b9bf60ed', src: imageSrc, class: "t-icon-image" })), h("span", { key: 'aa60d183a9efb92998e89577c7b3320d260fa162', class: "button-text" }, state.widgetDetails.label))));
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
    static get assetsDirs() { return ["assets"]; }
}
//# sourceMappingURL=button-widget.js.map
