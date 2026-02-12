import { getStaff } from '@/api';
import Hero from '@/components/Hero';
import { useEffect, useState } from 'react';
import Activities from './_components/Activities';
import ClientsSection from './_components/ClientsSection';
import StaffSection from './_components/StaffSection';
import Stats from './_components/Stats';
import VideoExperience from './_components/VideoExperience';
import WhyChooseUs from './_components/WhyChooseUs';

const About = () => {
    const [staff, setStaff] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchStaff = async () => {
            try {
                const res = await getStaff();
                setStaff(res.data);
            } catch (err) {
                console.error('Error fetching staff:', err);
            } finally {
                setIsLoading(false);
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
            <StaffSection staff={staff} isLoading={isLoading} />
            <ClientsSection />
        </div>
    );
};

export default About;
