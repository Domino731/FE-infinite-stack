import {createAction, createReducer} from '@reduxjs/toolkit'

export interface AuthState {
  loginLoader: boolean;
  registerLoader: boolean;
  passwordRecoveryLoader: boolean;
  loginError: string | null;
  registerError: string | null;
  passwordRecoveryError: string | null;
}

const increment = createAction('counter/increment')
const decrement = createAction('counter/decrement')
const incrementByAmount = createAction<number>('counter/incrementByAmount')

const initialState: AuthState = {
  loginLoader: false,
  registerLoader: false,
  passwordRecoveryLoader: false,
  loginError: null,
  registerError: null,
  passwordRecoveryError: null,
}

export const AUTH_REDUCER_NAME: string = 'auth';

export const authReducer = createReducer(initialState, (builder) => {
  builder
      .addCase(increment, (state, action) => {

      })
      .addCase(decrement, (state, action) => {

      })
      .addCase(incrementByAmount, (state, action) => {

      })
})