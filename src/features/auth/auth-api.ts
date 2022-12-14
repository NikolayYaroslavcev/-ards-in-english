import axios, {AxiosResponse} from 'axios'


const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
})


// изменения внесу по сценарию
// изменения внесу по сценарию


export const authAPI = {
    register(data: RegisterType) {
        return instance.post<RegisterType, AxiosResponse<ResponseType>>('auth/register', data)
    },
    me() {
        return instance.post<MeResponse>(`auth/me`);
    },
    login(data:LoginType) {
        return instance.post<LoginType, AxiosResponse<ResponseType>>(`/auth/login`,data);
    },
}
type MeResponse = {
    email: string,
    rememberMe: boolean,
    name: string,
    publicCardPacksCount: number,
    created: Date,
    updated: Date,
    avatar: null
}

export type RegisterType = {
    email: string,
    password: string
}

type ResponseType = {
    addedUser: {},
    error?: {};
}


export type LoginType = {
    email: string
    password: string
    rememberMe: boolean
}


/// types

