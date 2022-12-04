import {FormikSelectProps} from "./types";
import {useField} from "formik";
import {Select} from "./index";

export const FormikSelect = ({name, label, placeholder, options}: FormikSelectProps) => {
    const [field, meta] = useField(name);
    return <Select
        value={field.value}
        options={options}
        label={label}
        onChange={(value) => field.onChange({target: {name, value}})}
        isInvalid={meta.touched && meta.error !== undefined}
        error={meta.touched ? meta.error : undefined}
        placeholder={placeholder}
    />
}