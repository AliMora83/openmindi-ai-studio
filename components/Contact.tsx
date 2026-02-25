"use client";

import { useState } from "react";
import RevealWrapper from "./ui/RevealWrapper";
import SectionLabel from "./ui/SectionLabel";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setStatus("success");
                (e.target as HTMLFormElement).reset();
                setTimeout(() => setStatus("idle"), 3000);
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="py-24 bg-sand">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    <RevealWrapper className="flex flex-col gap-8">
                        <div>
                            <SectionLabel>Let&apos;s Talk</SectionLabel>
                            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-bark mt-6 leading-tight max-w-md">
                                Ready to stop losing clients to a weak website?
                            </h2>
                        </div>

                        <p className="font-dmsans text-muted text-lg leading-relaxed max-w-md">
                            Tell us about your project. We respond within 24 hours and can usually start within the week.
                        </p>

                        <div className="flex flex-col gap-4 mt-4">
                            <a href="https://api.whatsapp.com/send?phone=27789658725" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-6 p-4 rounded-2xl hover:bg-white/40 transition-all duration-300">
                                <div className="w-12 h-12 rounded-full bg-clay/10 text-clay group-hover:bg-clay group-hover:text-sand flex items-center justify-center transition-colors shrink-0">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                </div>
                                <div className="flex flex-col flex-grow group-hover:pl-2 transition-all duration-300">
                                    <span className="font-spacemono text-[10px] uppercase tracking-widest text-muted">WhatsApp</span>
                                    <span className="font-dmsans font-medium text-bark">+27 78 965 8725</span>
                                </div>
                                <span className="text-clay opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
                            </a>

                            <a href="mailto:ali@openmindi.co.za" className="group flex items-center gap-6 p-4 rounded-2xl hover:bg-white/40 transition-all duration-300">
                                <div className="w-12 h-12 rounded-full bg-clay/10 text-clay group-hover:bg-clay group-hover:text-sand flex items-center justify-center transition-colors shrink-0">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                </div>
                                <div className="flex flex-col flex-grow group-hover:pl-2 transition-all duration-300">
                                    <span className="font-spacemono text-[10px] uppercase tracking-widest text-muted">Email</span>
                                    <span className="font-dmsans font-medium text-bark md:break-words break-all">ali@openmindi.co.za</span>
                                </div>
                                <span className="text-clay opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
                            </a>

                            <div className="flex items-center gap-6 p-4">
                                <div className="w-12 h-12 rounded-full bg-bark/5 text-bark flex items-center justify-center shrink-0">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-spacemono text-[10px] uppercase tracking-widest text-muted">Location</span>
                                    <span className="font-dmsans font-medium text-bark">South Africa · Remote worldwide</span>
                                </div>
                            </div>
                        </div>
                    </RevealWrapper>

                    <RevealWrapper delay={0.2}>
                        <form onSubmit={handleSubmit} className="bg-warm-white p-6 md:p-12 rounded-[24px] md:rounded-[32px] shadow-xl border border-bark/5 flex flex-col gap-6">

                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="font-spacemono text-[10px] uppercase tracking-widest text-muted ml-4">Name</label>
                                <input required type="text" id="name" name="name" className="w-full bg-cream border border-bark/10 rounded-full px-6 py-4 font-dmsans text-bark focus:outline-none focus:border-clay focus:ring-2 focus:ring-clay/20 transition-all" placeholder="John Doe" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="font-spacemono text-[10px] uppercase tracking-widest text-muted ml-4">Email</label>
                                <input required type="email" id="email" name="email" className="w-full bg-cream border border-bark/10 rounded-full px-6 py-4 font-dmsans text-bark focus:outline-none focus:border-clay focus:ring-2 focus:ring-clay/20 transition-all" placeholder="john@example.com" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="service" className="font-spacemono text-[10px] uppercase tracking-widest text-muted ml-4">Service Required</label>
                                <div className="relative">
                                    <select required id="service" name="service" defaultValue="" className="w-full bg-cream border border-bark/10 rounded-full px-6 py-4 font-dmsans text-bark focus:outline-none focus:border-clay focus:ring-2 focus:ring-clay/20 transition-all appearance-none pr-12">
                                        <option value="" disabled hidden>Select a service...</option>
                                        <option value="AI-Powered Landing Page">AI-Powered Landing Page</option>
                                        <option value="Brand Identity System">Brand Identity System</option>
                                        <option value="SaaS / App Interface">SaaS / App Interface</option>
                                        <option value="AI Chatbot Integration">AI Chatbot Integration</option>
                                        <option value="Web3 / NFT Platform">Web3 / NFT Platform</option>
                                        <option value="Other">Other / Let&apos;s talk</option>
                                    </select>
                                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-bark/50">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="font-spacemono text-[10px] uppercase tracking-widest text-muted ml-4">Project Details</label>
                                <textarea required id="message" name="message" rows={4} className="w-full bg-cream border border-bark/10 rounded-[28px] px-6 py-4 font-dmsans text-bark focus:outline-none focus:border-clay focus:ring-2 focus:ring-clay/20 transition-all resize-none" placeholder="Tell us about your goals, timeline, and budget..." />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "loading" || status === "success"}
                                className={`mt-4 w-full font-spacemono uppercase tracking-wider text-sm px-8 py-5 rounded-full transition-all duration-300 ${status === "success" ? "bg-moss text-sand" : "bg-clay text-sand hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(193,98,47,0.35)]"}`}
                            >
                                {status === "loading" ? "Sending..." : status === "success" ? "Message Sent ✓" : "Send My Project Brief →"}
                            </button>

                            {status === "error" && (
                                <p className="text-center text-sm font-dmsans text-red-500 mt-2">Something went wrong. Please try again directly at ali@openmindi.co.za</p>
                            )}
                        </form>
                    </RevealWrapper>
                </div>
            </div>
        </section>
    );
}
