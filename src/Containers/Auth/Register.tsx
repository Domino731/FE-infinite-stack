import Flex from "../../Components/Flex";
import Box from "../../Components/Box";
import {FormColumn} from "./Components/FormColumn";
import {Logo} from "../../Components/Logo";
import {Typograhpy2, Typography} from "../../Components/Typography";
import {Button} from "../../Components/Button";
import Link from "../../Components/Link";
import {Formik, FormikValues} from 'formik';
import {FormikInput} from "../../Components/Inputs/Input/FormikInput";
import {useCallback, useMemo} from "react";
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
import {InputSearch} from "../../Components/Inputs/InputSearch";
import {FormikInputSearch} from "../../Components/Inputs/InputSearch/FormikInputSearch";
import {roles} from "../../configs/roles";
import {SelectOption} from "../../Components/Inputs/Select/types";
import {AuthContainer} from "./Components/AuthContainer";

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

    const specializationAreas = useMemo((): Array<SelectOption> => roles.map(({key, label}) => ({
        value: key,
        label
    })), []);

    const specializations = useCallback((specializationArea: string) => {
        const payload = roles.find(({key}) => key === specializationArea)?.jobs;
        if (payload) {
            return payload.map(({key, label}) => ({value: key, label}))
        }
        return [];
    }, [])

    return <AuthContainer>
        <Formik
            initialValues={RegisterInitialValues}
            onSubmit={handleSubmit}
            validationSchema={RegisterValidationSchema}
        >{
            ({values}) => {
                return <>
                    <Typograhpy2 type="HEADLINE_H4" p="0 0 62px 0">CREATE AN ACCOUNT</Typograhpy2>

                    <FormikInput name="eMail" label="E-mail"/>
                    <FormikInput name="username" label="Username"/>

                    <FormikInput name="password" label="Password" type="password"/>
                    <FormikInput name="passwordRepeat" label="Repeat the password" type="password"/>
                    <FormikInputSearch label="Specialization area" options={specializationAreas}
                                       name="specializationArea"
                                       listHeight="200px"/>
                    <FormikInputSearch label="Specialization"
                                       options={specializations(values.specializationArea)}
                                       name="specialization"
                                       listHeight="200px"
                                       disabled={specializations(values.specializationArea).length === 0}
                    />
                    <PasswordRequirements formikValues={values}/>

                    {authRegisterError}

                    <Flex justifyContent="space-between" m="0 0 20px 0">
                        <span/>
                        <Link to="/password-recovery" label="Forgot password?"/>
                    </Flex>
                    <Button onClick={() => handleSubmit(values)}
                            disabled={false}
                            variant="CONTAINED"
                            size="LG"
                    >
                        Create
                    </Button>
                </>
            }
        }


        </Formik>
        <Flex m="30px 0 0 0" justifyContent="center">
            <Link to="/register" label="Already have an account?"/>
        </Flex>
    </AuthContainer>
}

//    <Flex m="30px 0 0 0" justifyContent="center">
//                         <Link to="/register" label="Already have an account?"/>
//                     </Flex>

// <Formik
//                  initialValues={RegisterInitialValues}
//                  onSubmit={handleSubmit}
//                  validationSchema={RegisterValidationSchema}
//              >{
//                  ({values}) => {
//                      return <>
//                          <Typography>CREATE AN ACCOUNT</Typography>
//
//                          <FormikInput name="eMail" label="E-mail"/>
//                          <FormikInput name="username" label="Username"/>
//
//                          <FormikInput name="password" label="Password" type="password"/>
//                          <FormikInput name="passwordRepeat" label="Repeat the password" type="password"/>
//                          <FormikInputSearch label="Specialization area" options={specializationAreas}
//                                             name="specializationArea"
//                                             listHeight="200px"/>
//                          <FormikInputSearch label="Specialization"
//                                             options={specializations(values.specializationArea)}
//                                             name="specialization"
//                                             listHeight="200px"
//                                             disabled={specializations(values.specializationArea).length === 0}
//                          />
//                          <PasswordRequirements formikValues={values}/>
//
//                          {authRegisterError}
//
//                          <Flex justifyContent="space-between" m="0 0 20px 0">
//                              <span/>
//                              <Link to="/password-recovery" label="Forgot password?"/>
//                          </Flex>
//                          <Button onClick={() => handleSubmit(values)}
//                                  disabled={false}>Create</Button>
//                      </>
//                  }
//              }
//
//
//              </Formik>
//              <Flex m="30px 0 0 0" justifyContent="center">
//                  <Link to="/register" label="Already have an account?"/>
//              </Flex>