import {combineReducers, configureStore} from '@reduxjs/toolkit'

import thunkMiddleware from 'redux-thunk'
import {authReducer} from "../features/auth/auth-reducer";
import {appReducer} from "./app-reducer";
import {profileReducer} from "../features/profile/profile-reducer";


const rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer,
    profile: profileReducer
})
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware),
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;




