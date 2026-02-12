
const SectionHeader = ({ badge, title, align = 'center', className = "" , titleClassName= ''}) => {
    const isCenter = align === 'center';

    return (
        <div className={`space-y-5 ${isCenter ? 'text-center' : 'text-left'} ${className}`}>
            <div className="relative inline-block">
                <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-full"></div>
                <div className="relative bg-white px-5 py-2 rounded-sm shadow-sm border border-border/50">
                    <span className="text-primary font-bold uppercase tracking-[0.2em] text-[11px]">{badge}</span>
                </div>
            </div>
            <h2 className={`text-[36px] md:text-[40px] font-black text-foreground ${titleClassName} tracking-tight leading-[1.1] ${isCenter ? 'max-w-3xl mx-auto' : ''}`}>
                {title}
            </h2>
        </div>
    );
};

export default SectionHeader;
