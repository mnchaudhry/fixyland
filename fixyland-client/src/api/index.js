import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5001/api',
});

// Staff API
export const getStaff = () => api.get('/api/staff');

// Hotels API
export const getHotels = () => api.get('/api/hotels');

// Appointments API
export const createAppointment = (data) => api.post('/api/appointments', data);

export default api;
