import { e as getAssetPath, r as registerInstance, E as Env, h, a as Host } from './index-add56bd0.js';
import { s as state } from './store-1b69ff0b.js';

const buttonWidgetCss = ".donate-button{display:flex;justify-content:flex-start;align-items:center;border-width:3px;border-style:solid;font-size:16px;line-height:16px;height:44px;pointer-events:auto;font-weight:700;padding-top:1px;padding-left:16px;padding-right:16px;width:fit-content;border-radius:50px;transition:all 0.3s ease-out;letter-spacing:0.2px;text-align:center;text-shadow:none !important;white-space:nowrap;cursor:pointer}.taktak-icon{display:flex;align-items:center;justify-content:center;border-radius:50px;width:38px;height:38px;margin-left:-20px;margin-top:0px;border-width:3px;border-style:solid;border-color:var(--primary) !important;background:var(--light);color:var(--primary)}.t-icon-image{border-radius:50px;width:38px;height:38px}.button-text{font-size:16px;padding-left:8px}";

console.log("Elena", getAssetPath(''));
const ButtonWidget = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.handleClick = () => {
            window.location.href = Env.PLATFORM_URL + 'donate?id=' + state.widgetDetails.uuid; // Change to your URL source
        };
    }
    render() {
        var _a;
        const imageSrc = getAssetPath('/assets/t-icon.svg');
        return (h(Host, { key: 'cf6cfd3ead7b3f050aa397ea7b5f0ef4cf662143' }, h("button", { key: '5ee9e063792e910eb9932fb0b2a47fbf66d4d211', class: "donate-button", style: {
                backgroundColor: state.widgetDetails.themeColor,
                color: state.widgetDetails.fontColor,
                borderColor: state.widgetDetails.borderColor,
                fontFamily: (_a = state.widgetDetails.font) !== null && _a !== void 0 ? _a : 'inherit',
            }, onClick: this.handleClick }, h("span", { key: '6be34ab298d60b6c1bf925215aca4a29042a5794', class: "taktak-icon" }, h("img", { key: '7216f8764db546ba4c02478b63a4ae02b9bf60ed', src: imageSrc, class: "t-icon-image" })), h("span", { key: 'aa60d183a9efb92998e89577c7b3320d260fa162', class: "button-text" }, state.widgetDetails.label))));
    }
    static get assetsDirs() { return ["assets"]; }
};
ButtonWidget.style = buttonWidgetCss;

export { ButtonWidget as button_widget };

//# sourceMappingURL=button-widget.entry.js.map