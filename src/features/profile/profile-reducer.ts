import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProfileType, RegisterResType} from "../auth/auth-api";

const initialState: ProfileType  = {
    email: '',
    name: '',
    avatar: ''
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

// type InitialStateType = RegisterResType

export const profileReducer = slice.reducer
export const {setUserDataValueAC} = slice.actions
