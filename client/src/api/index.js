import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5001/api',
});

// Staff API
export const getStaff = () => api.get('/staff');

// Hotels API
export const getHotels = () => api.get('/hotels');

// Appointments API
export const createAppointment = (data) => api.post('/appointments', data);

export default api;
