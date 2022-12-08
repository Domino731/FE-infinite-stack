import {FormikInput} from "../../../Components/Inputs/Input/FormikInput";
import {FormikSelect} from "../../../Components/Inputs/Select/FormikSelect";
import {PROJECT_TYPES} from "../../../configs/projectTypes";
import {useMemo, useRef, useState} from "react";
import {FormikTextarea} from "../../../Components/Inputs/Textarea/FormikTextarea";
import Flex from "../../../Components/Flex";
import Box from "../../../Components/Box";
import {Label} from "../../../Components/Inputs/styles";
import {FormikImageSelect} from "../components/FormikImageSelect";

export const CreateNewProjectDetails = () => {

    const [image, setImage] = useState<any>("");
    const imageRef = useRef(null);

    function useDisplayImage() {
        const [result, setResult] = useState<any>("");

        function uploader(e: any) {
            const imageFile = e.target.files[0];

            const reader = new FileReader();
            reader.addEventListener("load", (e) => {
                setResult(e?.target?.result);
            });

            reader.readAsDataURL(imageFile);
        }

        return {result, uploader};
    }

    const {result, uploader} = useDisplayImage()

    const projectTypes = useMemo(() => PROJECT_TYPES.map(({label, type, iconUrl}) => ({
        label,
        value: type,
        iconUrl
    })), []);
    const projectTypeCategories = useMemo(() => PROJECT_TYPES[0].categories.map(({label, category, iconUrl}) => ({
        label,
        value: category,
        iconUrl
    })), [])


    return <>
        <Flex>
            <Box flexGrow={1}>
                <FormikInput name="name" label="Name"/>
                <FormikInput name="key" label="Key"/>
                <FormikInput name="url" label="Url"/>
            </Box>
            <FormikImageSelect/>
        </Flex>
        <FormikSelect label="Type" placeholder="choose from list" name="type"
                      options={projectTypes}/>
        <FormikSelect label="Category" placeholder="choose from list" name="category"
                      options={projectTypeCategories}/>
        <FormikTextarea label="Description" name="description" rows={7} height="170px"/>
    </>
}