import {createReducer} from '@reduxjs/toolkit'
import {authRegister} from "./actions";

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
});