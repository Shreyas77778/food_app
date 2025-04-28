import api from './api';

export const getRestaurants = async () => {
  const response = await api.get('/restaurants');
  return response.data;
};

export const getRestaurantById = async (id) => {
  const response = await api.get(`/restaurants/${id}`);
  return response.data;
};

export const searchRestaurants = async (query) => {
  const response = await api.get('/restaurants/search', { params: { query } });
  return response.data;
};