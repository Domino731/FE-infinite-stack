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
                 <Logo/>
                 <Box m="0 auto" p="16px" w="500px" bgColor="white" bR="6px">
                     <Typography>Login</Typography>
                     <Input/>
                     <Button>Send</Button>
                 </Box>
        </FormColumn>
    </Flex>
}