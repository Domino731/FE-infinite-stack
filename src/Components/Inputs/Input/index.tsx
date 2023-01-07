import {InputComponent, InputIconWrapper} from "./styles";
import {Label, ErrorMessage} from "../styles";
import Flex from "../../Flex";
import {INPUT_SIZES, InputProps} from "./types";
import Box from "../../Box";
import {FaEyeSlash, FaEye} from 'react-icons/fa';
import {useCallback, useState} from "react";

const Input = ({label, onChange, value, name, onBlur, isInvalid, error, type, placeholder}: InputProps) => {
    const [inputType, setInputType] = useState<string | undefined>(type);

    const handleChangeInputType = useCallback(() => {
        setInputType(inputType === 'password' ? 'text' : 'password')
    }, [inputType]);

    return <Flex bgColor="white" dir="column" mb={20} position="relative">
        {label && <Label>{label}</Label>}
        <Box position="relative">
            <InputComponent
                type={inputType}
                onBlur={onBlur}
                isInvalid={isInvalid}
                onChange={onChange}
                value={value}
                name={name}
                placeholder={placeholder}
                // @ts-ignore
                size={INPUT_SIZES.LG}
            />
            {type === 'password' && <InputIconWrapper onClick={handleChangeInputType}>
                {inputType === 'password' ? <FaEyeSlash/> : <FaEye/>}
            </InputIconWrapper>}
        </Box>
        {error && <ErrorMessage>{error}</ErrorMessage>}
    </Flex>
}

export default Input;