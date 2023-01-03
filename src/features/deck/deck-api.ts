import axios, {AxiosResponse} from 'axios'

export const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    // baseURL:
    //     process.env.NODE_ENV === 'development'
    //         ? 'http://localhost:7542/2.0/'
    //         : 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
})

export const deckApi = {
    desk() {
        return instance.get<'', AxiosResponse<DeckType>, ''>('cards/pack', {
                params: {
                    page: 1,
                    pageCount: 10
                }
            }
        )
    },
}


//types

export type DeckType = {
    cardPacks: CardPacsType[]
    cardPacksTotalCount: number
    // количество колод
    maxCardsCount: number
    minCardsCount: number
    page: number // выбранная страница
    pageCount: number// количество элементов на странице
}

export type CardPacsType = {
    _id: string
    user_id: string
    name: string
    cardsCount: number
    created: string
    updated: string

}
