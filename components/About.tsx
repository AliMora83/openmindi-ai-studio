"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import RevealWrapper from "./ui/RevealWrapper";
import SectionLabel from "./ui/SectionLabel";

function Counter({ from, to, duration, suffix = "" }: { from: number; to: number; duration: number; suffix?: string }) {
    const [count, setCount] = useState(from);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            let startTimestamp: number;
            const step = (timestamp: number) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
                const easeProgress = 1 - Math.pow(1 - progress, 4); // easeOutQuart
                setCount(Math.floor(easeProgress * (to - from) + from));
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
    }, [isInView, from, to, duration]);

    return <div ref={ref} className="font-playfair text-4xl md:text-5xl text-clay mb-2">{count}{suffix}</div>;
}

export default function About() {
    return (
        <section id="about" className="py-24 bg-cream overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left - Decorative Frame */}
                    <RevealWrapper delay={0.2} className="relative w-full max-w-md mx-auto lg:max-w-none">
                        {/* Kente Accent Grid */}
                        <div className="absolute -top-12 -right-8 w-32 h-32 rotate-12 z-20 hidden md:grid grid-cols-4 grid-rows-4 gap-1 transform-gpu shadow-xl">
                            {Array.from({ length: 16 }).map((_, i) => {
                                const colors = ['bg-clay', 'bg-gold', 'bg-moss', 'bg-bark'];
                                return <div key={i} className={`${colors[i % 4]} rounded-sm w-full h-full opacity-90`} />
                            })}
                        </div>

                        <div className="relative aspect-[4/5] rounded-[30px] overflow-hidden shadow-[0_20px_40px_rgba(46,26,14,0.15)] bg-gradient-to-br from-bark to-clay isolate">
                            <div className="absolute inset-0 kente-pattern-diagonal z-10" />

                            <div className="absolute inset-0 mix-blend-overlay opacity-30 bg-noise pointer-events-none" />

                            {/* Name Card */}
                            <div className="absolute bottom-6 left-6 right-6 z-20 bg-cream/90 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg">
                                <h3 className="font-playfair font-bold text-2xl text-bark">Daurius Swarts</h3>
                                <p className="font-spacemono text-[10px] md:text-xs uppercase tracking-widest text-clay mt-1">Founder · Ali Mora · AI Studio Lead</p>
                            </div>
                        </div>
                    </RevealWrapper>

                    {/* Right - Content */}
                    <div className="flex flex-col gap-8">
                        <RevealWrapper>
                            <SectionLabel>About the Studio</SectionLabel>
                            <h2 className="font-playfair font-bold text-4xl md:text-5xl leading-tight mt-6 text-bark">
                                Built in <em className="text-clay italic pr-1">Africa.</em><br />
                                Built for the world.
                            </h2>
                        </RevealWrapper>

                        <RevealWrapper delay={0.1}>
                            <div className="space-y-6 font-dmsans text-muted font-light text-lg leading-[1.75]">
                                <p>
                                    Born Daurius Swarts — a.k.a. Ali Mora. We started with WordPress but quickly realized it was too slow for the modern web. Now, we use Next.js, React, and an advanced AI stack to build platforms that look premium and run blazingly fast.
                                </p>
                                <p>
                                    We don&apos;t just build websites; we build digital businesses. Whether you&apos;re a local Bloemfontein startup or an international brand, we deliver agency-quality work in days, not months.
                                </p>
                            </div>
                        </RevealWrapper>

                        {/* Stats Row */}
                        <RevealWrapper delay={0.2}>
                            <div className="grid grid-cols-3 gap-6 py-8 my-4 border-y border-clay/20">
                                <div className="flex flex-col">
                                    <Counter from={0} to={10} duration={1.4} suffix="+" />
                                    <span className="font-spacemono text-[10px] md:text-xs uppercase tracking-widest text-muted">Years</span>
                                </div>
                                <div className="flex flex-col border-l border-clay/20 pl-4 md:pl-6">
                                    <Counter from={0} to={6} duration={1.4} suffix="+" />
                                    <span className="font-spacemono text-[10px] md:text-xs uppercase tracking-widest text-muted">Clients</span>
                                </div>
                                <div className="flex flex-col border-l border-clay/20 pl-4 md:pl-6">
                                    <Counter from={0} to={3} duration={1.4} suffix="×" />
                                    <span className="font-spacemono text-[10px] md:text-xs uppercase tracking-widest text-muted">Faster</span>
                                </div>
                            </div>
                        </RevealWrapper>

                        {/* Tools Grid */}
                        <RevealWrapper delay={0.3}>
                            <div className="flex flex-wrap gap-2 md:gap-3">
                                {['React', 'Next.js', 'Tailwind', 'TypeScript', 'MongoDB', 'Web3'].map(tag => (
                                    <span key={tag} className="font-spacemono text-[10px] md:text-xs uppercase tracking-widest px-3 md:px-4 py-2 border border-bark/10 rounded-full text-bark/70 hover:bg-bark/5 transition-colors">
                                        {tag}
                                    </span>
                                ))}
                                {['Claude AI', 'Gemini', 'Kimi'].map(ai => (
                                    <span key={ai} className="font-spacemono text-[10px] md:text-xs uppercase tracking-widest px-3 md:px-4 py-2 bg-clay/10 border border-clay/30 rounded-full text-clay hover:bg-clay/20 transition-colors">
                                        {ai}
                                    </span>
                                ))}
                            </div>
                        </RevealWrapper>

                    </div>
                </div>
            </div>
        </section>
    );
}
