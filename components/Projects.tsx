"use client";

import { useRef, useState } from "react";
import RevealWrapper from "./ui/RevealWrapper";
import SectionLabel from "./ui/SectionLabel";
import { projects } from "@/lib/data";

export default function Projects() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDown(true);
        if (!scrollRef.current) return;
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDown(false);
    };

    const handleMouseUp = () => {
        setIsDown(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDown || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 1.5;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <section id="projects" className="py-24 bg-bark overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <RevealWrapper>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div>
                            <SectionLabel light>Featured Work</SectionLabel>
                            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-sand mt-6">
                                Recent <em className="text-ochre italic pr-1">projects</em>
                            </h2>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-spacemono text-xs uppercase tracking-widest text-sand/50 hidden md:block">
                                Drag to explore
                            </span>
                            <div className="w-12 h-[1px] bg-sand/20 hidden md:block" />
                        </div>
                    </div>
                </RevealWrapper>
            </div>

            <div className="w-full relative px-6 md:px-0">
                <div
                    ref={scrollRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    className="flex overflow-x-auto hide-scrollbar gap-6 pb-8 pt-4 md:px-[max(1.5rem,calc((100vw-80rem)/2))] snap-x snap-mandatory cursor-grab active:cursor-grabbing"
                    style={{ scrollBehavior: isDown ? "auto" : "smooth" }}
                >
                    {projects.map((project, i) => (
                        <RevealWrapper key={project.title} delay={i * 0.1} className="snap-center shrink-0">
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group w-[300px] md:w-[380px] h-[420px] rounded-[24px] p-8 flex flex-col relative overflow-hidden transition-all duration-300 hover:-translate-y-2 border border-white/5 hover:border-gold/30"
                                style={{ background: project.gradient }}
                                draggable="false"
                            >
                                <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none" />

                                <div className="text-4xl mb-6 relative z-10 pointer-events-none">{project.emoji}</div>

                                <div className="mt-auto relative z-10 pointer-events-none">
                                    <span className="font-spacemono text-[10px] uppercase tracking-widest px-3 py-1 bg-black/20 backdrop-blur-md rounded-full text-white/80 border border-white/10 mb-4 inline-block">
                                        {project.tag}
                                    </span>
                                    <h3 className="font-playfair font-bold text-2xl text-white mb-3 group-hover:text-gold transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="font-dmsans text-white/70 font-light text-sm leading-relaxed line-clamp-3">
                                        {project.desc}
                                    </p>
                                </div>

                                <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 hover:scale-110 border border-white/20">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 13L13 1M13 1H3.4M13 1V10.6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </a>
                        </RevealWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
