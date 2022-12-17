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
            //  state.userData = {...action.payload}
        }
    }
})


// types

type InitialStateType = RegisterResType

// export type UserDataType = {
//     created: string,
//     email: string,
//     isAdmin: boolean
//     name: string,
//     publicCardPacksCount: number,
//     rememberMe: boolean,
//     token: string,
//     tokenDeathTime: number,
//     updated: string,
//     verified: boolean,
//     __v: number,
//     _id: string,
// }
export const profileReducer = slice.reducer
export const {setUserDataValueAC} = slice.actions
