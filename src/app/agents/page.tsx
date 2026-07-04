"use client";

import { agentsData } from "@/lib/data/agents";
import {
    TrendingUp, MessageSquare, Search, Settings, DollarSign, Users, BarChart3, ArrowRight
} from "lucide-react";
import * as React from "react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { CalendlyButton } from "@/components/shared/calendly-button";
import Image from "next/image";
import Link from "next/link";

const iconMap: Record<string, React.ElementType> = {
    TrendingUp, MessageSquare, Search, Settings, DollarSign, Users, BarChart3,
};

export default function AgentsPage() {
    return (
        <div className="flex flex-col min-h-screen w-full bg-[#0a0502] pt-24">

            {/* ── HERO ── */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
                <ScrollReveal delay={0.1}>
                    <p className="section-label mb-4">Agent Directory</p>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
                        Our <span className="text-orange-500">AI Agents</span>
                    </h1>
                    <p className="text-stone-400 text-lg max-w-2xl mx-auto leading-relaxed text-balance mb-10">
                        Each agent is built to handle a specific part of your business, start to finish, without needing a human to run it.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/[0.04] border border-white/[0.08] rounded-full text-sm font-medium text-stone-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                            Enterprise Grade Security
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/[0.04] border border-white/[0.08] rounded-full text-sm font-medium text-stone-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                            Your Data Stays Yours
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* ── ARCHITECTURE VISUAL ── */}
            <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full pb-24">
                <ScrollReveal delay={0.2} direction="up">
                    <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_0_100px_rgba(249,115,22,0.1)] bg-[#0e0703]">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0502] via-transparent to-transparent z-10" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0502]/80 via-transparent to-[#0a0502]/80 z-10" />
                        <Image
                            src="/images/arch_agents.png"
                            alt="Multi-Agent AI Architecture"
                            fill
                            className="object-cover opacity-80"
                        />
                        <div className="absolute bottom-8 left-8 z-20 max-w-sm">
                            <h3 className="text-xl font-bold text-white mb-2">Multi-Agent Orchestration</h3>
                            <p className="text-stone-400 text-sm leading-relaxed">
                                Our agents communicate with each other, share context, and execute complex workflows as a coordinated team.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* ── AGENTS GRID ── */}
            <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full border-t border-white/[0.06]">
                <ScrollReveal delay={0.1}>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white">Pre-Trained Roles</h2>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {agentsData.map((agent, i) => {
                        const Icon = iconMap[agent.iconName] || Settings;
                        return (
                            <ScrollReveal key={agent.slug} delay={0.05 * i} direction="up">
                                <Link href={`/agents/${agent.slug}`} className="block h-full group">
                                    <div className="card-surface p-8 h-full flex flex-col transition-all duration-300 hover:border-orange-500/30">
                                        <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                            <Icon className="w-6 h-6 text-orange-500" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">{agent.title}</h3>
                                        <p className="text-stone-400 leading-relaxed flex-1 mb-8">
                                            {agent.shortDescription}
                                        </p>
                                        <div className="flex items-center gap-2 text-sm font-semibold text-orange-500 mt-auto">
                                            View Agent
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 text-center border-t border-white/[0.06] mt-10 pb-40">
                <ScrollReveal delay={0.1}>
                    <div className="max-w-2xl mx-auto">
                        <p className="section-label mb-4">Get Started</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Deploy your first agent this week.
                        </h2>
                        <p className="text-stone-400 mb-10 text-balance leading-relaxed">
                            Book a free audit and we will walk you through which agents fit your business best.
                        </p>
                        <CalendlyButton text="Get Free Automation Audit" className="" />
                    </div>
                </ScrollReveal>
            </section>

        </div>
    );
}
