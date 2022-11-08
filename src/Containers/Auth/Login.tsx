import Flex from "../../Components/Flex";
import Box from "../../Components/Box";
import {FormColumn} from "./Components/FormColumn";
import {Logo} from "../../Components/Logo";
import Input from "../../Components/Inputs/Input";
import {Typography} from "../../Components/Typography";
import {Button} from "../../Components/Button";

export const Login = () => {
    return <Flex h="100%">
        <FormColumn>
            <Box h="20%" position='absolute'>
                <Logo/>
            </Box>
            <Box h="100%" display="flex" justifyContent="center" alignItems="center">
                <Box h="auto" m="0 auto" p="16px" w="500px" bgColor="white" bR="6px">
                    <Typography>Login</Typography>
                    <Input/>
                    <Button>Send</Button>
                </Box>
            </Box>
        </FormColumn>
    </Flex>
}