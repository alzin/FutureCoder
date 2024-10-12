import { token } from "./api";

export const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": `Bearer ${token}`
    // 'Content-Type': 'multipart/form-data'
};