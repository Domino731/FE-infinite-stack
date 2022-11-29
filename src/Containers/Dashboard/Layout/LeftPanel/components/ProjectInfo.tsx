import Box from "../../../../../Components/Box";
import text from "../../../../../assets/images/template.jpg";
import Image from "../../../../../Components/Image";

export const ProjectInfo = () => {

    return <Box>
        <Image w="30px" h="30px" src={text} borderRadius="4"/>
        Project info
    </Box>
}