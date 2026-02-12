import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = ({ title, breadcrumb }) => {
    return (
        <section className="relative h-[480px] flex items-center justify-center text-primary-foreground text-center">
            <div
                className="absolute inset-0 z-[-1] bg-cover bg-center"
                style={{
                    backgroundImage: "url('/hero-bg.jpg')",
                    filter: 'brightness(0.7)'
                }}
            />
            <div className="container px-4 mt-16 px-4">
                <h1 className="text-[64px] font-bold mb-4">{title}</h1>
                <div className="flex justify-center items-center gap-2 text-[15px] font-semibold">
                    <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight size={14} className="opacity-80" />
                    <span className="opacity-80">{breadcrumb}</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
