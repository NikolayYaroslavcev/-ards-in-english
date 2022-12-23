import {createSlice, Dispatch, PayloadAction} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';
import {deckAPI} from './deck-api';


const initialState = {
    deck: {}
}


const slice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        getDeckAC(state, action: PayloadAction<{}>) {
            state.deck = action.payload
        }
    }
})


export const deckTC = () => async (dispatch: Dispatch) => {
    try {
        const res = await deckAPI.desk()
        dispatch(getDeckAC(res.data))
        console.log(res.data)
    } catch (e) {
        const err = e as Error | AxiosError
        console.log(err)
    } finally {
        console.log('finally')
    }
}


export const deckReducer = slice.reducer
export const {getDeckAC} = slice.actions






