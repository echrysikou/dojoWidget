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
        return (h(Host, { key: 'b278b9ac505b3d344c008ad8e5398f76ce7fbdd9' }, h("button", { key: '7f86df746660949b8ab84df416c542f3bd915a5b', class: "donate-button", style: {
                backgroundColor: state.widgetDetails.themeColor,
                color: state.widgetDetails.fontColor,
                borderColor: state.widgetDetails.borderColor,
                fontFamily: (_a = state.widgetDetails.font) !== null && _a !== void 0 ? _a : 'inherit',
            }, onClick: this.handleClick }, h("span", { key: '4190b6c9e7e0b3c272e35f7542379a635b62b57c', class: "taktak-icon" }, h("img", { key: '6d92afb9aa6adcf5ea2c96b9eaf1b8fa118d1e83', src: imageSrc, class: "t-icon-image" })), h("span", { key: '50a03ca70eaa47baa6fd20f641cce14a3cdf0ccd', class: "button-text" }, state.widgetDetails.label))));
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
