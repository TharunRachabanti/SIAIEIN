"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ParallaxBackground({
    imageUrl,
    className = "",
    overlayClassName = "bg-[#130a06]/80 pointer-events-none",
}: {
    imageUrl: string;
    className?: string;
    overlayClassName?: string;
}) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <div ref={ref} className={`absolute inset-0 overflow-hidden pointer-events-none -z-10 ${className}`}>
            <motion.div
                style={{ y, scale }}
                className="absolute inset-0 w-full h-full"
            >
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('${imageUrl}')` }}
                />
            </motion.div>
            <div className={`absolute inset-0 w-full h-full ${overlayClassName}`} />
        </div>
    );
}
