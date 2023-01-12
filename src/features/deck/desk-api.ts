import axios, {AxiosResponse} from 'axios'

export const instance = axios.create({
    // baseURL: 'https://neko-back.herokuapp.com/2.0/',
    baseURL:
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:7542/2.0/'
            : 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
})

export const deskApi = {
    desk(params: GetDeskParamsType = {}) {
        return instance.get<'', AxiosResponse<DeckType>, GetDeskParamsType>('cards/pack', {params})
    },
    deskDelete(id: string) {
        return instance.delete<AxiosResponse<DeskDeletedResType>>(`cards/pack?id=${id}`)
    },
    deskUpdate(newId: string, newName: string) {
        console.log(newId, newName)
        return instance.put<'', AxiosResponse<UpdateResType>, DeskUpdateType>('cards/pack', {
            cardsPack: {
                _id: newId,
                name: 'NEW NAME',
            }
        })
    },
    deskAdd(data: AddDeskType) {
        return instance.post<'', AxiosResponse<AddDeskResType>, AddDeskType>('cards/pack', data)
    },

}

export type GetDeskParamsType = {
    packName?: string,
    min?: number | null,
    max?: number | null,
    sortPacks?: string,
    page?: number,
    pageCount?: number,
    user_id?: string,
    block?: boolean
}
export type SearchDataType = Partial<SearchType>

export type SearchType = {
    params: {
        packName: string,
        min: number,
        max: number,
        sortPacks: string,
        page: number,
        pageCount: number,
        user_id: string,
        block: boolean
    }
}

export type DeskDeletedResType = {
    deletedCardsPack: DeckPacsType
}

export type AddDeskType = {
    cardsPack: {
        name: string,
        deckCover?: string,
        private: false
    }
}
export type AddDeskResType = {
    newCardsPack: {}
}

export type UpdateResType = {
    updatedCardsPack: DeckPacsType
}

type DeskUpdateType = {
    cardsPack: {
        _id: string,
        name: string,
    }
}

export type DeckType = {
    cardPacks: DeckPacsType[]
    cardPacksTotalCount: number
    // количество колод
    maxCardsCount: number
    minCardsCount: number
    page: number // выбранная страница
    pageCount: number// количество элементов на странице
}

export type DeckPacsType = {
    cardsCount: number
    created: string
    grade: number
    more_id: string
    name: string
    path: string
    private: boolean
    rating: number
    shots: number
    type: string
    updated: string
    user_id: string
    user_name: string
    __v: number
    _id: string
}

