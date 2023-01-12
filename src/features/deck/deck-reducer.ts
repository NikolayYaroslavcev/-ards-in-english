import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';
import {AddDeskType, DeckPacsType, DeckType, deskApi} from './desk-api';
import {AppThunk} from '../../app/store';


type InitialStateType = DeckType & {
    min: number | null,
    max: number | null,
    sortPacks: '0updated' | '1updated',
    packName: string,
    initialize: boolean
    isMy: boolean
}

const initialState: InitialStateType = {
    initialize: false,
    cardPacks: [],
    cardPacksTotalCount: 0,
    maxCardsCount: 0,
    minCardsCount: 0,
    page: 1,
    pageCount: 1,
    min: null,
    max: null,
    sortPacks: '0updated',
    packName: '',
    isMy: false
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
            // deleteDeckAC(state, action: PayloadAction<{ deletedCardsPack: DeckPacsType }>) {
            //     state.cardPacks = state.cardPacks.filter(el => el._id !== action.payload.deletedCardsPack._id)
            // },
            updateDeckAC(state, action: PayloadAction<{ updatedCardsPack: DeckPacsType }>) {
                state.cardPacks = state.cardPacks.map(el => el._id === action.payload.updatedCardsPack._id ? {...el, ...action.payload.updatedCardsPack} : el)
            },
            addDeskAC(state, action: PayloadAction<{}>) {
                // state.cardPacks = [...action.payload]
            },
            setUpdateDeskAC(state, action: PayloadAction<{}>) {
                return {...state, ...action.payload}
            }

        }
    }
)


export const getDeckTC = (): AppThunk => async (dispatch, getState) => {
    const {sortPacks, page, pageCount, packName, max, min, isMy} = getState().deck
    const id = getState().profile._id
    const user_id = isMy ? id : ''

    try {
        const res = await deskApi.desk({sortPacks, page, pageCount, packName, max, min, user_id})
        dispatch(getDeckAC(res.data))
    } catch (e) {
        const err = e as Error | AxiosError
        console.log(err)
    } finally {
        dispatch(setUpdateDeskAC({initialize: true}))
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
        dispatch(getDeckTC())
        // dispatch(deleteDeckAC(res.data))
    } catch (e) {
        const err = e as Error | AxiosError
        console.log(err)
    } finally {
        // console.log('finally')
    }
}

export const deskDeleteTC = (id: string): AppThunk => async dispatch => {
    try {
        const res = await deskApi.deskDelete(id)
        dispatch(getDeckTC())
        //dispatch(deleteDeckAC({deletedCardsPack: res.data.deletedCardsPack}))
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
export const {getDeckAC, updateDeckAC, setUpdateDeskAC} = slice.actions






