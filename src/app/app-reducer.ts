import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: initialStateStateType = {
    isInitialized: false,
    status: 'idle'
}

const slice = createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {
        setIsInitializedAC(state, action: PayloadAction<{ value: boolean }>) {
            state.isInitialized = action.payload.value
        },
        setAppStatusAC (state, action: PayloadAction<{status: RequestStatusType}>) {
            state.status = action.payload.status
        }
    }
})

type initialStateStateType = {
    isInitialized: boolean,
    status: RequestStatusType
}

export type RequestStatusType = 'idle' | 'loading'
export const appReducer = slice.reducer
export const {setIsInitializedAC, setAppStatusAC} = slice.actions
