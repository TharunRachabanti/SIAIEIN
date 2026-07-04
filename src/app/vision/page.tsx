import { CalendlyButton } from "@/components/shared/calendly-button";
import { Bot, Target, Shield, Users, Compass, Code } from "lucide-react";
import * as React from "react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

const principles = [
  { icon: Bot, title: "Automation First", desc: "If a task is repetitive and rule-based, it should be automated. Human time is too valuable to spend on work machines can do." },
  { icon: Target, title: "Acts, Not Answers", desc: "The future of AI is not conversation. It is execution. Our systems complete work, not just respond to it." },
  { icon: Users, title: "Amplifying Humans", desc: "We are not replacing human intelligence. We are amplifying it. The future belongs to humans and systems working together." },
  { icon: Compass, title: "Industry-First", desc: "We don't build generic tools. We build deep, specific solutions that understand how each industry actually works." },
  { icon: Code, title: "Long-Term Build", desc: "We are not optimizing for the next product launch. We are building infrastructure that will matter 20 years from now." },
  { icon: Shield, title: "Trustworthy AI", desc: "Every agent we build is transparent, auditable, and designed to escalate to humans when needed." },
];

const roadmap = [
  { phase: "Phase 1: 2025 to 2027", title: "Core AI Infrastructure", desc: "Build specialised AI agents for business workflows. Automate the most common repetitive tasks across industries. Establish our AI development framework and delivery model." },
  { phase: "Phase 2: 2027 to 2030", title: "AI Agent Marketplace", desc: "Launch a marketplace where businesses can hire and deploy AI agents instantly. Integrate with all major business tools. Enable companies to build custom agents on our platform." },
  { phase: "Phase 3: 2030 to 2033", title: "Autonomous Business Systems", desc: "AI agents begin collaborating with each other. Entire departments operate autonomously. Businesses run with minimal manual intervention." },
  { phase: "Phase 4: 2033 to 2035+", title: "The Autonomous Economy", desc: "AI agents become a standard part of every business workforce. Millions of companies run operations through intelligent autonomous systems." },
];

export default function VisionPage() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-[#0a0502] pt-24">

      {/* ── HERO ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <ScrollReveal delay={0.1}>
          <p className="section-label mb-4">Our Vision</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            We Are Building the{" "}
            <span className="text-orange-500">Autonomous Economy</span>
          </h1>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto text-balance leading-relaxed">
            This is not just a company. This is a long-term mission to change how the world works.
          </p>
        </ScrollReveal>
      </section>

      {/* ── BELIEF & PROBLEM ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScrollReveal delay={0.1}>
            <div className="card-surface p-8 md:p-10 h-full">
              <p className="section-label mb-4">Our Belief</p>
              <h2 className="text-2xl font-bold text-white mb-4">
                Software Should Perform Work, Not Just Assist With It
              </h2>
              <p className="text-stone-400 leading-relaxed mb-5">
                Just as electricity transformed every industry 100 years ago, Agentic AI will transform business operations in the next decade.
              </p>
              <div className="border-l-2 border-orange-500 pl-4">
                <p className="text-orange-400 font-semibold text-sm">We are building that infrastructure.</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="card-surface p-8 md:p-10 h-full">
              <p className="section-label mb-4">The Problem</p>
              <h2 className="text-2xl font-bold text-white mb-4">
                Today's AI Tools Are Impressive But Limited
              </h2>
              <p className="text-stone-400 leading-relaxed mb-5">
                They generate text and answer questions but they cannot take action. Businesses still need humans to execute tasks and manage every workflow.
              </p>
              <div className="border-l-2 border-orange-500 pl-4">
                <p className="text-orange-400 font-semibold text-sm">This is the gap we are closing.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── DIGITAL WORKERS ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal delay={0.1}>
            <p className="section-label mb-4">The Future</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The Rise of Digital Workers</h2>
            <p className="text-stone-400 leading-relaxed mb-4 text-balance">
              In the future, every business will have two types of workforce: human employees and AI employees.
            </p>
            <p className="text-stone-400 leading-relaxed mb-8 text-balance">
              AI agents will handle operations, customer interactions, data analysis, and research.{" "}
              <strong className="text-white">Humans will focus entirely on creativity, strategy, and leadership.</strong>
            </p>
            <div className="inline-block px-6 py-3 rounded-xl bg-orange-500/10 border border-orange-500/25 text-orange-400 font-semibold text-sm">
              This transition is already beginning. We are building the foundation for it.
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── ROADMAP ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal delay={0.1}>
            <div className="text-center mb-14">
              <p className="section-label mb-4">Roadmap</p>
              <h2 className="text-3xl font-bold text-white">Our 10-Year Roadmap</h2>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {roadmap.map((milestone, i) => (
              <ScrollReveal key={i} delay={0.08 * i} direction="up">
                <div className="card-surface p-7 flex gap-5">
                  <div className="w-7 h-7 rounded-full bg-orange-500/10 border-2 border-orange-500/40 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                  </div>
                  <div>
                    <p className="section-label mb-2">{milestone.phase}</p>
                    <h4 className="text-base font-bold text-white mb-2">{milestone.title}</h4>
                    <p className="text-stone-400 text-sm leading-relaxed">{milestone.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRINCIPLES ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal delay={0.1}>
            <div className="text-center mb-12">
              <p className="section-label mb-4">Our Principles</p>
              <h2 className="text-3xl font-bold text-white">What We Stand For</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {principles.map((p, i) => (
              <ScrollReveal key={i} delay={0.06 * i} direction="up">
                <div className="card-surface p-6 h-full">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4">
                    <p.icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── INVITATION / CTA ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] pb-40">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal delay={0.1}>
            <div className="card-surface p-10 md:p-14 text-center">
              <p className="section-label mb-4">An Invitation</p>
              <h2 className="text-3xl font-bold text-white mb-6">The Autonomous Future Is Being Built Right Now</h2>
              <div className="space-y-3 mb-10 text-stone-400 text-sm leading-relaxed">
                <p>If you are a business that wants to operate in the future, we want to work with you.</p>
                <p>If you are a builder who believes in autonomous systems, we want to build with you.</p>
                <p>If you are an investor who sees what is coming, we want to grow with you.</p>
              </div>
              <p className="text-orange-400 font-semibold mb-8">We intend to build it well.</p>
              <CalendlyButton text="Join Us. Book a Conversation." className="" />
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
