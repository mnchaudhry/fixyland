import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white py-16 px-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div className="space-y-6">
                        <img
                            src="https://fixyland.vercel.app/assets/img/logo/logo.png"
                            alt="Fixyland"
                            className="h-10 brightness-0 invert"
                        />
                        <p className="text-white/70 leading-relaxed">
                            Nam libero tempore cum soluta nobis esteligendi optio cumque nihile impedit quo minus maxime placeat facere.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                    <Icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-8">EXPLORE</h4>
                        <ul className="space-y-4 text-white/70">
                            {['About Hotel', 'Pricing', 'Hotel Staff', 'Latest News', 'Contact Us'].map((item) => (
                                <li key={item}><a href="#" className="hover:text-primary transition-all hover:pl-2">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-8">CONTACT</h4>
                        <ul className="space-y-4 text-white/70">
                            <li className="flex gap-3"><MapPin className="h-5 w-5 text-primary shrink-0" /> 7631 Sabina Park, USA</li>
                            <li className="flex gap-3"><Phone className="h-5 w-5 text-primary shrink-0" /> (+1) 987 654 3210</li>
                            <li className="flex gap-3"><Mail className="h-5 w-5 text-primary shrink-0" /> info@domain.com</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-8">NEWSLETTER</h4>
                        <div className="relative group">
                            <Input
                                type="email"
                                placeholder="Ex. info@domain.com"
                                className="bg-white/10 border-none text-white h-14 pr-14 focus-visible:ring-primary"
                            />
                            <Button size="icon" className="absolute right-2 top-2 h-10 w-10 bg-primary hover:bg-primary/90">
                                <Send className="h-4 w-4" />
                            </Button>
                        </div>
                        <div className="flex items-start space-x-2 mt-6">
                            <input type="checkbox" id="terms" className="mt-1 accent-primary" />
                            <label htmlFor="terms" className="text-xs text-white/50 cursor-pointer select-none">
                                I agree to all terms and policies
                            </label>
                        </div>
                    </div>
                </div>

                <Separator className="bg-white/10 mb-8" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50 text-center">
                    <p>© Copyright 2025 Fixyland. All Rights Reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Terms and Conditions</a>
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
