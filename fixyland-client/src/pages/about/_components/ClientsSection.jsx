import SectionHeader from "@/components/SectionHeader";

const ClientsSection = () => {
    const logos = [
        "/clients/1.png",
        "/clients/2.png",
        "/clients/3.png",
        "/clients/4.png",
        "/clients/5.png",
        "/clients/6.png",
    ];

    return (
        <section className="py-32 bg-background">
            <div className="container mx-auto px-4 text-center">
                <SectionHeader
                    badge="Our Clents"
                    title={<>We Have More Then 150+ <br /> Global Clents</>}
                    align="center"
                    className="mb-20"
                />
                <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20">
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="w-40 h-20 bg-no-repeat bg-contain bg-center grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-300 transform hover:scale-110 cursor-pointer"
                            style={{
                                backgroundImage: `url("${logo}")`,
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;
