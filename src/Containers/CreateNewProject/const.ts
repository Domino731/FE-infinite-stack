import {CREATE_NEW_PROJECT_SECTIONS, CreateNewProjectSection} from "./types";
import {CreateNewProjectDetails} from "./sections/Details";
import {CreateNewProjectPeople} from "./sections/People";
import {CreateNewProjectSummary} from "./sections/Summary";

export const CREATE_NEW_PROJECT_SECTIONS_DATA: Array<CreateNewProjectSection> = [
    {label: 'Details', key: CREATE_NEW_PROJECT_SECTIONS.DETAILS, component: CreateNewProjectDetails},
    // TODO later feature: new section
    // {label: 'Tech stack', key: 'techStack'},
    {label: 'Team', key: CREATE_NEW_PROJECT_SECTIONS.TEAM, component: CreateNewProjectPeople},
    {label: 'Summary', key: CREATE_NEW_PROJECT_SECTIONS.SUMMARY, component: CreateNewProjectSummary},
]
