import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Target, Shield, Users, Compass, Code } from "lucide-react";
import * as React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function VisionPage() {
    return (
        <div className="flex flex-col min-h-screen w-full relative pt-24 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[800px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />

            {/* Hero Section */}
            <ScrollReveal delay={0.1}>
                <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col items-center text-center">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-8">
                        We Are Building the <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Autonomous Economy</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-12 text-balance leading-relaxed">
                        This is not just a company. This is a long-term mission to change how the world works.
                    </p>
                </section>
            </ScrollReveal>

            {/* Belief & Problem Container */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <ScrollReveal delay={0.1} direction="right">
                        <div className="p-10 md:p-14 rounded-3xl bg-slate-800 border border-white/10 hover:border-indigo-500/30 transition-colors shadow-2xl h-full">
                            <h2 className="text-3xl font-bold text-white mb-6">Our Belief</h2>
                            <p className="text-xl text-gray-300 font-medium mb-6">Software should not just assist humans. Software should perform work.</p>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                Just as electricity transformed every industry 100 years ago, Agentic AI will transform business operations in the next decade. The companies that adopt autonomous systems early will operate 10 times faster than those that don't.
                            </p>
                            <p className="text-indigo-400 font-bold text-lg">We are building that infrastructure.</p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2} direction="left">
                        <div className="p-10 md:p-14 rounded-3xl bg-slate-800/50 border border-white/5 hover:border-blue-500/30 transition-colors shadow-xl h-full">
                            <h2 className="text-3xl font-bold text-white mb-6">The Problem With Today's AI</h2>
                            <p className="text-xl text-gray-300 font-medium mb-6">Most AI tools are impressive but limited.</p>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                They generate text, answer questions, and summarize documents — but they cannot take action. Businesses still need humans to operate tools, execute tasks, and manage every workflow.
                            </p>
                            <p className="text-blue-400 font-bold text-lg">This is the gap we are closing.</p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Rise of Digital Workers */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
                <ScrollReveal delay={0.1}>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">The Rise of Digital Workers</h2>
                    <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-10 text-balance font-light">
                        In the future, every business will have two types of workforce — human employees and AI employees.
                    </p>
                    <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12">
                        AI agents will handle operations, customer interactions, data analysis, research, and logistics. <strong className="text-white">Humans will focus entirely on creativity, strategy, innovation, and leadership.</strong>
                    </p>
                    <div className="inline-block px-8 py-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xl font-bold tracking-wide shadow-[0_0_40px_rgba(99,102,241,0.2)]">
                        This transition is already beginning. We are building the foundation for it.
                    </div>
                </ScrollReveal>
            </section>

            {/* 10-Year Roadmap */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 w-full bg-slate-800/50 border-y border-white/5 relative">
                <div className="max-w-4xl mx-auto">
                    <ScrollReveal delay={0.1}>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-20 text-center">Our 10-Year Roadmap</h2>
                    </ScrollReveal>

                    <div className="relative border-l-2 border-indigo-500/30 ml-4 md:ml-0 md:border-l-0">
                        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-600 transform -translate-x-1/2" />

                        {[
                            { phase: "Phase 1 — 2025 to 2027", title: "Core AI Infrastructure", desc: "Build specialized AI agents for business workflows. Automate the most common repetitive tasks across industries. Establish our AI development framework and delivery model." },
                            { phase: "Phase 2 — 2027 to 2030", title: "AI Agent Marketplace", desc: "Launch a marketplace where businesses can hire and deploy AI agents instantly. Integrate with all major business tools. Enable companies to build custom agents on our platform." },
                            { phase: "Phase 3 — 2030 to 2033", title: "Autonomous Business Systems", desc: "AI agents begin collaborating with each other. Entire departments operate autonomously. Businesses run with minimal manual intervention." },
                            { phase: "Phase 4 — 2033 to 2035+", title: "The Autonomous Economy", desc: "AI agents become a standard part of every business workforce. Millions of companies run operations through intelligent autonomous systems. Humans are freed to focus entirely on what only humans can do." }
                        ].map((milestone, i) => (
                            <div key={i} className={`relative flex items-center mb-16 md:mb-24 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                <div className="absolute left-[-21px] md:left-1/2 md:transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-slate-800 border-4 border-indigo-500 z-10 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                                    <div className="w-3 h-3 bg-white rounded-full" />
                                </div>
                                <div className={`ml-8 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'} w-full`}>
                                    <ScrollReveal delay={0.1} direction={i % 2 === 0 ? "right" : "left"}>
                                        <div className="bg-slate-800/40 p-8 rounded-3xl border border-white/5 hover:border-indigo-500/30 hover:bg-slate-800 hover:-translate-y-1 transition-all duration-300 shadow-xl group">
                                            <span className="text-indigo-400 font-black text-sm uppercase tracking-widest mb-3 block">{milestone.phase}</span>
                                            <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">{milestone.title}</h4>
                                            <p className="text-gray-400 text-lg leading-relaxed">{milestone.desc}</p>
                                        </div>
                                    </ScrollReveal>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Principles */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                <ScrollReveal delay={0.1}>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Our Principles</h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { icon: Bot, title: "Automation First", desc: "If a task is repetitive and rule-based, it should be automated. Human time is too valuable to spend on work machines can do." },
                        { icon: Target, title: "Acts, Not Answers", desc: "We believe the future of AI is not conversation. It is execution. Our systems complete work, not just respond to it." },
                        { icon: Users, title: "Amplifying Humans", desc: "We are not replacing human intelligence. We are amplifying it. The future belongs to humans and systems working together." },
                        { icon: Compass, title: "Industry-First", desc: "We don't build generic tools. We build deep, specific solutions that understand how each industry actually works." },
                        { icon: Code, title: "Long-Term Build", desc: "We are not optimizing for the next product launch. We are building infrastructure that will matter 20 years from now." }
                    ].map((principle, i) => (
                        <ScrollReveal key={i} delay={0.1 * i} direction="up">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-indigo-500/40 transition-all duration-300 h-full group">
                                <principle.icon className="w-10 h-10 text-indigo-400 mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">{principle.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{principle.desc}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* Our Mindset & Invitation */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full text-center border-t border-white/5 mt-10">
                <ScrollReveal delay={0.1}>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">Our Mindset</h2>
                    <p className="text-xl text-gray-300 leading-relaxed mb-6">
                        We do not follow trends. We study where the world is going and build for that destination before it arrives.
                    </p>
                    <p className="text-xl text-gray-400 leading-relaxed mb-16">
                        When we see a business problem we haven't solved before, we learn it, build a solution, and add it to our capabilities. We operate with the belief that <strong className="text-white">speed, depth of thinking, and genuine problem-solving are the only competitive advantages that last.</strong>
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={0.2} direction="up">
                    <div className="bg-gradient-to-br from-indigo-900/40 to-slate-800 border border-indigo-500/30 p-10 md:p-16 rounded-3xl shadow-[0_0_50px_rgba(99,102,241,0.15)]">
                        <h3 className="text-3xl font-bold text-white mb-8">An Invitation</h3>
                        <p className="text-xl text-gray-300 mb-4">We are at the very beginning of an enormous technological shift.</p>
                        <ul className="text-lg text-gray-400 space-y-4 mb-10">
                            <li>If you are a business that wants to operate in the future — we want to work with you.</li>
                            <li>If you are a builder who believes in autonomous systems — we want to build with you.</li>
                            <li>If you are an investor who sees what is coming — we want to grow with you.</li>
                        </ul>
                        <p className="text-2xl font-bold text-indigo-400 mb-10">The autonomous future is being built right now. We intend to build it well.</p>
                        <Button size="lg" className="h-14 px-10 text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(99,102,241,0.3)] bg-indigo-600 hover:bg-indigo-500">
                            Join Us — Book a Conversation <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    );
}
