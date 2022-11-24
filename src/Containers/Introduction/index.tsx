import {Container, IntroductionIconWrapper, IntroductionLinkWrapper, IntroductionTitle} from "./Components/styles";
import Box from "../../Components/Box";
import {Typograhpy2} from "../../Components/Typography";
import Divider from "../../Components/Divider";
import Flex from "../../Components/Flex";
import GradientBox from "../../Components/GradientBox";
import {FaElementor, FaWpforms} from "react-icons/fa";
import {Link} from "react-router-dom";
import {APP_ROUTES} from "../../Routes/const";
import StyledLink from "../../Components/Link";

const Introduction = () => {
    return <Container>
        <IntroductionTitle>Infinite_stack</IntroductionTitle>
        <Box p="30px" bgColor="white" w="1000px" bR="16px" boxShadow='primary'>
            <Typograhpy2 type="DISPLAY_D3" align="center">Welcome</Typograhpy2>
            <Typograhpy2 type="HEADLINE_H4" align="center" pt={'40'}>Find and join to an existing project, or create
                new</Typograhpy2>
            <Divider/>
            <Flex justifyContent="space-evenly" p="40px 0">
                <GradientBox>
                    <IntroductionLinkWrapper>
                        <Link to={APP_ROUTES.TEMPLATE_PROJECT}>
                            <IntroductionIconWrapper>
                                <FaElementor/>
                            </IntroductionIconWrapper>

                            <Typograhpy2 align="center" type='HEADLINE_H5' pt="20" pb="20">
                                Try a template project
                            </Typograhpy2>
                        </Link>
                    </IntroductionLinkWrapper>
                </GradientBox>
                <GradientBox>
                    <IntroductionLinkWrapper>
                        <Link to={APP_ROUTES.DASHBOARD_CREATE_NEW_PROJECT}>
                            <IntroductionIconWrapper>
                                <FaWpforms/>
                            </IntroductionIconWrapper>

                            <Typograhpy2 align="center" type='HEADLINE_H5' pt="20" pb="20">
                                Create new
                            </Typograhpy2>
                        </Link>
                    </IntroductionLinkWrapper>
                </GradientBox>
            </Flex>
            <Divider/>
            <Flex justifyContent="center">
                <StyledLink to={APP_ROUTES.DASHBOARD} label={"Dashboard"}/>
            </Flex>
        </Box>
    </Container>
}

export default Introduction