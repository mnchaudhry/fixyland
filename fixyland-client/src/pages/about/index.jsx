import Hero from '@/components/Hero';
import Activities from './_components/Activities';
import ClientsSection from './_components/ClientsSection';
import StaffSection from './_components/StaffSection';
import Stats from './_components/Stats';
import VideoExperience from './_components/VideoExperience';
import WhyChooseUs from './_components/WhyChooseUs';

const About = () => {
 

    return (
        <div className="flex flex-col min-h-screen font-sans bg-background">
            <Hero title="About Us" breadcrumb="About Us" />
            <Activities />
            <Stats />
            <WhyChooseUs />
            <VideoExperience />
            <StaffSection  />
            <ClientsSection />
        </div>
    );
};

export default About;
