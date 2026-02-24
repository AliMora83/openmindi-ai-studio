import RevealWrapper from "./ui/RevealWrapper";
import SectionLabel from "./ui/SectionLabel";
import { tools } from "@/lib/data";

export default function AiStack() {
    return (
        <section id="ai-stack" className="py-24 bg-cream overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <RevealWrapper className="flex flex-col items-center text-center mb-16">
                    <SectionLabel>Our Intelligence Stack</SectionLabel>
                    <h2 className="font-playfair font-bold text-4xl md:text-5xl text-bark mt-6 max-w-2xl">
                        Human directed. <em className="text-clay italic pr-1">AI accelerated.</em>
                    </h2>
                </RevealWrapper>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                    {tools.map((tool, i) => (
                        <RevealWrapper key={tool.name} delay={i * 0.1}>
                            <div className="bg-white p-6 md:p-8 rounded-[20px] border border-bark/5 hover:border-clay hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(193,98,47,0.08)] transition-all duration-300 h-full flex flex-col justify-between items-center text-center group">
                                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{tool.emoji}</div>
                                <div>
                                    <h3 className="font-playfair font-bold text-lg text-bark mb-2">{tool.name}</h3>
                                    <p className="font-dmsans text-[11px] md:text-xs text-muted leading-relaxed">{tool.use}</p>
                                </div>
                            </div>
                        </RevealWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
