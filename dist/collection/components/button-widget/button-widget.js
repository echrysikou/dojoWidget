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
        const imageSrc = getAssetPath('assets/t-icon.svg');
        return (h(Host, { key: '1693d5e8f0ba3d1e1be501b8509cc9df279a77b6' }, h("button", { key: '3df285a6a1a8e2a6364015bd67f4cc3b7308a21c', class: "donate-button", style: {
                backgroundColor: state.widgetDetails.themeColor,
                color: state.widgetDetails.fontColor,
                borderColor: state.widgetDetails.borderColor,
                fontFamily: (_a = state.widgetDetails.font) !== null && _a !== void 0 ? _a : 'inherit',
            }, onClick: this.handleClick }, h("span", { key: '8fe8e42aaa313acc1475e91b2ffc5c4d54e3c992', class: "taktak-icon" }, h("img", { key: '62c3e377b9fcfb9608e4556b0835faca21484f30', src: imageSrc, class: "t-icon-image" })), h("span", { key: '01f75e8dae1e85942b74b400871e2212becc342e', class: "button-text" }, state.widgetDetails.label))));
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
