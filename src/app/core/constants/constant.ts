const Api = "http://localhost:4000"

export const apiEndpoints = {
    Auth:{
        Register :`${Api}/users/register`,
        Login :`${Api}/users/login`,
        AllUsers :`${Api}/users`,


    }
}


export const LocalStorage = {
    Token : 'USER_TOKEN '
}