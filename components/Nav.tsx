"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ui/ThemeToggle";

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Work", href: "#clients" },
        { name: "Projects", href: "#projects" },
    ];

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-cream/90 backdrop-blur-md border-b border-clay" : "bg-transparent border-b border-transparent"
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-clay" />
                        <span className="font-playfair font-black text-xl tracking-tight text-bark">
                            OpenMindi
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex items-center gap-6">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="font-dmsans text-sm font-medium text-bark hover:text-clay transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                        <div className="flex items-center gap-4">
                            <ThemeToggle />
                            <a
                                href="#contact"
                                className="font-spacemono uppercase tracking-wide text-xs px-5 py-2.5 bg-clay text-sand rounded-full hover:-translate-y-1 hover:shadow-[0_4px_14px_rgba(193,98,47,0.3)] transition-all duration-300"
                            >
                                Start a Project
                            </a>
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:flex hidden items-center justify-end w-full md:w-auto" />
                    <div className="md:hidden flex items-center gap-4">
                        <ThemeToggle />
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-bark p-2 -mr-2"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed inset-0 z-40 bg-cream/95 backdrop-blur-md pt-24 px-6 md:hidden overflow-hidden"
                    >
                        <div className="flex flex-col gap-6 items-center">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="font-playfair text-3xl text-bark hover:text-clay transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="mt-8 font-spacemono uppercase tracking-wider text-sm px-8 py-4 bg-clay text-sand rounded-full w-full max-w-[280px] text-center"
                            >
                                Start a Project
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
