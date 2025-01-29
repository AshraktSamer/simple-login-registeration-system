export interface RegisterPayload {
    name: string,
    email: string,
    password: string,
    mobile: number,
    adress: string,
}


export interface LoginPayload {
    email: string,
    passowrd: string,
}

export interface User {
    name: string,
    email: string,
    password: string,
    mobile: number,
    adress: string,
    role: string,
    _id: string,
    __v: number
}


export interface ApiResponse<T> {
    Status?: string,
    Msg?: string,
    Error?: string,
    Data?: T,
    Token?: string,
    Role?: string
}