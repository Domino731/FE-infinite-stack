import {useEffect, useRef, useState} from "react";
import {useDisplayImage} from "../../../hooks/useDisplayImage";
import Box from "../../../Components/Box";
import {Label} from "../../../Components/Inputs/styles";
import Image from "../../../Components/Image";
import {DetailsIconInput, FormikImageSelectErrorMessage} from "./styles";
import {AiOutlineUpload} from 'react-icons/ai';
import {useField} from "formik";

export const FormikImageSelect = () => {
    const {result, uploader} = useDisplayImage();

    const [field, meta] = useField('projectImage');

    const imageRef = useRef(null);

    useEffect(() => {
        field.onChange({
            target: {
                name: 'projectImage',
                value: result
            }
        });
    }, [result])

    return <Box pl="40">
        <Label>Project icon</Label>
        <Box overflow="hidden" position="relative" display="flex" justifyContent="center" alignItems="center" w="160px"
             h="160px"
             bR="md">
            {result && <Image ref={imageRef} w="100%" h="100%" src={result} alt="project icon"/>}
            <DetailsIconInput isInvalid={meta.touched && meta.error !== undefined}>
                <label>
                    <AiOutlineUpload/>
                    <input type="file"
                           id="avatar"
                           name="avatar"
                           accept="image/png, image/jpeg"
                           onChange={(e) => {
                               uploader(e);
                           }}
                           onBlur={field.onBlur}
                    />
                </label>
            </DetailsIconInput>
        </Box>
        {(meta.touched && meta.error) && <FormikImageSelectErrorMessage>meta.error</FormikImageSelectErrorMessage>}
    </Box>
}