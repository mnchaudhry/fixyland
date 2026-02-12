import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="relative h-[300px] flex items-center justify-center text-white text-center bg-black/60">
                <div
                    className="absolute inset-0 z-[-1] bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1920')" }}
                />
                <div className="container px-4">
                    <h1 className="text-5xl font-bold mb-4">404 Error</h1>
                    <div className="flex justify-center items-center gap-2 text-sm md:text-base">
                        <Link to="/" className="hover:text-primary">Home</Link>
                        <span className="opacity-50">/</span>
                        <span className="text-primary font-medium">Error</span>
                    </div>
                </div>
            </section>

            <section className="py-24 text-center">
                <div className="container mx-auto px-4 max-w-2xl">
                    <div className="relative mb-12">
                        <img
                            src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg"
                            alt="404"
                            className="mx-auto max-w-md w-full animate-float"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent h-1/2 bottom-0" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-secondary mb-6">Ohh! Page Not Found</h2>
                    <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                        We're sorry but we can't seem to find the page you requested. This might be because you have typed the web address incorrectly.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button asChild size="lg" className="h-14 px-8 bg-primary hover:bg-primary/90 text-white rounded-xl shadow-xl hover:shadow-primary/20 transition-all font-bold">
                            <Link to="/">
                                <Home className="mr-2 h-5 w-5" /> Back To Home
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" className="h-14 px-8 border-slate-200 rounded-xl font-bold" onClick={() => window.history.back()}>
                            <ArrowLeft className="mr-2 h-5 w-5" /> Previous Page
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NotFound;
