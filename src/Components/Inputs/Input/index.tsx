import {Label, InputComponent, ErrorMessage} from "./styles";
import {ChangeEventHandler} from "react";

interface InputProps {
    label?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    value?: string;
    name?: string;
    onBlur?: any;
    isInvalid?: boolean;
    error?: string;
}

const Input = ({label, onChange, value, name, onBlur, isInvalid, error}: InputProps) => {
    console.log(isInvalid);
    return <div style={{backgroundColor: 'white', display: 'flex', flexDirection: 'column', marginBottom: '20px'}}>
        {label && <Label>{label}</Label>}
        <InputComponent
            onBlur={() => {
            }}
            isInvalid={isInvalid}
            onChange={onChange} value={value} name={name}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
}

export default Input;