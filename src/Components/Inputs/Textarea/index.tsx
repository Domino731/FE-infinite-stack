import {Label} from "../styles";
import {TextareaProps} from "./types";
import {TextareaComponent} from "./styles";
import Flex from "../../Flex";

export const Textarea = ({label, rows, resize, onChange, value, name}: TextareaProps) => {
    return <Flex dir="column">
        <Label>{label}</Label>
        <TextareaComponent rows={rows} onChange={onChange} value={value} name={name}/>
    </Flex>
}