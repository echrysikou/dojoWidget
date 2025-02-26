import { Appearance } from '@stripe/stripe-js';
export declare function format(first?: string, middle?: string, last?: string): string;
export declare const capitalizeFirstCharOfEachWord: (text: string) => string;
export declare const resolveCssVariable: (cssVar: string) => string;
export declare const areColorArraysEqual: (arr1: string[], arr2: string[]) => boolean;
export declare const getAvatarInitials: (name: string, surname: string) => string;
export declare const getWidgetButtonAndBorderColors: (primaryColor: any, secondaryColor: any) => {
    buttonBgColor: string;
    elemBorderColor: string;
};
export declare const getStripeWidgetFontColor: (bgColor: string, fontClr: string) => string;
export declare const getStripeElementAppearance: (fontColor: any, primaryColor: any, secondaryColor: any) => Appearance;
export declare const getContrastColor: (backgroundColor: string, fontColor?: string) => {
    isContrastGood: boolean;
    actualContrast: number;
    blackOrWhite: string;
};
export declare const getSafeDangerColor: (backgroundColor: string) => string;
