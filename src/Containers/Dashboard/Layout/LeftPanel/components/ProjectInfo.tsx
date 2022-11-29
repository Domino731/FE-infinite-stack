import Box from "../../../../../Components/Box";
import templateImage from "../../../../../assets/images/template.jpg";
import Image from "../../../../../Components/Image";
import Flex from "../../../../../Components/Flex";
import {Typograhpy2} from "../../../../../Components/Typography";

export const ProjectInfo = () => {
    return <Flex>
        <Image w="46px" h="46px" src={templateImage} borderRadius="8" title="project image"/>
        <Box p="0 0 0 10px">
            <Typograhpy2 type="HEADLINE_H5">Project info</Typograhpy2>
            <Typograhpy2 type="TITLE_SM" color="grey-700">Project info</Typograhpy2>
        </Box>
    </Flex>
}