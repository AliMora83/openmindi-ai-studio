"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="w-[84px] h-[34px]" />;

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="font-spacemono text-sm px-4 py-1.5 rounded-full border border-clay text-bark bg-transparent hover:bg-clay/10 transition-colors duration-300"
        >
            {theme === "dark" ? "☀ Light" : "☾ Dark"}
        </button>
    );
}
