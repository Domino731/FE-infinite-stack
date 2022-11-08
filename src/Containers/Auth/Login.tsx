import Flex from "../../Components/Flex";
import Box from "../../Components/Box";
import {FormColumn} from "./Components/FormColumn";
import {Logo} from "../../Components/Logo";
import Input from "../../Components/Inputs/Input";

export const Login = () => {
    // @ts-ignore
    return <Flex h="100%">
        <FormColumn>
                 <Logo/>
                 <Box>
                     <Input/>
                 </Box>
        </FormColumn>
    </Flex>
}