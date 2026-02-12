
import Hero from '@/components/Hero';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen font-sans bg-background">
            <Hero title="Welcome to Fixyland" breadcrumb="Home" />
            <section className="container mx-auto py-16 px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Experience Luxury & Comfort</h2>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1">
                        <img
                            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Luxury Hotel"
                            className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                        />
                    </div>
                    <div className="flex-1 space-y-6">
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Welcome to Fixyland, where luxury meets comfort. Our hotel offers specific premium amenities designed to make your stay unforgettable.
                            From our world-class spa to our gourmet dining experiences, every detail is crafted with your satisfaction in mind.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Located in the heart of the city, we provide easy access to all major attractions while offering a peaceful retreat from the bustling streets.
                        </p>
                        <button className="bg-premium text-white px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all">
                            Explore Rooms
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
