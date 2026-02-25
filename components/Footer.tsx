import { Github, Palette, ShoppingBag, Briefcase, MessageCircle } from "lucide-react";

export default function Footer() {
    const links = [
        { name: "Services", href: "#services" },
        { name: "Work", href: "#projects" },
        { name: "Contact", href: "#contact" }
    ];

    const socials = [
        { name: "WhatsApp", url: "https://api.whatsapp.com/send?phone=27789658725", icon: MessageCircle },
        { name: "GitHub", url: "https://github.com/AliMora83", icon: Github },
        { name: "Behance", url: "https://www.behance.net/alimora", icon: Palette },
        { name: "Fiverr", url: "https://www.fiverr.com/s/pdRoaLN", icon: ShoppingBag },
        { name: "Upwork", url: "https://www.upwork.com/freelancers/~010ddd737e7e58b017", icon: Briefcase },
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

                {/* Socials Row */}
                <div className="flex justify-center flex-row gap-3 mb-8">
                    {socials.map((social) => {
                        const Icon = social.icon;
                        return (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noreferrer"
                                className="w-9 h-9 rounded-full border border-clay flex items-center justify-center text-muted hover:bg-clay hover:text-sand hover:scale-110 transition-all duration-300"
                                aria-label={social.name}
                            >
                                <Icon size={16} strokeWidth={1.5} />
                            </a>
                        );
                    })}
                </div>

                <div className="flex justify-center mb-6">
                    <a href="https://mywork.namka.cloud" target="_blank" rel="noreferrer" className="font-spacemono text-xs md:text-sm text-ochre hover:text-gold transition-colors">
                        🔥 See our AI tools → mywork.namka.cloud
                    </a>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5 font-dmsans text-bark/60 text-xs md:text-sm font-light">
                    <p>© {new Date().getFullYear()} OpenMindi · Bloemfontein, SA · All rights reserved.</p>
                    <a href="https://mywork.namka.cloud" target="_blank" rel="noreferrer" className="hover:text-ochre transition-colors underline underline-offset-4">
                        Studio Portfolio
                    </a>
                </div>
            </div>
        </footer>
    );
}
