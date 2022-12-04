import {FormikInput} from "../../../Components/Inputs/Input/FormikInput";

export const CreateNewProjectDetails = () => {
    return <>
        <FormikInput name="name" label="Name"/>
        <FormikInput name="key" label="Key"/>
        <FormikInput name="url" label="Url"/>
        <FormikInput name="type" label="Type"/>
        <FormikInput name="category" label="Category"/>
        <FormikInput name="category" label="Description"/>
    </>
}