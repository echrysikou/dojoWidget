import { IWidgetDetails } from '../interfaces/interfaces';
export declare function fetchWidgetDetails(id: string): Promise<IWidgetDetails>;
export declare function createPaymentIntent({ amount, elementId }: {
    amount: number;
    elementId: string;
}): Promise<any>;
