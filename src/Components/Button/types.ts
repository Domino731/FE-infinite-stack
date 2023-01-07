export interface ButtonProps {
    disabled?: boolean;
    widthAuto?: boolean;
    size?: ButtonSizesUnion;
    variant?: ButtonVariantsUnion;
}

export enum BUTTON_SIZES {
    LG = 'LG',
    MD = 'MD',
    SM = 'SM'
}

export type ButtonSizesUnion = keyof typeof BUTTON_SIZES;

export enum BUTTON_VARIANTS {
    CONTAINED = 'CONTAINED',
    OUTLINE = 'OUTLINE',
    TEXT = 'TEXT'
}

export type ButtonVariantsUnion = keyof typeof BUTTON_VARIANTS;