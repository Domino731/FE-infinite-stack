export const HOME_PATH: string = '/';
export const REGISTER_PATH: string = '/register';

export enum APP_ROUTES {
    HOME = '/',
    REGISTER = '/register',
    LOGIN = '/login',
    START = '/start',
    DASHBOARD = '/dashboard',
    INTRODUCTION = '/introduction',
    TEMPLATE_PROJECT = '/template-project',
    DASHBOARD_CREATE_NEW_PROJECT = '/dashboard/create-new-project'
}

export enum PROJECT_ROUTES {
    ROADMAP = '/roadmap',
    BACKLOG = '/backlog',
    SPRINTS = '/sPRINTS',
    REPORTS = '/reports',
    ISSUES = '/issues',
    COMPONENTS = '/components',
    RELEASES = '/releases',
    DOCUMENTS = '/documents',
    SETTINGS = '/settings'
}

export type ProjectRoutesTypeUnion = keyof typeof PROJECT_ROUTES;
