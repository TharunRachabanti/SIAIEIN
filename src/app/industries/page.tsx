import { ShoppingBag, Rocket, Activity, Landmark, Factory, Store, Users, Scale, ArrowRight } from "lucide-react";
import * as React from "react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import Link from "next/link";
import { CalendlyButton } from "@/components/shared/calendly-button";
import Image from "next/image";

const industries = [
  {
    slug: "ecommerce",
    title: "E-commerce",
    icon: ShoppingBag,
    desc: "Autonomous systems for retail logistics, customer support, and inventory optimization.",
  },
  {
    slug: "saas-technology",
    title: "SaaS & Technology",
    icon: Rocket,
    desc: "Intelligent systems to scale product operations and automate customer success.",
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    icon: Activity,
    desc: "Secure, compliant AI workflows for medical administration and patient care.",
  },
  {
    slug: "finance-accounting",
    title: "Finance & Accounting",
    icon: Landmark,
    desc: "Precision AI for transaction monitoring, reporting, and audit compliance.",
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    icon: Factory,
    desc: "Predictive intelligence for supply chains and production lines.",
  },
  {
    slug: "retail",
    title: "Retail",
    icon: Store,
    desc: "Omnichannel automation for modern retail operations and inventory.",
  },
  {
    slug: "hr-recruitment",
    title: "HR & Recruitment",
    icon: Users,
    desc: "Intelligent scaling for human resource pipelines and candidate screening.",
  },
  {
    slug: "legal",
    title: "Legal",
    icon: Scale,
    desc: "Accelerated analysis and document drafting for modern law practices.",
  },
];

export default function IndustriesPage() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-[#0a0502] pt-24">

      {/* ── HERO ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <ScrollReveal delay={0.1}>
          <p className="section-label mb-4">Industries</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Built for Your <span className="text-orange-500">Industry</span>
          </h1>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto text-balance leading-relaxed mb-10">
            We don't build generic AI. Every solution we deliver is designed around the specific rules, compliance, and workflows of your industry.
          </p>
          <CalendlyButton text="Discuss Custom Architecture" className="" />
        </ScrollReveal>
      </section>

      {/* ── ARCHITECTURE VISUAL ── */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full pb-24">
        <ScrollReveal delay={0.2} direction="up">
          <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_0_100px_rgba(249,115,22,0.1)] bg-[#0e0703]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0502] via-transparent to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0502]/80 via-transparent to-[#0a0502]/80 z-10" />
            <Image 
              src="/images/arch_industries.png" 
              alt="Industry AI Architecture" 
              fill 
              className="object-cover opacity-80"
            />
            <div className="absolute bottom-8 left-8 z-20 max-w-sm">
              <h3 className="text-xl font-bold text-white mb-2">Centralized Intelligence</h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Connect disparate legacy systems through a central, intelligent layer that understands your domain context.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── INDUSTRIES GRID ── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full border-t border-white/[0.06]">
        <ScrollReveal delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Select Your Domain</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((industry, i) => (
            <ScrollReveal key={industry.slug} delay={0.05 * i} direction="up">
              <Link href={`/industries/${industry.slug}`} className="block h-full group">
                <div className="card-surface p-6 h-full flex flex-col transition-all duration-300 hover:border-orange-500/30">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <industry.icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">{industry.title}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed flex-1 mb-6">
                    {industry.desc}
                  </p>
                  
                  <div className="flex items-center gap-2 text-xs font-semibold text-orange-500 mt-auto uppercase tracking-wider">
                    View Solutions
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center border-t border-white/[0.06] mt-10 pb-40">
        <ScrollReveal delay={0.1}>
          <div className="max-w-2xl mx-auto">
            <p className="section-label mb-4">Don't see yours?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              We build for any industry
            </h2>
            <p className="text-stone-400 mb-10 text-balance leading-relaxed">
              We work with companies in highly specialized domains too. Tell us about your business and we will figure out the right approach together.
            </p>
            <CalendlyButton text="Book Free AI Audit" className="" />
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
