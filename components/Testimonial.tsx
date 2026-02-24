import RevealWrapper from "./ui/RevealWrapper";

export default function Testimonial() {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-clay to-bark flex items-center justify-center text-center">
            <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay pointer-events-none" />

            {/* Huge quote mark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] font-playfair font-black text-[20rem] md:text-[30rem] text-sand opacity-[0.03] select-none pointer-events-none leading-none scale-y-110">
                &quot;
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <RevealWrapper>
                    <blockquote className="font-playfair italic flex flex-col font-medium text-2xl md:text-3xl lg:text-4xl text-sand leading-relaxed md:leading-[1.6]">
                        &quot;OpenMindi doesn&apos;t just build websites — they build digital presences that actually work for your business. Fast, creative, and always ahead of the curve.&quot;
                    </blockquote>
                    <div className="mt-12 font-spacemono text-xs md:text-sm uppercase tracking-[0.15em] text-ochre">
                        Client Testimonial · Sifinet Connect, Bloemfontein
                    </div>
                </RevealWrapper>
            </div>
        </section>
    );
}
