import RevealWrapper from "./ui/RevealWrapper";
import SectionLabel from "./ui/SectionLabel";
import { clients } from "@/lib/data";

export default function Clients() {
    return (
        <section id="clients" className="py-24 bg-warm-white">
            <div className="max-w-7xl mx-auto px-6">
                <RevealWrapper>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                        <div>
                            <SectionLabel>Select Clients</SectionLabel>
                            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-bark mt-6">
                                Brands we&apos;ve partnered <em className="text-clay italic pr-1">with</em>
                            </h2>
                        </div>
                    </div>
                </RevealWrapper>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {clients.map((client, i) => (
                        <RevealWrapper key={client.name} delay={i * 0.1}>
                            <div className="group bg-cream rounded-[20px] p-6 border border-bark/5 hover:border-clay/20 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(193,98,47,0.06)] transition-all duration-300 h-full flex flex-col">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-clay flex items-center justify-center font-playfair font-bold text-lg text-sand shrink-0">
                                        {client.initials}
                                    </div>
                                    <div>
                                        <h3 className="font-playfair font-bold text-xl text-bark">{client.name}</h3>
                                        <p className="font-dmsans text-muted text-sm">{client.location}</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6 flex-grow items-start">
                                    {client.services.map(service => (
                                        <span key={service} className="font-spacemono text-[10px] uppercase tracking-wider px-2.5 py-1 bg-white border border-bark/10 rounded-md text-muted/80">
                                            {service}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-4 border-t border-bark/5 mt-auto">
                                    <span className="font-spacemono text-[10px] uppercase tracking-widest text-clay/70">
                                        Partner since {client.since}
                                    </span>
                                </div>
                            </div>
                        </RevealWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
