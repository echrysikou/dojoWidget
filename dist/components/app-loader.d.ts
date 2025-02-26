import type { Components, JSX } from "../types/components";

interface AppLoader extends Components.AppLoader, HTMLElement {}
export const AppLoader: {
    prototype: AppLoader;
    new (): AppLoader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
