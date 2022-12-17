import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RegisterResType} from "../auth/auth-api";

const initialState: InitialStateType = {
    _id: '',
    email: '',
    rememberMe: false,
    isAdmin: false,
    name: '',
    verified: false,
    publicCardPacksCount: 0,
    created: '',
    updated: '',
    __v: 0,
    token: '',
    tokenDeathTime: 0,
}

const slice = createSlice({
    name: 'profile',
    initialState: initialState,
    reducers: {
        setUserDataValueAC(state, action: PayloadAction<{}>) {
            return {...state, ...action.payload}
        }
    }
})


// types

type InitialStateType = RegisterResType

export const profileReducer = slice.reducer
export const {setUserDataValueAC} = slice.actions
