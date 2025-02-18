import type { Components, JSX } from "../types/components";

interface QrCodeWidget extends Components.QrCodeWidget, HTMLElement {}
export const QrCodeWidget: {
    prototype: QrCodeWidget;
    new (): QrCodeWidget;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
