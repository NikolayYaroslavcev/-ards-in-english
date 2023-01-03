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
    getCards() {
        return instance.get<'', AxiosResponse<CardsResType>, GetTypeGo>('cards/card', {
            params: {
                // cardAnswer: string,
                //  cardQuestion: string,
                cardsPack_id: "63a5b1873b88ba2a4459ab4f", // мои
               // cardsPack_id: "63a5ad309d358132a0859cd2", // другие
                // min: number,
                // max: number,
                // cortCards: string,
                //  page: number,
                //  pageCount: string
            }
        })
    },
    addCard() {
        return instance.post<'', AxiosResponse<AddCardResType>, AddCardType>('cards/card', {
            card: {
                cardsPack_id: "63a5b1873b88ba2a4459ab4f",
                answer:'sdfsad',
                question: '124'
            }
        })
    },
    deleteCard(data: DeleteCardType) {
        return instance.delete<'', AxiosResponse<DeleteResType>, DeleteCardType>('cards/card', data)
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
export type AddCardResType = {
    newCard:{}
}

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
    params: {
        cardAnswer: string,
        cardQuestion: string,
        cardsPack_id: "63a5b1873b88ba2a4459ab4f",
        min: number,
        max: number,
        cortCards: string,
        page: number,
        pageCount: string
    }
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
