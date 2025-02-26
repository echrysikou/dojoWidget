import type { Components, JSX } from "../types/components";

interface CollaboratorsList extends Components.CollaboratorsList, HTMLElement {}
export const CollaboratorsList: {
    prototype: CollaboratorsList;
    new (): CollaboratorsList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
