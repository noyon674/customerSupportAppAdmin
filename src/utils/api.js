/* eslint-disable prettier/prettier */
import axios from 'axios'

const BASE_URL = import.meta.env.VITE_BACKEND_API;

export const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "multipart/form-data",
    },
});

export const addArticle = async (userdata) => {
    const response = await apiClient.post('/articles/add', userdata);
    return response.data;
}

