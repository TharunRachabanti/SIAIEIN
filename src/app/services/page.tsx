import { Button } from "@/components/ui/button";
import { CalendlyButton } from "@/components/shared/calendly-button";
import { Bot, Code, Network, Search, Database, ArrowRight } from "lucide-react";
import * as React from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import Image from "next/image";

const services = [
  {
    id: "automation",
    icon: Network,
    title: "AI Workflow Automation",
    desc: "Replace manual business processes with intelligent, automated workflows.",
    href: "/services/ai-workflow-automation",
  },
  {
    id: "agentic-ai",
    icon: Bot,
    title: "Agentic AI Development",
    desc: "Custom AI agents that can autonomously complete complex, multi-step tasks.",
    href: "/services/agentic-ai-development",
  },
  {
    id: "software",
    icon: Code,
    title: "Custom Software Development",
    desc: "Scalable digital products, from internal business tools to full SaaS platforms.",
    href: "/services/custom-software-development",
  },
  {
    id: "consulting",
    icon: Search,
    title: "AI Consulting & Strategy",
    desc: "Strategic roadmaps and readiness assessments for enterprise AI adoption.",
    href: "/services/ai-consulting-strategy",
  },
  {
    id: "data",
    icon: Database,
    title: "Data Engineering",
    desc: "Data pipelines, vector databases, and infrastructure to power your AI initiatives.",
    href: "/services/data-engineering",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-[#0a0502] pt-24">

      {/* ── HERO ── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <ScrollReveal delay={0.1}>
          <p className="section-label mb-4">Our Services</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            What We <span className="text-orange-500">Build</span>
          </h1>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto text-balance leading-relaxed mb-10">
            We build the systems that let your business scale without scaling headcount. From workflow automation to custom autonomous agents.
          </p>
          <CalendlyButton text="Discuss Your Project" className="" />
        </ScrollReveal>
      </section>

      {/* ── ARCHITECTURE VISUAL ── */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full pb-16 md:pb-24">
        <ScrollReveal delay={0.2} direction="up">
          <div className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_0_100px_rgba(249,115,22,0.1)] bg-[#0e0703]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0502] via-transparent to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0502]/80 via-transparent to-[#0a0502]/80 z-10" />
            <Image 
              src="/images/arch_services.png" 
              alt="AI Workflow Architecture" 
              fill 
              className="object-cover opacity-80"
            />
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-20 max-w-sm pr-6">
              <h3 className="text-xl font-bold text-white mb-2">Systems Architecture</h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Every service we provide is designed to integrate seamlessly into your existing digital ecosystem, creating a unified intelligent infrastructure.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full border-t border-white/[0.06]">
        <ScrollReveal delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Core Capabilities</h2>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.id} delay={0.05 * i} direction="up">
              <Link href={service.href} className="block h-full group">
                <div className="card-surface p-8 h-full flex flex-col transition-all duration-300 hover:border-orange-500/30">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">{service.title}</h3>
                  <p className="text-stone-400 leading-relaxed flex-1 mb-8">
                    {service.desc}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm font-semibold text-orange-500 mt-auto">
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-center border-t border-white/[0.06] mt-10 pb-32 md:pb-40">
        <ScrollReveal delay={0.1}>
          <div className="max-w-2xl mx-auto">
            <p className="section-label mb-4">Get Started</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to See What We Can Automate For You?
            </h2>
            <p className="text-stone-400 mb-10 text-balance leading-relaxed">
              Book a free 30-minute audit and we will walk you through exactly which services make sense for your business.
            </p>
            <CalendlyButton text="Book Free AI Audit" className="" />
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
