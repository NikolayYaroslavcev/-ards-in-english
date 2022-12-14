import {combineReducers, configureStore} from '@reduxjs/toolkit'

import thunkMiddleware from 'redux-thunk'
import {authReducer} from "../features/auth/auth-reducer";


const rootReducer = combineReducers({
    auth: authReducer,

})
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;




