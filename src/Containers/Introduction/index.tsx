import {Container} from "./Components/styles";
import Box from "../../Components/Box";
import {Typograhpy2} from "../../Components/Typography";
import Divider from "../../Components/Divider";
import Flex from "../../Components/Flex";
import GradientBox from "../../Components/GradientBox";

const Introduction = () => {
    return <Container>
        <Box p="30px" bgColor="white" h="400px" w="1000px" bR="16px" boxShadow='primary'>
            <Typograhpy2 type="DISPLAY_D3" align="center">Welcome</Typograhpy2>
            <Divider/>
            <Flex>
                <GradientBox/>
            </Flex>
        </Box>
    </Container>
}

export default Introduction