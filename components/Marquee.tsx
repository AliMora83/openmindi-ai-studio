export default function Marquee() {
    const items = [
        "React Development",
        "Brand Identity",
        "AI-Powered Design",
        "Next.js & Tailwind",
        "Web3 & NFT",
        "Landing Pages",
        "SaaS Interfaces",
        "MongoDB & Firebase",
        "South Africa · Remote"
    ];

    return (
        <div className="bg-clay py-[14px] overflow-hidden whitespace-nowrap flex items-center border-y border-bark/10 relative z-20">
            <div className="animate-marquee inline-flex items-center">
                {/* Duplicate arrays for seamless scrolling */}
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="inline-flex items-center">
                        {items.map((item, index) => (
                            <div key={`${i}-${index}`} className="inline-flex items-center">
                                <span className="font-spacemono text-[0.72rem] tracking-widest uppercase text-white/70 mx-6">
                                    {item}
                                </span>
                                <span className="text-gold text-[0.72rem] select-none">✦</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
