import {Container, IntroductionIconWrapper} from "./Components/styles";
import Box from "../../Components/Box";
import {Typograhpy2} from "../../Components/Typography";
import Divider from "../../Components/Divider";
import Flex from "../../Components/Flex";
import GradientBox from "../../Components/GradientBox";
import {FaElementor, FaWpforms} from "react-icons/fa";

const Introduction = () => {
    return <Container>
        <Box p="30px" bgColor="white" h="400px" w="1000px" bR="16px" boxShadow='primary'>
            <Typograhpy2 type="DISPLAY_D3" align="center">Welcome</Typograhpy2>
            <Typograhpy2 type="HEADLINE_H4" align="center" pt={'40'}>Find and join to an existing project, or create
                new</Typograhpy2>
            <Divider/>
            <Flex>
                <GradientBox>
                    <Box p='10px'>
                        <IntroductionIconWrapper>
                            <FaElementor/>
                        </IntroductionIconWrapper>

                        <Typograhpy2 type='HEADLINE_H5' pt="20" pb="20">
                            Try a template project
                        </Typograhpy2>
                    </Box>

                </GradientBox>
            </Flex>
        </Box>
    </Container>
}

export default Introduction