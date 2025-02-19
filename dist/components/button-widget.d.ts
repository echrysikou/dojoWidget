import type { Components, JSX } from "../types/components";

interface ButtonWidget extends Components.ButtonWidget, HTMLElement {}
export const ButtonWidget: {
    prototype: ButtonWidget;
    new (): ButtonWidget;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
