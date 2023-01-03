import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';
import {AddDeskType, DeckPacsType, DeckType, DeleteDataType, deskApi, SearchDataType, UpdateResType} from './desk-api';
import {AppThunk} from '../../app/store';
import {CardType} from "../cards/cards-api";


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
            deleteDeckAC(state, action: PayloadAction<{ deletedCardsPack: DeckPacsType }>) {
                state.cardPacks = state.cardPacks.filter(el => el._id !== action.payload.deletedCardsPack._id)
            },
            updateDeckAC(state, action: PayloadAction<{ updatedCardsPack: DeckPacsType }>) {
                state.cardPacks = state.cardPacks.map(el => el._id === action.payload.updatedCardsPack._id ? {...el, ...action.payload.updatedCardsPack} : el)
            },
            addDeskAC(state, action: PayloadAction<{}>) {
                // state.cardPacks = [...action.payload]
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
        //  console.log('finally')
    }
}

export const deskAddTC = (): AppThunk => async dispatch => {

    const dataModel: AddDeskType = {
        cardsPack: {
            name: 'no Name',
            deckCover: '',
            private: false
        }
    }

    try {
        const res = await deskApi.deskAdd(dataModel)
        console.log(res.data)
        dispatch(deckTC())
        // dispatch(deleteDeckAC(res.data))
    } catch (e) {
        const err = e as Error | AxiosError
        console.log(err)
    } finally {
        // console.log('finally')
    }
}

export const deskDeleteTC = (newId: string): AppThunk => async dispatch => {
    const dataModel: DeleteDataType = {
        params: {
            id: newId
        }
    }

    try {
        const res = await deskApi.deskDelete(dataModel)
        console.log(res.data)
        dispatch(deleteDeckAC({deletedCardsPack: res.data.deletedCardsPack}))
        // dispatch(deleteDeckAC(res.data))
    } catch (e) {
        const err = e as Error | AxiosError
        console.log(err)
    } finally {
        //  console.log('finally')
    }
}

export const deskSearchTC = (domainModel: UpdateDomainDeskModelType): AppThunk => async (dispatch, getState) => {
    const deskState = getState().deck

    const apiModel: SearchDataType = {
        params: {
            packName: '',
            min: deskState.minCardsCount,
            max: deskState.maxCardsCount,
            sortPacks: '0updated',
            page: deskState.page,
            pageCount: deskState.pageCount,
            user_id: '',
            block: false,
            ...domainModel
        }
    }

    try {
        const res = await deskApi.deskSearch(apiModel)

        dispatch(getDeckAC(res.data))
        //  dispatch(deleteDeckAC({deletedCardsPack: res.data.deletedCardsPack}))
        // dispatch(deleteDeckAC(res.data))
    } catch (e) {
        const err = e as Error | AxiosError
        console.log(err)
    } finally {
        //  console.log('finally')
    }
}

export const deskUpdateTC = (newId: string, newName: string): AppThunk => async dispatch => {
    console.log(newId, newName)
    try {
        const res = await deskApi.deskUpdate(newId, newName)
        console.log(res.data)
        dispatch(updateDeckAC({updatedCardsPack: res.data.updatedCardsPack}))
        // dispatch(deleteDeckAC(res.data))
    } catch (e) {
        const err = e as Error | AxiosError
        console.log(err)
    } finally {
        // console.log('finally')
    }
}

export type UpdateDomainDeskModelType = {
    packName?: string,
    min?: number,
    max?: number,
    sortPacks?: string,
    page?: number,
    pageCount?: number,
    user_id?: string,
    block?: boolean
}

export const deskReducer = slice.reducer
export const {getDeckAC, updateDeckAC, deleteDeckAC} = slice.actions






