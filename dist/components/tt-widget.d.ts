import type { Components, JSX } from "../types/components";

interface TtWidget extends Components.TtWidget, HTMLElement {}
export const TtWidget: {
    prototype: TtWidget;
    new (): TtWidget;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
