import { IThemeColors } from '../interfaces/interfaces';

export const TRANSACTION_FEES_PERCENTAGE = '10%';
export const WG_DEFAULT_BUTTON_BG = 'var(--common-white, #FFFFFF)';
export const WG_DEFAULT_ELEMENT_BORDER = 'var(--lighter-gray, #e0e0e0 )';

export const predefinedThemes: IThemeColors[] = [
  {
    id: 'primary',
    colors: ['var(--primary)'],
    buttonBgColor: 'var(--light)',
    elementBorderColor: 'var(--lighter-gray)',
    secondaryColor: 'var(--secondary)',
  },
  {
    id: 'secondary',
    colors: ['var(--secondary)'],
    buttonBgColor: 'var(--common-white)',
    elementBorderColor: 'var(--lighter-gray)',
    secondaryColor: 'var(--primary)',
  },
  {
    id: 'light_primary',
    colors: ['var(--light)', 'var(--primary)'],
    buttonBgColor: 'var(--common-white)',
    elementBorderColor: 'var(--lighter-gray)',
  },
  {
    id: 'light_sec',
    colors: ['var(--light)', 'var(--secondary)'],
    buttonBgColor: 'var(--light)',
    elementBorderColor: 'var(--secondary)',
  },
  {
    id: 'white_primary',
    colors: ['var(--common-white)', 'var(--primary)'],
    buttonBgColor: 'var(--common-white)',
    elementBorderColor: 'var(--lighter-gray)',
  },
  {
    id: 'white_sec',
    colors: ['var(--common-white)', 'var(--secondary)'],
    buttonBgColor: 'var(--light)',
    elementBorderColor: 'var(--secondary)',
  },
];
