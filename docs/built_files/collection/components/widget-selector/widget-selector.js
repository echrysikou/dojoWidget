import { h, Host } from "@stencil/core";
import { fetchWidgetDetails } from "../../services/services";
import { state } from "../../store/store";
import { setLanguage } from "../../utils/i18n";
import i18n from "../../utils/i18n";
export class WidgetSelector {
    constructor() {
        this.wId = undefined;
        this.language = 'en';
        this.error = undefined;
        this.loading = false;
        this.data = undefined;
        this.currentLanguage = 'en';
    }
    async getWidgetDetails() {
        // fetch widget details from the server and set the widget properties in the store state object
        this.loading = true;
        this.error = null;
        try {
            this.data = await fetchWidgetDetails(this.wId);
            state.widgetDetails = this.data;
        }
        catch (error) {
            console.error('Failed to fetch widget details:', error);
            this.error = error instanceof Error ? error.message : 'An unknown error occurred';
            state.widgetDetails = null;
        }
        finally {
            this.loading = false;
        }
    }
    componentWillLoad() {
        if (this.wId) {
            this.getWidgetDetails();
            this.error = null;
        }
        else {
            this.error = 'Widget ID missing';
        }
        if (this.language) {
            setLanguage(this.language); // Store the language in the global store
        }
    }
    setLanguage(newLang) {
        const supportedLanguages = ['en', 'fr'];
        if (!supportedLanguages.includes(newLang)) {
            newLang = 'en'; // Fallback
        }
        i18n.changeLanguage(newLang);
        this.currentLanguage = newLang;
    }
    renderWidget() {
        var _a;
        if ((_a = this.data) === null || _a === void 0 ? void 0 : _a.type) {
            switch (this.data.type) {
                case 'WG':
                    return h("full-widget", null);
                case 'BT':
                    return h("button-widget", null);
                case 'QR':
                    return h("qr-code-widget", { wId: this.wId });
                default:
                    return null; // handle unknown type
            }
        }
    }
    render() {
        return (h(Host, { key: '44d5f21b5b6c35f05548a678a0312136c8ab9818' }, this.renderWidget()));
    }
    static get is() { return "tt-widget"; }
    static get originalStyleUrls() {
        return {
            "$": ["./widget-selector.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["widget-selector.css"]
        };
    }
    static get properties() {
        return {
            "wId": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "w-id",
                "reflect": true
            },
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "language",
                "reflect": false,
                "defaultValue": "'en'"
            }
        };
    }
    static get states() {
        return {
            "error": {},
            "loading": {},
            "data": {},
            "currentLanguage": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "lang",
                "methodName": "setLanguage"
            }];
    }
}
//# sourceMappingURL=widget-selector.js.map
