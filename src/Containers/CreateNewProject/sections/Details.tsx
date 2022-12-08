import {FormikInput} from "../../../Components/Inputs/Input/FormikInput";
import {FormikSelect} from "../../../Components/Inputs/Select/FormikSelect";
import {PROJECT_TYPES} from "../../../configs/projectTypes";
import {useMemo} from "react";
import {FormikTextarea} from "../../../Components/Inputs/Textarea/FormikTextarea";
import Flex from "../../../Components/Flex";
import Box from "../../../Components/Box";
import {Label} from "../../../Components/Inputs/styles";

export const CreateNewProjectDetails = () => {

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
            <Box pl="40">
                <Label>Project icon</Label>
                <Box w="160px" h="160px" bgColor="primary">

                </Box>
            </Box>
        </Flex>
        <FormikSelect label="Type" placeholder="choose from list" name="type"
                      options={projectTypes}/>
        <FormikSelect label="Category" placeholder="choose from list" name="category"
                      options={projectTypeCategories}/>
        <FormikTextarea label="Description" name="description" rows={7}/>
    </>
}