"use client";

import { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";
import { cn } from "@/lib/utils";

interface CalendlyButtonProps {
    url?: string;
    text: string;
    className?: string;
}

export function CalendlyButton({ 
    url = "https://calendly.com/tharunrachabanti/free-ai-audit", 
    text, 
    className 
}: CalendlyButtonProps) {
    const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

    useEffect(() => {
        // Safe check for document body on the client
        if (typeof window !== "undefined") {
            setRootElement(document.body);
        }
    }, []);

    const innerClasses = "inline-flex h-full w-full items-center justify-center gap-2 rounded-[11px] bg-[#130a06]/95 px-6 py-2 text-sm font-semibold tracking-wide text-orange-50 backdrop-blur-xl transition-all hover:bg-[#1a0f0a]/80";

    const Wrapper = ({ children }: { children: React.ReactNode }) => (
        <div className={cn("group relative inline-flex items-center justify-center overflow-hidden rounded-xl p-[1px] shadow-[0_0_20px_rgba(249,115,22,0.15)]", className)}>
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,rgba(249,115,22,0)_0%,rgba(249,115,22,1)_50%,rgba(249,115,22,0)_100%)]" />
            {children}
        </div>
    );

    if (!rootElement) {
        // Render a placeholder button during SSR
        return (
            <Wrapper>
                <button className={innerClasses} disabled>
                    {text}
                </button>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            <PopupButton
                url={url}
                rootElement={rootElement}
                text={text}
                className={innerClasses}
            />
        </Wrapper>
    );
}
