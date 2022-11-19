import Flex from "../../Components/Flex";
import Box from "../../Components/Box";
import {FormColumn} from "./Components/FormColumn";
import {Logo} from "../../Components/Logo";
import {Typography} from "../../Components/Typography";
import {Button} from "../../Components/Button";
import Link from "../../Components/Link";
import {Formik, FormikValues} from 'formik';
import {FormikInput} from "../../Components/Inputs/Input/FormikInput";
import {useCallback} from "react";
import {LoginInitialValues} from "./formik";
import {useDispatch, useSelector} from "react-redux";
import {
    authLoginErrorSelector,
    authLoginLoaderSelector,
} from "../../Redux/auth/selectors";
import {authLogin} from "../../Redux/auth/actions";
import {AuthLoginPayload} from "../../Redux/auth/types";

export const Login = () => {
    const dispatch = useDispatch();

    const authLoginLoader: boolean = useSelector(authLoginLoaderSelector);
    const authLoginError: string | null = useSelector(authLoginErrorSelector);

    const handleLogin = useCallback((formikValues: FormikValues): void => {
        console.log('handleSubmit');
        if (!authLoginLoader) {
            // @ts-ignore
            dispatch(authLogin(formikValues as AuthLoginPayload));
        }
    }, [authLoginLoader, dispatch]);

    return <Flex h="100%">
        <FormColumn>
            <Box h="20%" position='absolute'>
                <Logo/>
            </Box>
            <Box h="100%" display="flex" justifyContent="center" alignItems="center">
                <Box h="auto" m="0 auto" p="32px 16px" w="500px" bgColor="white" bR="16px">
                    <Formik
                        initialValues={LoginInitialValues}
                        onSubmit={handleLogin}
                        // validationSchema={LoginValidationSchema}
                    >{
                        ({handleSubmit}) => {

                            return <form onSubmit={handleSubmit}>
                                <Typography>LOG INTO YOUR ACCOUNT</Typography>

                                <FormikInput name="eMail" label="E-mail"/>
                                <FormikInput name="password" label="Password"/>

                                {authLoginError}

                                <Flex justifyContent="space-between" m="0 0 20px 0">
                                    <span/>
                                    <Link to="/password-recovery" label="Forgot password?"/>
                                </Flex>
                                <Button type="submit" disabled={authLoginLoader}>Login</Button>
                            </form>
                        }
                    }

                    </Formik>
                    <Flex m="30px 0 0 0" justifyContent="center">
                        <Link to="/register" label="Don't have an account yet? create free"/>
                    </Flex>
                </Box>
            </Box>
        </FormColumn>
    </Flex>
}