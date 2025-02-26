import type { Components, JSX } from "../types/components";

interface AmountButtons extends Components.AmountButtons, HTMLElement {}
export const AmountButtons: {
    prototype: AmountButtons;
    new (): AmountButtons;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
