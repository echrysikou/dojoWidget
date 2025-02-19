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
        return (h(Host, { key: 'e9209e47e9f621dc7da4fe842993359cf23abb2e' }, h("button", { key: 'e64dab2962f6446bcb4232db9934b348bccdf641', class: "donate-button", style: {
                backgroundColor: state.widgetDetails.themeColor,
                color: state.widgetDetails.fontColor,
                borderColor: state.widgetDetails.borderColor,
                fontFamily: (_a = state.widgetDetails.font) !== null && _a !== void 0 ? _a : 'inherit',
            }, onClick: this.handleClick }, h("span", { key: '5faf4212d1a4e79f7050d7142d80c1addcd7f8da', class: "taktak-icon" }, h("img", { key: '7937806c57660bf6a53e96cff80aaf4dfad5e3e3', src: imageSrc, class: "t-icon-image" })), h("span", { key: 'b679ffc1e393368b8b1431b7af92387be441e6af', class: "button-text" }, state.widgetDetails.label))));
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
