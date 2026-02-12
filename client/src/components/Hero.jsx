import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = ({ title, breadcrumb }) => {
    return (
        <section className="relative h-[450px] flex items-center justify-center text-white text-center overflow-hidden">
            {/* Background Image */}
            <img
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[2000ms] hover:scale-110"
                src="/hero-bg.jpg"
                alt="Hero Background"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

            <div className="container relative z-10 px-4 mt-8">
                <h1 className="text-[56px] md:text-[64px] font-black mb-6 tracking-tight drop-shadow-lg">{title}</h1>
                <div className="flex justify-center items-center gap-2 text-[15px] font-bold tracking-wider uppercase">
                    <Link to="/" className="hover:text-premium transition-colors">Home</Link>
                    <ChevronRight size={16} className="text-premium" />
                    <span className="opacity-90">{breadcrumb}</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
