"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

import { CalendlyButton } from "@/components/ui/calendly-button";
import { TrustTicker } from "@/components/ui/trust-ticker";
import { HeroBackground } from "@/components/ui/hero-background";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart3, ChevronRight, DollarSign, MessageSquare, Search, Settings, TrendingUp, TrendingDown, Zap, Sparkles, CheckCircle2, Terminal, X, Clock, Target } from "lucide-react";
import Link from "next/link";

import * as React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";

export default function Home() {
  const [showPopup, setShowPopup] = React.useState(true);

  return (
    <div className="flex flex-col min-h-screen w-full relative overflow-hidden bg-[#0a0604]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-40 lg:pt-48 lg:pb-64 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center min-h-screen justify-start">
        
        <HeroBackground />

        <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center w-full">
          
          <ScrollReveal delay={0.1}>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-bold tracking-tight text-white mb-6 leading-[1.05]">
              The Future of Work is <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">Autonomous.</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-orange-100/70 max-w-3xl mx-auto mb-10 leading-relaxed">
              We build Agentic AI Systems that think, decide, and execute tasks automatically — transforming how businesses operate from the ground up.
            </p>
          </ScrollReveal>

          {/* Node Connections Interface - Adapted for AI Agents */}
          <div className="relative w-full max-w-5xl h-[500px] mt-10 hidden md:block">
            {/* SVG Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ filter: 'drop-shadow(0 0 8px rgba(249,115,22,0.5))' }}>
              {/* Path 1: Prompt to Execution */}
              <motion.path 
                d="M 250 400 C 250 300, 480 300, 480 200" 
                stroke="url(#gradient-green)" 
                strokeWidth="2" 
                fill="none" 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              />
              <circle cx="480" cy="200" r="4" fill="#34d399" />
              <circle cx="250" cy="400" r="4" fill="#c084fc" />

              {/* Path 2: Execution to Analytics */}
              <motion.path 
                d="M 480 150 C 480 100, 600 150, 650 200" 
                stroke="url(#gradient-orange)" 
                strokeWidth="2" 
                fill="none" 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
              />
              <circle cx="650" cy="200" r="4" fill="#f97316" />

              <defs>
                <linearGradient id="gradient-green" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#c084fc" />
                  <stop offset="100%" stopColor="#34d399" />
                </linearGradient>
                <linearGradient id="gradient-orange" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#34d399" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
              </defs>
            </svg>

            {/* Mockup 1: Execution Logs (Top Left) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-0 left-10 w-[420px] rounded-2xl bg-[#130b07] border border-white/10 shadow-2xl overflow-hidden z-10"
            >
              <div className="h-8 bg-[#1a110c] border-b border-white/5 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                </div>
                <div className="flex-1 text-center text-xs font-medium text-gray-400 flex items-center justify-center gap-2">
                   <Terminal className="w-3 h-3 text-orange-400" />
                   Sales Agent Execution
                </div>
                <div className="w-4 flex justify-end"><span className="text-gray-500">...</span></div>
              </div>
              <div className="p-5 text-sm text-gray-300 bg-black/40 font-mono space-y-3 h-[200px] overflow-hidden relative">
                 <div className="flex gap-3 items-center opacity-50"><CheckCircle2 className="w-4 h-4 text-green-500"/> <span>Analyzing CRM Data...</span></div>
                 <div className="flex gap-3 items-center opacity-70"><CheckCircle2 className="w-4 h-4 text-green-500"/> <span>Identifying 50 warm leads...</span></div>
                 <div className="flex gap-3 items-center"><Zap className="w-4 h-4 text-orange-500"/> <span className="text-orange-100">Drafting personalized outreach...</span></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
            </motion.div>

            {/* Mockup 2: Analytics Dashboard (Right) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute top-20 right-10 w-[460px] rounded-2xl bg-[#130b07] border border-white/10 shadow-2xl overflow-hidden z-10"
            >
              <div className="h-8 bg-[#1a110c] border-b border-white/5 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                </div>
                <div className="flex-1 text-center text-xs font-medium text-gray-400 flex items-center justify-center gap-2">
                   <BarChart3 className="w-3 h-3 text-orange-500" />
                   Performance Metrics
                </div>
                <div className="w-4 flex justify-end"><span className="text-gray-500">...</span></div>
              </div>
              <div className="p-6 bg-[#130b07]">
                 <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                       <div className="text-gray-500 text-xs mb-1">Meetings Booked</div>
                       <div className="text-2xl font-bold text-white">+124</div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                       <div className="text-gray-500 text-xs mb-1">Hours Saved</div>
                       <div className="text-2xl font-bold text-white">840h</div>
                    </div>
                 </div>
                 <div className="h-20 w-full flex items-end gap-2 mt-4">
                    {[30, 45, 25, 60, 80, 50, 90, 100].map((h, i) => (
                       <div key={i} className="flex-1 bg-orange-500/20 rounded-t-sm" style={{ height: `${h}%` }}>
                          <div className="w-full bg-orange-500 rounded-t-sm" style={{ height: '4px' }}></div>
                       </div>
                    ))}
                 </div>
              </div>
            </motion.div>

            {/* Mockup 3: Prompt (Bottom Left) */}
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-10 left-0 w-[380px] rounded-2xl bg-[#130b07] border border-white/10 shadow-2xl overflow-hidden z-20"
            >
              <div className="h-8 bg-[#1a110c] border-b border-white/5 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                </div>
                <div className="flex-1 text-center text-xs font-medium text-gray-400 flex items-center justify-start gap-2 ml-4">
                   <Sparkles className="w-3 h-3 text-purple-400" /> Goal / Objective
                </div>
                <div className="w-4 flex justify-end"><span className="text-gray-500">...</span></div>
              </div>
              <div className="p-5 text-sm text-gray-300 leading-relaxed bg-[#1a110c]">
                 "Identify all <span className="text-white bg-white/10 px-1 rounded">warm leads</span> from the past 7 days and sequence personalized follow-ups to book a discovery call."
              </div>
            </motion.div>
          </div>
          
        </div>

        {/* Floating Action Sheet */}
        {showPopup && (
          <motion.div 
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: 50 }}
             transition={{ duration: 0.8, delay: 1.2 }}
             className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[420px] bg-[#1a0f0a]/90 backdrop-blur-xl border border-white/20 p-4 rounded-3xl shadow-2xl z-50 flex flex-col gap-4"
          >
             <button 
               onClick={() => setShowPopup(false)}
               className="absolute top-3 right-3 p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors"
             >
               <X className="w-4 h-4" />
             </button>
             <div className="flex items-center gap-4 pr-6">
                 <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/50 flex items-center justify-center shrink-0">
                    <Zap className="w-6 h-6 text-orange-400" />
                 </div>
                 <p className="text-sm font-medium text-white flex-1 leading-snug">See SIAIEIN Agents in action for your business.</p>
             </div>
             <Button variant="glowing" size="lg" className="w-full">
                Get Free Automation Audit <ChevronRight className="w-5 h-5 ml-1" />
             </Button>
          </motion.div>
        )}

      </section>

      <TrustTicker />

      {/* Section: The Problem (Updated Theme) */}
      <section className="py-16 md:py-24 bg-[#0d0705] border-y border-white/5 relative z-10">
        <ScrollReveal delay={0.1}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight tracking-tight">Businesses Are Drowning in Repetitive Work</h2>
              <p className="text-lg md:text-xl text-orange-200/60 max-w-3xl mx-auto text-balance">Every company wastes thousands of hours every month on work that should never require a human.</p>
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
                  <div key={i} className="flex items-center gap-3 sm:gap-4 bg-[#1a0f0a] p-3 sm:p-4 rounded-xl border border-white/5 hover:border-orange-500/30 transition-colors">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0">
                      <Zap className="h-4 w-4 md:h-5 md:w-5 text-orange-500" />
                    </div>
                    <span className="text-orange-50 text-base md:text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-[#130a06] border border-white/10 p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-[80px] rounded-full pointer-events-none" />
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 relative z-10 text-balance">The old model is broken.</h3>
                <p className="text-orange-200/60 text-base md:text-lg leading-relaxed relative z-10">
                  Hiring more employees is expensive. Traditional software still requires human operation. There had to be a better way — and now there is.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Section: The Solution */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-orange-500/10 blur-[150px] rounded-full pointer-events-none" />
        <ScrollReveal delay={0.1}>
          <div className="text-center max-w-4xl mx-auto relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-tight">
              Meet Agentic AI — Software That <span className="text-orange-500 block sm:inline mt-2 sm:mt-0">Actually Does the Work</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-orange-100/80 mb-6 md:mb-8 leading-relaxed font-light">
              Most AI tools generate responses. Our AI agents take action.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-orange-200/50 leading-relaxed text-balance">
              Agentic AI understands your goal, breaks it into steps, uses the right tools, executes the workflow, and learns from outcomes — all without human intervention.
            </p>
            <div className="mt-8 md:mt-12 inline-block px-6 py-3 md:px-8 md:py-4 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-orange-500 text-base md:text-xl font-bold tracking-wide shadow-[0_0_40px_rgba(245,158,11,0.2)] text-balance">
              This is not automation. This is intelligence at work.
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Section: What Our AI Agents Do */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 z-10 relative">
        <ScrollReveal delay={0.1}>
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 md:mb-6">Your New Digital Workforce</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(280px,auto)] gap-6 md:gap-8">
          {[
            { role: "Sales Agent", icon: TrendingUp, desc: "Qualifies leads, writes outreach, sends follow-ups, books meetings, and updates your CRM. All automatically.", span: "md:col-span-2 md:row-span-2" },
            { role: "Customer Support Agent", icon: MessageSquare, desc: "Handles tickets, answers FAQs, processes refunds, and resolves queries 24/7 without human involvement.", span: "md:col-span-1 md:row-span-1" },
            { role: "Operations Agent", icon: Settings, desc: "Manages internal workflows, automates repetitive processes, and keeps your business running efficiently.", span: "md:col-span-1 md:row-span-1" },
            { role: "Research Agent", icon: Search, desc: "Tracks competitors, monitors market trends, collects intelligence, and delivers structured insight reports.", span: "md:col-span-1 md:row-span-1" },
            { role: "Finance Agent", icon: DollarSign, desc: "Monitors expenses, processes invoices, flags anomalies, and generates financial summaries on demand.", span: "md:col-span-2 md:row-span-1" },
            { role: "Data Analyst Agent", icon: BarChart3, desc: "Connects to your data sources, runs analysis, builds dashboards, and generates reports automatically.", span: "md:col-span-3 md:row-span-1" }
          ].map((agent, i) => (
            <ScrollReveal key={i} delay={0.1 * i} direction="up" className={agent.span}>
              <Card className="group overflow-hidden relative border-white/5 bg-[#130a06] hover:border-orange-500/50 hover:bg-[#1a0f0a] transition-all duration-500 h-full hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(249,115,22,0.1)] flex flex-col">
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none z-0">
                  <agent.icon className="w-48 h-48 md:w-64 md:h-64 text-orange-500 transform rotate-12 -translate-y-10 translate-x-10" />
                </div>

                <CardHeader className="relative z-10 p-6 md:p-8 pb-2">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                    <div className="p-4 md:p-5 bg-[#1a0f0a] border border-white/5 rounded-2xl group-hover:bg-orange-500/20 group-hover:border-orange-500/30 group-hover:scale-110 transition-all duration-300 shadow-xl shrink-0 self-start sm:self-auto">
                      <agent.icon className="h-8 w-8 md:h-10 md:w-10 text-orange-400 group-hover:text-orange-300" />
                    </div>
                    <CardTitle className="text-2xl md:text-3xl font-medium group-hover:text-orange-400 transition-colors leading-tight text-white">{agent.role}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10 p-6 md:p-8 pt-0 flex-1 flex items-end">
                  <p className="text-orange-100/60 text-lg md:text-xl group-hover:text-orange-100/90 transition-colors leading-relaxed font-medium">{agent.desc}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Section: The Autonomous Advantage (Metrics) */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 z-10 relative">
        <ScrollReveal delay={0.1}>
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">The Autonomous Advantage</h2>
            <p className="text-lg md:text-xl text-orange-200/50 max-w-2xl mx-auto text-balance">Target capabilities when upgrading from manual workflows to Agentic AI.</p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {[
            { icon: Clock, label: "Hours Back Per Week", desc: "Our clients report reclaiming 10-30 hours per week per team member on tasks now handled by AI agents." },
            { icon: Zap, label: "Always Available", desc: "AI agents work 24 hours a day, 7 days a week, with no breaks, no sick days, and no delays." },
            { icon: TrendingDown, label: "Lower Operational Cost", desc: "Automating repetitive workflows removes the need for additional headcount as you scale." },
            { icon: Target, label: "Built for Your Business", desc: "Every agent we build is custom-designed for your specific workflows, tools, and team structure." }
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <ScrollReveal key={i} delay={0.1 * i} direction="up" className="h-full">
                <div className="text-center p-6 md:p-8 rounded-2xl md:rounded-3xl bg-[#130a06] border border-white/5 hover:border-orange-500/20 transition-colors h-full flex flex-col items-center justify-start">
                  <div className="w-14 h-14 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-orange-500" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-white mb-4">{stat.label}</h4>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed text-balance">{stat.desc}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Section: Why We Are Different */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center border-t border-white/5 z-10 relative">
        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 md:mb-8 leading-tight text-balance">We Don't Build Chatbots. <br className="hidden sm:block" /><span className="text-orange-500 mt-2 block sm:inline">We Build AI Workers.</span></h2>
          <div className="bg-gradient-to-br from-[#1a0f0a] to-[#0a0604] border border-white/10 p-6 md:p-16 rounded-2xl md:rounded-3xl shadow-2xl text-left hover:border-orange-500/30 transition-colors duration-500">
            <p className="text-lg md:text-xl text-orange-100/70 mb-6 md:mb-8 leading-relaxed">
              Most AI companies build tools that assist humans. <strong className="text-white">We build systems that replace repetitive work entirely.</strong>
            </p>
            <p className="text-lg md:text-xl text-orange-100/60 mb-8 md:mb-10 leading-relaxed">
              Our AI agents can plan tasks, use APIs, execute multi-step workflows, coordinate with other agents, and complete real business objectives from start to finish.
            </p>
            <div className="border-l-4 border-orange-500 pl-4 md:pl-6 py-2">
              <p className="text-lg md:text-2xl font-medium text-orange-500 leading-snug tracking-tight">
                This is Agentic AI Infrastructure — and it is the next evolution of enterprise software.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Section: Call to Action */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-t from-[#2a1305] to-transparent border-t border-white/5 relative z-10 pb-48">
        <ScrollReveal delay={0.1}>
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-white mb-6 md:mb-8 leading-tight">Find Out Where AI Can <span className="text-orange-500 block sm:inline mt-2 sm:mt-0">Replace Your Manual Work</span></h2>
            <p className="text-lg md:text-xl text-orange-100/60 mb-10 md:mb-12 leading-relaxed text-balance">
              Book a free 30-minute AI Automation Audit. We will analyze your workflows and show you exactly which tasks AI agents can handle — and how much time and money you can save.
            </p>
            <CalendlyButton 
              text="Book Your Free AI Audit" 
              className="w-full sm:w-auto h-12 text-lg"
            />
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
