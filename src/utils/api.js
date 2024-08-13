/* eslint-disable prettier/prettier */
import axios from 'axios'

const BASE_URL = import.meta.env.VITE_BACKEND_API;

export const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "multipart/form-data",
    },
});


// API for articles
export const getArticles = async () => {
    const response = await apiClient.get('/articles/');
    return response.data;
};

export const addArticle = async (userdata) => {
    const response = await apiClient.post('/articles/', userdata);
    return response.data;
}


// API for faqs
export const getFaqs = async () => {
    const response = await apiClient.get('/faqs/');
    return response.data;
};

export const addFAQ = async (userdata) => {
    const response = await apiClient.post('/faqs/', userdata);
    return response.data;
}

export const deleteFAQ = async (id) => {
    const response = await apiClient.delete(`/faqs/${id}/`);
    return response.data
}


// API for categories
export const getCategories = async () => {
    const response = await apiClient.get('/categories/');
    return response.data;
}

export const addCategory = async (userdata) => {
    const response = await apiClient.post('/categories/', userdata);
    return response.data;
}