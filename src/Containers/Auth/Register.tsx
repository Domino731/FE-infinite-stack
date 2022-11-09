import Flex from "../../Components/Flex";
import Box from "../../Components/Box";
import {FormColumn} from "./Components/FormColumn";
import {Logo} from "../../Components/Logo";
import Input from "../../Components/Inputs/Input";
import {Typography} from "../../Components/Typography";
import {Button} from "../../Components/Button";
import Link from "../../Components/Link";
import {Formik, FormikValues} from 'formik';
import {FormikInput} from "../../Components/Inputs/Input/FormikInput";
import {useCallback} from "react";
import {RegisterInitialValues, RegisterValidationSchema} from "../../Components/Inputs/Input/formik";

export const Register = () => {
    const handleSubmit = useCallback((formikValues: FormikValues) => {
        console.log("formikValues", formikValues)
    }, []);

    return <Flex h="100%">
        <FormColumn>
            <Box h="20%" position='absolute'>
                <Logo/>
            </Box>
            <Box h="100%" display="flex" justifyContent="center" alignItems="center">
                <Box h="auto" m="0 auto" p="32px 16px" w="500px" bgColor="white" bR="6px">
                    <Formik
                        initialValues={RegisterInitialValues}
                        onSubmit={handleSubmit}
                        validationSchema={RegisterValidationSchema}
                    >
                        <>
                            <Typography>CREATE AN ACCOUNT</Typography>

                            <FormikInput name="eMail" label="E-mail"/>
                            <FormikInput name="password" label="Password"/>
                            <FormikInput name="passwordRepeat" label="Repeat the password"/>

                            <Flex justifyContent="space-between" m="0 0 20px 0">
                                <span/>
                                <Link to="/password-recovery" label="Forgot password?"/>
                            </Flex>
                            <Button>Create</Button>
                        </>

                    </Formik>
                    <Flex m="30px 0 0 0" justifyContent="center">
                        <Link to="/register" label="Already have an account?"/>
                    </Flex>
                </Box>
            </Box>
        </FormColumn>
    </Flex>
}