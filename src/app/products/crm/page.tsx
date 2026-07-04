"use client";

import { CalendlyButton } from "@/components/shared/calendly-button";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { 
  Database, UserCheck, ShieldCheck, Zap, Smartphone,
  BellRing, Mail, Calendar, Webhook,
  BrainCircuit, Crosshair, PenTool, Sparkles, CheckSquare, Lock,
  LineChart, Activity, Bell, Server, Filter, PlayCircle, Workflow
} from "lucide-react";
import * as React from "react";
import Image from "next/image";

const demoImages = [
  "/images/crm-demo/1.png",
  "/images/crm-demo/2.png",
  "/images/crm-demo/3.png",
  "/images/crm-demo/4.png",
  "/images/crm-demo/5.png",
  "/images/crm-demo/6.png",
  "/images/crm-demo/7.png",
  "/images/crm-demo/8.png",
  "/images/crm-demo/9.png",
  "/images/crm-demo/11.png",
  "/images/crm-demo/12.png",
];

const coreCapabilities = [
  { icon: Database, title: "Centralized Lead Management", desc: "Add, edit, and organize leads with comprehensive data tracking (contact details, source, industry, and interaction history)." },
  { icon: UserCheck, title: "Smart Duplicate Detection", desc: "Prevents data clutter by automatically detecting existing leads based on email or phone numbers." },
  { icon: ShieldCheck, title: "Role-Based Access Control", desc: "Distinct roles for Super Admins, Managers, and Sales Reps to ensure data security and focused workflows." },
  { icon: Zap, title: "Modern, Lightning-Fast UI", desc: "Built with Next.js and a custom high-performance design system for a buttery-smooth user experience." },
  { icon: Smartphone, title: "Omnichannel Support", desc: "Natively supports Email, WhatsApp, and Phone Call tracking." },
];

const advancedAutomation = [
  { icon: BellRing, title: "Real-Time Slack Alerts", desc: "Instant team notifications for New Leads, Warm Leads, Outreach Sent, and Completed Tasks." },
  { icon: Mail, title: "Automated Welcome Sequences", desc: "Instantly triggers welcome emails and WhatsApp messages the moment a new lead enters the system." },
  { icon: Calendar, title: "Google Calendar Integration", desc: "Automatically schedules meetings and sends calendar invites when a lead is ready to talk." },
  { icon: Webhook, title: "Third-Party Webhooks", desc: "Deep integration capabilities to connect the CRM with any other tool in your marketing stack." },
];

const nextGenAIFeatures = [
  { icon: BrainCircuit, title: "AI Lead Scoring & Prediction", desc: "The AI Engine automatically analyzes lead data (source, industry, interactions) to assign a \"Warmth Score\" and categorize them as Warm or Cold." },
  { icon: Crosshair, title: "Predictive \"Next Best Action\"", desc: "The AI tells your sales reps exactly what to do next for every single lead (e.g., \"Send Case Study\", \"Follow up via WhatsApp\")." },
  { icon: PenTool, title: "Hyper-Personalized Outreach Drafting", desc: "The AI drafts personalized Emails and WhatsApp messages using the entire historical context of previous conversations across all channels." },
  { icon: Sparkles, title: "Automated Intent Analysis", desc: "When a lead replies, the AI reads the response, understands the intent (e.g., \"Interested\", \"Not now\", \"Schedule Call\"), and automatically updates the lead's status and next action." },
  { icon: CheckSquare, title: "Autonomous Task Generation", desc: "AI automatically creates daily to-do lists for sales reps based on lead interactions." },
  { icon: Lock, title: "Local, Privacy-First AI", desc: "Powered by an Ollama AI Engine, ensuring all lead data stays private and secure without relying entirely on expensive third-party APIs." },
];

