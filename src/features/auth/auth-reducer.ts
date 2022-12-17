import {createSlice, Dispatch, PayloadAction} from "@reduxjs/toolkit";
import {authAPI, ForgotType, LoginType, NewPasswordType, RegisterType} from './auth-api';
import axios, {AxiosError} from "axios";
import {setIsInitializedAC} from "../../app/app-reducer";
import {setUserDataValueAC} from "../profile/profile-reducer";


const initialState = {
    isRegisterdIn: false,
    isLogged: false,
    isForgot: false
}


const slice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setIsRegisterdInAC(state, action: PayloadAction<{ value: boolean }>) {
            state.isRegisterdIn = action.payload.value
        },
        setIsLoggedInAC(state, action: PayloadAction<{ value: boolean }>) {
            state.isLogged = action.payload.value
        },
        setForgotAC(state, action: PayloadAction<{ value: boolean }>) {
            state.isForgot = action.payload.value
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
            const error = err.response?.data ? (err.response.data as ErrorResType).email : err.message
            if (error === data.email) {
                dispatch(setIsRegisterdInAC({value: true}))
                alert("Вы зарестрированы. Введите логин и пароль")
            } else {
                alert(error)
            }
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
        dispatch(setUserDataValueAC(res.data))
        //dispatch(setIsInitializedAC({value: true}))
    } catch (e) {
        const err = e as Error | AxiosError<{ error: string }>
        if (axios.isAxiosError(err)) {
            const error = err.response?.data ? err.response.data.error : err.message
            console.log(error)
        } else {
            // dispatch(setAppErrorAC(`Native error ${err.message}`))
        }
    } finally {
        console.log('finally LOGIN');
    }
}
export const meTC = () => async (dispatch: Dispatch) => {
    try {
        const res = await authAPI.me()
        dispatch(setIsLoggedInAC({value: true}))
        dispatch(setUserDataValueAC(res.data))
        //console.log(res)

    } catch (e) {
        const err = e as Error | AxiosError<{ error: string }>
        if (axios.isAxiosError(err)) {
            const error = err.response?.data ? err.response.data.error : err.message
            console.log(error)
        } else {
            // dispatch(setAppErrorAC(`Native error ${err.message}`))
        }
    } finally {
        dispatch(setIsInitializedAC({value: true}))
    }
}
export const logOutTC = () => async (dispatch: Dispatch) => {
    try {
        const res = await authAPI.logOut()
        dispatch(setIsLoggedInAC({value: false}))
        //console.log(res)

    } catch (e) {
        const err = e as Error | AxiosError<{ error: string }>
        if (axios.isAxiosError(err)) {
            const error = err.response?.data ? err.response.data.error : err.message
            console.log(error)
        } else {
            // dispatch(setAppErrorAC(`Native error ${err.message}`))
        }
    } finally {
        dispatch(setIsInitializedAC({value: true}))
    }
}
export const forgotTC = (data: ForgotType) => async (dispatch: Dispatch) => {
    try {
        const res = await authAPI.forgot(data)
        dispatch(setForgotAC({value: true}))
        console.log(res)

    } catch (e) {
        const err = e as Error | AxiosError<{ error: string }>
        if (axios.isAxiosError(err)) {
            const error = err.response?.data ? err.response.data.error : err.message
            console.log(error)
        } else {
            // dispatch(setAppErrorAC(`Native error ${err.message}`))
        }
    } finally {
        dispatch(setIsInitializedAC({value: true}))
    }
}

export const newPasswordTC = (data: NewPasswordType) => async (dispatch: Dispatch) => {
    dispatch(setIsInitializedAC({value: false}))
    try {
        const res = await authAPI.newPassword(data)
        dispatch(setForgotAC({value: true}))
        console.log(res)

    } catch (e) {
        const err = e as Error | AxiosError<{ error: string }>
        if (axios.isAxiosError(err)) {
            const error = err.response?.data ? err.response.data.error : err.message
            console.log(error)
        } else {
            // dispatch(setAppErrorAC(`Native error ${err.message}`))
        }
    } finally {
        dispatch(setIsInitializedAC({value: true}))
    }
}


type ErrorResType = {
    email: string,
    error: string,
    in: string
}

export const authReducer = slice.reducer
export const {setIsRegisterdInAC, setIsLoggedInAC, setForgotAC} = slice.actions






