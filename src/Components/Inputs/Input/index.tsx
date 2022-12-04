import {InputComponent} from "./styles";
import {ChangeEventHandler, FocusEventHandler, HTMLInputTypeAttribute} from "react";
import {Label, ErrorMessage} from "../styles";

interface InputProps {
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

const Input = ({label, onChange, value, name, onBlur, isInvalid, error, type, placeholder}: InputProps) => {
    return <div style={{backgroundColor: 'white', display: 'flex', flexDirection: 'column', marginBottom: '20px'}}>
        {label && <Label>{label}</Label>}
        <InputComponent
            type={type}
            onBlur={onBlur}
            isInvalid={isInvalid}
            onChange={onChange} value={value} name={name}
            placeholder={placeholder}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
}

export default Input;