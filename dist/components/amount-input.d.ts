import type { Components, JSX } from "../types/components";

interface AmountInput extends Components.AmountInput, HTMLElement {}
export const AmountInput: {
    prototype: AmountInput;
    new (): AmountInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
