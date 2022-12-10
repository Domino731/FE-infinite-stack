import {InputComponent} from "./styles";
import {ChangeEventHandler, FocusEventHandler, HTMLInputTypeAttribute} from "react";
import {Label, ErrorMessage} from "../styles";
import Flex from "../../Flex";

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

// style={{backgroundColor: 'white', display: 'flex', flexDirection: 'column', marginBottom: '20px'}}
const Input = ({label, onChange, value, name, onBlur, isInvalid, error, type, placeholder}: InputProps) => {
    return <Flex bgColor="white" dir="column" mb={20} position="relative">
        {label && <Label>{label}</Label>}
        <InputComponent
            type={type}
            onBlur={onBlur}
            isInvalid={isInvalid}
            onChange={onChange} value={value} name={name}
            placeholder={placeholder}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
    </Flex>
}

export default Input;