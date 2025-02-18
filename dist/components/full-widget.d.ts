import type { Components, JSX } from "../types/components";

interface FullWidget extends Components.FullWidget, HTMLElement {}
export const FullWidget: {
    prototype: FullWidget;
    new (): FullWidget;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
