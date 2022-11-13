import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import {AUTH_CONSTANTS} from "./const";
import {AuthRegisterPayload} from "./types";
import {api} from "../../axios";

export const authRegister = createAsyncThunk(
    AUTH_CONSTANTS.REGISTER,
    async (payload: AuthRegisterPayload, {dispatch}) => {
        try {
            console.log(2);
            const response = await api.post('/users', payload);
            dispatch(authRegisterSuccess);
        } catch (err) {
            dispatch(authRegisterFailed);
        }
    }
)

export const authRegisterSuccess = createAction(AUTH_CONSTANTS.REGISTER_SUCCESS);
export const authRegisterFailed = createAction(AUTH_CONSTANTS.REGISTER_FAILED);