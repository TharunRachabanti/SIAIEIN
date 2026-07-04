import { BarChart3, Clock, Zap } from "lucide-react";
import * as React from "react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import Link from "next/link";
import { CalendlyButton } from "@/components/shared/calendly-button";

const studies = [
  {
    industry: "Logistics and Supply Chain",
    title: "Automating High-Volume Invoice Processing",
    body: "Logistics companies spend enormous effort on manual data entry just to process vendor invoices. We built a Finance Agent that reads PDFs, checks them against purchase orders in the ERP, and drafts payment approvals on its own. No spreadsheets. No data entry teams.",
    outcome: "Near-elimination of manual data entry",
    agentType: "Finance and Accounting Agent",
    icon: Zap,
  },
  {
    industry: "SaaS Sales",
    title: "Scaling Outbound Sales Without Hiring More SDRs",
    body: "Fast-growing SaaS companies need to reach more prospects without growing their sales team at the same pace. We built a multi-agent system that researches leads, writes personalised emails, runs follow-up sequences, and books meetings straight into the CRM.",
    outcome: "Scaled outbound capacity without extra headcount",
    agentType: "Sales Intelligence Agent",
    icon: BarChart3,
  },
  {
    industry: "E-commerce",
    title: "Handling Support Tickets Automatically at Scale",
    body: "During sale seasons, support teams drown in 'Where is my order?' tickets. We built a Customer Support Agent connected to Shopify and Zendesk that checks order status, processes returns, handles refunds, and only escalates what genuinely needs a human.",
    outcome: "Significant drop in support resolution time",
    agentType: "Customer Support Agent",
    icon: Clock,
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-[#0a0502] pt-24">

      {/* HERO */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <ScrollReveal delay={0.1}>
          <p className="section-label mb-4">Case Studies</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Real Workflows. <span className="text-orange-500">Real Results.</span>
          </h1>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto leading-relaxed text-balance">
            These are the kinds of problems we solve. Every engagement starts by understanding your specific situation before we build anything.
          </p>
        </ScrollReveal>
      </section>

      {/* CASE STUDIES */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full border-t border-white/[0.06] space-y-5">
        {studies.map((study, i) => (
          <ScrollReveal key={i} delay={0.1 * i} direction="up">
            <div className="card-surface p-8 md:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                {/* Text */}
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <p className="section-label mb-3">{study.industry}</p>
                  <h2 className="text-2xl font-bold text-white mb-4">{study.title}</h2>
                  <p className="text-stone-400 leading-relaxed mb-6">{study.body}</p>
                  <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5">
                    <p className="text-xs text-stone-500 font-semibold uppercase tracking-wider mb-1">Target Outcome</p>
                    <p className="text-white font-semibold">{study.outcome}</p>
                  </div>
                  <p className="text-xs text-stone-600 mt-3 italic">
                    Outcomes vary by implementation. Contact us for an assessment specific to your business.
                  </p>
                </div>

                {/* Visual */}
                <div className={`bg-white/[0.02] border border-white/[0.05] rounded-xl p-8 flex flex-col items-center justify-center min-h-[200px] ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="w-14 h-14 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4">
                    <study.icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <p className="text-xs text-stone-500 font-semibold uppercase tracking-wider mb-1">Agent Type</p>
                  <p className="text-white font-semibold text-center">{study.agentType}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center border-t border-white/[0.06] mt-10 pb-40">
        <ScrollReveal delay={0.1}>
          <div className="max-w-2xl mx-auto">
            <p className="section-label mb-4">Next Steps</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to build this for your business?
            </h2>
            <p className="text-stone-400 mb-10 text-balance leading-relaxed">
              Stop adding headcount to solve repetitive problems. Book a call and we will show you what we can automate for you.
            </p>
            <CalendlyButton text="Start the Conversation" className="" />
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
