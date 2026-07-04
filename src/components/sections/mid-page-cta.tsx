"use client";

import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { CalendlyButton } from "@/components/shared/calendly-button";
import * as React from "react";

export function MidPageCTA() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">
            <ScrollReveal delay={0.1}>
                <div className="bg-gradient-to-r from-orange-900/40 via-[#130a06] to-orange-900/20 border border-orange-500/20 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-[0_0_50px_rgba(249,115,22,0.1)]">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 blur-[100px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-600/10 blur-[100px] rounded-full pointer-events-none" />
                    
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 font-serif">Stop reading about the future.<br/>Start building it.</h2>
                        <p className="text-lg md:text-xl text-orange-200/70 mb-10">We deploy AI agents that do real work. Book a live demo to see how we can automate your most complex workflows.</p>
                        <CalendlyButton 
                            text="Book Live Demo"
                            className="w-full sm:w-auto h-12 text-lg"
                        />
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}
