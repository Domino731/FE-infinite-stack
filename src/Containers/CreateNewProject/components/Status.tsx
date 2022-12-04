import {StatusContainer, StatusDot} from "./styles";
import {CREATE_NEW_PROJECT_SECTIONS} from "../const";
import {Typograhpy2} from "../../../Components/Typography";
import Flex from "../../../Components/Flex";
import {StatusProps} from "../types";

export const Status = ({step}: StatusProps) => {
    return <StatusContainer>
        {CREATE_NEW_PROJECT_SECTIONS.map(({label, key}) => {
            return <Flex alignItems="center" key={`create-new-project-status-${key}`} zIndex="1">
                <Typograhpy2 pr="12" color="white" type={step !== key ? "HEADLINE_H5" : "HEADLINE_H3"}>
                    {label}
                </Typograhpy2>
                <StatusDot/>
            </Flex>
        })}
    </StatusContainer>
}