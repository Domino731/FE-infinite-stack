import {CreateNewProjectSection} from "./types";
import {CreateNewProjectDetails} from "./sections/Details";
import {CreateNewProjectPeople} from "./sections/People";
import {CreateNewProjectSummary} from "./sections/Summary";

export const CREATE_NEW_PROJECT_SECTIONS: Array<CreateNewProjectSection> = [
    {label: 'Details', key: 'details', component: CreateNewProjectDetails},
    // {label: 'Tech stack', key: 'techStack'},
    {label: 'People', key: 'people', component: CreateNewProjectPeople},
    {label: 'Summary', key: 'summary', component: CreateNewProjectSummary},
]