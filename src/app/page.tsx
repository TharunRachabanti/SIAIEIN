"use client";

import { Button } from "@/components/ui/button";
import { CalendlyButton } from "@/components/shared/calendly-button";
import { TrustTicker } from "@/components/sections/trust-ticker";
import { HeroBackground } from "@/components/sections/hero-background";
import { ArrowRight, BarChart3, DollarSign, MessageSquare, Search, Settings, TrendingUp, TrendingDown, Zap, CheckCircle2, Clock, Target } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

const agents = [
  { role: "Sales Agent", icon: TrendingUp, desc: "Qualifies leads, writes outreach, sends follow-ups, books meetings, and updates your CRM. All automatically.", span: "md:col-span-2" },
  { role: "Support Agent", icon: MessageSquare, desc: "Handles tickets, answers FAQs, and resolves queries 24/7 without human involvement.", span: "md:col-span-1" },
  { role: "Operations Agent", icon: Settings, desc: "Manages internal workflows and keeps your business running efficiently.", span: "md:col-span-1" },
  { role: "Research Agent", icon: Search, desc: "Tracks competitors, monitors market trends, and delivers structured insight reports.", span: "md:col-span-1" },
  { role: "Finance Agent", icon: DollarSign, desc: "Monitors expenses, processes invoices, and generates financial summaries on demand.", span: "md:col-span-1" },
  { role: "Data Analyst Agent", icon: BarChart3, desc: "Connects to your data, runs analysis, builds dashboards, and generates reports automatically.", span: "md:col-span-3" },
];

const advantages = [
  { icon: Clock, label: "10–30 hrs Saved / Week", desc: "Per team member, on tasks now handled by AI agents." },
  { icon: Zap, label: "Always On", desc: "24/7 operation. No breaks, no sick days, no delays." },
  { icon: TrendingDown, label: "Lower Costs", desc: "Scale without adding headcount." },
  { icon: Target, label: "Built for You", desc: "Custom-designed for your specific workflows and tools." },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-[#0a0502]">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center pt-16 pb-16 md:pt-24 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <HeroBackground />

        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <ScrollReveal delay={0.05}>
            <p className="section-label mb-6">Agentic AI Systems</p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-white mb-6 leading-[1.05]">
              The Future of Work is{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                Autonomous.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-stone-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              We build AI systems that think, decide, and execute tasks on your behalf. No manual work required.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <CalendlyButton text="Book Free AI Audit" className="" />
              <Link href="/services">
                <Button variant="ghost" className="text-stone-400 hover:text-white gap-2">
                  See What We Build <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <TrustTicker />

      {/* ── THE PROBLEM ── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal delay={0.1}>
            <div className="text-center mb-16">
              <p className="section-label mb-4">The Problem</p>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                Your Team Spends Too Much Time on the Wrong Work
              </h2>
              <p className="text-stone-400 text-lg max-w-2xl mx-auto text-balance">
                Most businesses waste thousands of hours a month on tasks that a machine could handle better and faster.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            <ScrollReveal delay={0.15}>
              <div className="space-y-3">
                {[
                  "Manual customer support responses",
                  "Data entry and report generation",
                  "Sales follow-ups and lead tracking",
                  "Internal coordination and scheduling",
                  "Document processing and analysis",
                ].map((item, i) => (
                  <div key={i} className="card-surface flex items-center gap-4 p-4">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0">
                      <Zap className="h-4 w-4 text-orange-500" />
                    </div>
                    <span className="text-stone-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="card-surface p-8 h-full">
                <h3 className="text-2xl font-bold text-white mb-4">The old model is broken.</h3>
                <p className="text-stone-400 leading-relaxed mb-6">
                  Hiring more people is expensive. Traditional software still needs a human to operate it. There is a better way now.
                </p>
                <div className="border-l-2 border-orange-500 pl-4">
                  <p className="text-orange-400 font-semibold">
                    AI agents don't assist humans. They replace the repetitive work entirely.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── THE SOLUTION ── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal delay={0.1}>
            <p className="section-label mb-4">The Solution</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              Software That{" "}
              <span className="text-orange-500">Actually Does the Work</span>
            </h2>
            <p className="text-stone-400 text-lg mb-6 leading-relaxed">
              Most AI tools generate responses. Our AI agents take action.
            </p>
            <p className="text-stone-500 text-base leading-relaxed mb-10">
              Agentic AI understands your goal, breaks it into steps, picks the right tools, executes the workflow, and learns from what happens. No human intervention needed.
            </p>
            <div className="inline-block px-6 py-3 rounded-xl bg-orange-500/10 border border-orange-500/25 text-orange-400 font-semibold tracking-wide">
              This is not automation. This is intelligence at work.
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── DIGITAL WORKFORCE ── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal delay={0.1}>
            <div className="text-center mb-14">
              <p className="section-label mb-4">What We Build</p>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Your New Digital Workforce</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {agents.map((agent, i) => (
              <ScrollReveal key={i} delay={0.05 * i} direction="up" className={agent.span}>
                <div className="card-surface p-7 h-full group cursor-default">
                  <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-5 group-hover:bg-orange-500/20 group-hover:border-orange-500/40 transition-all duration-300">
                    <agent.icon className="h-5 w-5 text-orange-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{agent.role}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed">{agent.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADVANTAGES ── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal delay={0.1}>
            <div className="text-center mb-14">
              <p className="section-label mb-4">The Advantage</p>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">Why Agentic AI?</h2>
              <p className="text-stone-400 max-w-xl mx-auto text-balance">
                Real, measurable improvements from the first week.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {advantages.map((stat, i) => (
              <ScrollReveal key={i} delay={0.08 * i} direction="up">
                <div className="card-surface p-6 text-center h-full flex flex-col items-center">
                  <div className="w-12 h-12 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                    <stat.icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{stat.label}</h4>
                  <p className="text-stone-500 text-sm leading-relaxed text-balance">{stat.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY WE'RE DIFFERENT ── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={0.1}>
            <div className="text-center mb-12">
              <p className="section-label mb-4">Our Difference</p>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                We Don't Build Chatbots.{" "}
                <span className="text-orange-500">We Build AI Workers.</span>
              </h2>
            </div>
            <div className="card-surface p-8 md:p-12">
              <p className="text-stone-400 text-lg leading-relaxed mb-6">
                Most AI companies build tools that <em>assist</em> humans.{" "}
                <strong className="text-white">We build systems that replace repetitive work entirely.</strong>
              </p>
              <p className="text-stone-500 leading-relaxed mb-8">
                Our AI agents can plan tasks, use APIs, execute multi-step workflows, coordinate with other agents, and complete real business objectives from start to finish.
              </p>
              <div className="flex items-start gap-4 pt-6 border-t border-white/[0.06]">
                <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <p className="text-orange-400 font-semibold leading-snug">
                  This is Agentic AI Infrastructure: the next evolution of enterprise software.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] pb-40">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal delay={0.1}>
            <p className="section-label mb-4">Get Started</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              Find Out Where AI Can{" "}
              <span className="text-orange-500">Transform Your Business</span>
            </h2>
            <p className="text-stone-400 mb-10 leading-relaxed text-balance">
              Book a free 30-minute AI Automation Audit. We will look at your workflows and tell you exactly which tasks agents can take over and what you stand to gain.
            </p>
            <CalendlyButton text="Book Your Free AI Audit" className="" />
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
