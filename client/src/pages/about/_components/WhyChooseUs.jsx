import SectionHeader from "@/components/SectionHeader";

const WhyChooseUs = () => {
    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    <div className="space-y-8 order-2 lg:order-1">
                        <SectionHeader
                            badge="Our Skills"
                            title="Why Choose for us?"
                            align="left"
                        />
                        <p className="text-muted-foreground leading-relaxed text-[16px]">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.
                        </p>

                        <div className="space-y-8 pt-4">
                            {[
                                { label: "Services", value: 95 },
                                { label: "Chef Master", value: 85 },
                                { label: "Design", value: 92 },
                                { label: "It Solution", value: 98 }
                            ].map((skill, i) => (
                                <div key={i} className="space-y-4">
                                    <div className="flex justify-between font-extrabold text-foreground text-[15px]">
                                        <span>{skill.label}</span>
                                        <span>{skill.value}%</span>
                                    </div>
                                    <div className="h-[4px] w-full bg-border rounded-full overflow-hidden">
                                        <div className="h-full bg-primary rounded-full" style={{ width: `${skill.value}%` }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
                        <div className="absolute left-[-40px] top-[-40px] opacity-20 hidden lg:block">
                            <img src="https://fixyland.vercel.app/assets/img/icon/about-dots.png" alt="Dots" />
                        </div>

                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800"
                                alt="Resort view"
                                className="rounded-[30px] w-full max-w-[550px] aspect-[4/5] object-cover shadow-2xl"
                            />
                            <div className="absolute left-[-20%] bottom-[10%] w-[50%] hidden sm:block">
                                <img
                                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=400"
                                    alt="Interior"
                                    className="rounded-[20px] border-8 border-white shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
