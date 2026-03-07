import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Zap, Target, Lock, BarChart3, Users, Briefcase, Database } from "lucide-react";
import * as React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

// Mock data based on the site's structure
const agentsData: Record<string, {
    label: string;
    title: string;
    desc: string;
    problems: { metric: string; outcome: string; text: string; icon: any }[];
    steps: { title: string; desc: string }[];
    features: string[];
}> = {
    "operations": {
        label: "Business Operations Manager",
        title: "Track Projects & Deadlines Intelligently",
        desc: "An AI manager that keeps your entire operation running smoothly. It monitors tasks across all your tools and alerts you before things fall behind.",
        problems: [
            { metric: "Deadlines", outcome: "Never Missed", text: "Automatically tracks deliverables across Jira, Asana, and Slack.", icon: Target },
            { metric: "Reporting", outcome: "Zero Manual Work", text: "Compiles weekly cross-platform status reports in seconds.", icon: BarChart3 }
        ],
        steps: [
            { title: "Connect Platforms", desc: "Link your project management and communication tools via secure OAuth." },
            { title: "Set Thresholds", desc: "Define what constitutes a 'delay' or 'blocker' for your specific workflow." },
            { title: "Automated Oversight", desc: "The agent actively monitors and gently nudges team members when needed." }
        ],
        features: ["Cross-platform synchronization", "Automated status updates", "Blocker identification", "Resource allocation tracking"]
    },
    "sales": {
        label: "Sales Intelligence",
        title: "Scale Your Sales Without Scaling Your Team",
        desc: "Never miss a lead again. This agent provides instant qualification, intelligent CRM updating, and automated follow-ups.",
        problems: [
            { metric: "Speed to Lead", outcome: "Under 5 Minutes", text: "78% of customers buy from the first responder. We ensure that's you.", icon: Zap },
            { metric: "CRM Hygiene", outcome: "100% Accurate", text: "Automatically logs emails, calls, and meeting notes into Salesforce or HubSpot.", icon: Lock }
        ],
        steps: [
            { title: "Sync CRM & Email", desc: "Connect your inbound lead sources and outbound communication tools." },
            { title: "Define Playbooks", desc: "Upload your qualification framework and ideal customer profile (ICP)." },
            { title: "Instant Engagement", desc: "The agent immediately engages new leads and books meetings on your calendar." }
        ],
        features: ["Instant lead qualification", "Automated meeting scheduling", "Sentiment analysis on email replies", "Pipeline forecasting"]
    },
    "digital-growth": {
        label: "Digital Growth Agent",
        title: "Always-On Marketing Optimization",
        desc: "Manage your online presence 24/7. This agent analyzes ad spend, monitors social sentiment, and optimizes conversion paths.",
        problems: [
            { metric: "Ad Spend", outcome: "Optimized ROI", text: "Automatically pauses underperforming campaigns and scales winners.", icon: BarChart3 },
            { metric: "Social Response", outcome: "Instant Engagement", text: "Monitors brand mentions and engages with positive sentiment.", icon: Users }
        ],
        steps: [
            { title: "Connect Ad Accounts", desc: "Link Google Ads, Meta Ads, and LinkedIn Campaign Manager." },
            { title: "Set KPI Targets", desc: "Define your target CAC, ROAS, and weekly budget limits." },
            { title: "Algorithmic Scaling", desc: "The agent autonomously shifts budget to the highest-performing channels." }
        ],
        features: ["Cross-channel budget allocation", "Anomaly detection in traffic", "A/B test monitoring", "Competitor ad tracking"]
    },
    "workforce": {
        label: "Workforce Intelligence",
        title: "Monitor Team Capacity & Wellness",
        desc: "Ensure your team isn't burning out while maintaining productivity. This agent balances workloads automatically.",
        problems: [
            { metric: "Burnout Risk", outcome: "Proactively Managed", text: "Identifies team members working consistently outside normal hours.", icon: Users },
            { metric: "Resource Allocation", outcome: "Perfect Balance", text: "Reroutes tasks from overloaded members to those with capacity.", icon: Briefcase }
        ],
        steps: [
            { title: "Integrate Systems", desc: "Connect HRIS, Calendar, and Slack/Teams." },
            { title: "Set Guidelines", desc: "Establish normal working hours and maximum meeting loads." },
            { title: "Active Balancing", desc: "The agent recommends meeting-free blocks and task reallocation." }
        ],
        features: ["Meeting overload detection", "Capacity forecasting", "Automated 1-on-1 scheduling", "Flight-risk identification"]
    },
    "supporting": {
        label: "Supporting Agents",
        title: "Expand Your AI Team On-Demand",
        desc: "Custom agents trained on your specific documentation to handle niche, highly-specific tasks in your organization.",
        problems: [
            { metric: "Custom Processes", outcome: "Fully Automated", text: "Handle unique workflows that off-the-shelf software can't support.", icon: Zap },
            { metric: "Knowledge Silos", outcome: "Instantly Accessible", text: "Turns static documentation into an interactive, reasoning entity.", icon: Database }
        ],
        steps: [
            { title: "Upload Knowledge", desc: "Provide PDFs, wikis, and historical ticket data." },
            { title: "Define Boundaries", desc: "Set strict guardrails on what the agent can and cannot do." },
            { title: "Deploy & Refine", desc: "Launch internally, monitor decisions, and refine instructions." }
        ],
        features: ["RAG (Retrieval-Augmented Generation)", "Strict access controls", "Custom webhook triggers", "Human-in-the-loop escalation"]
    }
};

