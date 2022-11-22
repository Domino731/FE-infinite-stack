import Box from "../Box";
import {GradientBoxContent, GradientBoxShadow, GradientBoxWrapper} from "./styles";

const GradientBox = () => {
    return <GradientBoxWrapper>
        <GradientBoxContent>
            TEST
        </GradientBoxContent>
        <GradientBoxShadow/>
        
    </GradientBoxWrapper>
}

export default GradientBox;