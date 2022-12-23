import {createSlice, Dispatch, PayloadAction} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';
import {DeckType, deskApi} from './desk-api';


const initialState: InitialStateType = {
    cardPacks: [],
    minCardsCount:0,
    pageCount: 0,
    cardPacksTotalCount: 0,
    page: 0,
    maxCardsCount: 0
}

type InitialStateType = DeckType
const slice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        getDeckAC(state, action: PayloadAction<{}>) {
            return {...state, ...action.payload}
            //state = {...action.payload}
        }
    }
})


export const deckTC = () => async (dispatch: Dispatch) => {
    try {
        const res = await deskApi.desk()
        dispatch(getDeckAC(res.data))
        //console.log(res.data)
    } catch (e) {
        const err = e as Error | AxiosError
        console.log(err)
    } finally {
        console.log('finally')
    }
}


export const deskReducer = slice.reducer
export const {getDeckAC} = slice.actions






