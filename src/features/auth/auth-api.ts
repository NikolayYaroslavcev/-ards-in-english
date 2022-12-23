import axios, {AxiosResponse} from 'axios'

export const instance = axios.create({
    // baseURL: 'https://neko-back.herokuapp.com/2.0/',
    baseURL:
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:7542/2.0/'
            : 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
})

export const authAPI = {
    register(data: RegisterType) {
        return instance.post<'', AxiosResponse<ResponseType>, RegisterType>('auth/register', data)
    },
    me() {
        return instance.post<RegisterResType>(`auth/me`);
    },
    logOut() {
        return instance.delete<MeResponse>(`auth/me`);
    },
    login(data: LoginType) {
        return instance.post<'', AxiosResponse<LoginResType>, LoginType>(`/auth/login`, data);
    },
    forgot(data: ForgotType) {
        return instance.post<'', AxiosResponse<ResponseType>, ForgotType>(`/auth/forgot`, data)
    },
    newPassword(data: NewPasswordType) {
        return instance.post<'', AxiosResponse<ResponseNewPasswordType>, NewPasswordType>(`/auth/set-new-password`, data)
    },
    newName(data: NewNaneType) {
        return instance.put<'', AxiosResponse<ResponseNewNaneType>, NewNaneType>(`/auth/me`, data)
    }
}



/// types
export type NewNaneType = {
    name: string
    avatar?: string
}

export type ResponseNewNaneType = {
    updatedUser: RegisterResType
    error?: string
}


export type NewPasswordType = {
    password: string
    resetPasswordToken: string | undefined
}
type ResponseNewPasswordType = {
    info: string
    error: string
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
export type LoginResType = {
    data: RegisterResType
}

export type RegisterType = {
    email: string,
    password: string,
    repeatPassword?: string,
}

type ResponseType = {
    addedUser: RegisterResType,
    error?: {};
    passwordRegExp?: string

}
export type RegisterResType = {
    avatar: string | null
    created: string
    email: string
    isAdmin: boolean
    name: string
    publicCardPacksCount: number
    rememberMe: boolean
    token: string
    tokenDeathTime: number
    updated: string
    verified: boolean
    __v: number
    _id: string
}

export type ProfileType = Pick<RegisterResType, 'name' | 'email' | 'avatar'>

export type LoginType = {
    email: string
    password: string
    rememberMe: boolean
}


export type ForgotType = {
    email: string
    from: string
    message: string
}




