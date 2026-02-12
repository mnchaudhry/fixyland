import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto flex h-20 items-center justify-between px-4">
                <Link to="/" className="flex items-center space-x-2">
                    <img src="https://fixyland.vercel.app/assets/img/logo/logo.png" alt="Fixyland" className="h-10" />
                </Link>
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <Link to="/" className="transition-colors hover:text-primary">Home</Link>
                    <Link to="/about" className="transition-colors hover:text-primary">About Us</Link>
                    <Link to="/booking" className="transition-colors hover:text-primary">Booking</Link>
                    <Link to="/rooms" className="transition-colors hover:text-primary">Rooms & Suites</Link>
                    <Link to="/services" className="transition-colors hover:text-primary">Services</Link>
                    <Link to="/contact" className="transition-colors hover:text-primary">Contact</Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" className="hidden sm:flex">
                        <Search className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-5 w-5" />
                    </Button>
                    <Button asChild className="bg-accent text-secondary hover:bg-accent/90">
                        <Link to="/booking">
                            Book Your Stay <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
