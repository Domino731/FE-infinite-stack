export interface ButtonProps {
    disabled?: boolean;
    widthAuto?: boolean;
    size?: ButtonSizesUnion;
}

export enum BUTTON_SIZES {
    LG = 'LG',
    MD = 'MD',
    SM = 'SM'
}

export type ButtonSizesUnion = keyof typeof BUTTON_SIZES;