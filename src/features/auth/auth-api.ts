import axios, {AxiosResponse} from 'axios'


const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
})


export const authAPI = {
    register(data: RegisterType) {
        return instance.post<RegisterType, AxiosResponse<ResponseType>>('auth/register', data)
    },
    me() {
        return instance.post<AxiosResponse<RegisterResType>>(`auth/me`);
    },
    logOut() {
        return instance.delete<AxiosResponse<MeResponse>>(`auth/me`);
    },
    login(data:LoginType) {
        return instance.post<LoginType, AxiosResponse<LoginResType>>(`/auth/login`,data);
    },
}

/// types
type MeResponse = {
    email: string,
    rememberMe: boolean,
    name: string,
    publicCardPacksCount: number,
    created: Date,
    updated: Date,
    avatar: null
}
export type LoginResType = {
    data: RegisterResType
}

export type RegisterType = {
    email: string,
    password: string
}

type ResponseType = {
    addedUser: RegisterResType,
    error?: {};
}
export type RegisterResType = {
    created: string,
    email: string,
    isAdmin: boolean
    name: string,
    publicCardPacksCount: number,
    rememberMe: boolean,
    token: string,
    tokenDeathTime: number,
    updated: string,
    verified: boolean,
    __v: number,
    _id: string,
}

export type LoginType = {
    email: string
    password: string
    rememberMe: boolean
}




