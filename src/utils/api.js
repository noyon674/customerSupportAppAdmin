import axios from 'axios'

const BASE_URL = import.meta.env.VITE_BACKEND_API

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
})

const fetchData = async (method, url, data = null) => {
  const response = await apiClient[method](url, data)
  return response.data
}

// API Endpoints
const createApiEndpoints = (resource) => ({
  getAll: () => fetchData('get', `/${resource}/`),
  add: (data) => fetchData('post', `/${resource}/`, data),
  delete: (id) => fetchData('delete', `/${resource}/${id}/`),
  update: (id, data) => fetchData('put', `/${resource}/${id}/`, data),
  show: (id) => fetchData('get', `/${resource}/${id}`),
})

// Articles API
export const articleApi = createApiEndpoints('articles')

// FAQs API
export const faqApi = createApiEndpoints('faqs')

// Categories API
export const categoryApi = createApiEndpoints('categories')
