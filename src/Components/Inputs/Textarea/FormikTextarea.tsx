import {FormikTextareaProps} from "./types";
import {useField} from "formik";
import {Textarea} from "./index";

export const FormikTextarea = ({name, label, rows, height}: FormikTextareaProps) => {
    const [{value, onBlur, onChange}, {touched, error}] = useField(name);

    return <Textarea
        height={height}
        label={label}
        rows={rows}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        isInvalid={touched && error !== undefined}
        error={touched ? error : undefined}
    />
}