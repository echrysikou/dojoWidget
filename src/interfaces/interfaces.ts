export type WidgetType = 'BT' | 'WG' | 'QR';
export type SupportedLanguages = 'en' | 'fr';

export interface IState {
  language: SupportedLanguages;
  widgetDetails: IWidgetDetails;
  stripe: IStripeElement;
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

export interface IThemeColors {
  id: string;
  colors: string[];
  buttonBgColor?: string;
  elementBorderColor?: string;
  secondaryColor?: string;
}

export interface IStripeElement {
  paymentElementIntentAmount: number;
}

export interface IUserProfile {
  name: string;
  surname: string;
  individual: boolean;
  headline: string;
  image: string;
}

export interface ICollaborator {
  id: string;
  account: string | null | undefined; // stripe account id
  share?: number;
  profile?: IUserProfile;
}
