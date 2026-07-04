import { notFound } from "next/navigation";
import { getIndustryBySlug, industriesData } from "@/lib/data/industries";
import {
    ShoppingBag, Rocket, Activity, Landmark, Factory, Store, Users, Scale,
} from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { CalendlyButton } from "@/components/shared/calendly-button";
import { ArchDiagram } from "@/components/sections/arch-diagram";
import NextImage from "next/image";
import Link from "next/link";
import * as React from "react";

const iconMap: Record<string, React.ReactNode> = {
    ShoppingBag: <ShoppingBag className="w-8 h-8 text-orange-500" />,
    Rocket:      <Rocket      className="w-8 h-8 text-orange-500" />,
    Activity:    <Activity    className="w-8 h-8 text-orange-500" />,
    Landmark:    <Landmark    className="w-8 h-8 text-orange-500" />,
    Factory:     <Factory     className="w-8 h-8 text-orange-500" />,
    Store:       <Store       className="w-8 h-8 text-orange-500" />,
    Users:       <Users       className="w-8 h-8 text-orange-500" />,
    Scale:       <Scale       className="w-8 h-8 text-orange-500" />,
};

const iconSmMap: Record<string, React.ReactNode> = {
    ShoppingBag: <ShoppingBag className="w-4 h-4 text-orange-500" />,
    Rocket:      <Rocket      className="w-4 h-4 text-orange-500" />,
    Activity:    <Activity    className="w-4 h-4 text-orange-500" />,
    Landmark:    <Landmark    className="w-4 h-4 text-orange-500" />,
    Factory:     <Factory     className="w-4 h-4 text-orange-500" />,
    Store:       <Store       className="w-4 h-4 text-orange-500" />,
    Users:       <Users       className="w-4 h-4 text-orange-500" />,
    Scale:       <Scale       className="w-4 h-4 text-orange-500" />,
};

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return industriesData.map((i) => ({ slug: i.slug }));
}

