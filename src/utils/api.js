import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BACKEND_API;

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

const fetchData = async (method, url, data = null) => {
  const response = await apiClient[method](url, data);
  return response.data;
};

// Articles API
export const getArticles = () => fetchData('get', '/articles/');
export const addArticle = (userdata) => fetchData('post', '/articles/', userdata);
export const deleteArticle = (id) => fetchData('delete', `/articles/${id}/`);

// FAQs API
export const getFaqs = () => fetchData('get', '/faqs/');
export const addFAQ = (userdata) => fetchData('post', '/faqs/', userdata);
export const deleteFAQ = (id) => fetchData('delete', `/faqs/${id}`);

// Categories API
export const getCategories = () => fetchData('get', '/categories/');
export const addCategory = (userdata) => fetchData('post', '/categories/', userdata);
export const deleteCategory = (id) => fetchData('delete', `/categories/${id}/`)
