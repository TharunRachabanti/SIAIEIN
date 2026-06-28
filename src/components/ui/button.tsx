"use client";

import * as React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline" | "ghost" | "link" | "glowing"
    size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", ...props }, ref) => {
        if (variant === "glowing") {
            const isLg = size === "lg";
            const isSm = size === "sm";
            return (
                <div className={cn(
                    "group relative inline-flex items-center justify-center overflow-hidden p-[1px] shadow-[0_0_20px_rgba(249,115,22,0.15)]", 
                    isLg ? "rounded-[22px]" : (isSm ? "rounded-[10px]" : "rounded-xl"),
                    className
                )}>
                    <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,rgba(249,115,22,0)_0%,rgba(249,115,22,1)_50%,rgba(249,115,22,0)_100%)]" />
                    <motion.button
                        ref={ref}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={cn(
                            "inline-flex h-full w-full items-center justify-center gap-2 bg-[#130a06]/95 text-sm font-semibold tracking-wide text-orange-50 backdrop-blur-xl transition-all group-hover:bg-[#1a0f0a]/80",
                            {
                                "px-6 py-2 h-10 rounded-[11px]": size === "default",
                                "px-3 h-9 rounded-[9px]": size === "sm",
                                "px-8 h-14 text-base rounded-[20px]": size === "lg",
                                "w-10 h-10 rounded-[11px]": size === "icon",
                            }
                        )}
                        {...(props as any)}
                    />
                </div>
            )
        }

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                    {
                        "bg-orange-500/10 border border-orange-500/50 hover:bg-orange-500/20 hover:border-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] text-orange-50 transition-all duration-300":
                            variant === "default",
                        "border border-white/10 bg-[#130a06] hover:bg-[#1a0f0a] text-white hover:border-orange-500/50 shadow-[0_4px_20px_rgba(0,0,0,0.4)]":
                            variant === "outline",
                        "hover:bg-white/10 hover:text-white": variant === "ghost",
                        "text-orange-500 underline-offset-4 hover:underline": variant === "link",
                        "h-10 px-6 py-2": size === "default",
                        "h-9 rounded-lg px-3": size === "sm",
                        "h-14 rounded-2xl px-8 text-base": size === "lg",
                        "h-10 w-10 rounded-xl": size === "icon",
                    },
                    className
                )}
                {...(props as any)}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
