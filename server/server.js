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

// API Routes
app.use('/api/staff', staffRoutes);
app.use('/api/hotels', hotelRoutes);
app.use('/api/appointments', appointmentRoutes);

// Database Connection
console.log('Connecting to MongoDB...');
mongoose.connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 5000,
})
    .then(() => console.log('✅ Connected to MongoDB successfully'))
    .catch(err => {
        console.error('❌ Could not connect to MongoDB!');
        console.error('Error Message:', err.message);
        console.error('Error Name:', err.name);
    });

const PORT = parseInt(process.env.PORT) || 5001;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server is listening on 0.0.0.0:${PORT}`);
    console.log(`API endpoints are ready at /api`);
});
