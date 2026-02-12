import Appointment from '../models/Appointment.js';

export const createAppointment = async (req, res) => {
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
};
