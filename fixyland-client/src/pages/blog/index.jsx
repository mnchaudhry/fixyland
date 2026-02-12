
import Hero from '@/components/Hero';

const Blog = () => {
    const posts = [
        {
            title: "Top 10 Travel Destinations for 2024",
            excerpt: "Discover the most trending travel spots to visit this year.",
            date: "February 12, 2024",
            image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Why You Should Visit Fixyland",
            excerpt: "Experience the ultimate luxury at Fixyland Resort.",
            date: "January 28, 2024",
            image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "The Best Local Cuisines to Try",
            excerpt: "A guide to the mouth-watering local dishes you must try.",
            date: "January 15, 2024",
            image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen font-sans bg-background">
            <Hero title="Latest News" breadcrumb="Blog" />

            <section className="container mx-auto py-20 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {posts.map((post, index) => (
                        <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 bg-premium text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                                    Travel
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="text-gray-400 text-sm mb-3 flex items-center gap-2">
                                    <span>📅</span> {post.date}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 hover:text-premium transition-colors cursor-pointer leading-tight">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <button className="text-premium font-bold hover:underline underline-offset-4 decoration-2">
                                    Read More →
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Blog;
