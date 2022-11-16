import * as Yup from 'yup';
import YupPassword from 'yup-password';

YupPassword(Yup);

/** initial values for register formik */
export const RegisterInitialValues: Record<string, string> = {
    eMail: '',
    password: '',
    passwordRepeat: ''
};

/** validation schema for register formik */
export const RegisterValidationSchema = Yup.object().shape({
    eMail: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .min(
            8,
            'password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special'
        )
        .minLowercase(1, 'password must contain at least 1 lower case letter')
        .minUppercase(1, 'password must contain at least 1 upper case letter')
        .minNumbers(1, 'password must contain at least 1 number')
        .minSymbols(1, 'password must contain at least 1 special character'),
    passwordRepeat: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
});