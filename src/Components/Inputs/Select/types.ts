import {HTMLInputTypeAttribute} from "react";

export interface SelectProps {
    value: string | null;
    options: Array<SelectOption>;
    label?: string;
    onChange: (value: any) => void;
    placeholder?: string;
    isInvalid?: boolean;
    error?: string;
}

export interface SelectOption {
    value: string;
    label: string;
    iconUrl?: string;
}

export interface FormikSelectProps {
    name: string;
    label?: string;
    type?: HTMLInputTypeAttribute;
    placeholder?: string;
    options: Array<SelectOption>;
}

export interface SelectIconWrapperProps {
    isActive: boolean;
}

export interface SelectContainerProps {
    inputLeftPadding: boolean;
}