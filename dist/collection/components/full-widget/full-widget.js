import { h, Host } from "@stencil/core";
export class FullWidget {
    render() {
        return (h(Host, { key: '8dc3b6ab58212a4141f7eeeb69ee37d69084454f' }, h("div", { key: '64a1092f2992bf8708c4d8ea307a4c4d1b17d131' }, "Widget")));
    }
    static get is() { return "full-widget"; }
    static get encapsulation() { return "shadow"; }
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