export default async function IndustryPage({ params }: PageProps) {
    const { slug } = await params;
    const industry = getIndustryBySlug(slug);
    if (!industry) notFound();

    return (
        <div className="flex flex-col min-h-screen w-full bg-[#0a0502] pt-20 md:pt-24">

            {/* ── 1. HERO ── */}
            <section className="relative min-h-[65vh] flex items-center justify-center py-16 md:py-24 overflow-hidden border-b border-white/[0.06]">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <NextImage
                        src={industry.heroImage}
                        alt={industry.title}
                        fill
                        className="object-cover opacity-40"
                        priority
                    />
                    {/* Gradients for blending */}
                    <div className="absolute inset-0 bg-[#0a0502]/40 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0502]/80 via-transparent to-[#0a0502] z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0502]/80 via-transparent to-[#0a0502]/80 z-10" />
                </div>

                {/* Content */}
                <div className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center mt-12">
                    <ScrollReveal delay={0.1}>
                        <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mx-auto mb-6 backdrop-blur-md shadow-[0_0_30px_rgba(249,115,22,0.15)]">
                            {iconMap[industry.iconName] || <Rocket className="w-8 h-8 text-orange-500" />}
                        </div>
                        <p className="text-xs font-bold tracking-widest text-orange-500 uppercase mb-4">Industry Solutions</p>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
                            AI for {industry.title}
                        </h1>
                        <p className="text-stone-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-balance">
                            {industry.shortDescription}
                        </p>
                    </ScrollReveal>
                </div>
            </section>


            {/* ── 2. WHAT IS THIS? ── */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 items-start">
                        <ScrollReveal delay={0.1}>
                            <p className="section-label mb-3">The Opportunity</p>
                            <h2 className="text-2xl font-bold text-white mb-5 leading-snug">AI in {industry.title}</h2>
                            <p className="text-stone-400 leading-relaxed text-[15px]">
                                {industry.whatIs}
                            </p>
                        </ScrollReveal>
                        <ScrollReveal delay={0.15} direction="up">
                            <div className="lg:pt-10">
                                <p className="text-xs font-bold tracking-widest text-orange-500 uppercase mb-4">What We Automate</p>
                                <div className="flex flex-col gap-2">
                                    {industry.features.map((f, i) => (
                                        <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/[0.07] bg-white/[0.03] hover:border-orange-500/25 hover:bg-white/[0.05] transition-all duration-200 group">
                                            <div className="w-6 h-6 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 group-hover:bg-orange-500/20 transition-colors">
                                                <span className="text-[9px] font-black text-orange-500">{String(i + 1).padStart(2, "0")}</span>
                                            </div>
                                            <span className="text-stone-300 text-sm font-medium">{f}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* ── 3. HOW WE SOLVE IT ── */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] bg-white/[0.01]">
                <div className="max-w-5xl mx-auto">
                    <ScrollReveal delay={0.1}>
                        <p className="section-label mb-3 text-center">Our Approach</p>
                        <h2 className="text-2xl font-bold text-white mb-10 text-center">How We Build It</h2>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {industry.howWeHelp.map((step, i) => (
                            <ScrollReveal key={i} delay={0.07 * i} direction="up">
                                <div className="card-surface p-6 h-full">
                                    <div className="text-4xl font-black text-orange-500/20 leading-none mb-4 select-none">
                                        {String(step.step).padStart(2, "0")}
                                    </div>
                                    <h3 className="text-sm font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-stone-500 text-xs leading-relaxed">{step.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 4. REAL-WORLD USE CASES ── */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
                <div className="max-w-5xl mx-auto">
                    <ScrollReveal delay={0.1}>
                        <p className="section-label mb-3">Real Examples</p>
                        <h2 className="text-2xl font-bold text-white mb-8">What This Looks Like in Your Industry</h2>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {industry.useCases.map((useCase, i) => (
                            <ScrollReveal key={i} delay={0.08 * i} direction="up">
                                <div className="card-surface p-6 h-full flex flex-col gap-3">
                                    <div className="w-7 h-7 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 text-xs font-black text-orange-500">
                                        {i + 1}
                                    </div>
                                    <p className="text-stone-300 text-sm leading-relaxed">{useCase}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 5. TECHNICAL ARCHITECTURE ── */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] bg-white/[0.01]">
                <div className="max-w-5xl mx-auto">
                    <ScrollReveal delay={0.1}>
                        <p className="section-label mb-3">How It Works Technically</p>
                        <h2 className="text-2xl font-bold text-white mb-8">System Architecture</h2>
                        <div className="rounded-2xl border border-white/[0.08] overflow-hidden mb-8">
                            <div className="bg-[#0e0703]/80 px-4 py-3 border-b border-white/[0.06] flex items-center gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                                </div>
                                <span className="text-stone-500 text-xs font-mono ml-2">{industry.slug} — industry-architecture</span>
                            </div>
                            <div className="p-4 md:p-8">
                                <ArchDiagram nodes={industry.architecture} />
                            </div>
                        </div>
                        <div>
                            <p className="text-xs font-bold tracking-widest text-stone-500 uppercase mb-3">Technology Stack</p>
                            <div className="flex flex-wrap gap-2">
                                {industry.techStack.map((tech, i) => (
                                    <span key={i} className="px-3 py-1.5 bg-white/[0.04] border border-white/[0.08] rounded-full text-stone-300 text-xs font-medium hover:border-orange-500/30 hover:text-white transition-colors cursor-default">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ── 6. CASE STUDY ── */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
                <div className="max-w-5xl mx-auto">
                    <ScrollReveal delay={0.1}>
                        <p className="section-label mb-3">Real Impact</p>
                        <h2 className="text-2xl font-bold text-white mb-8">Case Study</h2>
                        <div className="card-surface overflow-hidden">
                            <div className="p-6 md:p-8 border-b border-white/[0.06]">
                                <p className="text-xs font-bold tracking-widest text-orange-500 uppercase mb-2">Context</p>
                                <p className="text-stone-300 text-sm leading-relaxed">{industry.caseStudy.context}</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
                                <div className="p-6 md:p-8">
                                    <p className="text-xs font-bold tracking-widest text-stone-500 uppercase mb-3">The Problem</p>
                                    <p className="text-stone-400 text-sm leading-relaxed">{industry.caseStudy.challenge}</p>
                                </div>
                                <div className="p-6 md:p-8">
                                    <p className="text-xs font-bold tracking-widest text-orange-500 uppercase mb-3">What We Built</p>
                                    <p className="text-stone-300 text-sm leading-relaxed">{industry.caseStudy.result}</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.06] border-t border-white/[0.06]">
                                {industry.caseStudy.metrics.map((m, i) => (
                                    <div key={i} className="p-6 text-center">
                                        <p className="text-2xl font-black text-orange-500 mb-1">{m.value}</p>
                                        <p className="text-xs text-stone-500 font-semibold uppercase tracking-wider">{m.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ── 7. OTHER INDUSTRIES ── */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] bg-white/[0.01]">
                <div className="max-w-5xl mx-auto">
                    <ScrollReveal delay={0.1}>
                        <p className="section-label mb-3">More Industries</p>
                        <h2 className="text-xl font-bold text-white mb-6">Other Industries We Serve</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {industriesData
                                .filter(i => i.slug !== slug)
                                .slice(0, 4)
                                .map((ind, i) => (
                                    <Link key={i} href={`/industries/${ind.slug}`}>
                                        <div className="card-surface p-5 group cursor-pointer">
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="w-7 h-7 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                                                    {iconSmMap[ind.iconName]}
                                                </div>
                                                <h3 className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors">{ind.title}</h3>
                                            </div>
                                            <p className="text-stone-500 text-xs leading-relaxed pl-10">{ind.shortDescription}</p>
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ── 8. CTA ── */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 text-center border-t border-white/[0.06] pb-40">
                <ScrollReveal delay={0.1}>
                    <div className="max-w-xl mx-auto">
                        <p className="section-label mb-4">Get Started</p>
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Want to see what we can build for your business?
                        </h2>
                        <p className="text-stone-400 mb-8 text-balance leading-relaxed">
                            Book a free 30-minute audit. We will look at your specific workflows and show you exactly where AI can have the most impact.
                        </p>
                        <CalendlyButton text="Book Free AI Audit" className="" />
                    </div>
                </ScrollReveal>
            </section>

        </div>
    );
}
