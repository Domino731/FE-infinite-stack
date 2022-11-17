import {RootState} from "../index";
import {AUTH_REDUCER_NAME, AuthState} from "./reducer";
import {createSelector} from "@reduxjs/toolkit";

const authState = (state: RootState): AuthState => state[AUTH_REDUCER_NAME];

// loaders
export const authLoginLoaderSelector = createSelector(authState, (state: AuthState) => state.loginLoader);
export const authRegisterLoaderSelector = createSelector(authState, (state: AuthState) => state.registerLoader);
export const authPasswordRecoveryLoaderSelector = createSelector(authState, (state: AuthState) => state.passwordRecoveryError);

// errors
export const authLoginErrorSelector = createSelector(authState, (state: AuthState) => state.loginError);
export const authRegisterErrorSelector = createSelector(authState, (state: AuthState) => state.registerError);
export const authPasswordRecoveryErrorSelector = createSelector(authState, (state: AuthState) => state.passwordRecoveryError);

export const authIsUserLoggedSelector = createSelector(authState, (state) => Boolean(state.id));