import {ChangeEventHandler} from "react";

export interface TextareaProps {
    label?: string;
    placeholder?: string;
    rows?: number;
    resize?: boolean;
    onChange?: ChangeEventHandler;
    value?: string;
    name?: string;
}

export interface TextareaComponentProps {
    isInvalid?: boolean;
}

export interface FormikTextareaProps {
    name: string;
    label?: string;
    rows?: number;
}