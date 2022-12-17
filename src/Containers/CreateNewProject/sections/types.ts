import {FormikValues} from "formik";
import {UserByUid} from "../../../Redux/auth/types";

export interface CreateNewProjectDetailsProps {
    formikValues: FormikValues;
}

export interface CreateNewProjectPeopleProps {
    team: Array<UserByUid>;
    changeFormikValue: any;
}