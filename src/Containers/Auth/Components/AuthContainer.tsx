import {AuthContainerComponent} from "./styles";
import {Introduction} from "./Introduction";
import Box from "../../../Components/Box";

export const AuthContainer = ({children}: any) => {
    return <AuthContainerComponent>
        <Box h="auto" p="32px 24px" w="500px" bgColor="white" bR="24px">
            {children}
        </Box>

        <Introduction>
            <h1>YOUR NEW<br/>
                ULTIMATE AGILE APP
            </h1>
        </Introduction>
    </AuthContainerComponent>
}
