import { Env, h, Host } from "@stencil/core";
import { state } from "../../store/store";
export class FullWidget {
    render() {
        const logo = Env.CDN_PATH + '/assets/TaktakLogo.png';
        const { font, label, themeColor } = state.widgetDetails;
        return (h(Host, { key: '3d504166c10922a88fdf860ca47cee521ee1a936' }, h("div", { key: '337fccc77b9c45d392a0a2244b1feaae15e4488f', class: "widget-container", style: {
                backgroundColor: themeColor,
                color: state.widgetDetails.fontColor,
            } }, h("img", { key: 'a848775d4cfad86a2f39d12159d4f268db0a61e7', src: logo, class: "taktak-logo", alt: "Taktak logo" }), h("app-typography", { key: '62b2c66cbaf96a9af590e6a5ecf81e8a2ac85aa1', variant: "h3", fontFamily: font, styleProps: { marginTop: '10px', height: '20px' } }, label), h("select-amount", { key: '677879ef708db5d77029e6e8c850804fb03f921b' }), h("collaborators-list", { key: '70040f6f93c3ce66b6dde7817a20a58c1b116a44' }))));
    }
    static get is() { return "full-widget"; }
    static get originalStyleUrls() {
        return {
            "$": ["./full-widget.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["full-widget.css"]
        };
    }
}
//# sourceMappingURL=full-widget.js.map
