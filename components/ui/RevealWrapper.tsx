"use client";

import { motion } from "framer-motion";

interface RevealWrapperProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}

export default function RevealWrapper({ children, delay = 0, className = "" }: RevealWrapperProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay }}
            viewport={{ once: true, margin: "-40px" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
