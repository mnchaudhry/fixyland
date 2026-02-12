import Hero from '@/components/Hero';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AppointmentForm from './_components/AppointmentForm';
import HotelListing from './_components/HotelListing';

const Booking = () => {

    //////////////////////////////////////// STATES 
    const [hotels, setHotels] = useState([]);
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', type: '', room: '', checkIn: '', checkOut: '', message: '' });
    const [status, setStatus] = useState({ type: '', message: '' });

    //////////////////////////////////////// EFFECTS 
    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/hotels');
                setHotels(res.data);
            } catch (err) {
                console.error('Error fetching hotels:', err);
            }
        };
        fetchHotels();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (name, value) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: 'loading', message: 'Submitting...' });
        try {
            await axios.post('http://localhost:5000/api/appointments', formData);
            setStatus({ type: 'success', message: 'Appointment booked successfully!' });
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                type: '',
                room: '',
                checkIn: '',
                checkOut: '',
                message: ''
            });
            setTimeout(() => setStatus({ type: '', message: '' }), 5000);
        } catch (err) {
            setStatus({ type: 'error', message: 'Error booking appointment.' });
            console.error(err);
        }
    };

    return (
        <div className="flex flex-col min-h-screen font-sans bg-background">
            <Hero title="Booking" breadcrumb="Booking" />
            <AppointmentForm
                formData={formData}
                handleChange={handleChange}
                handleSelectChange={handleSelectChange}
                handleSubmit={handleSubmit}
                status={status}
            />
            <HotelListing hotels={hotels} />
        </div>
    );
};

export default Booking;
