import { Build, Env, getAssetPath, h, Host } from "@stencil/core";
import { state } from "../../store/store";
export class ButtonWidget {
    constructor() {
        this.handleClick = () => {
            window.location.href = Env.PLATFORM_URL + 'donate?id=' + state.widgetDetails.uuid; // Change to your URL source
        };
    }
    render() {
        var _a;
        // const imageSrc= getAssetPath('assets/t-icon.svg');
        const imageSrc = Build.isDev
            ? '/assets/t-icon.svg' // Dev mode: use this path
            : getAssetPath('assets/t-icon.svg'); // Production build
        return (h(Host, { key: 'e5466efc9f24ad0c2e01be626339bef59be16710' }, h("button", { key: '7916a91613b4b83edf0f648beb3fdbc3f0c0af88', class: "donate-button", style: {
                backgroundColor: state.widgetDetails.themeColor,
                color: state.widgetDetails.fontColor,
                borderColor: state.widgetDetails.borderColor,
                fontFamily: (_a = state.widgetDetails.font) !== null && _a !== void 0 ? _a : 'inherit',
            }, onClick: this.handleClick }, h("span", { key: '6b740123830fd6851ac87177f600c76d654bca58', class: "taktak-icon" }, h("img", { key: '59052655c0f075588ef1823aae90d046c77aeaa1', src: imageSrc, class: "t-icon-image" })), h("span", { key: '057f420cef79f5438aaa4805dcfbac091d78dbfd', class: "button-text" }, state.widgetDetails.label))));
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
