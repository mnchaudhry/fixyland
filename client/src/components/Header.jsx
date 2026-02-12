import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    ChevronDown,
    Facebook, Instagram,
    Mail,
    MapPin,
    Menu,
    Phone,
    Search,
    X
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Rooms', path: '/rooms' },
        { name: 'Services', path: '/services' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <div className="w-full flex flex-col font-sans">
            {/* Top Bar */}
            <div className="bg-primary text-primary-foreground py-2.5 hidden lg:block border-b border-white/10">
                <div className="container mx-auto px-4 flex justify-between items-center text-[13px] font-semibold tracking-wide">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2 group cursor-pointer">
                            <MapPin size={14} className="text-premium group-hover:scale-110 transition-transform" />
                            <span className="opacity-90 group-hover:opacity-100 transition-opacity">7631 Sabina Park, 115 Devon Isle, USA</span>
                        </div>
                        <div className="flex items-center gap-2 group cursor-pointer border-l border-white/20 pl-8 h-4">
                            <Mail size={14} className="text-premium group-hover:scale-110 transition-transform" />
                            <span className="opacity-90 group-hover:opacity-100 transition-opacity">info@fixyland.com</span>
                        </div>
                        <div className="flex items-center gap-2 group cursor-pointer border-l border-white/20 pl-8 h-4">
                            <Phone size={14} className="text-premium group-hover:scale-110 transition-transform" />
                            <span className="opacity-90 group-hover:opacity-100 transition-opacity">(+1) 987 654 3210</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <a href="#" className="hover:text-premium transition-colors"><Facebook size={15} /></a>
                        <a href="#" className="hover:text-premium transition-colors"><Instagram size={15} /></a>
                        <div className="w-[1px] h-4 bg-white/20 mx-2" />
                        <span className="text-[11px] uppercase tracking-tighter opacity-70">Follow Us</span>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <header className={`h-[70px] lg:h-[80px] sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-navbar/95 backdrop-blur-md shadow-2xl' : 'bg-navbar'}`}>
                <div className="container mx-auto px-4 lg:px-0 flex items-center justify-between h-full relative">

                    {/* Logo with slanted background */}
                    <div className="absolute left-0 top-0 bottom-0 bg-white w-[260px] lg:w-[300px] flex items-center px-8 z-20 shadow-xl transition-all duration-500"
                        style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}>
                        <Link to="/" className="group">
                            <img src="/logo.png" alt="Fixyland" className="h-10 lg:h-12 group-hover:scale-105 transition-transform" />
                        </Link>
                    </div>

                    <div className="w-full flex items-center justify-end h-full pl-[260px] lg:pl-[300px]">
                        {/* Desktop Nav Links */}
                        <nav className="hidden xl:flex items-center gap-8 text-white font-bold text-[15px] mr-12">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`relative flex items-center gap-1 transition-colors hover:text-premium group ${location.pathname === link.path ? 'text-premium' : ''
                                        }`}
                                >
                                    {link.name}
                                    {link.name !== 'Contact' && <ChevronDown size={14} className="opacity-50 group-hover:rotate-180 transition-transform" />}
                                    <span className={`absolute -bottom-1 left-0 h-[2px] bg-premium transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`} />
                                </Link>
                            ))}
                        </nav>

                        {/* Quick Actions */}
                        <div className="flex items-center gap-3 lg:gap-5 pr-4">
                            <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-premium hover:text-black transition-all group">
                                <Search size={20} className="group-hover:scale-110 transition-transform" />
                            </div>

                            <div
                                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-premium hover:text-black transition-all group xl:flex hidden"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                <Menu size={20} className="group-hover:scale-110 transition-transform" />
                            </div>

                            <Button asChild className="bg-premium hover:bg-white text-black font-black h-14 px-8 rounded-none hidden sm:flex transition-all duration-300 shadow-[4px_4px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                                <Link to="/booking">
                                    BOOK NOW <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>

                            {/* Mobile Toggle */}
                            <button
                                className="xl:hidden text-white hover:text-premium p-2"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 bg-navbar/98 z-[100] transition-transform duration-500 xl:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex flex-col items-center justify-center h-full space-y-8 relative">
                        <button
                            className="absolute top-8 right-8 text-white hover:text-premium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <X size={40} />
                        </button>
                        <div className="text-center mb-12">
                            <img src="/logo.png" alt="Fixyland" className="h-16 mx-auto brightness-200" />
                        </div>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`text-[32px] font-black hover:text-premium transition-colors ${location.pathname === link.path ? 'text-premium' : 'text-white'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-12 flex gap-8">
                            <Facebook className="text-white hover:text-premium cursor-pointer" size={24} />
                            <Instagram className="text-white hover:text-premium cursor-pointer" size={24} />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