export async function generateStaticParams() {
    return Object.keys(agentsData).map((key) => ({
        agent: key,
    }));
}

export default async function AgentPage({ params }: { params: Promise<{ agent: string }> }) {
    const resolvedParams = await params;
    const agentKey = resolvedParams.agent;

    if (!agentsData[agentKey as keyof typeof agentsData]) {
        notFound();
    }

    const data = agentsData[agentKey as keyof typeof agentsData];

    return (
        <div className="flex flex-col min-h-screen w-full relative overflow-hidden pt-24">
            {/* Glow Backdrop */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

            {/* Hero Section */}
            <ScrollReveal delay={0.1}>
                <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold mb-6">
                        <Zap className="h-4 w-4" /> {data.label}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                        {data.title}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mb-10 leading-relaxed text-balance">
                        {data.desc}
                    </p>
                    <div className="flex sm:flex-row flex-col gap-4">
                        <Button size="lg" className="w-full sm:w-auto h-12 px-8 hover:scale-105 transition-transform shadow-[0_0_20px_rgba(6,182,212,0.3)]">Start Free Trial</Button>
                        <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 hover:bg-white/5 hover:scale-105 transition-all">View Interactive Demo</Button>
                    </div>
                </section>
            </ScrollReveal>

            {/* Problems Solved Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 w-full">
                <ScrollReveal delay={0.1}>
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Business Impact</h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {data.problems.map((prob, i) => (
                        <ScrollReveal key={i} delay={0.1 * i} direction="up">
                            <Card className="bg-slate-900/50 border-white/5 hover:border-cyan-500/30 hover:bg-slate-900 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(6,182,212,0.1)] transition-all duration-300 group h-full">
                                <CardContent className="p-8 flex flex-col items-center text-center h-full">
                                    <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-white/10 flex items-center justify-center mb-6 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300">
                                        <prob.icon className="h-8 w-8 text-cyan-400" />
                                    </div>
                                    <h3 className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-2 group-hover:text-cyan-400 transition-colors">{prob.metric}</h3>
                                    <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-200 transition-all">{prob.outcome}</h4>
                                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{prob.text}</p>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* How it Works Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                <ScrollReveal delay={0.1}>
                    <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 md:p-16 hover:border-cyan-500/20 transition-colors duration-500 shadow-2xl">
                        <h2 className="text-3xl font-bold text-white mb-16 text-center">How Deployment Works</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                            <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0" />

                            {data.steps.map((step, i) => (
                                <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                                    <div className="w-16 h-16 rounded-full bg-slate-950 border-2 border-cyan-500 flex items-center justify-center text-cyan-400 font-bold text-xl mb-6 shadow-[0_0_20px_rgba(6,182,212,0.2)] group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300">
                                        {i + 1}
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{step.title}</h4>
                                    <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* Deep Capabilities Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
                <ScrollReveal delay={0.1}>
                    <h2 className="text-3xl font-bold text-white mb-10 text-center">Core Capabilities</h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {data.features.map((feat, i) => (
                        <ScrollReveal key={i} delay={0.1 * i} direction="right">
                            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/30 hover:bg-white/10 transition-all duration-300 group">
                                <CheckCircle2 className="h-6 w-6 text-blue-500 shrink-0 group-hover:scale-110 group-hover:text-cyan-400 transition-all duration-300" />
                                <span className="text-gray-200 font-medium group-hover:text-white transition-colors">{feat}</span>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-24 mt-10 px-4 text-center bg-gradient-to-t from-cyan-500/5 to-transparent border-t border-white/5">
                <ScrollReveal delay={0.1}>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Hire your {data.label.toLowerCase()} today.</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">Requires zero coding experience. Connects to your existing tools in minutes.</p>
                    <Button size="lg" className="h-12 px-10 text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(6,182,212,0.2)]">Deploy Agent</Button>
                </ScrollReveal>
            </section>
        </div>
    );
}
