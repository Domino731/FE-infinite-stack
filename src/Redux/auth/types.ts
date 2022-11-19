export interface AuthRegisterPayload {
    eMail: string;
    password: string;
    username: string;
}

export interface AuthLoginPayload {
    eMail: string;
    password: string;
}
