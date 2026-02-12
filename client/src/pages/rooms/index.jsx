
import Hero from '@/components/Hero';

const Rooms = () => {
    const rooms = [
        {
            title: "Deluxe Ocean View",
            description: "A spacious room with a breathtaking view of the ocean.",
            price: "$350",
            image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Executive Suite",
            description: "Luxury suite with private balcony and premium amenities.",
            price: "$500",
            image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Family Room",
            description: "Perfect for families, featuring two queen beds and a living area.",
            price: "$280",
            image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen font-sans bg-background">
            <Hero title="Our Rooms" breadcrumb="Rooms" />

            <section className="container mx-auto py-16 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {rooms.map((room, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={room.image}
                                    alt={room.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute bottom-4 right-4 bg-white/90 px-4 py-2 rounded-lg font-bold text-premium shadow-md">
                                    {room.price}/night
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-3">{room.title}</h3>
                                <p className="text-gray-600 mb-6 line-clamp-2">{room.description}</p>
                                <button className="w-full py-3 border-2 border-premium text-premium font-bold rounded-lg hover:bg-premium hover:text-white transition-colors duration-300 uppercase tracking-wider text-sm">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Rooms;
