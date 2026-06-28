import { Button } from "@/components/ui/button";
import { CalendlyButton } from "@/components/ui/calendly-button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle2, Bot, Code, Terminal, Network, Search, Cpu, Database } from "lucide-react";
import * as React from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { MidPageCTA } from "@/components/ui/mid-page-cta";

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen w-full relative pt-24 overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none" />

            {/* Hero Section */}
            <ScrollReveal delay={0.1}>
                <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center text-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 font-serif">
                        What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-400">Build</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-10 text-balance leading-relaxed">
                        We offer three core service areas — AI Automation, Intelligent Software Development, and Domain-Specific AI Agents.
                    </p>
                </section>
            </ScrollReveal>

            {/* Services Architect Container */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-24">

                {/* Service 1: AI Workflow Automation */}
                <ScrollReveal delay={0.1}>
                    <div id="automation" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch scroll-mt-32">
                        <div className="space-y-8 flex flex-col justify-center">
                            <div className="p-4 bg-orange-500/10 border border-orange-500/20 w-max rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                                <Network className="w-8 h-8 text-orange-500" />
                            </div>
                            <h2 className="text-4xl font-bold text-white font-serif">AI Workflow Automation</h2>
                            <p className="text-xl text-gray-400 leading-relaxed">
                                We design and deploy AI-powered workflows that replace manual processes across your business operations.
                            </p>
                            <div>
                                <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4">What we automate:</h4>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        "Customer support pipelines",
                                        "Sales outreach & follow-up",
                                        "Email triage & response",
                                        "Document processing & extraction",
                                        "Reporting & analytics",
                                        "Internal team coordination"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                            <span className="text-gray-300">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-[#130a06]/50 p-4 rounded-xl border border-white/5 inline-block">
                                <span className="text-sm text-gray-400 font-semibold mr-3">Tools we use:</span>
                                <span className="text-orange-500 font-bold">LangChain, n8n, CrewAI, Flowise, AutoGen</span>
                            </div>
                            <div className="pt-4">
                                <Link href="/services/ai-workflow-automation">
                                    <Button variant="outline" className="border-orange-500/30 text-orange-500 hover:bg-orange-500/10">
                                        Explore Automation Solutions
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="h-full min-h-[400px] w-full rounded-3xl bg-gradient-to-br from-[#130a06] to-[#130a06] border border-white/10 relative overflow-hidden group shadow-2xl">
                            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="p-8 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 group-hover:scale-105 transition-transform duration-500">
                                    <Network className="w-24 h-24 text-orange-500/80" />
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Service 2: Agentic AI Development */}
                <ScrollReveal delay={0.2}>
                    <div id="agentic-ai" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch scroll-mt-32">
                        <div className="order-2 lg:order-1 h-full min-h-[400px] w-full rounded-3xl bg-gradient-to-br from-[#130a06] to-[#130a06] border border-white/10 relative overflow-hidden group shadow-2xl">
                            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="p-8 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 group-hover:scale-105 transition-transform duration-500">
                                    <Bot className="w-24 h-24 text-purple-500/80" />
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 space-y-8 flex flex-col justify-center">
                            <div className="p-4 bg-purple-500/10 border border-purple-500/20 w-max rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                                <Bot className="w-8 h-8 text-purple-400" />
                            </div>
                            <h2 className="text-4xl font-bold text-white font-serif">Agentic AI Development</h2>
                            <p className="text-xl text-gray-400 leading-relaxed">
                                We build custom AI agents that can autonomously complete complex, multi-step tasks for your business.
                            </p>
                            <div>
                                <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4">What our agents can do:</h4>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        "Understand a goal & plan",
                                        "Use external tools & APIs",
                                        "Search the web & process docs",
                                        "Make context-based decisions",
                                        "Coordinate with other agents",
                                        "Report outcomes & escalate"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                                            <span className="text-gray-300">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-[#130a06]/50 p-4 rounded-xl border border-white/5 inline-block">
                                <span className="text-sm text-gray-400 font-semibold mr-3">Use cases:</span>
                                <span className="text-purple-400 font-bold">Sales, Support, Research, Operations, Finance</span>
                            </div>
                            <div className="pt-4">
                                <Link href="/services/agentic-ai-development">
                                    <Button variant="outline" className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10">
                                        Explore Agent Architectures
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                <MidPageCTA />

                {/* Service 3: Custom Software Development */}
                <ScrollReveal delay={0.1}>
                    <div id="software" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch scroll-mt-32">
                        <div className="space-y-8 flex flex-col justify-center">
                            <div className="p-4 bg-orange-500/10 border border-orange-500/20 w-max rounded-2xl shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                                <Code className="w-8 h-8 text-orange-500" />
                            </div>
                            <h2 className="text-4xl font-bold text-white font-serif">Custom Software Development</h2>
                            <p className="text-xl text-gray-400 leading-relaxed">
                                We build scalable digital products — from internal business tools to full SaaS platforms.
                            </p>
                            <div>
                                <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4">What we develop:</h4>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        "Web Applications",
                                        "Mobile Apps",
                                        "SaaS Platforms",
                                        "REST APIs & Integrations",
                                        "Business Dashboards",
                                        "Internal Automation Tools"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                            <span className="text-gray-300">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-[#130a06]/50 p-4 rounded-xl border border-white/5 inline-block">
                                <span className="text-sm text-gray-400 font-semibold mr-3">Tech stack:</span>
                                <span className="text-orange-500 font-bold">Python, FastAPI, React, Next.js, Node.js, AWS, GCP</span>
                            </div>
                            <div className="pt-4">
                                <Link href="/services/custom-software-development">
                                    <Button variant="outline" className="border-orange-500/30 text-orange-500 hover:bg-orange-500/10">
                                        Explore Development Capabilities
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="h-full min-h-[400px] w-full rounded-3xl bg-gradient-to-br from-[#130a06] to-[#130a06] border border-white/10 relative overflow-hidden group shadow-2xl">
                            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="p-8 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 group-hover:scale-105 transition-transform duration-500">
                                    <Code className="w-24 h-24 text-orange-500/80" />
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* Consulting & Data Engineering Grid */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Service 4: AI Consulting & Strategy */}
                    <ScrollReveal delay={0.1}>
                        <Card id="consulting" className="bg-[#130a06]/40 border-white/5 hover:border-orange-500/30 hover:bg-[#130a06] transition-all duration-300 h-full p-6 group scroll-mt-32">
                            <div className="p-4 bg-white/5 w-max rounded-xl mb-6 group-hover:bg-orange-500/20 group-hover:scale-110 transition-all duration-300">
                                <Search className="w-8 h-8 text-orange-500" />
                            </div>
                            <CardTitle className="text-2xl mb-4 group-hover:text-orange-500 transition-colors">AI Consulting & Strategy</CardTitle>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Not sure where to start with AI? We help companies build a clear roadmap for AI adoption.
                            </p>
                            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">What we offer:</h4>
                            <ul className="space-y-3">
                                {[
                                    "AI readiness assessment",
                                    "Workflow analysis & automation mapping",
                                    "AI tool selection & evaluation",
                                    "AI implementation roadmap",
                                    "Team training and onboarding"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                        <span className="text-gray-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-8">
                                <Link href="/services/ai-consulting-strategy">
                                    <Button variant="outline" className="w-full border-orange-500/30 text-orange-500 hover:bg-orange-500/10">
                                        Explore Strategy & Consulting
                                    </Button>
                                </Link>
                            </div>
                        </Card>
                    </ScrollReveal>

                    {/* Service 5: Data Engineering & AI Data Platforms */}
                    <ScrollReveal delay={0.2}>
                        <Card id="data" className="bg-[#130a06]/40 border-white/5 hover:border-emerald-500/30 hover:bg-[#130a06] transition-all duration-300 h-full p-6 group scroll-mt-32">
                            <div className="p-4 bg-white/5 w-max rounded-xl mb-6 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all duration-300">
                                <Database className="w-8 h-8 text-rose-400" />
                            </div>
                            <CardTitle className="text-2xl mb-4 group-hover:text-rose-400 transition-colors">Data Engineering & AI Platforms</CardTitle>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                AI is only powerful when built on clean, structured data. We build the data foundation your AI needs.
                            </p>
                            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">What we deliver:</h4>
                            <ul className="space-y-3 mb-8">
                                {[
                                    "Data pipelines & ETL systems",
                                    "Data lakes & warehouses",
                                    "Semantic search infrastructure",
                                    "Vector database setup",
                                    "AI-ready data platforms"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                        <span className="text-gray-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                                <span className="text-sm text-gray-400 font-semibold mr-3">Tools:</span>
                                <span className="text-rose-400 font-bold">Snowflake, Airflow, dbt, Pinecone, Weaviate</span>
                            </div>
                            <div className="pt-8">
                                <Link href="/services/data-engineering">
                                    <Button variant="outline" className="w-full border-emerald-500/30 text-rose-400 hover:bg-emerald-500/10">
                                        Explore Data Engineering
                                    </Button>
                                </Link>
                            </div>
                        </Card>
                    </ScrollReveal>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-24 px-4 text-center bg-gradient-to-t from-blue-900/10 to-transparent border-t border-white/5 mt-10">
                <ScrollReveal delay={0.1}>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-serif">Ready to transform your operations?</h2>
                    <CalendlyButton 
                        text="Book Your Free AI Audit" 
                        className="w-full sm:w-auto h-12 text-lg"
                    />
                </ScrollReveal>
            </section>
        </div>
    );
}
