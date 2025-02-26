import { h } from "@stencil/core";
export class Typography {
    constructor() {
        this.variant = undefined;
        this.fontFamily = 'inherit';
        this.styleProps = {};
    }
    render() {
        const Tag = this.variant.startsWith('h') ? this.variant : 'p';
        const font = this.fontFamily === 'Baloo Bhaijaan 2, sans serif' ? 'var(--font-primary)' : this.fontFamily;
        return (h(Tag, { key: '22140afc88d5dd9d2cdcb81c22e7bfb58435997e', class: `typography ${this.variant}`, style: Object.assign({ fontFamily: font }, this.styleProps) }, h("slot", { key: '0340e003737daa1ba6f0aaa62fd5d450d3da4b35' })));
    }
    static get is() { return "app-typography"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["app-typography.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["app-typography.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'h1' | 'h2' | 'h3' | 'secondaryP' | 'secondaryCaption' | 'secondaryMessage' | 'body1'",
                    "resolved": "\"body1\" | \"h1\" | \"h2\" | \"h3\" | \"secondaryCaption\" | \"secondaryMessage\" | \"secondaryP\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "variant",
                "reflect": false
            },
            "fontFamily": {
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
                "attribute": "font-family",
                "reflect": false,
                "defaultValue": "'inherit'"
            },
            "styleProps": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{}",
                    "resolved": "{}",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "defaultValue": "{}"
            }
        };
    }
}
//# sourceMappingURL=app-typography.js.map
