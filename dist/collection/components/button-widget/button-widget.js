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
        return (h(Host, { key: '7531bd773ce9550dbad2375625a0b7a821468730' }, h("button", { key: '01fea570333ea2c53774bbf69d1cc58736145586', class: "donate-button", style: {
                backgroundColor: state.widgetDetails.themeColor,
                color: state.widgetDetails.fontColor,
                borderColor: state.widgetDetails.borderColor,
                fontFamily: (_a = state.widgetDetails.font) !== null && _a !== void 0 ? _a : 'inherit',
            }, onClick: this.handleClick }, h("span", { key: '1996928c1c48e5701933e181839fe7e24cc45ea9', class: "taktak-icon" }, h("img", { key: 'd823428fdde8c260b81ce19aac83c170cd67da28', src: imageSrc, alt: "Taktak Icon", class: "t-icon-image" })), h("span", { key: 'abcc2e4a43f36c642f96b916976a1d3c01aeff4a', class: "button-text" }, state.widgetDetails.label))));
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
