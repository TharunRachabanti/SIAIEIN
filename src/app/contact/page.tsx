"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, FileText, Loader2, CheckCircle2 } from "lucide-react";
import * as React from "react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { CalendlyButton } from "@/components/shared/calendly-button";

const nextSteps = [
  { icon: Clock, title: "1. Fast Review", desc: "We review your submission within 24 hours." },
  { icon: Calendar, title: "2. Discovery Call", desc: "We schedule a 30-minute call to dive deep into your workflows." },
  { icon: FileText, title: "3. Opportunity Report", desc: "You receive a free written AI Opportunity Report with actionable automations." },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");
    const formData = new FormData(e.currentTarget);
    
    // IMPORTANT: Replace this with your free access key from web3forms.com
    formData.append("access_key", "f685c0cb-e8fe-453b-90af-d96d350757ea");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const res = await response.json();
      
      if (res.success) {
        setSuccess(true);
      } else {
        setErrorMsg(res.message || "Something went wrong. Please try again or email us at hello@siaiein.com");
      }
    } catch {
      setErrorMsg("Something went wrong. Please try again or email us at hello@siaiein.com");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex flex-col min-h-screen w-full bg-[#0a0502] pt-24">

      {/* ── HERO ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <ScrollReveal delay={0.1}>
          <p className="section-label mb-4">Contact</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Let's Build Something{" "}
            <span className="text-orange-500">Intelligent</span>
          </h1>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto text-balance leading-relaxed">
            Tell us about your business and we'll show you exactly where AI can transform your operations.
          </p>
        </ScrollReveal>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] pb-40">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left: Info */}
          <div className="space-y-12">
            <ScrollReveal delay={0.1}>
              <div>
                <p className="section-label mb-6">What Happens Next</p>
                <div className="space-y-6">
                  {nextSteps.map((step, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <step.icon className="w-5 h-5 text-orange-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{step.title}</h4>
                        <p className="text-stone-400 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                <div className="card-surface p-5">
                  <h4 className="text-white font-semibold text-sm mb-2">Global Engineering</h4>
                  <p className="text-stone-400 text-xs leading-relaxed">Remote First. Operating Worldwide.</p>
                </div>
                <div className="card-surface p-5">
                  <h4 className="text-white font-semibold text-sm mb-2">Direct Contact</h4>
                  <p className="text-stone-400 text-xs leading-relaxed">hello@siaiein.com<br />support@siaiein.com</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="card-surface p-6">
                <div className="text-3xl text-orange-500/20 font-serif leading-none mb-3">"</div>
                <p className="text-stone-400 text-sm italic leading-relaxed mb-4">
                  We are not building tools for humans to use. We are building the synthetic workforce that will execute the world's digital labor, so humans can focus on strategy, creativity, and connection.
                </p>
                <p className="text-white text-xs font-bold tracking-widest uppercase">The SIAIEIN Vision</p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Form */}
          <ScrollReveal delay={0.2} direction="up">
            <div className="card-surface p-8 md:p-10">
              {success ? (
                <div className="text-center py-12">
                  <div className="w-14 h-14 bg-orange-500/10 border border-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-7 h-7 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Message Received</h3>
                  <p className="text-stone-400 text-sm leading-relaxed text-balance">
                    Thank you. We'll review your submission and reach out within 24 hours.
                  </p>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <p className="section-label mb-6">Get Your Free AI Audit</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-stone-400 text-xs font-semibold uppercase tracking-wider">Full Name *</Label>
                      <Input id="name" name="name" required placeholder="Rahul Sharma" className="bg-white/[0.03] border-white/[0.08] h-11 text-white placeholder:text-stone-600 focus-visible:ring-orange-500" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-stone-400 text-xs font-semibold uppercase tracking-wider">Company *</Label>
                      <Input id="company" name="company" required placeholder="Reliance Industries" className="bg-white/[0.03] border-white/[0.08] h-11 text-white placeholder:text-stone-600 focus-visible:ring-orange-500" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-stone-400 text-xs font-semibold uppercase tracking-wider">Email *</Label>
                    <Input id="email" name="email" required type="email" placeholder="rahul@reliance.com" className="bg-white/[0.03] border-white/[0.08] h-11 text-white placeholder:text-stone-600 focus-visible:ring-orange-500" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-stone-400 text-xs font-semibold uppercase tracking-wider">Industry *</Label>
                      <Select name="industry" required>
                        <SelectTrigger className="bg-white/[0.03] border-white/[0.08] h-11 text-white focus:ring-orange-500">
                          <SelectValue placeholder="Select Industry" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#120901] border-white/[0.08] text-white">
                          <SelectItem value="ecommerce">E-commerce</SelectItem>
                          <SelectItem value="saas">SaaS & Tech</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-stone-400 text-xs font-semibold uppercase tracking-wider">Company Size *</Label>
                      <Select name="size" required>
                        <SelectTrigger className="bg-white/[0.03] border-white/[0.08] h-11 text-white focus:ring-orange-500">
                          <SelectValue placeholder="Company Size" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#120901] border-white/[0.08] text-white">
                          <SelectItem value="1-10">1–10 employees</SelectItem>
                          <SelectItem value="10-50">10–50 employees</SelectItem>
                          <SelectItem value="50-200">50–200 employees</SelectItem>
                          <SelectItem value="200+">200+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="challenge" className="text-stone-400 text-xs font-semibold uppercase tracking-wider">Biggest Operational Challenge *</Label>
                    <Textarea id="challenge" name="challenge" required placeholder="We spend 20 hours a week manually entering data..." className="bg-white/[0.03] border-white/[0.08] min-h-[110px] text-white placeholder:text-stone-600 focus-visible:ring-orange-500" />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-stone-400 text-xs font-semibold uppercase tracking-wider">How Did You Hear About Us?</Label>
                    <Input name="source" placeholder="LinkedIn, Search, Referral..." className="bg-white/[0.03] border-white/[0.08] h-11 text-white placeholder:text-stone-600 focus-visible:ring-orange-500" />
                  </div>

                  <Button disabled={isSubmitting} type="submit" variant="glowing" size="lg" className="w-full">
                    {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                    {isSubmitting ? "Submitting..." : "Request My Free AI Audit"}
                  </Button>

                  {errorMsg && <p className="text-red-500 text-xs text-center">{errorMsg}</p>}

                  <div className="pt-5 border-t border-white/[0.06] text-center">
                    <p className="text-stone-500 text-sm mb-4">Or book a direct call:</p>
                    <CalendlyButton text="Book via Calendar" className="w-full" />
                  </div>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
