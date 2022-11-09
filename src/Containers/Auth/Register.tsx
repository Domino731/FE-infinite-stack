import Flex from "../../Components/Flex";
import Box from "../../Components/Box";
import {FormColumn} from "./Components/FormColumn";
import {Logo} from "../../Components/Logo";
import Input from "../../Components/Inputs/Input";
import {Typography} from "../../Components/Typography";
import {Button} from "../../Components/Button";
import Link from "../../Components/Link";

export const Register = () => {
    return <Flex h="100%">
        <FormColumn>
            <Box h="20%" position='absolute'>
                <Logo/>
            </Box>
            <Box h="100%" display="flex" justifyContent="center" alignItems="center">
                <Box h="auto" m="0 auto" p="32px 16px" w="500px" bgColor="white" bR="6px">
                    <Typography>CREATE AN ACCOUNT</Typography>
                    <Input label="E-mail"/>
                    <Input label="Password"/>
                    <Input label="Repeat the password"/>
                    <Flex justifyContent="space-between" m="0 0 20px 0">
                        <span/>
                        <Link to="/password-recovery" label="Forgot password?"/>
                    </Flex>
                    <Button>Create</Button>
                    <Flex m="30px 0 0 0" justifyContent="center">
                        <Link to="/register" label="Already have an account?"/>
                    </Flex>
                </Box>
            </Box>
        </FormColumn>
    </Flex>
}