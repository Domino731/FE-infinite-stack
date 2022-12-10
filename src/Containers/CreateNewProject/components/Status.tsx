import {StatusContainer, StatusDot} from "./styles";
import {CREATE_NEW_PROJECT_SECTIONS_DATA} from "../const";
import {Typograhpy2} from "../../../Components/Typography";
import Flex from "../../../Components/Flex";
import {StatusProps} from "../types";
import {useMemo} from "react";
import Image from "../../../Components/Image";
import {FaCheck} from 'react-icons/fa';

export const Status = ({step, completedSteps}: StatusProps) => {
    const progressBarPercentage = useMemo(() => {
        if (completedSteps.length === 0) {
            return '0%';
        } else if (completedSteps.length === 1) {
            return '50%';
        } else {
            return '100%'
        }
    }, [completedSteps.length]);

    return <StatusContainer progressBarPercentage={progressBarPercentage}>
        {CREATE_NEW_PROJECT_SECTIONS_DATA.map(({label, key}) => {
            return <Flex alignItems="center" key={`create-new-project-status-${key}`} zIndex="1">
                <Typograhpy2 pr="12" color="white" type={step !== key ? "HEADLINE_H5" : "HEADLINE_H3"}>
                    {label}
                </Typograhpy2>
                <StatusDot icon={completedSteps.includes(key)}>
                    <FaCheck/>
                </StatusDot>
            </Flex>
        })}
    </StatusContainer>
}