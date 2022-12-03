import {StatusContainer, StatusDot} from "./styles";
import {CREATE_NEW_PROJECT_SECTIONS} from "../const";
import {Typograhpy2} from "../../../Components/Typography";
import Box from "../../../Components/Box";
import Flex from "../../../Components/Flex";
import {StatusProps} from "../types";

export const Status = ({step}: StatusProps) => {
    return <StatusContainer>
        {CREATE_NEW_PROJECT_SECTIONS.map(({label, key}) => {
            return <StatusDot key={`create-new-project-status-dot-${key}`}/>
        })}
        <Flex w="130px"
              transform="translateX(-150px)"
              dir="column" justifyContent="space-between" h="100%" alignItems="flex-end"
              position="absolute">
            {CREATE_NEW_PROJECT_SECTIONS.map(({label, key}) => {
                return <Typograhpy2 type={step !== key ? "HEADLINE_H5" : "HEADLINE_H3"}
                                    color="white">{label}</Typograhpy2>
            })}
        </Flex>
    </StatusContainer>
}