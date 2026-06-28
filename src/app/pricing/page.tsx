"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Check, ChevronDown, Rocket, ShieldCheck, Workflow, Target, Zap, PhoneCall } from "lucide-react";
import * as React from "react";
import { useState } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CalendlyButton } from "@/components/ui/calendly-button";

export default function PricingPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const faqs = [
        { q: "How is pricing determined?", a: "Pricing is based on your specific business needs, workflow complexity, expected ROI, the number of isolated agents needed, and your required level of support." },
        { q: "Is there a setup fee?", a: "Yes, there is a one-time implementation fee based on complexity. This covers building the custom logic, training your team, and a 30-day onboarding period." },
        { q: "Do you offer a guarantee?", a: "Absolutely. We offer a 30-day money-back guarantee on the implementation fee if you do not see the agreed-upon value." },
        { q: "What if my needs change?", a: "Our custom pricing model is flexible. You can easily add more agents or scale down capabilities as your business evolves." },
        { q: "How do I get started?", a: "Simply schedule a free consultation call. We will discuss your workflows and build a custom proposal for you." }
    ];

    return (
        <div className="flex flex-col min-h-screen w-full relative pt-24 overflow-hidden">

            {/* Hero Section */}
            <ScrollReveal delay={0.1} direction="up">
                <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto flex flex-col items-center text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 font-serif">
                        Custom Pricing Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-500">Your Business</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 mb-10 text-balance">
                        We don't believe in one-size-fits-all pricing. Every business is unique, so we create a personalized solution that matches your specific needs, budget, and goals.
                    </p>
                    <CalendlyButton 
                        text="Schedule Free Consultation" 
                        className="w-full sm:w-auto h-12 text-lg"
                    />
                </section>
            </ScrollReveal>

            {/* Why Custom Pricing Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 w-full">
                <ScrollReveal delay={0.1}>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4 font-serif">Why Custom Pricing?</h2>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { title: "Perfect Fit", icon: Target, desc: "You only pay for the exact bots and logic you need." },
                        { title: "No Waste", icon: Zap, desc: "Avoid bloated enterprise plans with features you never use." },
                        { title: "Transparent", icon: ShieldCheck, desc: "Clear breakdown of costs before any commitment is made." },
                        { title: "Flexible", icon: Workflow, desc: "Easily scale your bot infrastructure as your business logic changes." },
                        { title: "Expert Support", icon: PhoneCall, desc: "Direct access to our engineers for seamless integration." },
                        { title: "Guaranteed ROI", icon: Rocket, desc: "Priced carefully to ensure automation pays for itself quickly." }
                    ].map((item, i) => (
                        <ScrollReveal key={i} delay={0.1 * i} direction="up">
                            <div className="bg-[#130a06]/50 border border-[#130a06] p-8 rounded-2xl hover:border-orange-500/50 hover:bg-[#130a06] transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)] h-full">
                                <div className="p-3 bg-orange-500/10 w-max rounded-xl mb-4 group-hover:bg-orange-500/20 group-hover:scale-110 transition-all duration-300">
                                    <item.icon className="h-6 w-6 text-orange-500" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-500 transition-colors">{item.title}</h3>
                                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{item.desc}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* Our Process - 4 Steps */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center border-t border-white/5">
                <ScrollReveal delay={0.1}>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 font-serif">Our Process</h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
                    <div className="hidden lg:block absolute top-[20px] left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-orange-500/0 via-orange-500/50 to-orange-500/0" />

                    {[
                        { num: "01", title: "Discovery Call (30 min)", desc: "We understand your business challenges, goals, and current processes. No pressure, just a conversation." },
                        { num: "02", title: "Deep Dive Analysis", desc: "Our team analyzes your workflows, identifies automation opportunities, and calculates potential ROI within 3-5 days." },
                        { num: "03", title: "Custom Proposal", desc: "You receive a personalized proposal with specific agents, features, timeline, and transparent pricing." },
                        { num: "04", title: "Implementation", desc: "We deploy your agents, train your team, and ensure everything runs smoothly. Start seeing results immediately." }
                    ].map((step, i) => (
                        <ScrollReveal key={i} delay={0.1 * i} direction="up">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 relative flex flex-col items-center group hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300 h-full mt-6 lg:mt-0">
                                <div className="absolute -top-6 bg-[#130a06] border-2 border-orange-500 text-orange-500 font-bold text-xl h-12 w-12 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300">
                                    {step.num}
                                </div>
                                <h3 className="text-xl font-bold text-white mt-4 mb-3 group-hover:text-orange-500 transition-colors">{step.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{step.desc}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* What We Include */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 w-full">
                <ScrollReveal delay={0.1}>
                    <h2 className="text-3xl font-bold text-white mb-12 text-center font-serif">What We Include</h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { title: "Sales Automation", items: ["Lead qualification & scoring", "Automated email outreach", "Meeting scheduling bots"] },
                        { title: "Operations Automation", items: ["Invoice processing", "Workflow routing", "Data entry automation"] },
                        { title: "Marketing & Growth", items: ["Social media distribution", "Content generation", "Audience engagement tracking"] },
                        { title: "Workforce Management", items: ["Capacity tracking", "Burnout prevention metrics", "Schedule optimization"] }
                    ].map((feature, i) => (
                        <ScrollReveal key={i} delay={0.1 * i} direction={i % 2 === 0 ? "right" : "left"}>
                            <Card className="bg-[#130a06]/40 border-[#130a06] hover:border-orange-500/30 transition-colors duration-300 overflow-hidden group h-full">
                                <CardHeader className="bg-black/20 border-b border-white/5 group-hover:bg-orange-500/5 transition-colors">
                                    <CardTitle className="text-xl text-orange-500 flex items-center gap-2">
                                        <Zap className="h-5 w-5 opacity-0 group-hover:opacity-100 -ml-7 group-hover:ml-0 transition-all duration-300" />
                                        {feature.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-6">
                                    <ul className="space-y-4">
                                        {feature.items.map((item, j) => (
                                            <li key={j} className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors">
                                                <div className="p-1 rounded-full bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors">
                                                    <Check className="h-4 w-4 text-orange-500 group-hover:text-orange-500 transition-colors shrink-0" />
                                                </div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto border-t border-white/5 w-full">
                <ScrollReveal delay={0.1}>
                    <h2 className="text-3xl font-bold text-white mb-10 text-center font-serif">Frequently Asked Questions</h2>
                </ScrollReveal>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <ScrollReveal key={i} delay={0.1 * i} direction="up">
                            <div
                                className="bg-[#130a06]/50 border border-white/10 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer hover:border-orange-500/30 hover:bg-[#130a06]/80"
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                            >
                                <div className="p-6 flex justify-between items-center text-white hover:text-orange-500 transition-colors">
                                    <h4 className="font-semibold">{faq.q}</h4>
                                    <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-orange-500' : ''}`} />
                                </div>
                                <div
                                    className={`px-6 overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-20 px-4 text-center bg-gradient-to-t from-cyan-900/20 to-transparent">
                <ScrollReveal delay={0.1}>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-serif">Ready to Transform?</h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <CalendlyButton 
                            text="Schedule Consultation" 
                            className="w-full sm:w-auto h-12 text-lg"
                        />
                        <Button size="lg" variant="outline" className="w-full sm:w-auto hover:scale-105 transition-transform">View Case Studies</Button>
                    </div>
                </ScrollReveal>
            </section>

        </div>
    );
}
