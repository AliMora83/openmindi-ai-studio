"use client";

import RevealWrapper from "./ui/RevealWrapper";
import SectionLabel from "./ui/SectionLabel";

const testimonials = [
    {
        quote: "OpenMindi delivered our full website and brand identity in under a week. The quality was exceptional — way beyond what we expected at this price point.",
        author: "Micassa Suites",
        role: "Hospitality · Kampala, Uganda",
        initials: "MC",
        result: "Delivered in 5 days"
    },
    {
        quote: "Ali understood exactly what Sifinet needed — a site that works as hard as we do. Professional, fast, and genuinely invested in our success.",
        author: "Sifinet Connect",
        role: "Connectivity · Bloemfontein",
        initials: "SF",
        result: "3× faster than previous agency"
    },
    {
        quote: "The AI-assisted approach meant we got research, copy, and design in one package. No back-and-forth with 3 different freelancers.",
        author: "IDBS Online Learning",
        role: "EdTech · Cape Town",
        initials: "IB",
        result: "One partner, full delivery"
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-warm-white">
            <div className="max-w-7xl mx-auto px-6">
                <RevealWrapper className="mb-16">
                    <SectionLabel className="font-spacemono text-clay">Client Results</SectionLabel>
                    <h2 className="font-playfair font-bold text-4xl md:text-5xl text-bark mt-6">
                        What clients say after working with us.
                    </h2>
                </RevealWrapper>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <RevealWrapper key={t.author} delay={i * 0.1}>
                            <div className="relative bg-cream rounded-2xl p-7 border-l-4 border-l-clay h-full flex flex-col">
                                {/* Result Pill */}
                                <div className="absolute top-6 right-6 bg-clay text-sand font-spacemono text-[0.65rem] uppercase tracking-widest px-3 py-1.5 rounded-full">
                                    {t.result}
                                </div>

                                <div className="mt-8 mb-6 flex-grow">
                                    <span className="absolute top-4 left-6 font-playfair italic text-clay text-[4rem] opacity-15 leading-none">
                                        &quot;
                                    </span>
                                    <p className="font-playfair italic text-bark text-xl leading-relaxed relative z-10">
                                        {t.quote}
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 mt-auto">
                                    <div className="w-10 h-10 rounded-full bg-sand flexItems-center justify-center font-playfair font-bold text-clay shrink-0 flex items-center">
                                        <span className="w-full text-center">{t.initials}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-dmsans font-semibold text-bark">{t.author}</span>
                                        <span className="font-spacemono text-[0.72rem] text-muted">{t.role}</span>
                                    </div>
                                </div>
                            </div>
                        </RevealWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
