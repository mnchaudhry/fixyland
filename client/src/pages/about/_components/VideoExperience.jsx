import { Button } from "@/components/ui/button";
import { Play } from 'lucide-react';

const VideoExperience = () => {
    return (
        <section className="bg-primary relative py-40 overflow-hidden text-center text-primary-foreground">
            <div
                className="absolute inset-0 z-[-1] bg-cover bg-center bg-fixed"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1920')" }}
            />
            <div className="absolute inset-0 bg-primary/80 z-[-1]" />
            <div className="container mx-auto px-4 space-y-6">
                <span className="uppercase font-extrabold text-[12px] tracking-[4px]">Amazing Experience</span>
                <h2 className="text-[54px] font-extrabold max-w-3xl mx-auto leading-tight">Relax And Enjoy With Our Hotel & Resort</h2>
                <div className="flex justify-center pt-4">
                    <Button size="icon" className="h-20 w-20 rounded-full bg-white text-primary hover:bg-white/90 shadow-2xl">
                        <Play className="h-8 w-8 fill-primary" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default VideoExperience;
