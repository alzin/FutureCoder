import Cookies from 'js-cookie';


export const Api: string = "https://futuercoder-api-production.up.railway.app/api"

export const baseUrl: string = "https://future-coder.vercel.app"

export const token: string = process.env.NEXT_PUBLIC_TOKEN!

// language
export const currentLanguage = Cookies.get('NEXT_LOCALE')


export const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": `Bearer ${token}`
    // 'Content-Type': 'multipart/form-data'
};