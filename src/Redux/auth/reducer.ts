import {createReducer} from '@reduxjs/toolkit'
import {authLogin, authRegister} from "./actions";

export interface AuthState {
    loginLoader: boolean;
    registerLoader: boolean;
    passwordRecoveryLoader: boolean;
    loginError: string | null;
    registerError: string | null;
    passwordRecoveryError: string | null;

    username: string | null;
    id: string | null;
}

const initialState: AuthState = {
    loginLoader: false,
    registerLoader: false,
    passwordRecoveryLoader: false,
    loginError: null,
    registerError: null,
    passwordRecoveryError: null,

    username: null,
    id: null
}

export const AUTH_REDUCER_NAME: string = 'auth';

export const authReducer = createReducer(initialState, (builder) => {
    builder
        // register
        .addCase(authRegister.pending, (state) => {
            state.registerLoader = true;
            state.registerError = initialState.registerError;
        })
        .addCase(authRegister.fulfilled, (state, action) => {
            const {payload: {data}} = action;
            state.username = data.username;
            state.id = data._id;
            state.registerError = initialState.registerError;
            state.registerLoader = initialState.registerLoader;
        })
        .addCase(authRegister.rejected, (state, action) => {
            state.registerError = action.payload as string;
        })

        // login
        .addCase(authLogin.pending, (state) => {
            state.loginLoader = true;
            state.loginError = initialState.loginError;
        })
        .addCase(authLogin.fulfilled, (state, action) => {
            const {payload: {data}} = action;
            state.username = data.username;
            state.id = data._id;
            state.loginError = initialState.loginError;
            state.loginLoader = initialState.loginLoader;
        })
        .addCase(authLogin.rejected, (state, action) => {
            console.log(action.payload);
            state.loginError = action.payload as string;
            state.loginLoader = initialState.loginLoader;
        })
});