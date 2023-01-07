import {ChangeEventHandler, FocusEventHandler, HTMLInputTypeAttribute} from "react";

export interface InputProps {
    label?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    value?: string;
    name?: string;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    isInvalid?: boolean;
    error?: string;
    type?: HTMLInputTypeAttribute;
    placeholder?: string;
}

export interface InputComponentProps {
    isInvalid?: boolean;
    size?: InputSizesUnion;
}

export enum INPUT_SIZES {
    LG = 'LG',
    MD = 'MD',
    SM = 'SM'
}

export type InputSizesUnion = keyof typeof INPUT_SIZES;