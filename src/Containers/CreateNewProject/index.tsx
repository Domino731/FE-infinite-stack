import Box from "../../Components/Box";
import {Typograhpy2} from "../../Components/Typography";
import Divider from "../../Components/Divider";
import {Button} from "../../Components/Button";
import Flex from "../../Components/Flex";
import {Status} from "./components/Status";

const CreateNewProject = () => {
    return <Box display="flex" justifyContent="center" alignItems="center" w="100%" h="100vh" bgGradient="blue">
        <Box p="26" bR="xl" w="700px" h="800px" bgColor="white" position="relative">
            <Status step="details"/>
            <Typograhpy2 type="HEADLINE_H4">Create new project</Typograhpy2>
            <Divider/>
            <Box h="554px">

            </Box>
            <Divider/>
            <Flex justifyContent="flex-end">
                <Button widthAuto>Next step</Button>
            </Flex>
        </Box>
    </Box>
}

export default CreateNewProject;