import Box from "../../../../Components/Box";
import {ProjectInfo} from "./components/ProjectInfo";
import Divider from "../../../../Components/Divider";
import {LeftPanelNavigation} from "./components/LeftPanelNavigation";
import Flex from "../../../../Components/Flex";
import {BottomPanel} from "./components/BottomPanel";

const LeftPanel = () => {
    return <Flex dir="column" w="340px" h="100%">
        <Box p="24px" h="calc(100% - 200px)" bgColor="white-200" boxShadow="2px 0px 5px black inset">
            <ProjectInfo/>
            <Divider/>
            <LeftPanelNavigation/>
        </Box>
        <BottomPanel/>
    </Flex>
}

export default LeftPanel;