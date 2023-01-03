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
    desk() {
        return instance.get<'', AxiosResponse<DeckType>, ''>('cards/pack', {
                params: {
                    page: 1,
                    pageCount: 10,
                   // user_id: '6399b54cfc64ea00041387fb'
                }
            }
        )

    }, deskDelete(newId: string) {
        console.log(newId)
        return instance.delete<'', AxiosResponse<DeckType>, ''>('cards/pack', {
            params: {
                id: newId,
                // id: '63aaaf8d8d150d02d4f69aba'
            }
        })
    }, deskUpdate(newId: string, newName: string) {
        console.log(newId, newName)
        return instance.put<'', AxiosResponse<UpdateResType>, DeskUpdateType>('cards/pack', {
            cardsPack: {
                _id: newId,
                name: 'NEW NAME',
            }
        })
    }
}

export type UpdateResType =  {
    deletedCardsType: DeckPacsType
}

type DeskUpdateType = {
    cardsPack: {
        _id: string,
        name: string,
    }
}
// axios.get('baseurl/users',  {
//     params: {
//         page: 1,
//         pageCount:10
//     }
// )

// register(data: RegisterType) {
//     return instance.post<'', AxiosResponse<ResponseType>, RegisterType>('auth/register', data)
// },
// me() {
//     return instance.post<RegisterResType>(`auth/me`);
// },
// logOut() {
//     return instance.delete<MeResponse>(`auth/me`);
// },
// login(data: LoginType) {
//     return instance.post<'', AxiosResponse<LoginResType>, LoginType>(`/auth/login`, data);
// },
// forgot(data: ForgotType) {
//     return instance.post<'', AxiosResponse<ResponseType>, ForgotType>(`/auth/forgot`, data)
// },
// newPassword(data: NewPasswordType) {
//     return instance.post<'', AxiosResponse<ResponseNewPasswordType>, NewPasswordType>(`/auth/set-new-password`, data)
// },
// newName(data: NewNaneType) {
//     return instance.put<'', AxiosResponse<ResponseNewNaneType>, NewNaneType>(`/auth/me`, data)
// }


//types


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

export type DeckPropsType = Partial<DeckType>
