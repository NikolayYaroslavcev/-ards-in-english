import axios, {AxiosResponse} from 'axios'

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
})


export const authAPI = {
    login(data:LoginType) {
        return instance.post<LoginType, AxiosResponse<ResponseType>>(`/auth/login`,data);
    },
}

export type LoginType = {
    email: string
    password: string
    rememberMe: boolean
}


// // types
export type ResponseType = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number;
// количество колод
    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;
    error?: string;
}


// export type LoginType = {
//     email: string,
//     password: string,
//     rememberMe?: boolean,
//     captcha?: string,
// }
// export type UserType = {
//     id: number
//     email: string
//     login: string
// }
//
//
// export type TodolistType = {
//     id: string
//     title: string
//     addedDate: string
//     order: number
// }
// export type ResponseType<D = {}> = {
//     resultCode: number
//     messages: Array<string>
//     fieldsErrors: Array<string>
//     data: D
// }
//
//
// export enum TaskStatuses {
//     New = 0,
//     InProgress = 1,
//     Completed = 2,
//     Draft = 3
// }
//
// export enum TaskPriorities {
//     Low = 0,
//     Middle = 1,
//     Hi = 2,
//     Urgently = 3,
//     Later = 4
// }
//
// export enum Result_code {
//     OK = 0,
//     ERROR = 1,
//     CAPTCHA = 10,
// }
//
// export type TaskType = {
//     description: string
//     title: string
//     status: TaskStatuses
//     priority: TaskPriorities
//     startDate: string
//     deadline: string
//     id: string
//     todoListId: string
//     order: number
//     addedDate: string
// }
// export type UpdateTaskModelType = {
//     title: string
//     description: string
//     status: TaskStatuses
//     priority: TaskPriorities
//     startDate: string
//     deadline: string
// }
// type GetTasksResponse = {
//     error: string | null
//     totalCount: number
//     items: TaskType[]
// }
