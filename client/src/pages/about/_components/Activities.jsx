import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Check } from 'lucide-react';

const Activities = () => {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <SectionHeader
                            badge="Luxury Hotel"
                            title="We Provide Outdoor Activities To All Visitors"
                            align="left"
                        />
                        <p className="text-muted-foreground leading-relaxed text-[16px]">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.
                        </p>

                        <div className="grid grid-cols-2 gap-8 pt-4">
                            <div className="flex items-center gap-4">
                                <div className="h-16 w-16 flex items-center justify-center">
                                    <img src="https://fixyland.vercel.app/assets/img/icon/about-icon-1.png" alt="Swimming Pool" className="w-full h-auto" />
                                </div>
                                <h4 className="font-black text-[18px] text-foreground leading-tight">The Best Swimming Pool</h4>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="h-16 w-16 flex items-center justify-center">
                                    <img src="https://fixyland.vercel.app/assets/img/icon/about-icon-2.png" alt="Stationary Bike" className="w-full h-auto" />
                                </div>
                                <h4 className="font-black text-[18px] text-foreground leading-tight">The Best Stationary Bike</h4>
                            </div>
                        </div>

                        <div className="space-y-3 pt-4 font-bold">
                            {[
                                "It is a long fact that a reader will be distracted by the readable",
                                "Lorem Ipsum is simply dummy of the printing and industry",
                                "There are many variations of Lorem Ipsum majority"
                            ].map((text, i) => (
                                <div key={i} className="flex gap-3 items-center text-muted-foreground text-[15px]">
                                    <div className="h-5 w-5 rounded-full border border-primary flex items-center justify-center text-primary">
                                        <Check size={10} strokeWidth={4} />
                                    </div>
                                    <span>{text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6">
                            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 rounded-md font-bold text-[16px]">
                                Discover More <ArrowUpRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    <div className="relative pt-8 grid grid-cols-2 gap-6 h-full min-h-[500px]">
                        <div className="relative col-span-2 flex justify-end">
                            <img
                                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=600"
                                alt="Hotel interior"
                                className="rounded-2xl w-[65%] h-auto shadow-xl"
                            />
                        </div>
                        <div className="absolute left-0 bottom-[-20px] w-full flex items-end justify-start gap-6">
                            <img
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=400"
                                alt="Outdoor dining"
                                className="rounded-2xl w-[50%] h-auto shadow-xl border-8 border-white"
                            />
                            <div className="bg-foreground text-primary-foreground p-8 rounded-2xl w-[40%] shadow-2xl mb-6">
                                <div className="mb-4">
                                    <img src="/icons/dine-icon.png" alt="Restaurant" className="w-16 h-auto" />
                                </div>
                                <h4 className="text-[20px] font-bold mb-2">Restaurants</h4>
                                <p className="text-[12px] opacity-70 leading-relaxed">
                                    Donec in quis the asd pellentesque velit. Donec id velit areu posuere blane.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Activities;
