import {createSlice, Dispatch, PayloadAction} from '@reduxjs/toolkit';
import {authAPI, LoginType} from './auth-api';
import axios, {AxiosError} from 'axios';


const initialState = {
    isLogged: false

}


const slice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setIsLoggedInAC(state, action: PayloadAction<{ value: boolean }>) {
            state.isLogged = action.payload.value
        }
    }
})


export const authReducer = slice.reducer
export const {setIsLoggedInAC} = slice.actions


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
