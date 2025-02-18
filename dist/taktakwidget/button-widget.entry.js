import { r as registerInstance, e as getAssetPath, h, a as Host } from './index-1e9747c2.js';
import { s as state } from './store-4675f576.js';

const buttonWidgetCss = ".donate-button{display:flex;justify-content:flex-start;align-items:center;border-width:3px;border-style:solid;font-size:16px;line-height:16px;height:44px;pointer-events:auto;font-weight:700;padding-top:1px;padding-left:16px;padding-right:16px;width:fit-content;border-radius:50px;transition:all 0.3s ease-out;letter-spacing:0.2px;text-align:center;text-shadow:none !important;white-space:nowrap;cursor:pointer}.taktak-icon{display:flex;align-items:center;justify-content:center;border-radius:50px;width:38px;height:38px;margin-left:-20px;margin-top:0px;border-width:3px;border-style:solid;border-color:var(--primary) !important;background:var(--light);color:var(--primary)}.t-icon-image{border-radius:50px;width:38px;height:38px}.button-text{font-size:16px;padding-left:8px}";

const ButtonWidget = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        var _a;
        const imageSrc = getAssetPath('assets/t-icon.svg');
        return (h(Host, { key: 'd2bdebf98dac24c317b31b1b1091eba29b44f649' }, h("button", { key: '34bbb4f83125fefb06976a41a841c0daf7ffc352', class: "donate-button", style: {
                backgroundColor: state.widgetDetails.themeColor,
                color: state.widgetDetails.fontColor,
                borderColor: state.widgetDetails.borderColor,
                fontFamily: (_a = state.widgetDetails.font) !== null && _a !== void 0 ? _a : 'inherit',
            } }, h("span", { key: '02821030834919942e2d5aacca1859dbf95daa54', class: "taktak-icon" }, h("img", { key: 'baaf3a1f1ddb005ed5993820dddc5f3df30f9cf1', src: imageSrc, class: "t-icon-image" })), h("span", { key: 'a59fcd9b68257df4a9e60bd5547a88f5977756ed', class: "button-text" }, state.widgetDetails.label))));
    }
};
ButtonWidget.style = buttonWidgetCss;

export { ButtonWidget as button_widget };

//# sourceMappingURL=button-widget.entry.js.map