const analyticsManagement = [
  { icon: LineChart, title: "Real-Time Insights Dashboard", desc: "Visual charts tracking Lead Conversion Rates, Pipeline Value, Source Distribution, and Sales Team Performance." },
  { icon: Activity, title: "Sales Team Tracking", desc: "Monitor the activity, conversion rates, and active tasks of individual sales representatives." },
  { icon: Bell, title: "In-App Notification Center", desc: "A dynamic notification bell that tracks all system activities in real-time (e.g., \"Lead AI Scored\", \"Email Sent\", \"Task Completed\")." },
  { icon: Server, title: "Super Admin Control Center", desc: "Embedded audit logs, database monitoring, and direct n8n workflow monitoring right inside the CRM." },
  { icon: Filter, title: "Custom Saved Filters", desc: "Allows users to create and save complex lead filters for quick access to specific lead segments." },
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
            <span className="text-orange-500">Sales Ecosystem</span>
          </h1>
          <p className="text-stone-400 text-lg md:text-xl max-w-2xl mx-auto text-balance leading-relaxed mb-10 font-medium">
            Imagination + AI = Innovation
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CalendlyButton text="Book Live Demo" className="" />
          </div>
        </ScrollReveal>

        {/* YOUTUBE VIDEO DEMO SPACE */}
        <ScrollReveal delay={0.2}>
          <div className="relative w-full max-w-4xl mx-auto aspect-video bg-[#0e0603] border border-white/[0.08] rounded-2xl shadow-[0_0_80px_rgba(249,115,22,0.12)] overflow-hidden flex flex-col mt-14 group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0502] via-transparent to-[#0a0502]/40 z-10 pointer-events-none" />
            
            {/* Placeholder for YouTube Embed - Add actual src URL here when ready */}
            <div className="w-full h-full bg-[#111] flex items-center justify-center relative z-20">
              {/* Replace this div with an actual iframe when the YouTube URL is available */}
              <div className="flex flex-col items-center gap-4 text-stone-500">
                 <PlayCircle className="w-16 h-16 text-orange-500/80" />
                 <p className="font-medium text-sm tracking-widest uppercase">YouTube Demo Video</p>
                 <p className="text-xs max-w-xs text-center opacity-60">Replace this placeholder with the YouTube iframe embed code.</p>
              </div>
            </div>
            
          </div>
        </ScrollReveal>
      </section>


      {/* FEATURE SECTIONS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-20 md:space-y-32">
        
        {/* 1. Next-Gen AI Features (Highlighting the "Magic" first) */}
        <section>
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
               <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                 <Sparkles className="w-6 h-6 text-orange-500" />
               </div>
               <div>
                 <h2 className="text-3xl font-bold text-white">Next-Gen AI Features</h2>
                 <p className="text-stone-400 mt-1">The "Magic" behind the ecosystem.</p>
               </div>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nextGenAIFeatures.map((feature, i) => (
              <ScrollReveal key={i} delay={0.1 * i} direction="up">
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

        {/* 2. Advanced Automation */}
        <section>
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
               <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                 <Workflow className="w-6 h-6 text-orange-500" />
               </div>
               <div>
                 <h2 className="text-3xl font-bold text-white">Advanced Automation</h2>
                 <p className="text-stone-400 mt-1">Powered by n8n.</p>
               </div>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advancedAutomation.map((feature, i) => (
              <ScrollReveal key={i} delay={0.1 * i} direction="up">
                <div className="flex gap-4 bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 hover:bg-white/[0.04] transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-stone-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* 3. Core Capabilities */}
        <section>
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
               <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                 <Database className="w-6 h-6 text-orange-500" />
               </div>
               <div>
                 <h2 className="text-3xl font-bold text-white">Core Capabilities</h2>
                 <p className="text-stone-400 mt-1">The solid foundation of your CRM.</p>
               </div>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreCapabilities.map((feature, i) => (
              <ScrollReveal key={i} delay={0.1 * i} direction="up">
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

        {/* 4. Analytics & Management */}
        <section>
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
               <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                 <LineChart className="w-6 h-6 text-orange-500" />
               </div>
               <div>
                 <h2 className="text-3xl font-bold text-white">Analytics & Management</h2>
                 <p className="text-stone-400 mt-1">Total visibility and control.</p>
               </div>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {analyticsManagement.map((feature, i) => (
              <ScrollReveal key={i} delay={0.1 * i} direction="up">
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

        {/* 5. Platform Preview Gallery */}
        <section>
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
               <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                 <PlayCircle className="w-6 h-6 text-orange-500" />
               </div>
               <div>
                 <h2 className="text-3xl font-bold text-white">Inside the Ecosystem</h2>
                 <p className="text-stone-400 mt-1">Real previews of the SIAIEIN CRM interface.</p>
               </div>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {demoImages.map((src, i) => (
              <ScrollReveal key={i} delay={0.05 * (i % 4)} direction="up">
                <div className="relative w-full aspect-[16/9] bg-[#0a0502] border border-white/[0.08] rounded-2xl overflow-hidden group hover:border-white/[0.2] transition-colors shadow-2xl">
                  <Image
                    src={src}
                    alt={`CRM Interface Preview ${i + 1}`}
                    fill
                    className="object-contain p-2"
                    unoptimized
                  />
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
