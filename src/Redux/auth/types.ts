export interface AuthRegisterPayload {
    eMail: string;
    password: string;
    username: string;
}

export interface AuthLoginPayload {
    eMail: string;
    password: string;
}

export interface UserByUid {
    username: string;
    specializationArea: string;
    specialization: string;
}