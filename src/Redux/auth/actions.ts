import {createAsyncThunk} from "@reduxjs/toolkit";
import {AUTH_CONSTANTS} from "./const";
import {AuthLoginPayload, AuthRegisterPayload} from "./types";
import {api} from "../../axios";

//// REDUX thunks

/** REDUX Thunk - register new user using api */
export const authRegister = createAsyncThunk(
    AUTH_CONSTANTS.REGISTER,
    async (payload: AuthRegisterPayload, {rejectWithValue}) => {
        try {
            const response = await api.post('/users', payload);
            return response;
        } catch (response: any) {
            return rejectWithValue(response?.response?.data?.message);
        }
    }
);

/** REDUX Thunk - log the user using api */
export const authLogin = createAsyncThunk(
    AUTH_CONSTANTS.LOGIN,
    async (payload: AuthLoginPayload, {rejectWithValue}) => {
        try {
            const response = await api.post('/users/login', payload);
            return response;
        } catch (response: any) {
            return rejectWithValue(response?.response?.data?.message);
        }
    }
);
