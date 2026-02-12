import { Facebook, Instagram, Send } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-footer text-primary-foreground py-10 px-4 relative overflow-hidden font-sans border-t border-white/5 min-h-[30vh] max-h-[40vh] flex flex-col justify-center">
            {/* Background Pattern - subtle map effect */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: "url('https://fixyland.vercel.app/assets/img/bg/footer-bg.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />

            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 items-start">
                    {/* Logo and About */}
                    <div className="space-y-4">
                        <img
                            src="/dark-logo.png"
                            alt="Fixyland"
                            className="h-8"
                        />
                        <p className="text-white/40 leading-relaxed font-medium text-[13px] max-w-[240px]">
                            Nam libero tempore cum soluta nobis esteligendi optio cumque nihile impedit quo minus maxime placeat facere.
                        </p>
                        <div className="flex gap-2 pt-2">
                            {[Facebook, 'X', Instagram, 'Be'].map((item, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-9 h-9 bg-white/[0.05] flex items-center justify-center hover:bg-primary transition-all rounded-[4px]"
                                >
                                    {typeof item === 'string' ? (
                                        <span className="text-[12px] font-black">{item}</span>
                                    ) : (
                                        <item size={14} className="text-primary-foreground" />
                                    )}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Explore Links */}
                    <div className="lg:pl-8">
                        <h4 className="text-[16px] font-black mb-4 tracking-wider uppercase text-white">EXPLORE</h4>
                        <ul className="space-y-2 text-white/40 font-medium text-[13px]">
                            {['About Hotel', 'Pricing', 'Hotel Staff', 'Latest News', 'Contact Us'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-white transition-all">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-[16px] font-black mb-4 tracking-wider uppercase text-white">CONTACT</h4>
                        <ul className="space-y-4 text-white/40 font-medium text-[13px]">
                            <li className="leading-tight">
                                7631 Sabina Park, 115 Devon Isle,<br />Louisiana, USA
                            </li>
                            <li className="text-white text-[16px] font-black">
                                (+1) 987 654 3210
                            </li>
                            <li>
                                <a href="mailto:info@domain.com" className="hover:text-white transition-all">info@domain.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div className="h-full">
                        <div className="bg-[#1a1a1a]/80 backdrop-blur-sm rounded-[15px] p-6 space-y-4 border border-white/5">
                            <h4 className="text-[18px] font-black tracking-wider text-white">NEWSLETTER</h4>
                            <div className="relative border-b border-white/10 pb-2">
                                <input
                                    type="email"
                                    placeholder="Ex. info@domain.com"
                                    className="bg-transparent border-none text-white w-full pr-8 focus:outline-none placeholder:text-white/20 font-medium text-[13px]"
                                />
                                <button className="absolute right-0 top-0 text-white/40 hover:text-white transition-colors">
                                    <Send size={16} />
                                </button>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="h-4 w-4 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                                    <div className="h-2 w-2 bg-white rounded-full opacity-0 hover:opacity-100 transition-opacity"></div>
                                </div>
                                <label className="text-[11px] text-white/40 cursor-pointer select-none font-medium">
                                    I agree to all terms and policies
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] font-medium text-white/20">
                    <p>© Copyright 2025 Fixyland. All Rights Reserved.</p>
                    <div className="flex gap-6 items-center">
                        <a href="#" className="hover:text-white transition-colors">Terms and Conditions</a>
                        <span className="text-white/10">|</span>
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
