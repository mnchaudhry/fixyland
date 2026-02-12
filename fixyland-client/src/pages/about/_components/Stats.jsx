
const Stats = () => {
    return (
        <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 relative z-10">
                {[
                    { value: "305 +", label: "Luxury Rooms" },
                    { value: "650 +", label: "Regular Guests" },
                    { value: "80 +", label: "Team Member" },
                    { value: "75 +", label: "Beaches" }
                ].map((stat, i) => (
                    <div key={i} className={`space-y-2 flex flex-col items-center relative ${i !== 3 ? 'after:content-[""] after:hidden md:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-[60%] after:w-[1px] after:bg-white/20' : ''}`}>
                        <h2 className="text-[48px] font-black">{stat.value}</h2>
                        <p className="font-bold text-[16px]">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stats;
