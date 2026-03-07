"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function GlobalBackground() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 z-[-50] overflow-hidden pointer-events-none">
            {/* Background Base */}
            <div className="absolute inset-0 bg-slate-800" />

            {/* Soft Ambient Orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.25, 1],
                    opacity: [0.4, 0.6, 0.4],
                    x: ["0%", "5%", "0%"],
                    y: ["0%", "5%", "0%"],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vh] bg-blue-600/20 blur-[120px] rounded-full"
            />
            <motion.div
                animate={{
                    scale: [1, 1.35, 1],
                    opacity: [0.35, 0.55, 0.35],
                    x: ["0%", "-5%", "0%"],
                    y: ["0%", "-5%", "0%"],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vh] bg-cyan-500/30 blur-[150px] rounded-full"
            />

            {/* Grid Overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />
        </div>
    );
}
