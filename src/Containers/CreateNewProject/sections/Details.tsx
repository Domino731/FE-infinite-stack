import {FormikInput} from "../../../Components/Inputs/Input/FormikInput";
import {FormikSelect} from "../../../Components/Inputs/Select/FormikSelect";
import {Textarea} from "../../../Components/Inputs/Textarea";

export const CreateNewProjectDetails = () => {
    return <>
        <FormikInput name="name" label="Name"/>
        <FormikInput name="key" label="Key"/>
        <FormikInput name="url" label="Url"/>
        <FormikSelect label="type" placeholder="choose from list" name="type"
                      options={[{value: 'test', label: 'test'}, {value: 'test', label: 'test'}]}/>
        <FormikInput name="category" label="Category"/>
        <Textarea label="Description" rows={7} resize={false}/>
        {/*<FormikInput name="category" label="Description"/>*/}
    </>
}