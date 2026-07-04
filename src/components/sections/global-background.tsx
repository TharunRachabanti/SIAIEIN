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
        <div className="fixed inset-0 z-[-50] overflow-hidden pointer-events-none perspective-[1000px]">
            {/* Background Base */}
            <div className="absolute inset-0 bg-[#0a0604]" />

            {/* Soft Ambient Orbs - Slowed down and softened */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.15, 0.25, 0.15],
                    x: ["0%", "2%", "0%"],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vh] bg-orange-600/30 blur-[150px] rounded-full"
            />
            <motion.div
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.1, 0.2, 0.1],
                    y: ["0%", "-3%", "0%"],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vh] bg-orange-500/20 blur-[180px] rounded-full"
            />

            {/* Subtle 3D Perspective Grid */}
            <div
                className="absolute inset-x-0 bottom-0 h-[70vh] opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                    transform: 'rotateX(60deg) scale(2) translateY(20%)',
                    transformOrigin: 'bottom center',
                    maskImage: 'linear-gradient(to top, black, transparent 80%)',
                    WebkitMaskImage: 'linear-gradient(to top, black, transparent 80%)'
                }}
            />
        </div>
    );
}
