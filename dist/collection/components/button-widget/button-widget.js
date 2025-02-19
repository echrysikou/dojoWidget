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
        return (h(Host, { key: '55fe9635a75d19bb9a12c1852a973d881d9e40a0' }, h("button", { key: '511048c3a55739214d2658fae33700c710140409', class: "donate-button", style: {
                backgroundColor: state.widgetDetails.themeColor,
                color: state.widgetDetails.fontColor,
                borderColor: state.widgetDetails.borderColor,
                fontFamily: (_a = state.widgetDetails.font) !== null && _a !== void 0 ? _a : 'inherit',
            }, onClick: this.handleClick }, h("span", { key: 'ae2bc3fa53ddbf91c6ab7cafc72830c6f34d6aea', class: "taktak-icon" }, h("img", { key: '7b74297b3674a675ed8ef4a93b6edec4de2589f8', src: imageSrc, class: "t-icon-image" })), h("span", { key: '3e5cd240920ccad844bcaffae9c01d96b7336366', class: "button-text" }, state.widgetDetails.label))));
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
