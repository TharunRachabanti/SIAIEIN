"use client";

import Link from "next/link";
import { Linkedin as LinkedIn, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import * as React from "react";
import { CalendlyButton } from "@/components/shared/calendly-button";

const footerLinks = [
  {
    heading: "Company",
    items: [
      { label: "About Us", href: "/about-us" },
      { label: "Our Vision", href: "/vision" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/careers" },
    ]
  },
  {
    heading: "Platform",
    items: [
      { label: "AI Agents", href: "/agents" },
      { label: "AI-Native CRM", href: "/products/crm" },
      { label: "How it Works", href: "/how-it-works" },
      { label: "Pricing", href: "/pricing" },
      { label: "Playground", href: "/playground", badge: "Demo" },
    ]
  },
  {
    heading: "Solutions",
    items: [
      { label: "Sales and Lead Gen", href: "/services/ai-workflow-automation" },
      { label: "Customer Support", href: "/services/agentic-ai-development" },
      { label: "Data Processing", href: "/services/data-engineering" },
      { label: "Case Studies", href: "/case-studies" },
    ]
  },
  {
    heading: "Legal",
    items: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Security", href: "/security" },
    ]
  },
];

export function Footer() {
  return (
    <footer className="relative bg-[#0a0502] border-t border-white/[0.06] pt-12 md:pt-20 pb-10 mt-12 md:mt-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8 mb-12 md:mb-16 pb-12 md:pb-16 border-b border-white/[0.06]">
          <div className="max-w-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
              Ready to build your autonomous future?
            </h2>
            <p className="text-stone-400 text-sm leading-relaxed">
              Book a free audit and we will show you exactly where AI can take the load off your team.
            </p>
          </div>
          <CalendlyButton text="Book Free AI Audit" className="shrink-0" />
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">

          {/* Brand + newsletter */}
          <div className="lg:col-span-4 space-y-7">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="relative h-9 w-9 rounded-lg border border-white/10 overflow-hidden bg-[#0a0502] shrink-0">
                <Image
                  src="/images/branding/logo_v3.jpg"
                  alt="SIAIEIN Logo"
                  fill
                  className="object-cover scale-[1.3]"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-black tracking-tighter text-white group-hover:text-orange-500 transition-colors">SIAIEIN</span>
                <span className="text-[9px] font-bold tracking-[0.18em] text-orange-500 uppercase mt-0.5">Agentic AI</span>
              </div>
            </Link>

            <div className="space-y-3">
              <p className="text-stone-300 text-sm font-medium">Get our weekly AI digest</p>
              <p className="text-stone-500 text-xs">Practical insights on autonomous business systems.</p>
              <form className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="bg-white/[0.04] border-white/[0.08] text-white placeholder:text-stone-600 focus-visible:ring-orange-500 h-10 text-sm w-full"
                />
                <Button type="submit" className="bg-orange-500 hover:bg-orange-400 text-white px-4 h-10 text-sm shrink-0 w-full sm:w-auto">
                  Subscribe
                </Button>
              </form>
            </div>

            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-stone-400 hover:text-white hover:border-white/[0.15] transition-colors">
                <LinkedIn className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-stone-400 hover:text-white hover:border-white/[0.15] transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="mailto:hello@siaiein.com" className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-stone-400 hover:text-white hover:border-white/[0.15] transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            {footerLinks.map((section) => (
              <div key={section.heading} className="flex flex-col">
                <h4 className="text-white text-xs font-bold uppercase tracking-[0.15em] mb-6">{section.heading}</h4>
                <ul className="flex flex-col gap-1">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="text-sm text-stone-500 hover:text-stone-200 transition-colors flex items-center gap-2 py-2">
                        {item.label}
                        {"badge" in item && item.badge && (
                          <span className="bg-orange-500/15 text-orange-500 text-[9px] px-1.5 py-0.5 rounded uppercase font-bold tracking-wider">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-stone-600 text-sm">
            &copy; 2026 SIAIEIN. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-stone-600">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
