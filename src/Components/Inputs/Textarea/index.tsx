import {Label} from "../styles";
import {TextareaProps} from "./types";
import {TextareaComponent} from "./styles";
import Flex from "../../Flex";

export const Textarea = ({label, rows, resize}: TextareaProps) => {
    return <Flex dir="column">
        <Label>{label} </Label>
        <TextareaComponent rows={rows}/>
    </Flex>
}