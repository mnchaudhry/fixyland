import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ErrorContent = () => {
    return (
        <section className="py-24 text-center bg-background">
            <div className="container mx-auto px-4 max-w-2xl">
                <div className="relative mb-12">
                    <img
                        src="/not-found.png"
                        alt="404"
                        className="mx-auto max-w-md w-full rounded-3xl"
                    />
                </div>
                <h2 className="text-[44px] font-black text-foreground mb-6">Ohh! Page Not Found</h2>
                <p className="text-muted-foreground text-lg mb-10 leading-relaxed font-medium">
                    We're sorry but we can't seem to find the page you requested. This might be because you have typed the web address incorrectly.
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                    <Button asChild className="h-16 px-10 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md shadow-xl font-bold text-[16px]">
                        <Link to="/">
                            Back To Home <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ErrorContent;
