import {useRef, useState} from "react";
import {useDisplayImage} from "../../../hooks/useDisplayImage";
import Box from "../../../Components/Box";
import {Label} from "../../../Components/Inputs/styles";
import Image from "../../../Components/Image";
import {DetailsIconInput} from "./styles";

export const FormikImageSelect = () => {
    const {result, uploader} = useDisplayImage();

    const [image, setImage] = useState<string | undefined>("");
    const imageRef = useRef(null);

    return <Box pl="40">
        <Label>Project icon</Label>
        <Box position="relative" display="flex" justifyContent="center" alignItems="center" w="160px"
             h="160px"
             bR="md">
            {result && <Image ref={imageRef} w="100%" h="100%" src={result} alt="project icon"/>}
            <DetailsIconInput>
                <label>
                    <input type="file"
                           id="avatar" name="avatar"
                           accept="image/png, image/jpeg" onChange={(e) => {
                        // @ts-ignore
                        setImage(e?.target?.files[0]);
                        uploader(e);
                    }}/>
                </label>
            </DetailsIconInput>
        </Box>
    </Box>
}