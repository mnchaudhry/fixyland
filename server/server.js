const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const Staff = require('./models/Staff');
const Hotel = require('./models/Hotel');
const Appointment = require('./models/Appointment');

const app = express();

// Middleware
const allowedOrigins = [
    process.env.FRONTEND_URL,
    'http://localhost:5173',
    'http://127.0.0.1:5173'
].filter(Boolean);

app.use(cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// API Routes

// GET Expert Staff API
app.get('/api/staff', async (req, res) => {
    try {
        const staff = await Staff.find();
        res.json(staff);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET Hotels API
app.get('/api/hotels', async (req, res) => {
    try {
        const hotels = await Hotel.find();
        res.json(hotels);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST Appointment API
app.post('/api/appointments', async (req, res) => {
    const appointment = new Appointment({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        type: req.body.type,
        room: req.body.room,
        checkIn: req.body.checkIn,
        checkOut: req.body.checkOut,
        message: req.body.message,
    });

    try {
        const newAppointment = await appointment.save();
        res.status(201).json(newAppointment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
