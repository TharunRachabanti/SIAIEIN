import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BarChart3, Clock, Zap, Target } from "lucide-react";
import * as React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import Link from "next/link";

export default function CaseStudiesPage() {
    return (
        <div className="flex flex-col min-h-screen w-full relative pt-24 overflow-hidden">
            {/* Background Map */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

            {/* Hero Section */}
            <ScrollReveal delay={0.1}>
                <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center text-center z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-8 tracking-widest uppercase shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                        <Target className="w-4 h-4" />
                        Proven Impact
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6">
                        Architectural<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Blueprints</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl text-balance leading-relaxed">
                        Explore our foundational agentic workflows. Build complex, reliable, and scalable automated workforces tailored to your exact industry.
                    </p>
                </section>
            </ScrollReveal>

            {/* Case Studies Container */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10 border-t border-white/5 space-y-24">

                {/* Case Study 1 */}
                <ScrollReveal delay={0.1} direction="up">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 space-y-8 block">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Logistics & Supply Chain</h2>
                                <p className="text-xl text-blue-400 font-medium mb-6">Automating High-Volume Invoice Processing</p>
                                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                    Logistics providers often drown in manual data entry, requiring large teams just to process vendor invoices. Our custom Finance Agent architecture extracts data from PDFs, verifies it against purchase orders in ERP systems, and drafts payment approvals autonomously.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-slate-800/50 border border-white/5 p-6 rounded-2xl">
                                    <div className="text-3xl font-black text-white mb-1">99.9%</div>
                                    <div className="text-sm text-gray-400 font-medium tracking-wide">Target Data Accuracy</div>
                                </div>
                                <div className="bg-slate-800/50 border border-white/5 p-6 rounded-2xl">
                                    <div className="text-3xl font-black text-white mb-1">450 hrs</div>
                                    <div className="text-sm text-gray-400 font-medium tracking-wide">Est. Saved / Week</div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 h-[450px] rounded-[2.5rem] bg-gradient-to-br from-blue-900/30 to-slate-800 border border-blue-500/20 relative overflow-hidden flex flex-col justify-end p-8 shadow-2xl group hover:border-blue-500/40 transition-colors duration-500">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8ed7a6a4c2?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay group-hover:scale-105 group-hover:opacity-30 transition-all duration-700"></div>
                            <div className="relative z-10 bg-black/60 backdrop-blur-xl border border-white/10 p-6 rounded-3xl">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                                        <Zap className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold tracking-wide">Agents Deployed</h4>
                                        <p className="text-blue-200/70 text-sm font-medium">Finance & Accounting Swarm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Case Study 2 */}
                <ScrollReveal delay={0.2} direction="up">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="h-[450px] rounded-[2.5rem] bg-gradient-to-br from-purple-900/30 to-slate-800 border border-purple-500/20 relative overflow-hidden flex flex-col justify-end p-8 shadow-2xl group hover:border-purple-500/40 transition-colors duration-500">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay group-hover:scale-105 group-hover:opacity-30 transition-all duration-700"></div>
                            <div className="relative z-10 bg-black/60 backdrop-blur-xl border border-white/10 p-6 rounded-3xl">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shrink-0">
                                        <BarChart3 className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold tracking-wide">Agents Deployed</h4>
                                        <p className="text-purple-200/70 text-sm font-medium">Sales Intelligence</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-8 block">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">SaaS Sales Swarm</h2>
                                <p className="text-xl text-purple-400 font-medium mb-6">Scaling outbound sales 10x with zero new SDRs</p>
                                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                    Fast-growing SaaS companies need to scale top-of-funnel outreach without quadrupling their teams. We design multi-agent sales swarms that research prospects on LinkedIn, draft hyper-personalized emails, execute follow-up sequences, and book meetings directly into CRMs.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-slate-800/50 border border-white/5 p-6 rounded-2xl">
                                    <div className="text-3xl font-black text-white mb-1">3.2x</div>
                                    <div className="text-sm text-gray-400 font-medium tracking-wide">Target meeting booking rate</div>
                                </div>
                                <div className="bg-slate-800/50 border border-white/5 p-6 rounded-2xl">
                                    <div className="text-3xl font-black text-white mb-1">0</div>
                                    <div className="text-sm text-gray-400 font-medium tracking-wide">New SDRs required</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Case Study 3 */}
                <ScrollReveal delay={0.3} direction="up">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 space-y-8 block">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">E-Commerce Support Mesh</h2>
                                <p className="text-xl text-cyan-400 font-medium mb-6">Targeting 70% instant ticket resolution</p>
                                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                    During holiday spikes, support teams are overwhelmed by "Where is my order" queries, driving up wait times. We architect Customer Support Agents that hook directly into Shopify and Zendesk, capable of retrieving order status, executing returns, and enforcing refund policies autonomously.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-slate-800/50 border border-white/5 p-6 rounded-2xl">
                                    <div className="text-3xl font-black text-white mb-1">70%+</div>
                                    <div className="text-sm text-gray-400 font-medium tracking-wide">Target auto-resolution</div>
                                </div>
                                <div className="bg-slate-800/50 border border-white/5 p-6 rounded-2xl">
                                    <div className="text-3xl font-black text-white mb-1">&lt; 1m</div>
                                    <div className="text-sm text-gray-400 font-medium tracking-wide">Target avg response time</div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 h-[450px] rounded-[2.5rem] bg-gradient-to-br from-cyan-900/30 to-slate-800 border border-cyan-500/20 relative overflow-hidden flex flex-col justify-end p-8 shadow-2xl group hover:border-cyan-500/40 transition-colors duration-500">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay group-hover:scale-105 group-hover:opacity-30 transition-all duration-700"></div>
                            <div className="relative z-10 bg-black/60 backdrop-blur-xl border border-white/10 p-6 rounded-3xl">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center shrink-0">
                                        <Clock className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold tracking-wide">Agents Deployed</h4>
                                        <p className="text-cyan-200/70 text-sm font-medium">Customer Support</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

            </section>

            {/* Bottom CTA */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-t from-blue-900/10 to-transparent border-t border-white/5 relative mt-12">
                <ScrollReveal delay={0.1}>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to build this infrastructure?</h2>
                        <p className="text-xl text-gray-400 mb-10 leading-relaxed font-light">
                            Stop throwing headcount at repetitive problems. Deploy an autonomous workforce.
                        </p>
                        <Link href="/contact" className="inline-block">
                            <Button size="lg" className="h-16 px-12 text-xl font-bold hover:scale-105 transition-transform shadow-[0_0_40px_rgba(59,130,246,0.3)]">
                                Start Your Transformation
                            </Button>
                        </Link>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    );
}
