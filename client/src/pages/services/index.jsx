
import Hero from '@/components/Hero';

const Services = () => {
    const services = [
        {
            icon: "",
            title: "Swimming Pool",
            description: "Relax by our infinity pool with a stunning ocean view."
        },
        {
            icon: "",
            title: "Spa & Wellness",
            description: "Rejuvenate your body and mind with our expert therapists."
        },
        {
            icon: "",
            title: "Fitness Center",
            description: "Stay fit with our state-of-the-art gym equipment."
        },
        {
            icon: "",
            title: "Fine Dining",
            description: "Savor exquisite cuisines from around the world."
        },
        {
            icon: "",
            title: "Airport Shuttle",
            description: "Hassle-free transportation to and from the airport."
        },
        {
            icon: "",
            title: "Laundry Service",
            description: "Convenient laundry and dry cleaning services."
        }
    ];

    return (
        <div className="flex flex-col min-h-screen font-sans bg-background">
            <Hero title="Our Services" breadcrumb="Services" />

            <section className="container mx-auto py-20 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                            <div className="w-16 h-16 bg-premium/10 rounded-full flex items-center justify-center text-4xl mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Services;
