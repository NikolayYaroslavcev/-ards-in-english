import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProfileType} from '../auth/auth-api';

const initialState: ProfileType  = {
    email: '',
    name: '',
    avatar: '',
    _id: ''
}

const slice = createSlice({
    name: 'profile',
    initialState: initialState,
    reducers: {
        setUserDataValueAC(state, action: PayloadAction<{email: string, name: string, avatar: string | null, _id: string}>) {
            return {...state, ...action.payload}
        }
    }
})

// types

// type InitialStateType = RegisterResType

export const profileReducer = slice.reducer
export const {setUserDataValueAC} = slice.actions
