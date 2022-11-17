import {useField} from "formik";
import Input from "./index";
import {HTMLInputTypeAttribute} from "react";

interface FormikInputProps {
    name: string;
    label?: string;
    type?: HTMLInputTypeAttribute;
}

/**
 * Input that is prepared for formik
 * @param name - name for formik field & meta
 * @param label - input label
 * @param type - input type
 * */
export const FormikInput = ({name, label, type}: FormikInputProps) => {
    const [field, meta] = useField(name);

    return <Input
        type={type}
        onBlur={field.onBlur}
        onChange={field.onChange}
        name={name}
        label={label}
        value={field.value}
        isInvalid={meta.touched && meta.error !== undefined}
        error={meta.touched ? meta.error : undefined}
    />
}