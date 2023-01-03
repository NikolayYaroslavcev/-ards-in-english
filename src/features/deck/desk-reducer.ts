import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';
import {DeckPacsType, DeckType, deskApi, UpdateResType} from './desk-api';
import {AppThunk} from '../../app/store';


type InitialStateType = DeckType


const initialState: InitialStateType = {
    cardPacks: [],
    minCardsCount: 0,
    pageCount: 1,
    cardPacksTotalCount: 0,
    page: 1,
    maxCardsCount: 0
}


const slice = createSlice({
        name: 'desk',
        initialState: initialState,
        reducers: {
            getDeckAC(state, action: PayloadAction<{}>) {
                return {
                    ...state, ...action.payload
                }
            },
            // deleteDeckAC(state, action: PayloadAction<{}>) {
            //     console.log(action.payload)
            //    debugger
            //     return {
            //         ...state.cardPacks.filter((el) => el._id !== action.payload)
            //     }
            // },
            updateDeckAC(state, action: PayloadAction<{ deletedCardsType: DeckPacsType }>) {
                state.cardPacks.map((el) => (el._id === action.payload.deletedCardsType._id) ? {...el, ...action.payload.deletedCardsType} : el)
            },
        }
    }
)


export const deckTC = (): AppThunk => async dispatch => {
    try {
        const res = await deskApi.desk()
        dispatch(getDeckAC(res.data))
    } catch (e) {
        const err = e as Error | AxiosError
        console.log(err)
    } finally {
        console.log('finally')
    }
}


export const deskDeleteTC = (newId: string): AppThunk => async dispatch => {
    console.log(newId)
    try {
        const res = await deskApi.deskDelete(newId)
        console.log(res.data)
        dispatch(deckTC())
        // dispatch(deleteDeckAC(res.data))
    } catch (e) {
        const err = e as Error | AxiosError
        console.log(err)
    } finally {
        console.log('finally')
    }
}

export const deskUpdateTC = (newId: string, newName: string): AppThunk => async dispatch => {
    console.log(newId, newName)
    try {
        const res = await deskApi.deskUpdate(newId, newName)
        console.log(res.data)
        dispatch(updateDeckAC(res.data.deletedCardsType))
        // dispatch(deleteDeckAC(res.data))
    } catch (e) {
        const err = e as Error | AxiosError
        console.log(err)
    } finally {
        console.log('finally')
    }
}


export const deskReducer = slice.reducer
export const {getDeckAC, updateDeckAC} = slice.actions






