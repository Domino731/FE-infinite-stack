import {InputComponent} from "./styles";
import {Label, ErrorMessage} from "../styles";
import Flex from "../../Flex";
import {INPUT_SIZES, InputProps} from "./types";
import {useToggle} from "../../../hooks/useToggle";
import Box from "../../Box";


const Input = ({label, onChange, value, name, onBlur, isInvalid, error, type, placeholder}: InputProps) => {
    const {flag, handleToggleFlag} = useToggle();

    return <Flex bgColor="white" dir="column" mb={20} position="relative">
        {label && <Label>{label}</Label>}
        <Box>
            <InputComponent
                type={type}
                onBlur={onBlur}
                isInvalid={isInvalid}
                onChange={onChange}
                value={value}
                name={name}
                placeholder={placeholder}
                // @ts-ignore
                size={INPUT_SIZES.LG}
            />
        </Box>
        {error && <ErrorMessage>{error}</ErrorMessage>}
    </Flex>
}

export default Input;