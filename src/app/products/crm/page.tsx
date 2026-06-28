"use client";

import { Button } from "@/components/ui/button";
import { CalendlyButton } from "@/components/ui/calendly-button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { 
    Database, 
    Bot, 
    Zap, 
    TrendingUp, 
    LineChart, 
    MessageSquare, 
    Mail, 
    Linkedin, 
    Globe,
    CheckCircle2,
    ArrowRight,
    Workflow,
    Network,
    Server,
    Search,
    Shield
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import * as React from "react";

export default function CRMProductPage() {
    return (
        <div className="flex flex-col min-h-screen w-full relative pt-24 overflow-hidden bg-[#0a0604]">
            
            {/* Background effects */}
            <div className="absolute top-0 inset-x-0 h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/20 via-[#0a0604] to-[#0a0604] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none" />
            
            {/* 1. Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center z-10">
                <ScrollReveal delay={0.1}>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-sm font-bold mb-8 tracking-widest uppercase shadow-[0_0_15px_rgba(249,115,22,0.1)]">
                        <Database className="w-4 h-4" />
                        AI-Native CRM
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-8 font-serif leading-[1.1]">
                        Stop Managing Data.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Start Managing Outcomes.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto text-balance leading-relaxed mb-10 font-light">
                        The world's first CRM built from the ground up for AI agents. Data enters itself, agents work the leads, and records update autonomously.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
                        <CalendlyButton 
                            text="Book Live Demo"
                            className="w-full sm:w-auto h-12 text-lg"
                        />
                        <Button size="lg" variant="outline" className="h-14 px-10 text-base font-medium hover:scale-105 transition-transform bg-white/5 border-white/10 hover:bg-white/10">
                            Explore Architecture
                        </Button>
                    </div>

                    {/* Abstract Dashboard UI representation */}
                    <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[600px] bg-[#130a06] border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col group">
                        <div className="h-12 border-b border-white/10 bg-[#1a0f0a] flex items-center px-4 justify-between shrink-0">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-white/20" />
                                <div className="w-3 h-3 rounded-full bg-white/20" />
                                <div className="w-3 h-3 rounded-full bg-white/20" />
                            </div>
                            <div className="text-xs font-mono text-gray-500">app.siaiein.com/crm/dashboard</div>
                        </div>
                        <div className="flex-1 p-6 grid grid-cols-12 gap-6 relative">
                            {/* Overlay glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent pointer-events-none mix-blend-overlay" />
                            
                            {/* Sidebar */}
                            <div className="hidden md:flex col-span-3 flex-col gap-4 border-r border-white/5 pr-6">
                                {[1,2,3,4].map(i => (
                                    <div key={i} className={`h-10 rounded-lg flex items-center px-4 ${i===1 ? 'bg-orange-500/10 text-orange-500 border border-orange-500/20' : 'bg-white/5 text-gray-400'}`}>
                                        <div className={`w-4 h-4 rounded-sm ${i===1 ? 'bg-orange-500/50' : 'bg-gray-500/50'} mr-3`} />
                                        <div className="h-2 w-24 bg-current rounded-full opacity-50" />
                                    </div>
                                ))}
                            </div>
                            
                            {/* Main Content */}
                            <div className="col-span-12 md:col-span-9 flex flex-col gap-6">
                                {/* Top Stats */}
                                <div className="grid grid-cols-3 gap-4 h-24">
                                    {[
                                        { icon: LineChart, val: "84%", label: "Win Rate" },
                                        { icon: Zap, val: "2.4k", label: "Auto-Interactions" },
                                        { icon: Bot, val: "14", label: "Active Agents" }
                                    ].map((stat, i) => (
                                        <div key={i} className="bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col justify-center relative overflow-hidden group-hover:border-orange-500/20 transition-colors duration-700">
                                            <div className="absolute right-[-10%] top-[-10%] opacity-10">
                                                <stat.icon className="w-20 h-20 text-white" />
                                            </div>
                                            <div className="text-2xl md:text-3xl font-black text-white mb-1 font-serif">{stat.val}</div>
                                            <div className="text-xs text-gray-400">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                                {/* Pipeline */}
                                <div className="flex-1 bg-white/5 rounded-xl border border-white/5 p-6 relative overflow-hidden">
                                    <div className="flex justify-between items-end mb-6">
                                        <div className="h-4 w-32 bg-gray-400 rounded-full" />
                                        <div className="h-8 w-8 bg-orange-500/20 rounded-full border border-orange-500/50 flex items-center justify-center animate-pulse">
                                            <Bot className="w-4 h-4 text-orange-500" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 h-full">
                                        {[4,6,3,5].map((count, i) => (
                                            <div key={i} className="flex flex-col gap-3">
                                                <div className="h-2 w-full bg-gray-500/30 rounded-full mb-2" />
                                                {Array.from({length: count}).map((_, j) => (
                                                    <motion.div 
                                                        key={j} 
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.1 * (i + j) }}
                                                        className="h-16 bg-[#1a0f0a] border border-white/5 rounded-lg p-3 group-hover:border-orange-500/20"
                                                    >
                                                        <div className="h-2 w-3/4 bg-gray-400 rounded-full mb-3" />
                                                        <div className="h-2 w-1/2 bg-gray-600 rounded-full" />
                                                    </motion.div>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* 2. The Problem */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 relative z-10">
                <ScrollReveal delay={0.1}>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 font-serif">Traditional CRMs Are Broken</h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">They were built as digital filing cabinets. They require humans to feed them data, update them, and execute tasks based on them.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Manual Data Entry", desc: "Sales reps spend 30% of their time just logging calls, updating fields, and managing the CRM instead of selling." },
                            { title: "Stale Information", desc: "Because updating requires human intervention, records are almost always out of date by the time you review them." },
                            { title: "Missed Follow-ups", desc: "Even with reminders, human error means leads slip through the cracks and opportunities are lost permanently." }
                        ].map((pain, i) => (
                            <div key={i} className="bg-red-950/10 border border-red-900/30 p-8 rounded-3xl relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-red-600/50" />
                                <h3 className="text-xl font-bold text-white mb-4">{pain.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{pain.desc}</p>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </section>

            {/* 3. The Solution */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 relative z-10 bg-gradient-to-b from-orange-900/10 to-transparent rounded-[3rem]">
                <ScrollReveal delay={0.1}>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 font-serif">The AI-Native Approach</h2>
                        <p className="text-xl text-orange-200/70 max-w-2xl mx-auto">What if your CRM worked for you, instead of you working for your CRM?</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Data Enters Itself", desc: "Agents monitor emails, calls, and meetings, automatically extracting relevant information and updating the CRM instantly." },
                            { title: "Agents Work Leads", desc: "Autonomous sequences engage prospects, answer questions, and schedule meetings without human intervention." },
                            { title: "Self-Updating Records", desc: "As situations evolve, the CRM structure dynamically adapts. Fields are updated based on context, not manual input." }
                        ].map((solution, i) => (
                            <div key={i} className="bg-orange-500/5 border border-orange-500/20 p-8 rounded-3xl relative overflow-hidden group hover:bg-orange-500/10 transition-colors">
                                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6 border border-orange-500/30">
                                    <CheckCircle2 className="w-6 h-6 text-orange-500" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>
                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{solution.desc}</p>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </section>

            {/* 4. Core Features Grid */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 relative z-10">
                <ScrollReveal delay={0.1}>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-16 text-center font-serif">Core Capabilities</h2>
                </ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { icon: Database, title: "Autonomous Data Enrichment", desc: "When a new lead arrives, agents automatically scrape LinkedIn, company websites, and news to build a complete profile before you even see it." },
                        { icon: TrendingUp, title: "Predictive Lead Scoring", desc: "Machine learning models analyze historical conversion data to rank leads in real-time, directing your human team's attention exactly where it belongs." },
                        { icon: Workflow, title: "Automated Follow-up Sequences", desc: "Smart campaigns that adapt based on prospect replies. If a prospect asks a question, the agent answers it instead of just sending the next template." },
                        { icon: MessageSquare, title: "Conversational Intelligence", desc: "Transcribes calls, extracts action items, analyzes sentiment, and auto-generates follow-up emails, all synced directly to the deal record." }
                    ].map((feature, i) => (
                        <ScrollReveal key={i} delay={0.1 * i} direction="up">
                            <div className="bg-[#130a06] border border-white/5 hover:border-orange-500/30 p-8 md:p-10 rounded-3xl h-full transition-all duration-300 group hover:-translate-y-1">
                                <div className="flex items-center gap-6 mb-6">
                                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-orange-500/10 transition-colors border border-white/5 group-hover:border-orange-500/20">
                                        <feature.icon className="w-7 h-7 text-gray-400 group-hover:text-orange-500 transition-colors" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                                </div>
                                <p className="text-lg text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {feature.desc}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* 5. Interactive Architecture */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 relative z-10 overflow-hidden">
                <ScrollReveal delay={0.1}>
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 font-serif">How Information Flows</h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">A central intelligence layer connecting all your data sources.</p>
                    </div>

                    <div className="relative max-w-5xl mx-auto h-[500px] flex items-center justify-center">
                        {/* Connecting Lines */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" preserveAspectRatio="none">
                            <path d="M 20% 50% C 40% 50%, 40% 50%, 50% 50%" stroke="currentColor" strokeWidth="2" fill="none" className="text-orange-500 animate-pulse" />
                            <path d="M 20% 20% C 40% 20%, 40% 50%, 50% 50%" stroke="currentColor" strokeWidth="2" fill="none" className="text-orange-500" />
                            <path d="M 20% 80% C 40% 80%, 40% 50%, 50% 50%" stroke="currentColor" strokeWidth="2" fill="none" className="text-orange-500" />
                            <path d="M 50% 50% C 60% 50%, 70% 50%, 80% 50%" stroke="currentColor" strokeWidth="4" fill="none" className="text-orange-500" />
                        </svg>

                        {/* External Sources (Left) */}
                        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between py-10 w-1/4">
                            <div className="bg-[#130a06] border border-white/10 p-4 rounded-xl flex items-center gap-4 z-10">
                                <Mail className="w-6 h-6 text-blue-400" /> <span className="font-medium text-gray-300">Email Server</span>
                            </div>
                            <div className="bg-[#130a06] border border-white/10 p-4 rounded-xl flex items-center gap-4 z-10">
                                <Linkedin className="w-6 h-6 text-blue-600" /> <span className="font-medium text-gray-300">Social / LinkedIn</span>
                            </div>
                            <div className="bg-[#130a06] border border-white/10 p-4 rounded-xl flex items-center gap-4 z-10">
                                <Globe className="w-6 h-6 text-green-400" /> <span className="font-medium text-gray-300">Website Forms</span>
                            </div>
                        </div>

                        {/* AI Core (Center) */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                            <div className="w-40 h-40 bg-orange-500/10 border-2 border-orange-500 rounded-full flex flex-col items-center justify-center shadow-[0_0_60px_rgba(249,115,22,0.4)] relative">
                                <div className="absolute inset-0 rounded-full border-t-2 border-orange-400 animate-spin" style={{ animationDuration: '3s' }} />
                                <Network className="w-12 h-12 text-orange-500 mb-2" />
                                <span className="font-bold text-white tracking-wide">AI CORE</span>
                            </div>
                        </div>

                        {/* CRM Record (Right) */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/4 z-10">
                            <div className="bg-gradient-to-br from-[#1a0f0a] to-[#130a06] border-2 border-orange-500/30 p-6 rounded-2xl shadow-2xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:10px_10px]" />
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-4">
                                        <Database className="w-6 h-6 text-orange-500" />
                                        <h4 className="font-bold text-white">Unified Record</h4>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="h-2 w-full bg-orange-500/20 rounded-full" />
                                        <div className="h-2 w-4/5 bg-white/10 rounded-full" />
                                        <div className="h-2 w-5/6 bg-white/10 rounded-full" />
                                        <div className="h-2 w-2/3 bg-white/10 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* 6. Integration Logos */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 relative z-10">
                <ScrollReveal delay={0.1}>
                    <p className="text-center text-sm font-bold tracking-widest text-gray-500 uppercase mb-8">Works where your data lives</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        <span className="text-2xl font-black font-sans">Salesforce</span>
                        <span className="text-2xl font-black font-serif">HubSpot</span>
                        <span className="text-2xl font-black font-sans text-blue-500">Outlook</span>
                        <span className="text-2xl font-black font-sans text-red-500">Gmail</span>
                        <span className="text-2xl font-black font-sans text-blue-700">LinkedIn</span>
                        <span className="text-2xl font-black font-sans text-purple-500">Slack</span>
                    </div>
                </ScrollReveal>
            </section>

            {/* 7. Pricing/CTA */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-t from-orange-900/10 to-transparent border-t border-white/5 relative z-10">
                <ScrollReveal delay={0.1}>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 font-serif">Ready to upgrade your infrastructure?</h2>
                        <p className="text-xl text-gray-400 mb-10 leading-relaxed font-light">
                            Implementations begin with a comprehensive data audit. Book a call to see if an AI-Native CRM is right for your business.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <CalendlyButton 
                                text="Book Custom Implementation Call" 
                                className="w-full sm:w-auto h-12 text-lg"
                            />
                        </div>
                    </div>
                </ScrollReveal>
            </section>

        </div>
    );
}
