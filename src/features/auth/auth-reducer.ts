import {createSlice, Dispatch, PayloadAction} from "@reduxjs/toolkit";
import {authAPI, RegisterType} from "./auth-api";
import axios, {AxiosError} from "axios";


const initialState = {
    isRegisterdIn: false
}

const slice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setIsRegisterdInAC(state, action: PayloadAction<{ value: boolean }>) {
            state.isRegisterdIn = action.payload.value
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


type ErrorResType = {
    email: string,
    error: string,
    in: string
}

export const authReducer = slice.reducer
export const {setIsRegisterdInAC} = slice.actions



