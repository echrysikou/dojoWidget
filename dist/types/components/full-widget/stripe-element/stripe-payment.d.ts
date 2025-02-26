import { Appearance, Layout, Stripe, StripeElement, StripeElements } from '@stripe/stripe-js';
export declare class StripePayment {
    stripe: Stripe | null;
    elements: StripeElements | null;
    paymentElement: StripeElement | null;
    paymentElementOptions: {
        layout: Layout;
    };
    appearance: Appearance;
    isLoading: boolean;
    disablePayButton: boolean;
    isHovered: boolean;
    errorMsg: string;
    componentDidLoad(): Promise<void>;
    render(): any;
}
