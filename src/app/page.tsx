"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ArrowRight, BarChart3, ChevronRight, DollarSign, MessageSquare, Search, Settings, TrendingUp, CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";

import * as React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ParallaxBackground } from "@/components/ui/parallax-background";
import { AnimatedText } from "@/components/ui/animated-text";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full relative overflow-hidden">
      {/* Abstract Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-cyan-700/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-40 lg:pt-48 lg:pb-48 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center min-h-[90vh] justify-center">
        <ParallaxBackground imageUrl="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=3165&auto=format&fit=crop" className="opacity-70" overlayClassName="bg-gradient-to-b from-slate-800/80 via-slate-800/90 to-slate-800 pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
          <ScrollReveal delay={0.15}>
            {/* Formula Badge */}
            <motion.div
              className="mb-8 md:mb-10 relative inline-flex w-full sm:w-auto justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative px-4 sm:px-8 py-3 sm:py-4 rounded-[2rem] border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm shadow-[0_0_40px_rgba(6,182,212,0.08)]">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-cyan-500/5 pointer-events-none" />
                <div className="relative flex flex-wrap justify-center items-center gap-1.5 sm:gap-3 text-base sm:text-xl md:text-2xl lg:text-3xl font-black tracking-tight">
                  <span className="text-white">Imagination</span>
                  <span className="text-cyan-400">+</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">AI</span>
                  <span className="text-cyan-400">=</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">Innovation</span>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white max-w-5xl mb-6 md:mb-8 leading-[1.1]">
            <AnimatedText text="The Future of Work is" className="justify-center" delay={0.2} />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 to-blue-500 block mt-1 md:mt-2">Autonomous</span>
          </h1>

          <ScrollReveal delay={0.8} direction="up" className="w-full">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 md:mb-12 text-balance leading-relaxed px-2">
              We build Agentic AI Systems that think, decide, and execute tasks automatically — transforming how businesses operate from the ground up.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto justify-center items-center">
              <Button size="lg" className="w-full sm:w-auto gap-2 h-14 px-8 text-base sm:text-lg font-bold hover:scale-105 transition-transform shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                See AI Agents in Action <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base sm:text-lg font-bold bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 hover:scale-105 transition-all text-white">
                Get Free Automation Audit
              </Button>
            </div>
          </ScrollReveal>
        </div>

        {/* Trust Bar */}
        <div className="absolute bottom-10 left-0 w-full z-10 pointer-events-none">
          <ScrollReveal delay={1.0} direction="up">
            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6 opacity-60">Architected With</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-gray-500/80 font-bold text-sm md:text-base uppercase tracking-wider">
              <span>OpenAI</span>
              <span>Anthropic</span>
              <span>LangChain</span>
              <span>CrewAI</span>
              <span>n8n</span>
              <span>AWS</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section: The Problem */}
      <section className="py-16 md:py-24 bg-slate-800/40 border-y border-white/5 relative">
        <ScrollReveal delay={0.1}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">Businesses Are Drowning in Repetitive Work</h2>
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto text-balance">Every company wastes thousands of hours every month on work that should never require a human.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-4 md:space-y-6">
                {[
                  "Manual customer support responses",
                  "Data entry and report generation",
                  "Sales follow-ups and lead tracking",
                  "Internal coordination and scheduling",
                  "Document processing and analysis"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 sm:gap-4 bg-black/20 p-3 sm:p-4 rounded-xl border border-white/5">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                      <Zap className="h-4 w-4 md:h-5 md:w-5 text-red-500" />
                    </div>
                    <span className="text-gray-300 text-base md:text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-slate-800 border border-white/10 p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 blur-[80px] rounded-full pointer-events-none" />
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 relative z-10 text-balance">The old model is broken.</h3>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed relative z-10">
                  Hiring more employees is expensive. Traditional software still requires human operation. There had to be a better way — and now there is.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Section: The Solution */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />
        <ScrollReveal delay={0.1}>
          <div className="text-center max-w-4xl mx-auto relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-6 md:mb-8 leading-tight">
              Meet Agentic AI — Software That <span className="text-cyan-400 block sm:inline mt-2 sm:mt-0">Actually Does the Work</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 leading-relaxed font-light">
              Most AI tools generate responses. Our AI agents take action.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed text-balance">
              Agentic AI understands your goal, breaks it into steps, uses the right tools, executes the workflow, and learns from outcomes — all without human intervention.
            </p>
            <div className="mt-8 md:mt-12 inline-block px-6 py-3 md:px-8 md:py-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-base md:text-xl font-bold tracking-wide shadow-[0_0_40px_rgba(6,182,212,0.2)] text-balance">
              This is not automation. This is intelligence at work.
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Section: What Our AI Agents Do */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <ScrollReveal delay={0.1}>
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">Your New Digital Workforce</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { role: "Sales Agent", icon: TrendingUp, desc: "Qualifies leads, writes outreach, sends follow-ups, books meetings, and updates your CRM. All automatically.", bgImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" },
            { role: "Customer Support Agent", icon: MessageSquare, desc: "Handles tickets, answers FAQs, processes refunds, and resolves queries 24/7 without human involvement.", bgImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop" },
            { role: "Operations Agent", icon: Settings, desc: "Manages internal workflows, automates repetitive processes, and keeps your business running efficiently.", bgImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" },
            { role: "Research Agent", icon: Search, desc: "Tracks competitors, monitors market trends, collects intelligence, and delivers structured insight reports.", bgImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop" },
            { role: "Finance Agent", icon: DollarSign, desc: "Monitors expenses, processes invoices, flags anomalies, and generates financial summaries on demand.", bgImage: "https://images.unsplash.com/photo-1586528116311-ad8ed7a6a4c2?q=80&w=800&auto=format&fit=crop" },
            { role: "Data Analyst Agent", icon: BarChart3, desc: "Connects to your data sources, runs analysis, builds dashboards, and generates reports automatically.", bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" }
          ].map((agent, i) => (
            <ScrollReveal key={i} delay={0.1 * i} direction="up">
              <Card className="group overflow-hidden relative border-white/5 bg-slate-800/40 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-500 h-full hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)] flex flex-col">
                {/* Embedded Background Image */}
                <div
                  className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-cover bg-center mix-blend-overlay pointer-events-none"
                  style={{ backgroundImage: `url('${agent.bgImage}')` }}
                />

                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none z-0">
                  <agent.icon className="w-32 h-32 md:w-48 md:h-48 text-cyan-500 transform rotate-12" />
                </div>

                <CardHeader className="relative z-10 p-5 md:p-6 pb-2">
                  <div className="flex items-center gap-4 mb-2 md:mb-4">
                    <div className="p-3 md:p-4 bg-slate-800 border border-white/5 rounded-xl md:rounded-2xl group-hover:bg-cyan-500/20 group-hover:border-cyan-500/30 group-hover:scale-110 transition-all duration-300 shadow-xl shrink-0">
                      <agent.icon className="h-6 w-6 md:h-8 md:w-8 text-cyan-400 group-hover:text-cyan-300" />
                    </div>
                    <CardTitle className="text-xl md:text-2xl group-hover:text-cyan-400 transition-colors leading-tight">{agent.role}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10 p-5 md:p-6 pt-0 flex-1">
                  <p className="text-gray-400 text-base md:text-lg group-hover:text-gray-200 transition-colors leading-relaxed font-medium">{agent.desc}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Section: The Autonomous Advantage (Metrics) */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <ScrollReveal delay={0.1}>
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The Autonomous Advantage</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto text-balance">Target capabilities when upgrading from manual workflows to Agentic AI.</p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
            { metric: "10x", label: "Faster Operations", desc: "Target output speed vs human baseline" },
            { metric: "24/7", label: "Always Active", desc: "No breaks, no sick days, zero downtime" },
            { metric: "80%", label: "Cost Reduction", desc: "Simulated savings on overhead" },
            { metric: "< 1s", label: "Response Time", desc: "Instantaneous data processing" }
          ].map((stat, i) => (
            <ScrollReveal key={i} delay={0.1 * i} direction="up" className="h-full">
              <div className="text-center p-4 md:p-6 rounded-2xl md:rounded-3xl bg-slate-800/30 border border-white/5 hover:border-cyan-500/20 transition-colors h-full flex flex-col justify-center">
                <div className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-600 mb-2 md:mb-4">{stat.metric}</div>
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">{stat.label}</h4>
                <p className="text-xs sm:text-sm text-gray-400">{stat.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Section: Why We Are Different */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center border-t border-white/5">
        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 md:mb-8 leading-tight text-balance">We Don't Build Chatbots. <br className="hidden sm:block" /><span className="text-blue-400 mt-2 block sm:inline">We Build AI Workers.</span></h2>
          <div className="bg-gradient-to-br from-slate-800 to-slate-800 border border-white/10 p-6 md:p-16 rounded-2xl md:rounded-3xl shadow-2xl text-left hover:border-blue-500/30 transition-colors duration-500">
            <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
              Most AI companies build tools that assist humans. <strong className="text-white">We build systems that replace repetitive work entirely.</strong>
            </p>
            <p className="text-lg md:text-xl text-gray-400 mb-8 md:mb-10 leading-relaxed">
              Our AI agents can plan tasks, use APIs, execute multi-step workflows, coordinate with other agents, and complete real business objectives from start to finish.
            </p>
            <div className="border-l-4 border-blue-500 pl-4 md:pl-6 py-2">
              <p className="text-lg md:text-2xl font-bold text-blue-400 leading-snug">
                This is Agentic AI Infrastructure — and it is the next evolution of enterprise software.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Section: How It Works */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <ScrollReveal delay={0.1}>
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">From Workflow to Autonomous Operation in 5 Steps</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 relative">
          <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-cyan-500/0 via-cyan-500 to-cyan-500/0" />
          {[
            { title: "Audit", desc: "We analyze your business and identify every repetitive task" },
            { title: "Design", desc: "We design specialized AI agents for those tasks" },
            { title: "Integrate", desc: "Agents connect with your tools, APIs, and databases" },
            { title: "Deploy", desc: "Agents begin executing work autonomously" },
            { title: "Optimize", desc: "AI continuously learns and improves performance" }
          ].map((step, i) => (
            <ScrollReveal key={i} delay={0.1 * i} direction="up" className="h-full">
              <div className="relative z-10 flex flex-col items-center text-center group bg-slate-800/50 p-5 md:p-6 rounded-xl md:rounded-2xl h-full border border-white/5 hover:bg-slate-800 hover:border-cyan-500/30 transition-all duration-300">
                <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full bg-slate-800 border-2 border-cyan-500 flex items-center justify-center text-lg md:text-xl font-bold text-cyan-400 mb-4 md:mb-6 shadow-[0_0_15px_rgba(6,182,212,0.3)] group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
                  {i + 1}
                </div>
                <h4 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-cyan-400 transition-colors">{step.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors mx-auto max-w-[250px] lg:max-w-none">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Section: Industries We Serve */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 md:mb-12 text-center text-balance">AI Solutions Built for Your Industry</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {[
            "E-commerce", "SaaS & Technology", "Healthcare", "Finance & Accounting",
            "Manufacturing", "Retail", "HR & Recruitment", "Legal"
          ].map((industry, i) => (
            <ScrollReveal key={i} delay={0.05 * i} direction="up">
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 md:p-6 text-center hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer group flex items-center justify-center h-full min-h-[80px]">
                <span className="text-base sm:text-lg font-semibold text-gray-300 group-hover:text-cyan-400 transition-colors uppercase tracking-wide sm:tracking-normal sm:uppercase-none">{industry}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Section: Call to Action */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-t from-cyan-900/20 to-transparent border-t border-white/5 relative">
        <ScrollReveal delay={0.1}>
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl md:text-6xl font-black text-white mb-6 md:mb-8 leading-tight">Find Out Where AI Can <span className="text-cyan-400 block sm:inline mt-2 sm:mt-0">Replace Your Manual Work</span></h2>
            <p className="text-lg md:text-xl text-gray-400 mb-10 md:mb-12 leading-relaxed text-balance">
              Book a free 30-minute AI Automation Audit. We will analyze your workflows and show you exactly which tasks AI agents can handle — and how much time and money you can save.
            </p>
            <Button size="lg" className="w-full sm:w-auto h-14 sm:h-16 px-8 sm:px-12 text-lg sm:text-xl font-bold hover:scale-105 transition-transform shadow-[0_0_40px_rgba(6,182,212,0.4)]">
              Book Your Free AI Audit <ChevronRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
