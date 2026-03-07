"use client";

import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, MessageSquare, Search, Settings, DollarSign, Users, BarChart3, ChevronRight, PlayCircle } from "lucide-react";
import * as React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { DemoModal } from "@/components/ui/demo-modal";
import { agentDemos } from "@/lib/data/demos";

const agents = [
    {
        title: "Sales Outreach Agent",
        shortDesc: "Automates your entire top-of-funnel sales process.",
        icon: TrendingUp,
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "hover:border-blue-500/50",
        bgImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
        list: ["Identify and qualify leads", "Write personalized outreach emails", "Send follow-up sequences", "Track responses and engagement", "Book meetings automatically", "Update CRM records"],
        demoId: "sales-outreach"
    },
    {
        title: "Customer Support Agent",
        shortDesc: "24/7 intelligent support that resolves issues without human involvement.",
        icon: MessageSquare,
        color: "text-cyan-400",
        bg: "bg-cyan-500/10",
        border: "hover:border-cyan-500/50",
        bgImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
        list: ["Answer FAQs from your knowledge base", "Handle refund and return requests", "Escalate complex issues to humans", "Log every interaction", "Learn from past conversations"],
        demoId: "customer-support"
    },
    {
        title: "Research & Intelligence Agent",
        shortDesc: "Continuously monitors your market and delivers structured insights.",
        icon: Search,
        color: "text-purple-400",
        bg: "bg-purple-500/10",
        border: "hover:border-purple-500/50",
        bgImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
        list: ["Track competitor activity", "Monitor industry news", "Analyze trends", "Generate weekly intelligence reports", "Identify opportunities and threats"],
        demoId: "research-intelligence"
    },
    {
        title: "Operations Agent",
        shortDesc: "Keeps your internal workflows running without manual management.",
        icon: Settings,
        color: "text-slate-400",
        bg: "bg-slate-500/10",
        border: "hover:border-slate-500/50",
        bgImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
        list: ["Task assignment and tracking", "Internal communication automation", "Process monitoring and alerts", "Document management", "Workflow optimization recommendations"],
        demoId: "operations"
    },
    {
        title: "Finance & Accounting Agent",
        shortDesc: "Automates financial monitoring and reporting.",
        icon: DollarSign,
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "hover:border-emerald-500/50",
        bgImage: "https://images.unsplash.com/photo-1586528116311-ad8ed7a6a4c2?q=80&w=800&auto=format&fit=crop",
        list: ["Invoice processing", "Expense tracking", "Anomaly and fraud detection", "Financial report generation", "Budget monitoring alerts"],
        demoId: "finance-accounting"
    },
    {
        title: "HR & Recruitment Agent",
        shortDesc: "Handles the repetitive parts of hiring and HR management.",
        icon: Users,
        color: "text-indigo-400",
        bg: "bg-indigo-500/10",
        border: "hover:border-indigo-500/50",
        bgImage: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop",
        list: ["Resume screening and ranking", "Candidate outreach", "Interview scheduling", "Onboarding document processing", "Employee query handling"],
        demoId: "hr-recruitment"
    },
    {
        title: "Data Analyst Agent",
        shortDesc: "Transforms raw data into actionable business intelligence.",
        icon: BarChart3,
        color: "text-amber-400",
        bg: "bg-amber-500/10",
        border: "hover:border-amber-500/50",
        bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
        list: ["Connect to databases and spreadsheets", "Run analysis automatically", "Generate dashboards and visualizations", "Summarize key findings", "Alert teams to important changes"],
        demoId: "data-analyst"
    }
];

export default function AgentsPage() {
    const [activeDemo, setActiveDemo] = React.useState<string | null>(null);

    return (
        <div className="flex flex-col min-h-screen w-full relative pt-24 overflow-hidden">
            {/* Background Map */}
            <div className="absolute top-0 left-0 w-[800px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

            {/* Hero Section */}
            <ScrollReveal delay={0.1}>
                <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center text-center z-10">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6">
                        Our AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Agents</span>
                    </h1>
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-sm font-medium text-emerald-400">
                            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            Enterprise Grade Security
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-sm font-medium text-indigo-400">
                            <div className="w-2 h-2 rounded-full bg-indigo-400" />
                            Data Isolation Guaranteed
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* Agents Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10 border-t border-white/5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {agents.map((agent, i) => (
                        <ScrollReveal key={i} delay={0.05 * i} direction="up" className={i === 6 ? "lg:col-span-2 lg:mx-auto lg:w-1/2" : ""}>
                            <Card className={`bg-gradient-to-br from-slate-800/60 to-slate-800/80 border border-white/10 hover:-translate-y-2 h-full transition-all duration-300 group ${agent.border} shadow-xl overflow-hidden relative`}>
                                <div
                                    className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-cover bg-center mix-blend-overlay pointer-events-none"
                                    style={{ backgroundImage: `url('${agent.bgImage}')` }}
                                />
                                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none z-0">
                                    <agent.icon className={`w-64 h-64 ${agent.color} transform rotate-12`} />
                                </div>
                                <CardContent className="p-8 relative z-10">
                                    <div className="flex flex-col sm:flex-row gap-6 mb-8 items-start sm:items-center">
                                        <div className={`p-5 rounded-2xl ${agent.bg} border border-[currentcolor]/20 group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                                            <agent.icon className={`w-10 h-10 ${agent.color}`} />
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors uppercase tracking-tight">{agent.title}</h3>
                                            <p className="text-lg text-gray-400 font-medium leading-relaxed">{agent.shortDesc}</p>
                                        </div>
                                    </div>

                                    <div className="bg-black/40 border border-white/5 rounded-2xl p-6 mb-6">
                                        <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4">Capabilities:</h4>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {agent.list.map((item, j) => (
                                                <li key={j} className="flex items-start gap-3">
                                                    <ChevronRight className={`w-5 h-5 shrink-0 ${agent.color} opacity-70 mt-0.5 group-hover:translate-x-1 transition-transform`} />
                                                    <span className="text-gray-300 group-hover:text-gray-200 leading-relaxed font-medium transition-colors">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Demo Button */}
                                    <Button
                                        variant="outline"
                                        className={`w-full border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-gray-300 hover:text-cyan-400 transition-all gap-2 font-semibold`}
                                        onClick={() => setActiveDemo(agent.demoId)}
                                    >
                                        <PlayCircle className="w-4 h-4" />
                                        Watch Live Demo
                                    </Button>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-4 text-center mt-12 bg-slate-800 border-t border-white/5 relative z-10">
                <ScrollReveal delay={0.1}>
                    <h2 className="text-4xl font-bold text-white mb-8">Deploy your first agent this week.</h2>
                    <Button size="lg" className="h-16 px-10 text-xl font-bold hover:scale-105 transition-transform shadow-[0_0_30px_rgba(168,85,247,0.3)] bg-purple-600 hover:bg-purple-500 text-white">
                        Get Free Automation Audit
                    </Button>
                </ScrollReveal>
            </section>

            {/* Demo Modal */}
            {activeDemo && agentDemos[activeDemo] && (
                <DemoModal
                    config={agentDemos[activeDemo]}
                    isOpen={!!activeDemo}
                    onClose={() => setActiveDemo(null)}
                />
            )}
        </div>
    );
}
