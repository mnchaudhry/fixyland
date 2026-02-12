import axios from 'axios';
import { useEffect, useState } from 'react';
import Activities from './_components/Activities';
import ClientsSection from './_components/ClientsSection';
import StaffSection from './_components/StaffSection';
import Stats from './_components/Stats';
import VideoExperience from './_components/VideoExperience';
import WhyChooseUs from './_components/WhyChooseUs';
import Hero from '@/components/Hero';

const About = () => {
    const [staff, setStaff] = useState([]);

    useEffect(() => {
        const fetchStaff = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/staff');
                setStaff(res.data);
            } catch (err) {
                console.error('Error fetching staff:', err);
            }
        };
        fetchStaff();
    }, []);

    return (
        <div className="flex flex-col min-h-screen font-sans bg-background">
            <Hero title="About Us" breadcrumb="About Us" />
            <Activities />
            <Stats />
            <WhyChooseUs />
            <VideoExperience />
            <StaffSection staff={staff} />
            <ClientsSection />
        </div>
    );
};

export default About;
