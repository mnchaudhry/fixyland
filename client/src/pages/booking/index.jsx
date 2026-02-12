import { createAppointment, getHotels } from '@/api';
import Hero from '@/components/Hero';
import { useEffect, useState } from 'react';
import AppointmentForm from './_components/AppointmentForm';
import HotelListing from './_components/HotelListing';

const Booking = () => {

    //////////////////////////////////////// STATES 
    const [hotels, setHotels] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [formData, setFormData] = useState({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '+1 987 654 3210',
        type: 'Luxury',
        room: 'Deluxe',
        checkIn: '2025-05-20',
        checkOut: '2025-05-25',
        message: 'I would like a room with a sea view if possible.'
    });
    const [status, setStatus] = useState({ type: '', message: '' });

    //////////////////////////////////////// EFFECTS 
    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const res = await getHotels();
                setHotels(res.data);
            } catch (err) {
                console.error('Error fetching hotels:', err);
            } finally {
                setIsLoading(false);
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
            await createAppointment(formData);
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
            setTimeout(() => setStatus({ type: '', message: '' }), 5001);
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
            <HotelListing hotels={hotels} isLoading={isLoading} />
        </div>
    );
};

export default Booking;
