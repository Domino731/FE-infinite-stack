import {configureStore} from '@reduxjs/toolkit'
import {AUTH_REDUCER_NAME, authReducer} from "./auth/reducer";

export const store = configureStore({
    reducer: {
        [AUTH_REDUCER_NAME]: authReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;