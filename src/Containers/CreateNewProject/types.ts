import {ReactNode} from "react";

export interface CreateNewProjectSection {
    label: string;
    key: CreateNewProjectSectionsUnion;
    component: () => JSX.Element;
}

export interface StatusProps {
    step: CreateNewProjectSectionsUnion;
    completedSteps: Array<CreateNewProjectSectionsUnion>;
}

export enum CREATE_NEW_PROJECT_SECTIONS {
    DETAILS = 'DETAILS',
    TEAM = 'TEAM',
    SUMMARY = 'SUMMARY'
}

export type CreateNewProjectSectionsUnion = keyof typeof CREATE_NEW_PROJECT_SECTIONS;