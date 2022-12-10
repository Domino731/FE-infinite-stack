import * as Yup from 'yup';
import {ObjectSchema} from "yup";
import {PROJECT_TYPES} from "../../configs/projectTypes";

//// Initial values

/** initial values for register formik */
export const DetailsInitialValues: Record<string, string> = {
    name: '',
    key: '',
    url: '',
    projectImage: '',
    type: '',
    category: '',
    description: ''
};

//// Validation schemas

/** validation schema for details formik */
export const DetailsValidationSchema: ObjectSchema<any> = Yup.object().shape({
    name: Yup.string()
        .required('Required')
        .min(2, 'Min 2 characters'),
    key: Yup.string()
        .required('Required')
        .min(2, 'Min 2 characters'),
    url: Yup.string()
        .required('Required')
        .min(2, 'Min 2 characters'),
    projectImage: Yup.string().required('Required'),
    type: Yup.string().required('Required').oneOf(PROJECT_TYPES.map(({type}) => type), 'Invalid type'),
    category: Yup.string().required('Required').oneOf(PROJECT_TYPES[0].categories.map(({category}) => category), 'Invalid category'),
    // TODO before release: set min characters and test
    description: Yup.string().required('Required').min(3, 'Min 30 characters'),
});