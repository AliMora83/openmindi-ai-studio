import RevealWrapper from "./ui/RevealWrapper";
import SectionLabel from "./ui/SectionLabel";
import { steps } from "@/lib/data";

export default function Process() {
    return (
        <section id="process" className="py-24 bg-sand overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <RevealWrapper className="flex flex-col items-center text-center mb-16">
                    <SectionLabel>How We Work</SectionLabel>
                    <h2 className="font-playfair font-bold text-4xl md:text-5xl text-bark mt-6 max-w-2xl">
                        A fluid process designed for <em className="text-clay italic pr-1">speed and scale.</em>
                    </h2>
                </RevealWrapper>

                <RevealWrapper delay={0.2}>
                    <div className="bg-clay/20 p-[2px] rounded-[24px] md:rounded-[32px] overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-clay/20">
                            {steps.map((step) => (
                                <div
                                    key={step.num}
                                    className="bg-sand hover:bg-cream transition-colors duration-500 p-8 md:p-12 relative overflow-hidden group flex flex-col items-start h-full"
                                >
                                    <div className="absolute -top-6 -right-4 font-playfair font-black text-[8rem] text-bark opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none select-none leading-none">
                                        {step.num}
                                    </div>

                                    <div className="font-spacemono text-clay text-xs tracking-widest uppercase mb-4">
                                        Phase {step.num}
                                    </div>

                                    <h3 className="font-playfair font-bold text-2xl md:text-3xl text-bark mb-4 relative z-10 w-full flex justify-between items-center">
                                        {step.name}
                                    </h3>

                                    <p className="font-dmsans text-muted font-light leading-relaxed mb-10 relative z-10 flex-grow max-w-sm">
                                        {step.desc}
                                    </p>

                                    <div className="mt-auto relative z-10 py-1.5 px-3 bg-white/50 border border-clay/20 rounded-full font-spacemono text-[10px] md:text-xs text-clay uppercase tracking-wider backdrop-blur-sm">
                                        {step.ai}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </RevealWrapper>
            </div>
        </section>
    );
}
