import { state } from "../../../store/store";
import { TRANSACTION_FEES_PERCENTAGE } from "../../../utils/constants";
import { capitalizeFirstCharOfEachWord, getAvatarInitials } from "../../../utils/utils";
import { h } from "@stencil/core";
import i18n from "../../../utils/i18n";
export class CollaboratorsList {
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
            } }, i18n.t('transactionFeesPercentage', {
            percentage: TRANSACTION_FEES_PERCENTAGE,
        })))));
    }
    static get is() { return "collaborators-list"; }
    static get originalStyleUrls() {
        return {
            "$": ["collaborators-list.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["collaborators-list.css"]
        };
    }
}
//# sourceMappingURL=collaborators-list.js.map
