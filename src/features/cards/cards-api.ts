import axios from "axios";
import {AxiosResponse} from "axios/index";

export const instance = axios.create({
    // baseURL: 'https://neko-back.herokuapp.com/2.0/',
    baseURL:
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:7542/2.0/'
            : 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
})

export const cardsAPI = {
    getCards(params: GetTypeGo) {
        return instance.get<'', AxiosResponse<CardsResType>, GetTypeGo>('cards/card', {params})
    },
    addCard(data: AddCardType) {
        return instance.post<'', AxiosResponse<AddCardResType>, AddCardType>('cards/card', data)
    },
    deleteCard(id:string) {
        return instance.delete<AxiosResponse<DeleteResType>>(`cards/card?id=${id}`)
    },
    // updateCard(data: UpdateCardType) {
    //     return instance.put<'', AxiosResponse<DeleteResType>, UpdateCardType>('cards/card', data)
    // },
    updateCard(cardId: string, newQuestion: string) {
        return instance.put<'', AxiosResponse<UpdateResType>, UpdateCardType>('cards/card', {
            card: {
                _id: cardId,
                question: "NEW QUESTION",
                // pageCount: 10
            }
        })
    }
}

// card: {
//     cardsPack_id: "63c2b7a9a6492326e49fe868",
//     answer: 'sdfsad',
//     question: '124'
// }
export type AddCardResType = {
    newCard: {}
}
// export type AddCardType = {
//     cardsPack_id: string,
//     answer?: string,
//     question?: string,
//     grade?: number,
//     shots?: number,
//     answerImg?: string,
//     questionImg?: string,
//     questionVideo?: string,
//     answerVideo?: string
// }

export type AddCardType = {
    card: {
        cardsPack_id: string,
        answer?: string,
        question?: string,
        grade?: number,
        shots?: number,
        answerImg?: string,
        questionImg?: string,
        questionVideo?: string,
        answerVideo?: string
    }
}
export type UpdateResType = {
    updatedCard: CardType
}

export type UpdateCardType = {
    card: {
        _id: string,
        question: string
        // pageCount: 10
    }
}
export type GetTypeGo = Partial<GetType>
export type GetType = {
    cardAnswer: string,
    cardQuestion: string,
    cardsPack_id: string,
    min: number,
    max: number,
    cortCards: string,
    page: number,
    pageCount: number
}

export type DeleteResType = {
    deletedCard: CardType
}

export type DeleteCardType = {
    params: {
        id: string,
        // pageCount: 10
    }
}
export type CardType = {
    _id: string,
    user_id: string,
    cardsPack_id: string,
    answer: string,
    question: string,
    grade: number,
    shots: number,
    created: string,
    updated: string,

}

export type CardsResType = {
    cards: CardType[],
    cardsTotalCount: number,
    minGrade: number,
    maxGrade: number,
    page: number,
    pageCount: number,
    packUserId: string,
    packName: string,
}
