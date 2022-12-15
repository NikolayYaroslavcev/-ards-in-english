import axios, {AxiosResponse} from 'axios'
import {logOutTC} from "./auth-reducer";


const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
})


export const authAPI = {
    register(data: RegisterType) {
        return instance.post<RegisterType, AxiosResponse<ResponseType>>('auth/register', data)
    },
    me() {
        return instance.post<MeResponse>(`auth/me`);
    },
    logOut() {
        return instance.delete<MeResponse>(`auth/me`);
    },
    login(data:LoginType) {
        return instance.post<LoginType, AxiosResponse<ResponseType>>(`/auth/login`,data);
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




