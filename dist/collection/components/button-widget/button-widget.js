import { getAssetPath, h, Host } from "@stencil/core";
import { state } from "../../store/store";
export class ButtonWidget {
    render() {
        var _a;
        const imageSrc = getAssetPath('../assets/t-icon.svg');
        return (h(Host, { key: '027358636da4d9a46893500479eacb34fd9d48bb' }, h("button", { key: 'f4796f76582e390a3f3cec5c07b7263417510ab5', class: "donate-button", style: {
                backgroundColor: state.widgetDetails.themeColor,
                color: state.widgetDetails.fontColor,
                borderColor: state.widgetDetails.borderColor,
                fontFamily: (_a = state.widgetDetails.font) !== null && _a !== void 0 ? _a : 'inherit',
            } }, h("span", { key: '26be405b422d733ba5cb43d3669d41f8f950955a', class: "taktak-icon" }, h("img", { key: '90be87a3b3e68f184c1d642138cfbe9cb3bc2379', src: imageSrc, class: "t-icon-image" })), h("span", { key: '135b064615d1990454b578310d3e7766b86a039c', class: "button-text" }, state.widgetDetails.label))));
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
