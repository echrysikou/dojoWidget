import { Env, h, Host } from "@stencil/core";
import { state } from "../../store/store";
export class ButtonWidget {
    constructor() {
        this.handleClick = () => {
            const url = Env.PLATFORM_URL + '/donate?id=' + state.widgetDetails.uuid;
            window.open(url, '_blank', 'noopener,noreferrer');
        };
    }
    render() {
        var _a;
        const imageSrc = Env.CDN_PATH + '/assets/t-icon.svg';
        return (h(Host, { key: 'b677bc40b2777455bcc662c40ea8135f7ec6d4b5' }, h("button", { key: 'db6ebc38575c064e4f06fa515374138c576d3876', class: "donate-button", style: {
                backgroundColor: state.widgetDetails.themeColor,
                color: state.widgetDetails.fontColor,
                borderColor: state.widgetDetails.borderColor,
                fontFamily: (_a = state.widgetDetails.font) !== null && _a !== void 0 ? _a : 'inherit',
            }, onClick: this.handleClick }, h("span", { key: '7d2d0f194ef169b569f2c83539357872331f0dcc', class: "taktak-icon" }, h("img", { key: 'f3bab5b3bd3f73ddb7b1e9e9cfe138f6f5cdfad6', src: imageSrc, alt: "Taktak Icon", class: "t-icon-image" })), h("span", { key: 'd0b7ad0c671907bad5c80037b922e123c0bdfec3', class: "button-text" }, state.widgetDetails.label))));
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
