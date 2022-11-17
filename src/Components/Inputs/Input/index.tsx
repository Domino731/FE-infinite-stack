import {Label, InputComponent, ErrorMessage} from "./styles";
import {ChangeEventHandler, FocusEventHandler, HTMLInputTypeAttribute} from "react";

interface InputProps {
    label?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    value?: string;
    name?: string;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    isInvalid?: boolean;
    error?: string;
    type?: HTMLInputTypeAttribute;
}

const Input = ({label, onChange, value, name, onBlur, isInvalid, error, type}: InputProps) => {
    return <div style={{backgroundColor: 'white', display: 'flex', flexDirection: 'column', marginBottom: '20px'}}>
        {label && <Label>{label}</Label>}
        <InputComponent
            type={type}
            onBlur={onBlur}
            isInvalid={isInvalid}
            onChange={onChange} value={value} name={name}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
}

export default Input;