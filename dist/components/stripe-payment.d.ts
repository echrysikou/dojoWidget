import type { Components, JSX } from "../types/components";

interface StripePayment extends Components.StripePayment, HTMLElement {}
export const StripePayment: {
    prototype: StripePayment;
    new (): StripePayment;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
