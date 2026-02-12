import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Check, UtensilsCrossed } from 'lucide-react';

const Activities = () => {
    return (
        <section className="py-32 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-4">
                        <SectionHeader
                            badge="Luxury Hotel"
                            title="We Provide Outdoor Activities To All Visitors"
                            align="left"
                        />
                        <p className="text-muted-foreground leading-relaxed text-[16px]">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                            <div className="flex items-center gap-6 group hover:-translate-y-1 transition-all duration-300 px-4 py-2 rounded-2xl hover:bg-white hover:shadow-xl border border-transparent hover:border-border/50">
                                <div className="h-16 w-16 flex-shrink-0 flex items-center justify-center bg-primary/5 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                        <circle cx="12" cy="12" r="3" />
                                        <path d="M2 12s3-4 10-4 10 4 10 4M2 12s3 4 10 4 10-4 10-4" />
                                    </svg>
                                </div>
                                <h4 className="font-extrabold text-[18px] text-foreground leading-[1.3]">The Best <br /> Swimming Pool</h4>
                            </div>
                            <div className="flex items-center gap-6 group hover:-translate-y-1 transition-all duration-300 px-4 py-2 rounded-2xl hover:bg-white hover:shadow-xl border border-transparent hover:border-border/50">
                                <div className="h-16 w-16 flex-shrink-0 flex items-center justify-center bg-primary/5 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="18.5" cy="17.5" r="3.5" />
                                        <circle cx="5.5" cy="17.5" r="3.5" />
                                        <circle cx="15" cy="5" r="1" />
                                        <path d="M7 17.5 9.5 8h7.5l1.5 9.5" />
                                        <path d="M17 12H9" />
                                    </svg>
                                </div>
                                <h4 className="font-extrabold text-[18px] text-foreground leading-[1.3]">The Best <br /> Stationary Bike</h4>
                            </div>
                        </div>

                        <div className="space-y-3 font-bold">
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

                    <div className="relative h-[650px] w-full max-w-[600px] ml-auto">
                        {/* Top Right Image - Fireplace */}
                        <div className="absolute right-0 top-0 w-[70%] z-0">
                            <img
                                src="https://images.unsplash.com/photo-1544033527-b192daee1f5b?auto=format&fit=crop&q=80&w=800"
                                alt="Modern fireplace"
                                className="rounded-[32px] w-full aspect-[4/5] object-cover shadow-2xl"
                            />
                        </div>

                        {/* Bottom Left Image - Arched Pool */}
                        <div className="absolute left-0 bottom-[10%] w-[50%] z-10">
                            <img
                                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800"
                                alt="Arched pool night"
                                className="rounded-[32px] w-full aspect-[4/5] object-cover shadow-2xl border-[10px] border-white/5 backdrop-blur-sm"
                            />
                        </div>

                        {/* Overlapping Info Card - Exact Match */}
                        <div className="absolute left-[30%] bottom-0 w-[55%] bg-[#111111] text-white px-8 py-12 rounded-[35px] shadow-2xl z-20 text-center flex flex-col items-center justify-center border border-white/10">
                            <div className="mb-6 opacity-90">
                                <UtensilsCrossed size={60} strokeWidth={1} />
                            </div>
                            <h4 className="text-[28px] font-black mb-3">Restaurants</h4>
                            <p className="text-[13px] opacity-60 leading-relaxed max-w-[220px]">
                                Donec in quis the asd pellentesque velit. Donec id velit arcu posuere blane.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Activities;
