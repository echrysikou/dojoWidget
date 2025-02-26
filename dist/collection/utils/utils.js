import { predefinedThemes, WG_DEFAULT_BUTTON_BG, WG_DEFAULT_ELEMENT_BORDER } from "./constants";
export function format(first, middle, last) {
    return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}
// It capitalizes the first letter of each word in the string and makes the rest lowercase.
export const capitalizeFirstCharOfEachWord = (text) => {
    return text
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};
export const resolveCssVariable = (cssVar) => {
    if (!cssVar || cssVar === '' || !cssVar.startsWith('var('))
        return cssVar; // Return as-is if not a CSS variable
    try {
        if (cssVar.includes(',')) {
            return cssVar.split(',')[1].slice(0, -1).trim();
        }
        else {
            const variableName = cssVar.substring(4, cssVar.indexOf(')')).trim();
            const computedStyle = window.getComputedStyle(document.documentElement);
            return computedStyle.getPropertyValue(variableName).trim();
        }
    }
    catch (error) {
        console.error(`Error resolving CSS variable: ${cssVar}`, error);
        return cssVar;
    }
};
export const areColorArraysEqual = (arr1, arr2) => arr1.length === arr2.length && arr1.every((val, index) => resolveCssVariable(val) === resolveCssVariable(arr2[index]));
export const getAvatarInitials = (name, surname) => {
    if (name && surname) {
        return name.charAt(0).toUpperCase() + surname.charAt(0).toUpperCase();
    }
    else if (name) {
        return name.charAt(0).toUpperCase() + name.charAt(1).toUpperCase();
    }
    else if (surname) {
        return surname.charAt(0).toUpperCase() + surname.charAt(1).toUpperCase();
    }
    else {
        return 'UU'; //Unknown User
    }
};
export const getWidgetButtonAndBorderColors = (primaryColor, secondaryColor) => {
    var _a, _b;
    let buttonBgColor = WG_DEFAULT_BUTTON_BG;
    let elemBorderColor = WG_DEFAULT_ELEMENT_BORDER;
    if (primaryColor && secondaryColor) {
        const theme = predefinedThemes.find(t => areColorArraysEqual(t.colors, [primaryColor, secondaryColor]));
        buttonBgColor = (_a = theme === null || theme === void 0 ? void 0 : theme.buttonBgColor) !== null && _a !== void 0 ? _a : WG_DEFAULT_BUTTON_BG;
        elemBorderColor = (_b = theme === null || theme === void 0 ? void 0 : theme.elementBorderColor) !== null && _b !== void 0 ? _b : WG_DEFAULT_ELEMENT_BORDER;
    }
    return { buttonBgColor, elemBorderColor };
};
export const getStripeWidgetFontColor = (bgColor, fontClr) => {
    return resolveCssVariable(getContrastColor(bgColor, fontClr).isContrastGood ? fontClr : getContrastColor(bgColor).blackOrWhite);
};
export const getStripeElementAppearance = (fontColor, primaryColor, secondaryColor) => {
    const secondary = resolveCssVariable(secondaryColor);
    const buttonBgColor = getWidgetButtonAndBorderColors(primaryColor, secondaryColor).buttonBgColor;
    const stripeFontColor = getStripeWidgetFontColor(buttonBgColor, fontColor);
    return {
        // https://docs.stripe.com/elements/appearance-api
        theme: 'stripe',
        variables: {
            colorText: resolveCssVariable(fontColor),
            colorPrimary: secondary,
            accessibleColorOnColorPrimary: stripeFontColor,
            accessibleColorOnColorBackground: stripeFontColor,
            tabIconHoverColor: resolveCssVariable('var(--text)'), // card icon color on hover of card button
            colorBackground: resolveCssVariable(buttonBgColor),
            colorDanger: getSafeDangerColor(primaryColor),
            fontFamily: 'Verdana, sans-serif',
            borderRadius: '5px',
        },
        rules: {
            '.TabIcon': {
                fill: 'var(--colorTextPlaceholder)',
            },
            '.TabIcon--selected': {
                fill: resolveCssVariable('var(--text)'),
            },
            '.TabIcon--selected:hover': {
                fill: resolveCssVariable('var(--text)'),
            },
            '.TabIcon:hover': {
                fill: resolveCssVariable('var(--text)'),
            },
            '.TabLabel': {
                color: 'var(--colorTextPlaceholder)',
            },
            '.TabLabel:hover': {
                color: resolveCssVariable('var(--text)'),
            },
            '.TabLabel--selected': {
                color: resolveCssVariable('var(--text)'),
            },
            '.Tab': {
                color: secondary,
            },
            '.Tab:hover': {
                border: `1px solid ${secondary}`,
                outline: `1px solid ${secondary}`,
                color: secondary,
            },
            '.Tab--selected:hover': {
                outline: `2px solid ${secondary}`,
                color: secondary,
            },
            '.Input': {
                color: 'var(--colorTextPlaceholder)',
            },
            '.Input:focus': {
                color: resolveCssVariable('var(--text)'),
            },
        },
    };
};
export const getContrastColor = (backgroundColor, fontColor = 'var(--text, #181f1c)') => {
    // convert hex color to RGB
    const hexToRgba = (hex) => {
        const hexColor = resolveCssVariable(hex);
        const validHex = /^#?([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/;
        if (!validHex.test(hexColor)) {
            return { r: 0, g: 0, b: 0, a: 1 };
        }
        const formattedHex = hexColor.length === 4 ? `#${[hexColor.slice(1)].map(char => char + char).join('')}` : hexColor.startsWith('#') ? hexColor : `#${hexColor}`;
        const bigint = parseInt(formattedHex.slice(1), 16);
        if (formattedHex.length === 9) {
            return {
                r: (bigint >> 24) & 255,
                g: (bigint >> 16) & 255,
                b: (bigint >> 8) & 255,
                a: (bigint & 255) / 255,
            };
        }
        return {
            r: (bigint >> 16) & 255,
            g: (bigint >> 8) & 255,
            b: bigint & 255,
            a: 1,
        };
    };
    // calculate luminance of RGBA color
    const getLuminance = ({ r, g, b, a }) => {
        const channels = [r, g, b].map(v => {
            const normalized = v / 255;
            return normalized <= 0.03928 ? normalized / 12.92 : Math.pow((normalized + 0.055) / 1.055, 2.4);
        });
        const luminance = 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
        // Adjust luminance for transparency (blending the background color with the transparent color)
        return a * luminance + (1 - a) * 0.2126; // 0.2126 is the luminance of pure black
    };
    // Calculate contrast ratio between two luminance values
    const getContrastRatio = (lum1, lum2) => {
        const [L1, L2] = lum1 > lum2 ? [lum1, lum2] : [lum2, lum1];
        return (L1 + 0.05) / (L2 + 0.05);
    };
    // Parse the background color and calculate its luminance
    const bgRgba = hexToRgba(backgroundColor);
    const bgLuminance = getLuminance(bgRgba);
    // Parse the font color and calculate its luminance
    const fontRgba = hexToRgba(fontColor);
    const fontLuminance = getLuminance(fontRgba);
    // Calculate contrast ratios with black and white
    const contrastWithWhite = getContrastRatio(bgLuminance, 1);
    const contrastWithBlack = getContrastRatio(bgLuminance, 0);
    // Calculate contrast ratio with given font color
    const contrast = getContrastRatio(bgLuminance, fontLuminance);
    return {
        isContrastGood: contrast >= 4.5, // WCAG AA standard
        actualContrast: contrast,
        blackOrWhite: contrastWithWhite >= contrastWithBlack ? 'var(--common-white, #ffffff )' : 'var(--common-black, #000000)',
    };
};
// Returns a high-contrast "danger" (reddish) color for a given background.
export const getSafeDangerColor = (backgroundColor) => {
    // some reddish colors that could be used:
    const dangerRedColors = [
        '#f44336',
        '#FF0000',
        '#E60000',
        '#CC0000',
        '#B20000',
        '#990000',
        '#800000',
        '#FF1A1A',
        '#FF3333',
        '#c40e0e',
        '#e31e1e',
        '#b50707',
        '#990F02',
        '#800020',
        '#660000',
        '#4D0000',
        '#a30202',
        '#ff1e00',
        '#f5160a',
        '#ed1123',
        '#D32F2F',
        '#C62828',
        '#B71C1C',
        '#d91a04',
        '#fa2f2f',
        '#f50707',
        '#8B0000',
        '#f5022f',
        '#B22222',
        '#DC143C',
        '#910029',
        '#fc0000',
    ];
    for (const dangerColor of dangerRedColors) {
        if (getContrastColor(backgroundColor, dangerColor).isContrastGood) {
            return resolveCssVariable(dangerColor); // Return the first safe red
        }
    }
    // If no red is safe, return black or white
    return resolveCssVariable(getContrastColor(backgroundColor).blackOrWhite);
};
//# sourceMappingURL=utils.js.map
