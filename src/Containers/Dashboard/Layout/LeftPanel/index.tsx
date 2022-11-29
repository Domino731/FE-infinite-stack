import Box from "../../../../Components/Box";
import {ProjectInfo} from "./components/ProjectInfo";
import Divider from "../../../../Components/Divider";

const LeftPanel = () => {
    return <Box w="340px" h="100%" border="1px solid black" p="24px">
        <ProjectInfo/>
        <Divider/>
    </Box>
}

export default LeftPanel;