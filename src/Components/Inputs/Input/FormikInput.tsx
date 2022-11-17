import {useField} from "formik";
import Input from "./index";

interface FormikInputProps {
    name: string;
    label?: string;
}

export const FormikInput = ({name, label}: FormikInputProps) => {
    const [field, meta] = useField(name);
    
    return <Input
        onBlur={field.onBlur}
        onChange={field.onChange}
        name={name}
        label={label}
        value={field.value}
        isInvalid={meta.touched && meta.error !== undefined}
        error={meta.touched ? meta.error : undefined}
    />
}