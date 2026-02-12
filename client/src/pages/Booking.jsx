import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import axios from 'axios';
import { ArrowRight, Bath, Bed, Calendar as CalendarIcon, Phone, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Booking = () => {
    const [hotels, setHotels] = useState([]);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        type: 'Luxury',
        room: 'Deluxe',
        checkIn: '',
        checkOut: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });

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
                type: 'Luxury',
                room: 'Deluxe',
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
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="relative h-[400px] flex items-center justify-center text-white text-center bg-black/60">
                <div
                    className="absolute inset-0 z-[-1] bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1920')" }}
                />
                <div className="container px-4">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">Booking</h1>
                    <div className="flex justify-center items-center gap-2 text-sm md:text-base text-white/80">
                        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                        <span className="opacity-50">/</span>
                        <span className="text-primary font-bold">Booking</span>
                    </div>
                </div>
            </section>

            {/* Appointment Form Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <Card className="lg:col-span-2 border-none shadow-2xl p-8 md:p-12 rounded-3xl">
                            <div className="space-y-4 mb-10">
                                <Badge className="bg-primary hover:bg-primary/90 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
                                    Stay With Us
                                </Badge>
                                <h2 className="text-4xl md:text-5xl font-bold">Make An Appointment</h2>
                            </div>

                            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName" className="font-bold text-sm uppercase tracking-wider">First Name</Label>
                                    <Input
                                        id="firstName"
                                        name="firstName"
                                        placeholder="Ex. first name"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        className="h-14 border-slate-200 bg-slate-50 focus-visible:ring-primary"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName" className="font-bold text-sm uppercase tracking-wider">Last Name</Label>
                                    <Input
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Ex. last name"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        className="h-14 border-slate-200 bg-slate-50 focus-visible:ring-primary"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="font-bold text-sm uppercase tracking-wider">Email Address</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="Ex. info@domain.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="h-14 border-slate-200 bg-slate-50 focus-visible:ring-primary"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone" className="font-bold text-sm uppercase tracking-wider">Phone Number</Label>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        placeholder="Ex. (+1) 987 654 3210"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="h-14 border-slate-200 bg-slate-50 focus-visible:ring-primary"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label className="font-bold text-sm uppercase tracking-wider">Select Type</Label>
                                    <Select value={formData.type} onValueChange={(v) => handleSelectChange('type', v)}>
                                        <SelectTrigger className="h-14 border-slate-200 bg-slate-50">
                                            <SelectValue placeholder="Luxury" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Luxury">Luxury</SelectItem>
                                            <SelectItem value="Budget">Budget</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label className="font-bold text-sm uppercase tracking-wider">Select Room</Label>
                                    <Select value={formData.room} onValueChange={(v) => handleSelectChange('room', v)}>
                                        <SelectTrigger className="h-14 border-slate-200 bg-slate-50">
                                            <SelectValue placeholder="Deluxe Room" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Deluxe">Deluxe Room</SelectItem>
                                            <SelectItem value="Junior">Junior Room</SelectItem>
                                            <SelectItem value="Family">Family Room</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="checkIn" className="font-bold text-sm uppercase tracking-wider">Check In</Label>
                                    <div className="relative">
                                        <Input
                                            id="checkIn"
                                            type="date"
                                            name="checkIn"
                                            value={formData.checkIn}
                                            onChange={handleChange}
                                            required
                                            className="h-14 border-slate-200 bg-slate-50 pl-12"
                                        />
                                        <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="checkOut" className="font-bold text-sm uppercase tracking-wider">Check Out</Label>
                                    <div className="relative">
                                        <Input
                                            id="checkOut"
                                            type="date"
                                            name="checkOut"
                                            value={formData.checkOut}
                                            onChange={handleChange}
                                            required
                                            className="h-14 border-slate-200 bg-slate-50 pl-12"
                                        />
                                        <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                    </div>
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <Label htmlFor="message" className="font-bold text-sm uppercase tracking-wider">Message</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Ex. type message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={6}
                                        className="border-slate-200 bg-slate-50 p-6 rounded-xl focus-visible:ring-primary"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <Button type="submit" disabled={status.type === 'loading'} className="w-full h-16 bg-primary hover:bg-primary/90 text-white rounded-xl text-lg font-bold transition-all shadow-xl hover:shadow-primary/20">
                                        {status.type === 'loading' ? 'Booking...' : 'Book Appointment'} <ArrowRight className="ml-3 h-5 w-5" />
                                    </Button>
                                </div>
                            </form>
                            {status.message && (
                                <div className={`mt-8 p-4 rounded-xl text-center font-bold ${status.type === 'success' ? 'bg-green-100 text-green-700' : status.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-700'}`}>
                                    {status.message}
                                </div>
                            )}
                        </Card>

                        <div className="space-y-8">
                            <Card className="bg-primary text-white border-none rounded-3xl overflow-hidden shadow-2xl relative">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                                <CardContent className="p-10 space-y-8">
                                    <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white/20">
                                        <img
                                            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=400"
                                            alt="Support"
                                            className="w-full"
                                        />
                                    </div>
                                    <div className="space-y-4 text-center">
                                        <h2 className="text-3xl font-bold leading-none">(+1) 987 654 3210</h2>
                                        <p className="text-white/70">
                                            Mon-Fri: 7:00 am - 9:00 pm<br />
                                            <Badge className="bg-accent text-secondary hover:bg-accent mt-4">24/7 Service Available</Badge>
                                        </p>
                                    </div>
                                    <Button className="w-full h-14 bg-white text-secondary hover:bg-white/90 rounded-xl font-bold text-base shadow-xl">
                                        Call Us Now <Phone className="ml-2 h-4 w-4 fill-secondary" />
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card className="bg-slate-900 text-white border-none rounded-3xl p-10 shadow-2xl overflow-hidden relative group">
                                <div className="absolute bottom-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <CalendarIcon className="h-40 w-40" />
                                </div>
                                <h3 className="text-2xl font-bold mb-6">Need Help?</h3>
                                <p className="text-slate-400 leading-relaxed mb-8">
                                    Our professional staff is always ready to help you with your booking and any other questions.
                                </p>
                                <Link to="/contact" className="inline-flex items-center text-primary font-bold hover:gap-4 transition-all">
                                    Contact Support <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Luxury Rooms Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center space-y-4 mb-16">
                        <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase">
                            Our Best Rooms
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-bold">Luxury Rooms and Resort</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {hotels.map((hotel) => (
                            <Card key={hotel._id} className="group overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl bg-white">
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <img
                                        src={hotel.image}
                                        alt={hotel.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-6 left-6">
                                        <Badge className="bg-primary text-white text-lg font-bold px-4 py-1.5 shadow-xl">
                                            ${hotel.price} / Night
                                        </Badge>
                                    </div>
                                </div>
                                <CardContent className="p-8">
                                    <h3 className="text-2xl font-bold mb-4">{hotel.name}</h3>
                                    <div className="flex gap-6 mb-6 text-slate-500 font-medium text-sm">
                                        <span className="flex items-center gap-2"><Users className="h-4 w-4 text-primary" /> {hotel.guests} Guests</span>
                                        <span className="flex items-center gap-2"><Bed className="h-4 w-4 text-primary" /> {hotel.beds} Beds</span>
                                        <span className="flex items-center gap-2"><Bath className="h-4 w-4 text-primary" /> {hotel.baths} Bath</span>
                                    </div>
                                    <p className="text-slate-500 leading-relaxed mb-8 line-clamp-3 leading-relaxed">
                                        {hotel.description}
                                    </p>
                                    <Button variant="outline" className="w-full h-12 border-slate-200 text-slate-900 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all font-bold">
                                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Booking;
