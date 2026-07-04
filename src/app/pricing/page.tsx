"use client";

import { Button } from "@/components/ui/button";
import { Check, ChevronDown, Rocket, ShieldCheck, Workflow, Target, Zap, PhoneCall } from "lucide-react";
import * as React from "react";
import { useState } from "react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { CalendlyButton } from "@/components/shared/calendly-button";
import Link from "next/link";

const whyItems = [
  { title: "Perfect Fit", icon: Target, desc: "You only pay for the exact agents and logic you need." },
  { title: "No Waste", icon: Zap, desc: "Avoid bloated plans with features you never use." },
  { title: "Transparent", icon: ShieldCheck, desc: "Clear breakdown of costs before any commitment." },
  { title: "Flexible", icon: Workflow, desc: "Easily scale your AI infrastructure as your business changes." },
  { title: "Expert Support", icon: PhoneCall, desc: "Direct access to our engineers for seamless integration." },
  { title: "Guaranteed ROI", icon: Rocket, desc: "Priced carefully to ensure automation pays for itself quickly." },
];

const steps = [
  { num: "01", title: "Discovery Call", desc: "30 minutes to understand your business challenges, goals, and current processes." },
  { num: "02", title: "Deep Dive Analysis", desc: "We analyze your workflows, identify automation opportunities, and calculate potential ROI." },
  { num: "03", title: "Custom Proposal", desc: "A personalized proposal with specific agents, features, timeline, and transparent pricing." },
  { num: "04", title: "Implementation", desc: "We deploy your agents, train your team, and ensure everything runs smoothly." },
];

const includes = [
  { title: "Sales Automation", items: ["Lead qualification & scoring", "Automated email outreach", "Meeting scheduling bots"] },
  { title: "Operations Automation", items: ["Invoice processing", "Workflow routing", "Data entry automation"] },
  { title: "Marketing & Growth", items: ["Social media distribution", "Content generation", "Audience engagement tracking"] },
  { title: "Workforce Management", items: ["Capacity tracking", "Burnout prevention metrics", "Schedule optimization"] },
];

const faqs = [
  { q: "How is pricing determined?", a: "Pricing is based on your specific business needs, workflow complexity, expected ROI, the number of isolated agents needed, and your required level of support." },
  { q: "Is there a setup fee?", a: "Yes, there is a one-time implementation fee based on complexity. This covers building the custom logic, training your team, and a 30-day onboarding period." },
  { q: "Do you offer a guarantee?", a: "Absolutely. We offer a 30-day money-back guarantee on the implementation fee if you do not see the agreed-upon value." },
  { q: "What if my needs change?", a: "Our custom pricing model is flexible. You can easily add more agents or scale down capabilities as your business evolves." },
  { q: "How do I get started?", a: "Simply schedule a free consultation call. We will discuss your workflows and build a custom proposal for you." },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen w-full bg-[#0a0502] pt-24">

      {/* ── HERO ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
        <ScrollReveal delay={0.1}>
          <p className="section-label mb-4">Pricing</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Custom Pricing Built for{" "}
            <span className="text-orange-500">Your Business</span>
          </h1>
          <p className="text-stone-400 text-lg mb-10 text-balance leading-relaxed">
            We don't believe in one-size-fits-all pricing. Every business is unique, so we create a personalized solution that matches your specific needs, budget, and goals.
          </p>
          <CalendlyButton text="Schedule Free Consultation" className="" />
        </ScrollReveal>
      </section>

      {/* ── WHY CUSTOM ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal delay={0.1}>
            <div className="text-center mb-12">
              <p className="section-label mb-4">Why Custom?</p>
              <h2 className="text-3xl font-bold text-white">Why Custom Pricing?</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyItems.map((item, i) => (
              <ScrollReveal key={i} delay={0.06 * i} direction="up">
                <div className="card-surface p-6 h-full">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4">
                    <item.icon className="h-5 w-5 text-orange-500" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal delay={0.1}>
            <div className="text-center mb-12">
              <p className="section-label mb-4">How It Works</p>
              <h2 className="text-3xl font-bold text-white">Our Process</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={0.08 * i} direction="up">
                <div className="card-surface p-6 h-full flex flex-col">
                  <div className="text-3xl font-bold text-orange-500/30 mb-4 font-mono">{step.num}</div>
                  <h3 className="text-base font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE INCLUDE ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal delay={0.1}>
            <div className="text-center mb-12">
              <p className="section-label mb-4">Scope</p>
              <h2 className="text-3xl font-bold text-white">What We Include</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {includes.map((feature, i) => (
              <ScrollReveal key={i} delay={0.08 * i}>
                <div className="card-surface p-6 h-full">
                  <h3 className="text-sm font-bold text-orange-500 uppercase tracking-wider mb-4">{feature.title}</h3>
                  <ul className="space-y-3">
                    {feature.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 text-stone-300 text-sm">
                        <Check className="h-4 w-4 text-orange-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal delay={0.1}>
            <div className="text-center mb-12">
              <p className="section-label mb-4">FAQ</p>
              <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
            </div>
          </ScrollReveal>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={0.05 * i}>
                <div
                  className="card-surface overflow-hidden cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className="px-6 py-5 flex justify-between items-center">
                    <h4 className="font-semibold text-white text-sm">{faq.q}</h4>
                    <ChevronDown className={`h-4 w-4 text-stone-400 transition-transform duration-300 shrink-0 ml-4 ${openFaq === i ? "rotate-180 text-orange-500" : ""}`} />
                  </div>
                  <div className={`px-6 overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"}`}>
                    <p className="text-stone-400 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center border-t border-white/[0.06] pb-40">
        <ScrollReveal delay={0.1}>
          <div className="max-w-2xl mx-auto">
            <p className="section-label mb-4">Get Started</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform?</h2>
            <p className="text-stone-400 mb-10 text-balance leading-relaxed">
              Schedule a free consultation. No commitments, no pressure. Just a conversation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CalendlyButton text="Schedule Consultation" className="" />
              <Link href="/case-studies">
                <Button variant="outline">View Case Studies</Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
