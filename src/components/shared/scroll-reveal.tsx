"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function ScrollReveal({
    children,
    delay = 0,
    direction = "up",
    className = "",
}: {
    children: ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    className?: string;
}) {
    const directions = {
        up: { y: 30, x: 0 },
        down: { y: -30, x: 0 },
        left: { x: 30, y: 0 },
        right: { x: -30, y: 0 },
        none: { x: 0, y: 0 },
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                filter: "blur(10px)",
                ...directions[direction]
            }}
            whileInView={{
                opacity: 1,
                filter: "blur(0px)",
                x: 0,
                y: 0
            }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{
                type: "spring",
                damping: 25,
                stiffness: 80,
                mass: 1.2,
                delay: delay,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
