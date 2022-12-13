import {FocusEventHandler, HTMLInputTypeAttribute} from "react";
import {SelectOption} from "../Select/types";

export interface InputSearchProps {
    label?: string;
    onChange?: (p: string) => string;
    value?: string;
    name?: string;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    isInvalid?: boolean;
    error?: string;
    type?: HTMLInputTypeAttribute;
    placeholder?: string;
    options: Array<InputSearchOption>;
}

export interface InputSearchOption {
    label: string;
    value: string;
}

export interface FormikInputSearchProps {
    name: string;
    label?: string;
    type?: HTMLInputTypeAttribute;
    placeholder?: string;
    options: Array<SelectOption>;
}