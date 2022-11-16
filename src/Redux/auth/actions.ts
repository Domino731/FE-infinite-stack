import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import {AUTH_CONSTANTS} from "./const";
import {AuthRegisterPayload} from "./types";
import {api} from "../../axios";

/** register new user */
export const authRegister = createAsyncThunk(
    AUTH_CONSTANTS.REGISTER,
    async (payload: AuthRegisterPayload, {dispatch}) => {
        try {
            const response = await api.post('/users', payload);
            return response;
        } catch (response: any) {
            return response?.data?.message;
        }
    }
)

export const authRegisterSuccess = createAction(AUTH_CONSTANTS.REGISTER_SUCCESS);
export const authRegisterFailed = createAction<string>(AUTH_CONSTANTS.REGISTER_FAILED);