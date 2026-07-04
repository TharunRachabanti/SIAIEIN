import { Card, CardContent } from "@/components/ui/card";
import { Users, Lightbulb, Rocket, Globe, Linkedin as LinkedIn, Mail } from "lucide-react";
import * as React from "react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { CalendlyButton } from "@/components/shared/calendly-button";

const values = [
  { icon: Lightbulb, title: "First-Principles Thinking", desc: "We strip every problem down to its fundamentals before building any solution." },
  { icon: Users, title: "Client-Obsessed", desc: "We measure success by how much time and money our clients save, not by code shipped." },
  { icon: Rocket, title: "Ship Fast, Improve Faster", desc: "We believe in delivering real value quickly and refining relentlessly." },
  { icon: Globe, title: "Built for Scale", desc: "Every system we build is designed to grow with your business from day one." },
];

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-[#0a0502] pt-20 md:pt-24">

      {/* ── HERO ── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <ScrollReveal delay={0.1}>
          <p className="section-label mb-4">About SIAIEIN</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Who We Are
          </h1>
          <p className="text-stone-400 text-xl max-w-2xl mx-auto text-balance leading-relaxed">
            A team of builders obsessed with one question:{" "}
            <strong className="text-white font-semibold">
              what work should humans never have to do again?
            </strong>
          </p>
        </ScrollReveal>
      </section>

      {/* ── OUR STORY ── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Visual */}
          <ScrollReveal delay={0.15} direction="right">
            <div className="card-surface p-10 flex flex-col gap-6 h-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((v, i) => (
                  <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 flex flex-col gap-3">
                    <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                      <v.icon className="w-4 h-4 text-orange-500" />
                    </div>
                    <p className="text-white text-sm font-semibold">{v.title}</p>
                    <p className="text-stone-500 text-xs leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Text */}
          <div className="space-y-12">
            <ScrollReveal delay={0.1}>
              <div>
                <p className="section-label mb-4">Our Story</p>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                  We Started With a Simple Observation
                </h2>
                <div className="space-y-4 text-stone-400 leading-relaxed">
                  <p>
                    Businesses everywhere were spending enormous energy on tasks that added no real value. Repetitive, manual work that existed only because there was no intelligent alternative.
                  </p>
                  <p className="text-white font-medium">We decided to build that alternative.</p>
                  <p>
                    We combine deep expertise in software engineering, AI systems, and business operations to build agents that actually work in the real world. Not just in demos.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div>
                <p className="section-label mb-4">What Drives Us</p>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                  We Learn, Solve, and Build. Relentlessly.
                </h2>
                <p className="text-stone-400 leading-relaxed mb-4">
                  We are fast learners who believe any problem can be understood, broken down, and fixed. When something new comes up, we treat it as an opportunity. We learn it completely, solve it well, and carry that capability into everything we build next.
                </p>
                <div className="border-l-2 border-orange-500 pl-4">
                  <p className="text-orange-400 font-semibold">
                    This is how we grow. This is how our clients grow.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal delay={0.1}>
            <div className="text-center mb-12">
              <p className="section-label mb-4">What We Stand For</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Mission & Vision</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal delay={0.1}>
              <div className="card-surface p-8 md:p-10 h-full">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6">
                  <Rocket className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-stone-400 leading-relaxed">
                  Build intelligent AI systems that eliminate repetitive work and give businesses the freedom to focus on what actually matters.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="card-surface p-8 md:p-10 h-full">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-stone-400 leading-relaxed">
                  A world where every business, regardless of size, industry, or resources, has access to an intelligent AI workforce that handles operations on its own.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={0.1}>
            <div className="text-center mb-12">
              <p className="section-label mb-4">The Team</p>
              <h2 className="text-3xl font-bold text-white">The People Behind SIAIEIN</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Tharun */}
            <ScrollReveal delay={0.1} direction="up">
              <div className="card-surface p-8 flex flex-col items-center text-center h-full">
                <div className="w-20 h-20 rounded-full bg-orange-500/20 border-2 border-orange-500/40 mx-auto mb-5 overflow-hidden">
                  <img src="/team/tharun.jpg" alt="Tharun Rachabanti" className="w-full h-full object-cover scale-[1.1] translate-y-1" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Tharun Rachabanti</h3>
                <p className="text-orange-500 text-sm font-semibold mb-4">Founder &amp; CEO</p>
                <p className="text-stone-400 text-sm leading-relaxed mb-6 text-balance flex-1">
                  Builds the AI systems and automation infrastructure. Leads product, engineering, and agent architecture. Focused on making enterprise-grade AI practical for Indian B2B businesses.
                </p>
                <div className="flex gap-3 mt-auto">
                  <a href="https://linkedin.com/in/tharun-rachabanti" target="_blank" className="flex items-center gap-2 px-4 py-2 bg-white/[0.04] border border-white/[0.08] rounded-lg text-stone-300 hover:bg-white/[0.08] transition-colors text-sm font-medium">
                    <LinkedIn className="w-4 h-4" /> LinkedIn
                  </a>
                  <a href="mailto:hello@siaiein.com" className="flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-lg text-orange-400 hover:bg-orange-500/20 transition-colors text-sm font-medium">
                    <Mail className="w-4 h-4" /> Email
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Abhi Rithvik */}
            <ScrollReveal delay={0.15} direction="up">
              <div className="card-surface p-8 flex flex-col items-center text-center h-full">
                <div className="w-20 h-20 rounded-full bg-orange-500/20 border-2 border-orange-500/40 mx-auto mb-5 overflow-hidden">
                  <img src="/team/abhi.jpg" alt="Abhi Rithvik Pothakamuri" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Abhi Rithvik Pothakamuri</h3>
                <p className="text-orange-500 text-sm font-semibold mb-4">Co-Founder &amp; COO</p>
                <p className="text-stone-400 text-sm leading-relaxed mb-6 text-balance flex-1">
                  Drives the business side of SIAIEIN. Leads sales, partnerships, client relationships, and go-to-market strategy. Focused on bringing the right clients in and making sure they see results.
                </p>
                <div className="flex gap-3 mt-auto">
                  <a href="https://linkedin.com/in/abhi-rithvik" target="_blank" className="flex items-center gap-2 px-4 py-2 bg-white/[0.04] border border-white/[0.08] rounded-lg text-stone-300 hover:bg-white/[0.08] transition-colors text-sm font-medium">
                    <LinkedIn className="w-4 h-4" /> LinkedIn
                  </a>
                  <a href="mailto:hello@siaiein.com" className="flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-lg text-orange-400 hover:bg-orange-500/20 transition-colors text-sm font-medium">
                    <Mail className="w-4 h-4" /> Email
                  </a>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-center border-t border-white/[0.06] pb-32 md:pb-40">
        <ScrollReveal delay={0.1}>
          <div className="max-w-2xl mx-auto">
            <p className="section-label mb-4">Work With Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let's Build Something Together
            </h2>
            <p className="text-stone-400 mb-10 text-balance leading-relaxed">
              Book a free AI Audit and let us show you how we can change how your business operates.
            </p>
            <CalendlyButton text="Book Free AI Audit" className="" />
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
