export default function Footer() {
    const links = [
        { name: "Services", href: "#services" },
        { name: "Work", href: "#projects" },
        { name: "Contact", href: "#contact" }
    ];

    return (
        <footer className="bg-dusk pt-16 pb-8 border-t border-white/5 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-clay" />
                        <span className="font-playfair font-black text-2xl tracking-tight text-sand">
                            OpenMindi
                        </span>
                    </div>

                    <nav className="flex items-center gap-8">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="font-spacemono text-[10px] md:text-sm uppercase tracking-widest text-muted hover:text-gold transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5 font-dmsans text-muted text-xs md:text-sm font-light">
                    <p>© {new Date().getFullYear()} OpenMindi · Bloemfontein, SA · All rights reserved.</p>
                    <a href="https://mywork.namka.cloud" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors underline underline-offset-4">
                        Studio Portfolio
                    </a>
                </div>
            </div>
        </footer>
    );
}
