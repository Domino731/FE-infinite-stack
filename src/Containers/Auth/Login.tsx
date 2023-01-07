import Flex from "../../Components/Flex";
import Box from "../../Components/Box";
import {FormColumn} from "./Components/FormColumn";
import {Logo} from "../../Components/Logo";
import {Typograhpy2, Typography} from "../../Components/Typography";
import {Button} from "../../Components/Button";
import Link from "../../Components/Link";
import {Formik, FormikValues} from 'formik';
import {FormikInput} from "../../Components/Inputs/Input/FormikInput";
import {useCallback} from "react";
import {LoginInitialValues} from "./formik";
import {useDispatch, useSelector} from "react-redux";
import {
    authIsUserLoggedSelector,
    authLoginErrorSelector,
    authLoginLoaderSelector,
} from "../../Redux/auth/selectors";
import {authLogin} from "../../Redux/auth/actions";
import {AuthLoginPayload} from "../../Redux/auth/types";
import {AuthContainer} from "./Components/AuthContainer";

export const Login = () => {
    // other hooks
    const dispatch = useDispatch();

    // selectors
    const isUserLogged: boolean = useSelector(authIsUserLoggedSelector);
    const authLoginLoader: boolean = useSelector(authLoginLoaderSelector);
    const authLoginError: string | null = useSelector(authLoginErrorSelector);

    // callbacks
    const handleLogin = useCallback((formikValues: FormikValues): void => {
        console.log('handleSubmit');
        if (!authLoginLoader) {
            // @ts-ignore
            dispatch(authLogin(formikValues as AuthLoginPayload));
        }
    }, [authLoginLoader, dispatch]);

    return <AuthContainer>
        <Box h="auto" p="32px 24px" w="500px" bgColor="white" bR="24px">
            <Formik
                initialValues={LoginInitialValues}
                onSubmit={handleLogin}
                // validationSchema={LoginValidationSchema}
            >{
                ({handleSubmit}) => {
                    return <form onSubmit={handleSubmit}>
                        <Typograhpy2 type="HEADLINE_H4" p="0 0 62px 0">LOG INTO YOUR ACCOUNT</Typograhpy2>

                        <FormikInput name="eMail" label="E-mail"/>
                        <FormikInput name="password" label="Password" type="password"/>

                        {authLoginError}

                        <Flex justifyContent="space-between" m="0 0 25px 0">
                            <span/>
                            <Link to="/password-recovery" label="Forgot password?"/>
                        </Flex>
                        <Button type="submit" disabled={authLoginLoader} variant="CONTAINED"
                                size="LG">Login</Button>
                    </form>
                }
            }

            </Formik>
            <Flex m="30px 0 0 0" justifyContent="center">
                <Link to="/register" label="Don't have an account yet? create free"/>
            </Flex>
        </Box>
    </AuthContainer>
}