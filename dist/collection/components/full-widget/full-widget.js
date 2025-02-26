import { Env, h, Host } from "@stencil/core";
import { state } from "../../store/store";
export class FullWidget {
    render() {
        const logo = Env.CDN_PATH + '/assets/TaktakLogo.png';
        const { font, label, themeColor } = state.widgetDetails;
        return (h(Host, { key: 'c613da87739cb15d8b11c0bbed86911007caec1e' }, h("div", { key: 'fad1cc489c839f0c0dbe8a33fae12edff2db9ee3', class: "widget-container", style: {
                backgroundColor: themeColor,
                color: state.widgetDetails.fontColor,
            } }, h("img", { key: '0134d789461a82b0a903ad4c5a05038bb52b43b1', src: logo, class: "taktak-logo", alt: "Taktak logo" }), h("app-typography", { key: 'fba63a72ea38df6fed63279eb701569aa41ad19c', variant: "h3", fontFamily: font, styleProps: { marginTop: '10px', height: '20px' } }, label), h("select-amount", { key: '3b6b19a3c6b931d87c9085ddf50d7e0e93b16d89' }), h("collaborators-list", { key: '8ff247dd26250034a6037a557b0ff0eec53448f7' }), h("stripe-payment", { key: '9f7c52cbeecaae36e1d09c6dff923151dd842eed' }))));
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
