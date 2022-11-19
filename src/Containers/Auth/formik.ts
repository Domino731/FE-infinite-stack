import * as Yup from 'yup';
import YupPassword from 'yup-password';

YupPassword(Yup);

const passwordMessage: string = 'Check password requirements below';

//// Initial values

/** initial values for register formik */
export const RegisterInitialValues: Record<string, string> = {
    eMail: '',
    password: '',
    passwordRepeat: ''
};

/** initial values for login formik */
export const LoginInitialValues: Record<string, string> = {
    eMail: '',
    password: ''
}

//// Validation schemas

/** validation schema for register formik */
export const RegisterValidationSchema = Yup.object().shape({
    eMail: Yup.string()
        .email('Invalid email')
        .required('Required'),
    username: Yup.string()
        .required('Required')
        .min(3, 'Min 3 characters')
        .max(15, 'Max 15 characters'),
    password: Yup.string()
        .required('Required')
        .min(8, passwordMessage)
        .minLowercase(1, passwordMessage)
        .minUppercase(1, passwordMessage)
        .minNumbers(1, passwordMessage)
        .minSymbols(1, passwordMessage),
    passwordRepeat: Yup.string()
        .required('Required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

/** validation schema for login formik */
export const LoginValidationSchema = Yup.object().shape({
    eMail: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .required('Required')
});

