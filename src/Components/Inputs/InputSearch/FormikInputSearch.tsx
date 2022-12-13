import {FormikInputSearchProps, InputSearchProps} from "./types";
import {useField} from "formik";
import {InputSearch} from "./index";

export const FormikInputSearch = ({name, label, placeholder, options}: FormikInputSearchProps) => {
    const [field, meta] = useField(name);
    return <InputSearch
        value={field.value}
        options={options}
        label={label}
        // @ts-ignore
        onChange={(value) => field.onChange({target: {name, value}})}
        isInvalid={meta.touched && meta.error !== undefined}
        error={meta.touched ? meta.error : undefined}
        placeholder={placeholder}
        onBlur={field.onBlur}
    />
}