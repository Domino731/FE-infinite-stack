import {ErrorMessage, Label} from "../styles";
import {TextareaProps} from "./types";
import {TextareaComponent, TextareaErrorMessage} from "./styles";
import Flex from "../../Flex";
import Box from "../../Box";

export const Textarea = ({
                             label,
                             rows,
                             resize,
                             onChange,
                             value,
                             name,
                             height,
                             onBlur,
                             isInvalid,
                             error
                         }: TextareaProps) => {
    return <Flex dir="column">
        <Label>{label}</Label>
        <Box position="relative" pb="20px">
            <TextareaComponent
                height={height}
                rows={rows}
                onChange={onChange}
                value={value}
                name={name}
                onBlur={onBlur}
                isInvalid={isInvalid}
            />
            {error && <TextareaErrorMessage>{error}</TextareaErrorMessage>}
        </Box>
    </Flex>
}