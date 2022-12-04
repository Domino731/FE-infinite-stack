import {ReactNode} from "react";

export interface CreateNewProjectSection {
    label: string;
    key: string;
    component: () => JSX.Element;
}

export interface StatusProps {
    step: string;
}