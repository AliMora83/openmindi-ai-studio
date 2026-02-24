"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
    const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Hide on mobile/touch devices
        if (window.matchMedia("(any-pointer: coarse)").matches) return;

        setIsVisible(true);

        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement | null;
            if (!target) return;

            const isPointer = window.getComputedStyle(target).cursor === "pointer";
            const isClickable = target.closest("a") || target.closest("button");

            if (isPointer || isClickable) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 bg-clay rounded-full pointer-events-none z-[100]"
                animate={{
                    x: mousePosition.x - 6,
                    y: mousePosition.y - 6,
                    scale: isHovering ? 1.8 : 1,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-9 h-9 border border-clay rounded-full pointer-events-none z-[99] opacity-50"
                animate={{
                    x: mousePosition.x - 18,
                    y: mousePosition.y - 18,
                    scale: isHovering ? 56 / 36 : 1,
                }}
                transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8 }}
            />
        </>
    );
}
