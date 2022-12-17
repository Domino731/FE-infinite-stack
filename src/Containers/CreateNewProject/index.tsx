import Box from "../../Components/Box";
import {Typograhpy2} from "../../Components/Typography";
import Divider from "../../Components/Divider";
import {Button} from "../../Components/Button";
import Flex from "../../Components/Flex";
import {Status} from "./components/Status";
import {Formik, FormikValues} from "formik";
import {FormEvent, useCallback, useMemo, useState} from "react";
import {CREATE_NEW_PROJECT_SECTIONS_DATA} from "./const";
import {DetailsInitialValues, DetailsValidationSchema} from "./formik";
import {CREATE_NEW_PROJECT_SECTIONS, CreateNewProjectSectionsUnion} from "./types";

const CreateNewProject = () => {
    // default is details
    const [step, setStep] = useState<CreateNewProjectSectionsUnion>(CREATE_NEW_PROJECT_SECTIONS_DATA[1].key)
    // holding all data about project - details, team
    const [data, setData] = useState<Record<CreateNewProjectSectionsUnion, Record<string, any> | null>>({
            [CREATE_NEW_PROJECT_SECTIONS.DETAILS]: null,
            [CREATE_NEW_PROJECT_SECTIONS.TEAM]: null,
            [CREATE_NEW_PROJECT_SECTIONS.SUMMARY]: null,
        }
    );

    const StepComponent = useMemo(() => CREATE_NEW_PROJECT_SECTIONS_DATA.find(({key}) => key === step)?.component, [step])

    // data about what steps are completed for new project
    const completedSteps = useMemo((): Array<CreateNewProjectSectionsUnion> => {
        return Object.entries(data).filter(([_, value]) => Boolean(value)).map(([key]) => key as CreateNewProjectSectionsUnion);
    }, [data])

    const handleSubmit = useCallback((formikValues: FormikValues) => {
        const stepIndex: number = CREATE_NEW_PROJECT_SECTIONS_DATA.findIndex(({key}) => key === step);
        const nextStep = CREATE_NEW_PROJECT_SECTIONS_DATA[stepIndex + 1].key;
        setData(prevState => ({...prevState, [step]: formikValues}));
        setStep(nextStep)
    }, [step])

    return <Box display="flex" justifyContent="center" alignItems="center" w="100%" h="100vh" bgGradient="blue">
        <Box p="26" bR="xl" w="700px" h="800px" bgColor="white" position="relative">
            <Status step={step} completedSteps={completedSteps}/>
            <Typograhpy2 type="HEADLINE_H4">Create new project</Typograhpy2>
            <Divider/>
            <Formik
                initialValues={DetailsInitialValues}
                validationSchema={DetailsValidationSchema}
                onSubmit={handleSubmit}
            >
                {(formikProps) => <form onSubmit={(event: FormEvent<HTMLFormElement>) => {
                    event.preventDefault();
                    formikProps.handleSubmit(event);
                }
                }>
                    <>
                        <Box h="554px">
                            {/*@ts-ignore*/}
                            {<StepComponent/>}
                        </Box>
                        <Divider/>
                        <Flex justifyContent="flex-end">
                            <Button widthAuto type="submit" disabled={!formikProps.isValid}>Next step</Button>
                        </Flex></>
                </form>}
            </Formik>

        </Box>
    </Box>
}

export default CreateNewProject;