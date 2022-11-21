export interface TypographyProps {
    type: TypographyTypeUnion;
    size: TypographySizesUnion;
}

export enum TYPOGRAPHY_TYPE {
    DISPLAY_D1 = 'DISPLAY_D1',
    DISPLAY_D2 = 'DISPLAY_D2',
    DISPLAY_D3 = 'DISPLAY_D3',

    HEADLINE_H1 = 'HEADLINE_H1',
    HEADLINE_H2 = 'HEADLINE_H2',
    HEADLINE_H3 = 'HEADLINE_H3',
    HEADLINE_H4 = 'HEADLINE_H4',
    HEADLINE_H5 = 'HEADLINE_H5',
    HEADLINE_H6 = 'HEADLINE_H6',

    MENU_SM = 'MENU_SM',

    TITLE_SM = 'TITLE_SM',

    CAPTION_LG = 'CAPTION_LG',
    CAPTION_MD = 'CAPTION_MD',

    BODY_LG = 'BODY_LG',
    BODY_SM = 'BODY_SM',

    LABEL_MD = 'LABEL_MD',
    LABEL_SM = 'LABEL_SM',

    BUTTON_LG = 'BUTTON_LG',
    BUTTON_MD = 'BUTTON_MD'

}

export enum TYPOGRAPHY_SIZES {
    SM = 'SM',
    MD = 'MD',
    LG = 'LG'
}

export type TypographySizesUnion = keyof typeof TYPOGRAPHY_SIZES;

export type TypographyTypeUnion = keyof typeof TYPOGRAPHY_TYPE;