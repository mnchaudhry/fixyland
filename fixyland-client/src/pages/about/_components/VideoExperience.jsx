import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Play } from 'lucide-react';

const VideoExperience = () => {
    return (
        <section className="bg-primary relative py-32 overflow-hidden text-center text-primary-foreground">
            <div
                className="absolute inset-0 z-[-1] bg-cover bg-center bg-fixed"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1920')" }}
            />
            <div className="absolute inset-0 bg-primary/80 z-[-1]" />
            <div className="container mx-auto px-4 space-y-6">
                <SectionHeader
                    title="Relax And Enjoy With Our Hotel & Resort"
                    badge="Amazing Experience"
                    titleClassName="text-white mb-10"
                />
                <div className="flex justify-center py-40">
                    <Button size="icon" className="h-20 w-20 rounded-full bg-white text-primary hover:bg-white/90 shadow-2xl">
                        <Play className="h-8 w-8 fill-primary" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default VideoExperience;
