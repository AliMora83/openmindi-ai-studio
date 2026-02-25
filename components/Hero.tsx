"use client";

import { motion } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";

export default function Hero() {
    const staggerContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 32 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
    };

    // Spec requires em matching to be italic clay/gold - using non-italic text with bold color per the mock interpretation "faster wrapped in <em> -> italic gold color".
    // Note: the prompt says `We build faster with AI. You launch sooner.`
    return (
        <section id="hero" className="relative min-h-screen flex items-center bg-dusk overflow-hidden pt-20">
            {/* Background Layers */}
            <div className="absolute inset-0 z-0 kente-pattern-subtle opacity-40 mix-blend-overlay pointer-events-none" />

            {/* Orbs */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] rounded-full bg-clay/30 blur-[80px] animate-orb-drift" style={{ animationDelay: '0s' }} />
                <div className="absolute -bottom-[10%] -left-[10%] w-[400px] h-[400px] rounded-full bg-ochre/20 blur-[80px] animate-orb-drift" style={{ animationDelay: '-4s' }} />
                <div className="absolute top-[30%] left-[40%] w-[300px] h-[300px] rounded-full bg-moss/20 blur-[80px] animate-orb-drift" style={{ animationDelay: '-2s' }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10 py-12 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="show"
                        className="flex flex-col items-start gap-8"
                    >
                        <motion.div variants={fadeUp}>
                            <SectionLabel light>AI-Powered Web Studio · South Africa</SectionLabel>
                        </motion.div>

                        <motion.h1
                            variants={fadeUp}
                            className="text-sand font-playfair font-black text-5xl md:text-6xl lg:text-[4.8rem] leading-[1.05] tracking-tight text-balance"
                        >
                            Your website should be<br />
                            <em className="text-gold italic pr-1">winning clients.</em><br />
                            Ours make sure it does.
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            className="font-dmsans text-sand/60 font-light text-lg leading-[1.75] max-w-[420px]"
                        >
                            Most websites look fine but convert terribly — vague copy, weak calls to action, no clear reason to choose you. We fix that. AI-powered design and React development from South Africa, delivered in days, not weeks.
                        </motion.p>

                        <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-2">
                            <a href="https://mywork.namka.cloud/demos/website-roaster" className="font-spacemono uppercase tracking-wide text-sm px-8 py-4 bg-clay text-sand rounded-full hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(193,98,47,0.3)] transition-all duration-300">
                                Get a Free AI Audit →
                            </a>
                            <a href="#projects" className="btn-ghost font-spacemono uppercase tracking-wide text-sm px-8 py-4 bg-transparent border border-sand/30 text-sand rounded-full hover:border-sand hover:bg-sand/5 transition-all duration-300">
                                See Our Work
                            </a>
                        </motion.div>

                        <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-6">
                            {['React', 'Next.js', 'Brand Identity', 'Web3', 'AI-Assisted'].map(badge => (
                                <div key={badge} className="tag-pill font-spacemono uppercase text-[10px] tracking-wider px-3 py-1.5 border border-sand/20 rounded-full text-sand/70 bg-sand/5">
                                    {badge}
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Stats Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                        className="relative lg:ml-auto w-full max-w-md mt-10 md:mt-0"
                    >
                        {/* Floating pill */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="absolute -top-6 -right-2 md:-right-8 z-20 bg-clay shadow-[0_8px_30px_rgba(193,98,47,0.4)] rounded-full pl-3 pr-6 py-2.5 flex items-center gap-3 backdrop-blur-md"
                        >
                            <div className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sand opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-sand"></span>
                            </div>
                            <span className="font-spacemono text-sand text-xs tracking-wider uppercase">AI-Assisted Delivery</span>
                        </motion.div>

                        <div className="flex flex-col gap-4">
                            <div className="bg-white/5 border border-gold/15 backdrop-blur-xl rounded-[20px] p-8 md:p-10 shadow-2xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <h3 className="font-playfair text-7xl md:text-8xl text-clay mb-2 mix-blend-screen">3×</h3>
                                <p className="font-dmsans text-sand/90 text-lg md:text-xl font-light leading-relaxed">Faster delivery vs traditional agencies</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/5 border border-gold/15 backdrop-blur-xl rounded-[20px] p-6 text-center hover:-translate-y-1 transition-transform duration-300">
                                    <div className="font-playfair text-3xl md:text-4xl text-sand mb-2">10+</div>
                                    <div className="font-spacemono text-[10px] md:text-xs text-sand/60 uppercase tracking-widest">Projects</div>
                                </div>
                                <div className="bg-white/5 border border-gold/15 backdrop-blur-xl rounded-[20px] p-6 text-center hover:-translate-y-1 transition-transform duration-300">
                                    <div className="font-playfair text-3xl md:text-4xl text-sand mb-2">10+</div>
                                    <div className="font-spacemono text-[10px] md:text-xs text-sand/60 uppercase tracking-widest">Years Exp.</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
