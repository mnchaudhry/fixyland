import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    ChevronDown,
    Facebook, Instagram,
    Mail,
    MapPin,
    Menu,
    Phone,
    Search
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="w-full flex flex-col font-sans">
            {/* Top Bar - uses primary background */}
            <div className="bg-primary text-primary-foreground py-2 hidden lg:block">
                <div className="container mx-auto px-4 flex justify-between items-center text-[13px] font-medium">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <MapPin size={14} className="opacity-80" />
                            <span>7631 Sabina Park, 115 Devon Isle, USA</span>
                        </div>
                        <div className="flex items-center gap-2 border-l border-white/20 pl-6 h-4">
                            <Mail size={14} className="opacity-80" />
                            <span>info@domain.com</span>
                        </div>
                        <div className="flex items-center gap-2 border-l border-white/20 pl-6 h-4">
                            <Phone size={14} className="opacity-80" />
                            <span>(+1) 987 654 3210</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Facebook size={14} className="cursor-pointer hover:opacity-70 transition-opacity" />
                        <span className="opacity-50 text-[10px]">X</span>
                        <Instagram size={14} className="cursor-pointer hover:opacity-70 transition-opacity" />
                        <span className="opacity-50 text-[10px]">Be</span>
                    </div>
                </div>
            </div>

            {/* Main Navbar - uses navbar background */}
            <header className="bg-navbar h-[80px] sticky top-0 z-50">
                <div className="container mx-auto px-0 flex items-center justify-between h-full relative">

                    {/* Logo with slanted background */}
                    <div className="absolute left-0 top-0 bottom-0 bg-white w-[260px] flex items-center px-8 z-10"
                        style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}>
                        <Link to="/">
                            <img src="/logo.png" alt="Fixyland" className="h-10" />
                        </Link>
                    </div>

                    <div className="w-full flex items-center justify-end h-full pl-[260px]">
                        {/* Nav Links */}
                        <nav className="hidden lg:flex items-center gap-8 text-primary-foreground font-bold text-[15px] mr-8">
                            <Link to="/" className="flex items-center gap-1 hover:text-primary transition-colors">
                                Home <ChevronDown size={14} />
                            </Link>
                            <Link to="/about" className="flex items-center gap-1 hover:text-primary transition-colors">
                                Pages <ChevronDown size={14} />
                            </Link>
                            <Link to="/rooms" className="flex items-center gap-1 hover:text-primary transition-colors">
                                Rooms & Suites <ChevronDown size={14} />
                            </Link>
                            <Link to="/services" className="flex items-center gap-1 hover:text-primary transition-colors">
                                Services <ChevronDown size={14} />
                            </Link>
                            <Link to="/blog" className="flex items-center gap-1 hover:text-primary transition-colors">
                                Blog <ChevronDown size={14} />
                            </Link>
                            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
                        </nav>

                        {/* Quick Actions */}
                        <div className="flex items-center gap-4 pr-4">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors">
                                <Search size={18} className="text-white" />
                            </div>

                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors hidden lg:flex">
                                <Menu size={18} className="text-white" />
                            </div>

                            <Button asChild className="bg-[#eab308] hover:bg-[#d9a306] text-[#112340] font-bold h-12 px-6 rounded-none">
                                <Link to="/booking">
                                    Book Your Stay <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
