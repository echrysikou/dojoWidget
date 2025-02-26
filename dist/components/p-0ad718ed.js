import { p as proxyCustomElement, H, h } from './p-2189282e.js';
import { s as state } from './p-14a59560.js';
import { T as TRANSACTION_FEES_PERCENTAGE } from './p-d614ea73.js';
import { i as instance, c as getAvatarInitials, d as capitalizeFirstCharOfEachWord } from './p-2042c337.js';
import { d as defineCustomElement$1 } from './p-95c91de4.js';

const collaboratorsListCss = ".collaborators-container{margin-top:60px}.collaborators{display:flex;flex-direction:row;width:100%;margin-top:10px}.collaborator-stack{display:flex;gap:8px;flex-direction:column;justify-content:space-between;align-items:center}.avatar-container{display:flex;justify-content:center;align-items:center;margin-top:3px;position:relative;flex-shrink:0;font-size:1.42857rem;line-height:1;border-radius:50%;overflow:hidden;user-select:none;width:65px;height:65px}.avatar-image{width:100%;height:100%;text-align:center;object-fit:cover;color:transparent;text-indent:10000px;overflow-clip-margin:content-box;overflow:clip;font-size:1.42857rem;line-height:1;user-select:none;text-size-adjust:100%}.avatar-initials{display:flex;justify-content:center;align-items:center;border-radius:50%;background-color:var(--secondary);width:65px;height:65px}.fee-container{display:flex;justify-content:center;align-items:center;text-align:center;margin-top:10px}";
const CollaboratorsListStyle0 = collaboratorsListCss;

const CollaboratorsList = /*@__PURE__*/ proxyCustomElement(class CollaboratorsList extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        const { font, collaborators } = state.widgetDetails;
        return (h("div", { key: '85dec3eda2a519000d14bba4a0a22f72eb660977', class: "collaborators-container" }, h("app-typography", { key: 'd1e1f9e2a53f7767fe7f157453384117cb6cebc8', variant: "secondaryP", fontFamily: font, styleProps: { fontWeight: '700' } }, "Collaborators"), h("div", { key: 'a14c95e2471ec039ec948941f68f3b5ea4c267de', class: "collaborators", style: { justifyContent: collaborators.length === 1 ? 'center' : collaborators.length === 2 ? 'space-around' : 'space-between' } }, collaborators.map((collaborator) => {
            var _a;
            const { name, surname, headline } = collaborator.profile;
            const initials = getAvatarInitials(name, surname);
            return (h("div", { key: collaborator.id, class: "collaborator-stack" }, h("app-typography", { variant: "secondaryP", fontFamily: font, styleProps: {
                    textAlign: 'center',
                    marginLeft: '8px',
                } }, (collaborator === null || collaborator === void 0 ? void 0 : collaborator.share) ? collaborator.share * 100 : 0, " %"), h("div", { class: "avatar-container" }, ((_a = collaborator === null || collaborator === void 0 ? void 0 : collaborator.profile) === null || _a === void 0 ? void 0 : _a.image) ? (h("img", { class: "avatar-image", src: collaborator.profile.image, alt: name + ' ' + surname })) : (h("div", { class: "avatar-initials" }, h("app-typography", { variant: "body1", fontFamily: 'var(--font-primary)', styleProps: { fontSize: '35px', marginBottom: '-5px' } }, initials)))), h("app-typography", { variant: "secondaryCaption", fontFamily: font, styleProps: {
                    fontWeight: 500,
                    textAlign: 'center',
                    marginTop: '8px',
                } }, capitalizeFirstCharOfEachWord(name !== null && name !== void 0 ? name : ''), " ", capitalizeFirstCharOfEachWord(surname !== null && surname !== void 0 ? surname : '')), h("app-typography", { variant: "secondaryMessage", fontFamily: font, style: {
                    textAlign: 'center',
                    marginTop: '-10px',
                    // color: professionColor, TODO: define color
                } }, capitalizeFirstCharOfEachWord(headline !== null && headline !== void 0 ? headline : ''))));
        })), h("div", { key: '62f80ae90567141d6fef9ce82796ee0d30008a8e', class: "fee-container" }, h("app-typography", { key: '3304bd0f458aed5713af3b025e8731c1c953bb0f', variant: "secondaryMessage", fontFamily: font, styleProps: {
            // color: feesColor, TODO: define color
            } }, instance.t('transactionFeesPercentage', {
            percentage: TRANSACTION_FEES_PERCENTAGE,
        })))));
    }
    static get style() { return CollaboratorsListStyle0; }
}, [0, "collaborators-list"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["collaborators-list", "app-typography"];
    components.forEach(tagName => { switch (tagName) {
        case "collaborators-list":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, CollaboratorsList);
            }
            break;
        case "app-typography":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}
defineCustomElement();

export { CollaboratorsList as C, defineCustomElement as d };

//# sourceMappingURL=p-0ad718ed.js.map