import { IWidgetDetails } from '../../interfaces/interfaces';
export declare class WidgetSelector {
    wId: string;
    language: string;
    error: string;
    loading: boolean;
    data: IWidgetDetails;
    currentLanguage: string;
    getWidgetDetails(): Promise<void>;
    componentWillLoad(): void;
    setLanguage(newLang: string): void;
    private renderWidget;
    render(): any;
}
