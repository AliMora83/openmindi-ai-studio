import RevealWrapper from "./ui/RevealWrapper";
import SectionLabel from "./ui/SectionLabel";
import { services } from "@/lib/data";

export default function Services() {
    return (
        <section id="services" className="py-24 bg-warm-white">
            <div className="max-w-7xl mx-auto px-6">
                <RevealWrapper>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                        <div>
                            <SectionLabel>Our Services</SectionLabel>
                            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-bark mt-6">
                                What we can build <em className="text-clay italic pr-1">for you</em>
                            </h2>
                        </div>
                        <p className="font-dmsans text-muted text-lg max-w-sm">
                            From one-page presentations to full-stack Web3 platforms.
                        </p>
                    </div>
                </RevealWrapper>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <RevealWrapper
                            key={service.name}
                            delay={i * 0.1}
                            className={service.featured ? "md:col-span-2 lg:col-span-2" : ""}
                        >
                            <div
                                className={`group h-full p-8 md:p-10 rounded-[24px] transition-all duration-300 hover:-translate-y-1.5 focus-within:-translate-y-1.5 relative overflow-hidden flex flex-col items-start ${service.featured
                                    ? "bg-bark text-sand hover:shadow-[0_20px_40px_rgba(46,26,14,0.15)]"
                                    : "bg-cream border border-bark/5 hover:border-clay/50 hover:shadow-[0_12px_30px_rgba(193,98,47,0.08)]"
                                    }`}
                            >
                                <div className={`text-4xl mb-6 p-4 rounded-2xl ${service.featured ? "bg-white/5" : "bg-warm-white shadow-sm"} inline-block`}>
                                    {service.icon}
                                </div>

                                <h3 className={`font-playfair font-bold text-2xl md:text-3xl mb-4 ${service.featured ? "text-sand" : "text-bark"}`}>
                                    {service.name}
                                </h3>

                                <p className={`font-dmsans font-light leading-relaxed mb-12 flex-grow ${service.featured ? "text-sand/80 text-lg" : "text-muted"}`}>
                                    {service.desc}
                                </p>

                                <div className={`mt-auto w-full pt-6 border-t ${service.featured ? "border-gold/20 flex items-center justify-between" : "border-bark/10"}`}>
                                    <span className={`font-spacemono uppercase tracking-widest text-xs md:text-sm ${service.featured ? "text-gold" : "text-clay"}`}>
                                        {service.price}
                                    </span>
                                    {service.featured && (
                                        <a href="#contact" className="font-spacemono uppercase tracking-wide text-xs px-5 py-2.5 bg-gold text-bark rounded-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                                            Launch My Landing Page →
                                        </a>
                                    )}
                                </div>

                                {/* Animated Bottom Border Accent */}
                                <div className={`absolute bottom-0 left-0 h-1 w-full scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 ${service.featured ? "bg-gradient-to-r from-gold to-ochre" : "bg-gradient-to-r from-clay to-gold"
                                    }`} />
                            </div>
                        </RevealWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
