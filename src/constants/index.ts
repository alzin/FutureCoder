import Cookies from 'js-cookie';


export const Api: string = "http://localhost:8000/api"

export const baseUrl: string = "http://localhost:3000"

export const token: string = process.env.NEXT_PUBLIC_TOKEN!

// language
export const currentLanguage = Cookies.get('NEXT_LOCALE')


export const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": `Bearer ${token}`
    // 'Content-Type': 'multipart/form-data'
};