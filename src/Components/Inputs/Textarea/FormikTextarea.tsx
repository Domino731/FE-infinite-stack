import {FormikTextareaProps} from "./types";
import {useField} from "formik";
import {Textarea} from "./index";

export const FormikTextarea = ({name, label, rows}: FormikTextareaProps) => {
    const [field] = useField(name);
    return <Textarea label={label} rows={rows} value={field.value} onChange={field.onChange} name={name}/>
}