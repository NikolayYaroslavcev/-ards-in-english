import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    isInitialized: false
}


const slice = createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {
        setIsInitializedAC(state, action: PayloadAction<{ value: boolean }>) {
            state.isInitialized = action.payload.value
        }
    }
})

export const appReducer = slice.reducer
export const {setIsInitializedAC} = slice.actions
