export type WidgetType = 'BT' | 'WG' | 'QR';
export type SupportedLanguages = 'en' | 'fr';
export interface IState {
    language: SupportedLanguages;
    widgetDetails: IWidgetDetails;
}
export interface ICollaborator {
    id: string;
    share?: number;
}
export interface IWidgetDetails {
    uuid?: string;
    name: string;
    title: string;
    code: string;
    codeLink: string;
    font: string;
    fontColor: string;
    themeColor: string;
    label: string;
    borderColor: string;
    createdAt?: string;
    type: WidgetType;
    collaborators: ICollaborator[];
}
