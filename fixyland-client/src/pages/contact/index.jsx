
import Hero from '@/components/Hero';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <div className="flex flex-col min-h-screen font-sans bg-background">
            <Hero title="Contact Us" breadcrumb="Contact" />

            <section className="container mx-auto py-20 px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <h2 className="text-4xl font-bold mb-6 text-gray-800 tracking-tight">Get in Touch</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                We are here to answer any questions you may have about our services. Reach out to us and we'll respond as soon as we can.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group p-6 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                                <div className="bg-premium/10 p-4 rounded-full group-hover:bg-premium group-hover:text-white transition-all duration-300">
                                    <MapPin size={24} className="text-premium group-hover:text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl mb-2 text-gray-800">Our Location</h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        7631 Sabina Park,<br />
                                        115 Devon Isle, USA
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group p-6 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                                <div className="bg-premium/10 p-4 rounded-full group-hover:bg-premium group-hover:text-white transition-all duration-300">
                                    <Phone size={24} className="text-premium group-hover:text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl mb-2 text-gray-800">Phone Number</h4>
                                    <p className="text-gray-600 font-medium">(+1) 987 654 3210</p>
                                    <p className="text-gray-500 text-sm mt-1">Mon - Fri: 09:00 - 18:00</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group p-6 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                                <div className="bg-premium/10 p-4 rounded-full group-hover:bg-premium group-hover:text-white transition-all duration-300">
                                    <Mail size={24} className="text-premium group-hover:text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl mb-2 text-gray-800">Email Address</h4>
                                    <p className="text-gray-600 font-medium">info@fixyland.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-premium/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/5 rounded-full translate-y-1/3 -translate-x-1/3 blur-xl" />

                        <h3 className="text-2xl font-bold mb-8 relative z-10">Send us a Message</h3>
                        <form className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-semibold text-gray-700 ml-1">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="John Doe"
                                        className="w-full px-5 py-3 rounded-lg border border-gray-200 focus:border-premium focus:ring-2 focus:ring-premium/20 outline-none transition-all placeholder:text-gray-400"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="john@example.com"
                                        className="w-full px-5 py-3 rounded-lg border border-gray-200 focus:border-premium focus:ring-2 focus:ring-premium/20 outline-none transition-all placeholder:text-gray-400"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-semibold text-gray-700 ml-1">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    placeholder="How can we help?"
                                    className="w-full px-5 py-3 rounded-lg border border-gray-200 focus:border-premium focus:ring-2 focus:ring-premium/20 outline-none transition-all placeholder:text-gray-400"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-semibold text-gray-700 ml-1">Message</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    placeholder="Write your message here..."
                                    className="w-full px-5 py-3 rounded-lg border border-gray-200 focus:border-premium focus:ring-2 focus:ring-premium/20 outline-none transition-all placeholder:text-gray-400 resize-none"
                                ></textarea>
                            </div>

                            <button className="w-full bg-premium text-white font-bold py-4 rounded-lg hover:bg-opacity-90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
