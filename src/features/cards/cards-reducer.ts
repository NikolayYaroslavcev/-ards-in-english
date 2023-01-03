import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';
import {AppThunk} from "../../app/store";
import {cardsAPI, CardsResType, CardType, GetTypeGo} from "./cards-api";

type InitialStateType = CardsResType

const initialState: InitialStateType = {
    cards: [],
    cardsTotalCount: 0,
    maxGrade: 0,
    minGrade: 0,
    page: 0,
    pageCount: 0,
    packUserId: '',
    packName: ''
}


const slice = createSlice({
    name: 'cards',
    initialState: initialState,
    reducers: {
        getCardsAC(state, action: PayloadAction<{}>) {
            return {...state, ...action.payload}
            //state = {...action.payload}
        },
        deleteCardsAC(state, action: PayloadAction<{ deletedCard: CardType }>) {
            // return {...state, cards: state.cards.filter(el => el._id !== action.payload.deletedCard._id), cardsTotalCount: state.cardsTotalCount - 1}
        },
        updateCardAC(state, action: PayloadAction<{ updatedCard: CardType }>) {
            state.cards = state.cards.map(el => el._id === action.payload.updatedCard._id ? {...el, ...action.payload.updatedCard} : el)
        }
    }
})


export const getCardsTC = (): AppThunk => async dispatch => {

    // const dataModel = {
    //     params: {
    //         cardAnswer: '',
    //         cardQuestion: '',
    //         cardsPack_id: "63a5b1873b88ba2a4459ab4f",
    //         min: '',
    //         max: '',
    //         cortCards: '',
    //         page: '',
    //         pageCount: '',
    //         ...getDomainModel
    //     }
    // }


    try {
        const res = await cardsAPI.getCards()
        dispatch(getCardsAC(res.data))
    } catch (e) {
        const err = e as Error | AxiosError
        console.log(err)
    } finally {
        console.log('finally')
    }
}

export type UpdateDomainModelType = {
    cardAnswer?: string,
    cardQuestion?: string,
    cardsPack_id?: string,
    min?: number,
    max?: number,
    cortCards?: string,
    page?: number,
    pageCount?: string
}

export const addCardTC = (): AppThunk => async dispatch => {
    try {
        const res = await cardsAPI.addCard()
        dispatch(getCardsTC())
        //  dispatch(getCardsAC(res.data))
    } catch (e) {
        const err = e as Error | AxiosError
        console.log(err)
    } finally {
        console.log('finally')
    }
}

export const searchCardTC = (): AppThunk => async dispatch => {
    try {
        const res = await cardsAPI.addCard()
        dispatch(getCardsTC())
        //  dispatch(getCardsAC(res.data))
    } catch (e) {
        const err = e as Error | AxiosError
        console.log(err)
    } finally {
        console.log('finally')
    }
}

export const deleteCardTC = (cardId: string): AppThunk => async dispatch => {
    const dataModel = {
        params: {
            id: cardId,
        }
    }
    // console.log(dataModel)
    try {
        const res = await cardsAPI.deleteCard(dataModel)
        //dispatch(deleteCardsAC(res.data))
        dispatch(getCardsTC())
    } catch (e) {
        const err = e as Error | AxiosError
        console.log(err)
    }
}

export const updateCardTC = (cardId: string, newValue: string): AppThunk => async dispatch => {
    // const dataModel = {
    //     card: {
    //         _id: cardId,
    //         question: "NEW QUESTION"
    //     }
    // }
    // console.log(dataModel)
    try {
        const res = await cardsAPI.updateCard(cardId, newValue)
        //console.log(res.data)
        //console.log(dataModel.params.id)
        dispatch(updateCardAC({updatedCard: res.data.updatedCard}))

    } catch (e) {
        const err = e as Error | AxiosError
        console.log(err)
    }
}


export const cardsReducer = slice.reducer
export const {getCardsAC, deleteCardsAC, updateCardAC} = slice.actions






