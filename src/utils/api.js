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
    const response = await apiClient.post('/articles/', userdata);
    return response.data;
}

export const getArticles = async () => {
    const response = await apiClient.get('/articles/');
    return response.data
};

export const getFaqs = async () => {
    const response = await apiClient.get('/faqs/');
    return response.data
};
