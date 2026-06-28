"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, PenTool, Link2, CheckSquare, PlayCircle as PlayCircleStep, RefreshCw, ArrowRight, PlayCircle } from "lucide-react";
import * as React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ParallaxBackground } from "@/components/ui/parallax-background";
import { AnimatedText } from "@/components/ui/animated-text";
import { DemoModal } from "@/components/ui/demo-modal";
import { workflowDemos } from "@/lib/data/demos";
import { CalendlyButton } from "@/components/ui/calendly-button";

const steps = [
    {
        title: "Free AI Audit",
        icon: Search,
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
        borderColor: "border-orange-500/30",
        desc: "We start by understanding your business — your current workflows, tools, team structure, and biggest pain points. We identify every task that could be handled by AI.",
        deliverable: "A written AI Opportunity Report",
        demoId: "free-ai-audit"
    },
    {
        title: "Agent Design",
        icon: PenTool,
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
        borderColor: "border-orange-500/30",
        desc: "Based on the audit, we design the architecture for your AI agents — what they will do, what tools they will use, how they will make decisions, and when they will involve humans.",
        deliverable: "Agent Blueprint Document",
        demoId: "agent-design"
    },
    {
        title: "Integration",
        icon: Link2,
        color: "text-indigo-400",
        bgColor: "bg-indigo-500/10",
        borderColor: "border-indigo-500/30",
        desc: "We connect your agents to your existing tools — CRM, email, databases, APIs, spreadsheets, or any internal systems.",
        deliverable: "Integrations: Salesforce, HubSpot, Notion, Slack, Gmail, Custom APIs",
        demoId: "integration"
    },
    {
        title: "Testing & Refinement",
        icon: CheckSquare,
        color: "text-purple-400",
        bgColor: "bg-purple-500/10",
        borderColor: "border-purple-500/30",
        desc: "Before full deployment, we run the agents through real scenarios, fix edge cases, and optimize performance.",
        deliverable: null,
        demoId: "testing-refinement"
    },
    {
        title: "Deployment",
        icon: PlayCircleStep,
        color: "text-rose-400",
        bgColor: "bg-emerald-500/10",
        borderColor: "border-emerald-500/30",
        desc: "Your AI agents go live and begin executing work. We monitor performance in real time and make adjustments.",
        deliverable: null,
        demoId: "deployment"
    },
    {
        title: "Continuous Optimization",
        icon: RefreshCw,
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
        borderColor: "border-orange-500/30",
        desc: "AI agents improve over time. We track performance, refine workflows, and expand capabilities as your business grows.",
        deliverable: null,
        demoId: "continuous-optimization"
    }
];

export default function HowItWorksPage() {
    const [activeDemo, setActiveDemo] = React.useState<string | null>(null);

    return (
        <div className="flex flex-col min-h-screen w-full relative pt-24 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-20 left-0 w-[600px] h-[600px] bg-cyan-900/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-20 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none" />

            {/* Hero Section */}
            <section className="relative py-24 lg:py-40 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center min-h-[60vh] justify-center w-full">
                <ParallaxBackground imageUrl="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2670&auto=format&fit=crop" className="opacity-40" overlayClassName="bg-gradient-to-b from-[#130a06]/80 via-[#130a06]/90 to-[#130a06] pointer-events-none" />
                <ScrollReveal delay={0.1}>
                    <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
                        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6 font-serif">
                            <AnimatedText text="How We Build Your" className="justify-center" delay={0.1} />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-500 mt-2 block">AI Workforce</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl text-balance leading-relaxed">
                            From discovery to deployment, here is exactly how we work with you to automate your business.
                        </p>
                    </div>
                </ScrollReveal>
            </section>

            {/* Steps Container */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full relative">
                {/* Connecting Line */}
                <div className="hidden md:block absolute top-0 bottom-0 left-[39px] w-0.5 bg-gradient-to-b from-orange-500/50 via-orange-500/50 to-transparent" />

                <div className="space-y-12 md:space-y-20">
                    {steps.map((step, i) => (
                        <ScrollReveal key={i} delay={0.1} direction="up">
                            <div className="relative flex flex-col md:flex-row gap-8 md:gap-16 items-start group">
                                {/* Step Indicator */}
                                <div className="hidden md:flex flex-col items-center">
                                    <div className={`w-20 h-20 rounded-2xl ${step.bgColor} border border-white/10 flex items-center justify-center shrink-0 z-10 shadow-xl group-hover:${step.borderColor} group-hover:scale-110 transition-all duration-500 backdrop-blur-sm`}>
                                        <step.icon className={`w-8 h-8 ${step.color}`} />
                                    </div>
                                    <div className="mt-4 text-slate-600 font-bold text-lg">0{i + 1}</div>
                                </div>

                                {/* Step Content */}
                                <Card className="w-full bg-[#130a06]/40 border-white/5 hover:bg-[#130a06] transition-colors shadow-none hover:shadow-2xl">
                                    <CardContent className="p-8 md:p-10">
                                        <div className="md:hidden flex items-center gap-4 mb-6">
                                            <div className={`p-4 rounded-xl ${step.bgColor}`}>
                                                <step.icon className={`w-6 h-6 ${step.color}`} />
                                            </div>
                                            <div className="text-gray-500 font-bold uppercase tracking-widest text-sm">Step 0{i + 1}</div>
                                        </div>
                                        <h3 className="text-3xl font-bold text-white mb-6 font-serif">{step.title}</h3>
                                        <p className="text-xl text-gray-400 leading-relaxed mb-6">
                                            {step.desc}
                                        </p>

                                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                            {step.deliverable && (
                                                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-black/40 border border-white/5 text-gray-300 font-medium">
                                                    <div className="w-2 h-2 rounded-full bg-orange-500" />
                                                    <span className="text-sm uppercase tracking-wide text-gray-400">Deliverable:</span>
                                                    <span className="text-white">{step.deliverable}</span>
                                                </div>
                                            )}

                                            {/* Demo Button */}
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="border-white/10 hover:border-orange-500/50 hover:bg-orange-500/10 text-gray-400 hover:text-orange-500 transition-all gap-2 font-semibold shrink-0"
                                                onClick={() => setActiveDemo(step.demoId)}
                                            >
                                                <PlayCircle className="w-4 h-4" />
                                                See in Action
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4 text-center mt-12 bg-[#130a06] border-t border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
                <ScrollReveal delay={0.2} direction="up">
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-serif">Ready to start Step 1?</h2>
                        <CalendlyButton 
                            text="Book Your Free AI Audit"
                            className="w-full sm:w-auto h-12 text-lg"
                        />
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
