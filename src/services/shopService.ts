import api from './api';

export const shopService = {
    getAllShops: (params?: any) => api.get('/shops', { params }),
    getShopById: (id: string) => api.get(`/shops/${id}`),
    createShop: (data: any) => api.post('/shops', data),
    updateShop: (id: string, data: any) => api.put(`/shops/${id}`, data),
    deleteShop: (id: string) => api.delete(`/shops/${id}`),
    getNearbyShops: (lat: number, lng: number, radius?: number) =>
        api.get(`/shops/nearby/${lat}/${lng}`, { params: { radius } }),
};