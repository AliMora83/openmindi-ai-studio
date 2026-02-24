interface SectionLabelProps {
    children: React.ReactNode;
    className?: string;
    light?: boolean;
}

export default function SectionLabel({ children, className = "", light = false }: SectionLabelProps) {
    return (
        <div className={`flex items-center gap-3 font-spacemono text-sm tracking-[0.15em] uppercase ${light ? 'text-ochre' : 'text-clay'} ${className}`}>
            <div className={`w-8 h-[2px] ${light ? 'bg-ochre' : 'bg-clay'}`} />
            <span>{children}</span>
        </div>
    );
}
