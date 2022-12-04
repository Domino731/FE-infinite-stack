import Box from "../../Components/Box";
import {Typograhpy2} from "../../Components/Typography";
import Divider from "../../Components/Divider";
import {Button} from "../../Components/Button";
import Flex from "../../Components/Flex";
import {Status} from "./components/Status";
import {Formik} from "formik";
import {useMemo, useState} from "react";
import {CREATE_NEW_PROJECT_SECTIONS} from "./const";

const CreateNewProject = () => {
    // default is details
    const [step, setStep] = useState(CREATE_NEW_PROJECT_SECTIONS[0].key)

    const StepComponent = useMemo(() => CREATE_NEW_PROJECT_SECTIONS.find(({key}) => key === step)?.component, [step])

    return <Box display="flex" justifyContent="center" alignItems="center" w="100%" h="100vh" bgGradient="blue">
        <Box p="26" bR="xl" w="700px" h="800px" bgColor="white" position="relative">
            <Status step="details"/>
            <Typograhpy2 type="HEADLINE_H4">Create new project</Typograhpy2>
            <Divider/>
            <Formik initialValues={{}} onSubmit={() => console.log(1)}>
                <form>
                    <Box h="554px">
                        {/*@ts-ignore*/}
                        {<StepComponent/>}
                    </Box>
                    <Divider/>
                    <Flex justifyContent="flex-end">
                        <Button widthAuto>Next step</Button>
                    </Flex>
                </form>
            </Formik>

        </Box>
    </Box>
}

export default CreateNewProject;