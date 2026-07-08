"use client";

import { CalendlyButton } from "@/components/shared/calendly-button";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { 
  Database, UserCheck, ShieldCheck, Zap, Smartphone,
  BellRing, Mail, Calendar, Webhook, Users, Play,
  BrainCircuit, Crosshair, PenTool, Sparkles, CheckSquare, Lock,
  LineChart, Activity, Bell, Server, Filter, PlayCircle, Workflow
} from "lucide-react";
import * as React from "react";
import Image from "next/image";

const roleBasedAccess = [
  { icon: ShieldCheck, title: "Super Admin", desc: "Complete backend control. Monitor analytics, configure LLM models, edit n8n workflow JSONs directly from the frontend, query the database, and manage AI prompts natively." },
  { icon: UserCheck, title: "Admin (Sales Manager)", desc: "Manage the entire team. View all leads and reps, add new sales representatives, check team analytics, manually trigger the AI pipeline, and run lead tasks as needed." },
  { icon: Users, title: "Sales Representative", desc: "Focused execution. Reps only see the specific AI-generated tasks assigned to them for their leads, ensuring zero distractions and maximum output." },
];

const aiPipeline = [
  { icon: Smartphone, title: "Instant Acknowledgment", desc: "When a new lead is created (e.g., Referral), the system immediately sends a welcome message via WhatsApp and notifies the business owner in Slack." },
  { icon: Play, title: "Animated Pipeline Execution", desc: "Trigger the AI pipeline and watch the backend process in real-time. The system analyzes the lead, assigns a score, and generates customized tasks." },
  { icon: BellRing, title: "Hot Lead Alerts", desc: "If the AI scores a lead as 'Hot', a high-priority Slack notification and an email are instantly dispatched to the business owner." },
];

const leadDetailFeatures = [
  { icon: CheckSquare, title: "Autonomous AI Tasks", desc: "The LLM generates specific tasks (e.g., Generate WhatsApp message -> Review & Send). Once all tasks are complete, regenerate the pipeline for intelligent follow-ups." },
  { icon: Sparkles, title: "Context-Aware Replies", desc: "Paste lead replies (or connect email directly). The AI analyzes intent, checks interaction history, and automatically schedules calls or drafts contextual responses." },
  { icon: Activity, title: "Activities & Notes", desc: "Track every single interaction. Use the Notes tab to collaborate with your team and mention specific users." },
  { icon: Mail, title: "Email & WhatsApp Log", desc: "A comprehensive, filterable historical log of every single email and WhatsApp message sent to a particular lead." },
  { icon: Database, title: "Advanced Lead Management", desc: "Rearrange views, import lead data seamlessly via CSV, manually schedule calls, and send custom emails on the fly." }
];

export default function CRMProductPage() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-[#0a0502] pt-20 md:pt-24">

      {/* HERO SECTION */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <ScrollReveal delay={0.1}>
          <p className="section-label mb-4">SIAIEIN CRM</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            The AI-Powered <br />
            <span className="text-orange-500">Lead Management System</span>
          </h1>
          <p className="text-stone-400 text-lg md:text-xl max-w-2xl mx-auto text-balance leading-relaxed mb-10 font-medium">
            A specialized SaaS product built for lead managers and sales teams. We eliminate manual bottlenecks by automating the entire lead management lifecycle.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CalendlyButton text="Book Live Demo" className="" />
          </div>
        </ScrollReveal>

        {/* YOUTUBE VIDEO DEMO SPACE */}
        <ScrollReveal delay={0.2}>
          <div className="relative w-full max-w-4xl mx-auto aspect-video bg-[#0e0603] border border-white/[0.08] rounded-2xl shadow-[0_0_80px_rgba(249,115,22,0.12)] overflow-hidden flex flex-col mt-14 group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0502] via-transparent to-[#0a0502]/40 z-10 pointer-events-none" />
            
            <div className="w-full h-full bg-[#111] relative z-20">
              <iframe 
                src="https://drive.google.com/file/d/17Hh9YJ5cr8oQA9kZy6Uf7OuYdchd9Ilo/preview" 
                className="w-full h-full rounded-2xl border-0"
                allow="autoplay"
                allowFullScreen
              ></iframe>
            </div>
            
          </div>
        </ScrollReveal>
      </section>


      {/* FEATURE SECTIONS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-20 md:space-y-32">
        
        {/* 1. Role-Based Architecture */}
        <section>
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
               <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                 <ShieldCheck className="w-6 h-6 text-orange-500" />
               </div>
               <div>
                 <h2 className="text-3xl font-bold text-white">Three-Tier Architecture</h2>
                 <p className="text-stone-400 mt-1">Built specifically for hierarchical sales teams.</p>
               </div>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roleBasedAccess.map((role, i) => (
              <ScrollReveal key={i} delay={0.1 * i} direction="up">
                <div className="h-full bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 hover:bg-white/[0.04] transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <role.icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{role.title}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed">{role.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* 2. The AI Pipeline Flow */}
        <section>
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
               <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                 <Workflow className="w-6 h-6 text-orange-500" />
               </div>
               <div>
                 <h2 className="text-3xl font-bold text-white">The Lead AI Pipeline</h2>
                 <p className="text-stone-400 mt-1">From creation to conversion, entirely automated.</p>
               </div>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aiPipeline.map((step, i) => (
              <ScrollReveal key={i} delay={0.1 * i} direction="up">
                <div className="flex flex-col gap-4 bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 hover:bg-white/[0.04] transition-colors h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 -mr-4 -mt-4 text-9xl font-black text-white/[0.02] pointer-events-none select-none">
                    0{i+1}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0 relative z-10">
                    <step.icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-stone-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* 3. Lead Detail Page & Tasks */}
        <section>
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
               <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                 <Sparkles className="w-6 h-6 text-orange-500" />
               </div>
               <div>
                 <h2 className="text-3xl font-bold text-white">Inside the Lead View</h2>
                 <p className="text-stone-400 mt-1">Contextual tabs and autonomous LLM task execution.</p>
               </div>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadDetailFeatures.map((feature, i) => (
              <ScrollReveal key={i} delay={0.1 * (i % 3)} direction="up">
                <div className="h-full bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 hover:bg-white/[0.04] transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

      </div>

      {/* FINAL CTA */}
      <section className="py-16 md:py-24 border-t border-white/[0.06] bg-gradient-to-b from-[#0a0502] to-[#0e0703]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Experience the future of sales.</h2>
            <p className="text-stone-400 text-lg mb-10 max-w-2xl mx-auto">
              Stop manually managing your pipeline. Let the SIAIEIN CRM automate your outreach, score your leads, and track your tasks.
            </p>
            <CalendlyButton text="Book Your Free Audit" />
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
