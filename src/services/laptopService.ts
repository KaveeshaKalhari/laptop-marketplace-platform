import api from './api';

export const laptopService = {
    getAllLaptops: (params?: any) => api.get('/laptops', { params }),
    getLaptopById: (id: string) => api.get(`/laptops/${id}`),
    createLaptop: (data: any) => api.post('/laptops', data),
    updateLaptop: (id: string, data: any) => api.put(`/laptops/${id}`, data),
    deleteLaptop: (id: string) => api.delete(`/laptops/${id}`),
    searchLaptops: (query: string) => api.get('/laptops/search', { params: { q: query } }),
};