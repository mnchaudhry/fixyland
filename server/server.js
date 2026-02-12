import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

import appointmentRoutes from './routes/appointmentRoutes.js';
import hotelRoutes from './routes/hotelRoutes.js';
import staffRoutes from './routes/staffRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// API Routes
app.use('/api/staff', staffRoutes);
app.use('/api/hotels', hotelRoutes);
app.use('/api/appointments', appointmentRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
