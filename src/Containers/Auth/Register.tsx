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
import {RegisterInitialValues, RegisterValidationSchema} from "./formik";
import {useDispatch, useSelector} from "react-redux";
import {
    authIsUserLoggedSelector,
    authRegisterErrorSelector,
    authRegisterLoaderSelector
} from "../../Redux/auth/selectors";
import {authRegister} from "../../Redux/auth/actions";
import {AuthRegisterPayload} from "../../Redux/auth/types";
import {PasswordRequirements} from "./Components/PasswordRequirements";
import {Navigate} from "react-router-dom";
import {APP_ROUTES} from "../../Routes/const";
import {Introduction} from "./Components/Introduction";

export const Register = () => {
    const dispatch = useDispatch();

    // selectors
    const isUserLogged: boolean = useSelector(authIsUserLoggedSelector);
    const authRegisterLoader: boolean = useSelector(authRegisterLoaderSelector);
    const authRegisterError: string | null = useSelector(authRegisterErrorSelector);

    const handleSubmit = useCallback((formikValues: FormikValues): void => {
        if (!authRegisterLoader) {
            // @ts-ignore
            dispatch(authRegister(formikValues as AuthRegisterPayload));
        }
    }, [authRegisterLoader, dispatch]);

    return <Flex h="100%">
        <FormColumn>
            <Box h="20%" position='absolute'>
                <Logo/>
            </Box>
            <Box h="100%" display="flex" justifyContent="center" alignItems="center">
                <Box h="auto" m="0 auto" p="32px 16px" w="500px" bgColor="white" bR="16px">
                    <Formik
                        initialValues={RegisterInitialValues}
                        onSubmit={handleSubmit}
                        validationSchema={RegisterValidationSchema}
                    >{
                        ({values}) => {
                            return <>
                                <Typography>CREATE AN ACCOUNT</Typography>

                                <FormikInput name="eMail" label="E-mail"/>
                                <FormikInput name="username" label="Username"/>

                                <FormikInput name="password" label="Password" type="password"/>
                                <FormikInput name="passwordRepeat" label="Repeat the password" type="password"/>
                                <PasswordRequirements formikValues={values}/>

                                {authRegisterError}

                                <Flex justifyContent="space-between" m="0 0 20px 0">
                                    <span/>
                                    <Link to="/password-recovery" label="Forgot password?"/>
                                </Flex>
                                <Button onClick={() => handleSubmit(values)}
                                        disabled={false}>Create</Button>
                            </>
                        }
                    }


                    </Formik>
                    <Flex m="30px 0 0 0" justifyContent="center">
                        <Link to="/register" label="Already have an account?"/>
                    </Flex>
                </Box>
            </Box>
        </FormColumn>
        <Introduction>
            <h1>YOUR NEW<br/>
                ULTIMATE AGILE APP
            </h1>
        </Introduction>

        {/*redirect to dashboard if user is logged*/}
        {isUserLogged && <Navigate to={APP_ROUTES.INTRODUCTION}/>}
    </Flex>
}