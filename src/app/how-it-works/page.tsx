"use client";

import { Button } from "@/components/ui/button";
import { Search, PenTool, Link2, CheckSquare, PlayCircle as PlayCircleStep, RefreshCw, PlayCircle } from "lucide-react";
import * as React from "react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { DemoModal } from "@/components/shared/demo-modal";
import { workflowDemos } from "@/lib/data/demos";
import { CalendlyButton } from "@/components/shared/calendly-button";

const steps = [
  { title: "Free AI Audit", icon: Search, desc: "We start by understanding your business: your workflows, tools, team structure, and biggest pain points. We identify every task that could be handled by AI.", deliverable: "A written AI Opportunity Report", demoId: "free-ai-audit" },
  { title: "Agent Design", icon: PenTool, desc: "Based on the audit, we design the architecture for your AI agents. What they do, what tools they use, how they make decisions, and when they involve humans.", deliverable: "Agent Blueprint Document", demoId: "agent-design" },
  { title: "Integration", icon: Link2, desc: "We connect your agents to your existing tools: CRM, email, databases, APIs, spreadsheets, or any internal systems.", deliverable: "Salesforce, HubSpot, Notion, Slack, Gmail, Custom APIs", demoId: "integration" },
  { title: "Testing & Refinement", icon: CheckSquare, desc: "Before full deployment, we run the agents through real scenarios, fix edge cases, and optimize performance.", deliverable: null, demoId: "testing-refinement" },
  { title: "Deployment", icon: PlayCircleStep, desc: "Your AI agents go live and begin executing work. We monitor performance in real time and make adjustments.", deliverable: null, demoId: "deployment" },
  { title: "Continuous Optimization", icon: RefreshCw, desc: "AI agents improve over time. We track performance, refine workflows, and expand capabilities as your business grows.", deliverable: null, demoId: "continuous-optimization" },
];

export default function HowItWorksPage() {
  const [activeDemo, setActiveDemo] = React.useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-screen w-full bg-[#0a0502] pt-24">

      {/* ── HERO ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <ScrollReveal delay={0.1}>
          <p className="section-label mb-4">The Process</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            How We Build Your{" "}
            <span className="text-orange-500">AI Workforce</span>
          </h1>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto text-balance leading-relaxed">
            From discovery to deployment: exactly how we work with you to automate your business.
          </p>
        </ScrollReveal>
      </section>

      {/* ── STEPS ── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full relative border-t border-white/[0.06]">
        {/* Vertical line */}
        <div className="hidden md:block absolute top-10 bottom-10 left-[calc(2rem+20px)] w-px bg-gradient-to-b from-orange-500/40 via-orange-500/20 to-transparent" />

        <div className="space-y-6 md:space-y-8">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={0.06 * i} direction="up">
              <div className="relative flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                {/* Step icon */}
                <div className="hidden md:flex flex-col items-center shrink-0">
                  <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center z-10">
                    <step.icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <span className="mt-2 text-xs font-mono text-stone-600">0{i + 1}</span>
                </div>

                {/* Content */}
                <div className="card-surface p-7 w-full">
                  <div className="flex items-center gap-3 mb-4 md:hidden">
                    <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                      <step.icon className="w-4 h-4 text-orange-500" />
                    </div>
                    <span className="section-label">Step 0{i + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed mb-5">{step.desc}</p>

                  <div className="flex flex-wrap items-center gap-3">
                    {step.deliverable && (
                      <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                        <span className="text-xs text-stone-500 font-medium uppercase tracking-wider">Deliverable:</span>
                        <span className="text-xs text-stone-300 font-medium">{step.deliverable}</span>
                      </div>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      onClick={() => setActiveDemo(step.demoId)}
                    >
                      <PlayCircle className="w-3.5 h-3.5" />
                      See in Action
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center border-t border-white/[0.06] mt-10 pb-40">
        <ScrollReveal delay={0.1}>
          <div className="max-w-2xl mx-auto">
            <p className="section-label mb-4">Get Started</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Step 1?</h2>
            <p className="text-stone-400 mb-10 text-balance leading-relaxed">
              Book a free AI Audit. No commitments, no pressure. Just an honest conversation about what AI can do for your business.
            </p>
            <CalendlyButton text="Book Your Free AI Audit" className="" />
          </div>
        </ScrollReveal>
      </section>

      {/* Demo Modal */}
      {activeDemo && workflowDemos[activeDemo] && (
        <DemoModal
          config={workflowDemos[activeDemo]}
          isOpen={!!activeDemo}
          onClose={() => setActiveDemo(null)}
        />
      )}
    </div>
  );
}
