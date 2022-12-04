import {FormikInput} from "../../../Components/Inputs/Input/FormikInput";
import {FormikSelect} from "../../../Components/Inputs/Select/FormikSelect";

export const CreateNewProjectDetails = () => {
    return <>
        <FormikInput name="name" label="Name"/>
        <FormikInput name="key" label="Key"/>
        <FormikInput name="url" label="Url"/>
        <FormikSelect label="type" placeholder="choose from list" name="type"
                      options={[{value: 'test', label: 'test'}, {value: 'test', label: 'test'}]}/>
        <FormikInput name="category" label="Category"/>
        <FormikInput name="category" label="Description"/>
    </>
}