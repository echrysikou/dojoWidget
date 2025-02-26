import type { Components, JSX } from "../types/components";

interface AppTypography extends Components.AppTypography, HTMLElement {}
export const AppTypography: {
    prototype: AppTypography;
    new (): AppTypography;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
