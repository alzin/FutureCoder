import Cookies from 'js-cookie';

export const Api: string = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

export const baseUrl: string = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const token: string = process.env.NEXT_PUBLIC_TOKEN!

// language
export const currentLanguage = Cookies.get('NEXT_LOCALE')


export const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": `Bearer ${token}`
    // 'Content-Type': 'multipart/form-data'
};