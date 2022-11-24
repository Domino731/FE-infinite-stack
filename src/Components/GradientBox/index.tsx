import {GradientBoxContent} from "./styles";
import {ReactNode} from "react";
import Box from "../Box";

const GradientBox = ({children}: { children: ReactNode }) => {
    return <GradientBoxContent>
        <Box bgColor="white" h="100%" w="100%" bR="10px">
            {children}
        </Box>
    </GradientBoxContent>
}

export default GradientBox;