import Box from "../../../../../Components/Box";
import {Typograhpy2} from "../../../../../Components/Typography";
import Flex from "../../../../../Components/Flex";

export const BottomPanel = () => {
    return <Flex bgColor="primary" p="8" borderRadius="10px" h="200px" dir="column" justifyContent="flex-end">
        <Typograhpy2 type="TITLE_SM" color="white">INFINITE_STACK 2023</Typograhpy2>
        <Typograhpy2 type="MENU_SM" color="white" pt="6">build: alpha</Typograhpy2>
    </Flex>
}