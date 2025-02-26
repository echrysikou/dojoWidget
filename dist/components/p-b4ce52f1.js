import { p as proxyCustomElement, H, h, c as Host, E as Env } from './p-2189282e.js';
import { s as state } from './p-14a59560.js';

const buttonWidgetCss = ".donate-button{display:flex;justify-content:flex-start;align-items:center;border-width:3px;border-style:solid;font-size:16px;line-height:16px;height:44px;pointer-events:auto;font-weight:700;padding-top:1px;padding-left:16px;padding-right:16px;width:fit-content;border-radius:50px;transition:all 0.3s ease-out;letter-spacing:0.2px;text-align:center;text-shadow:none !important;white-space:nowrap;cursor:pointer}.taktak-icon{display:flex;align-items:center;justify-content:center;border-radius:50px;width:38px;height:38px;margin-left:-20px;margin-top:0px;border-width:3px;border-style:solid;border-color:var(--primary) !important;background:var(--light);color:var(--primary)}.t-icon-image{border-radius:50px;width:38px;height:38px}.button-text{font-size:16px;padding-left:8px}";
const ButtonWidgetStyle0 = buttonWidgetCss;

const ButtonWidget = /*@__PURE__*/ proxyCustomElement(class ButtonWidget extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
    static get assetsDirs() { return ["assets"]; }
    static get style() { return ButtonWidgetStyle0; }
}, [1, "button-widget"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["button-widget"];
    components.forEach(tagName => { switch (tagName) {
        case "button-widget":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ButtonWidget);
            }
            break;
    } });
}
defineCustomElement();

export { ButtonWidget as B, defineCustomElement as d };

//# sourceMappingURL=p-b4ce52f1.js.map