import {createSlice, Dispatch, PayloadAction} from "@reduxjs/toolkit";
import {authAPI, LoginType, RegisterType} from "./auth-api";
import axios, {AxiosError} from "axios";


const initialState = {
    isRegisterdIn: false,
    isLogged: false,
    age: 15,
    intens: false,
    name: "Васек"
}

//ЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙ
//ЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙ

const slice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setIsRegisterdInAC(state, action: PayloadAction<{ value: boolean }>) {
            state.isRegisterdIn = action.payload.value
        },
        setIsLoggedInAC(state, action: PayloadAction<{ value: boolean }>) {
            state.isLogged = action.payload.value
        }
    }
})


export const registerTC = (data: RegisterType) => async (dispatch: Dispatch) => {
    try {
        const res = await authAPI.register(data)
        dispatch(setIsRegisterdInAC({value: true}))
        console.log(res.data)
    } catch (e) {
        const err = e as Error | AxiosError
        if (axios.isAxiosError(err)) {
            const error = err.response?.data ? (err.response.data as ErrorResType).error : err.message
            alert(error)
            //console.log(error)
            // dispatch(setAppErrorAC(error))
        } else {
            console.log(e)
            //  dispatch(setAppErrorAC(`Native error ${err.message}`))
        }
    }
}
export const loginTC = (data: LoginType) => async (dispatch: Dispatch) => {
    try {
        const res = await authAPI.login(data)
        dispatch(setIsLoggedInAC({value: true}))
    } catch (e) {
        const err = e as Error | AxiosError<{ error: string }>
        if (axios.isAxiosError(err)) {
            const error = err.response?.data ? err.response.data.error : err.message
        } else {
            // dispatch(setAppErrorAC(`Native error ${err.message}`))
        }
    } finally {
        console.log('finally');
    }
}


type ErrorResType = {
    email: string,
    error: string,
    in: string
}

export const authReducer = slice.reducer
export const {setIsRegisterdInAC} = slice.actions
export const {setIsLoggedInAC} = slice.actions





