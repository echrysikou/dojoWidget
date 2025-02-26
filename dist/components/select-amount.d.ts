import type { Components, JSX } from "../types/components";

interface SelectAmount extends Components.SelectAmount, HTMLElement {}
export const SelectAmount: {
    prototype: SelectAmount;
    new (): SelectAmount;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
