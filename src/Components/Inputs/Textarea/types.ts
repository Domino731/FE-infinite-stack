import {ChangeEventHandler, FocusEventHandler} from "react";

export interface TextareaProps {
    label?: string;
    placeholder?: string;
    rows?: number;
    resize?: boolean;
    onChange?: ChangeEventHandler;
    value?: string;
    name?: string;
    height?: string;
    onBlur?: FocusEventHandler<HTMLTextAreaElement>;
    isInvalid?: boolean;
    error?: string;
}

export interface TextareaComponentProps {
    isInvalid?: boolean;
    height?: string;
}

export interface FormikTextareaProps {
    name: string;
    label?: string;
    rows?: number;
    height?: string;
}