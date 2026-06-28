import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Brain, Eye, Zap, BarChart3, Database, Lock, Shield, Layers, CheckCircle2 } from "lucide-react";
import * as React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ParallaxBackground } from "@/components/ui/parallax-background";
import { AnimatedText } from "@/components/ui/animated-text";

export default function PlatformPage() {
    return (
        <div className="flex flex-col min-h-screen w-full relative overflow-hidden pt-24">

            {/* Abstract Background Glows */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />

            {/* Hero Section */}
            <section className="relative py-24 lg:py-40 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center min-h-[60vh] justify-center w-full">
                <ParallaxBackground imageUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop" className="opacity-50" overlayClassName="bg-gradient-to-b from-[#130a06]/80 via-[#130a06]/90 to-[#130a06] pointer-events-none" />
                <ScrollReveal delay={0.1}>
                    <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mb-6 font-serif">
                            <span className="inline-flex items-center flex-wrap justify-center gap-x-3">
                                <AnimatedText text="The" delay={0.1} />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-500">Brain</span>
                                <AnimatedText text="Behind Every Agent" delay={0.3} />
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mb-10 text-balance mx-auto">
                            Our platform isn't something you interact with daily—it's the foundation that makes all your agents work together intelligently.
                        </p>
                    </div>
                </ScrollReveal>
            </section>

            {/* What the Platform Does */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 w-full">
                <ScrollReveal delay={0.1}>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center font-serif">What the Platform Does</h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        {
                            icon: Database,
                            title: "Unified Intelligence Layer",
                            desc: "All your business data—from website visitors to CRM records to project statuses—flows into one secure system. Agents draw from this shared knowledge, so they always have context."
                        },
                        {
                            icon: Layers,
                            title: "Modular Agent Architecture",
                            desc: "Each agent is independent but aware of others. Your Sales Agent knows when Operations is slammed. Your Marketing Agent sees when Sales needs more leads. They coordinate without you playing middleman."
                        },
                        {
                            icon: Lock,
                            title: "Secure Integrations",
                            desc: "We connect to your existing tools through official APIs and OAuth—no sketchy screen scraping or security shortcuts. Your IT team can review everything."
                        },
                        {
                            icon: BarChart3,
                            title: "Real-Time Monitoring",
                            desc: "See what every agent is doing right now. Get alerts when something needs your attention. Review reports whenever you want."
                        }
                    ].map((feature, i) => (
                        <ScrollReveal key={i} delay={0.1 * i} direction="up">
                            <Card className="bg-[#130a06]/40 hover:bg-[#130a06] border-white/5 hover:border-orange-500/30 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(6,182,212,0.1)] group h-full">
                                <CardHeader>
                                    <div className="p-3 bg-orange-500/10 w-max rounded-xl mb-4 group-hover:bg-orange-500/20 group-hover:scale-110 transition-all duration-300">
                                        <feature.icon className="h-6 w-6 text-orange-500" />
                                    </div>
                                    <CardTitle className="text-xl group-hover:text-orange-500 transition-colors">{feature.title}</CardTitle>
                                    <CardDescription className="text-gray-400 group-hover:text-gray-300 text-base leading-relaxed mt-2 transition-colors">{feature.desc}</CardDescription>
                                </CardHeader>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* How Agents Work */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 w-full bg-[#130a06]/50">
                <ScrollReveal delay={0.1}>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center font-serif">How Agents Work</h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { step: "Observe", icon: Eye, desc: "Agents continuously monitor your systems—new form submissions, email replies, project updates, social mentions. They're always watching for triggers that need action." },
                        { step: "Understand", icon: Brain, desc: "AI analyzes patterns: 'This lead hasn't been contacted in 4 days.' 'This project is trending toward a late delivery.' Agents spot problems humans miss." },
                        { step: "Act", icon: Zap, desc: "Based on rules you set, agents take action—send a follow-up email, assign a task, post scheduled content, flag a resource issue. Actions match urgency." },
                        { step: "Report", icon: BarChart3, desc: "You get clear explanations: 'I sent a follow-up to 12 cold leads today.' 'I posted 3 pieces of content.' No jargon, no confusion." }
                    ].map((item, i) => (
                        <ScrollReveal key={i} delay={0.1 * i} direction="up">
                            <div className="flex flex-col relative text-center items-center group">
                                <div className="w-16 h-16 rounded-2xl bg-[#130a06] border border-orange-500/30 flex items-center justify-center mb-6 text-orange-500 shadow-[0_0_15px_rgba(6,182,212,0.15)] relative z-10 group-hover:scale-110 group-hover:border-orange-500 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-300">
                                    <item.icon className="h-8 w-8" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">{item.step}</h4>
                                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{item.desc}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* Integrations */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 w-full">
                <ScrollReveal delay={0.1}>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center font-serif">Integrates With Your Stack</h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { category: "Sales & CRM", tools: ["Salesforce", "HubSpot", "Zoho CRM", "Pipedrive", "Intercom"] },
                        { category: "Project Management", tools: ["Jira", "Asana", "Trello", "ClickUp", "Notion"] },
                        { category: "Communication", tools: ["Gmail", "Outlook", "Slack", "Microsoft Teams", "WhatsApp Business"] },
                        { category: "Marketing", tools: ["Google Analytics", "Facebook Ads", "LinkedIn", "Instagram"] },
                        { category: "Finance", tools: ["QuickBooks", "Xero", "Stripe", "Wave"] }
                    ].map((group, i) => (
                        <ScrollReveal key={i} delay={0.1 * i} direction="up">
                            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300">
                                <h4 className="font-semibold text-white mb-4">{group.category}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {group.tools.map(tool => (
                                        <span key={tool} className="text-xs px-3 py-1 bg-black/50 border border-white/5 rounded-full text-gray-300 hover:text-white hover:border-orange-500/50 transition-colors cursor-default">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* Security & Compliance */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
                <ScrollReveal delay={0.2} direction="up">
                    <Card className="bg-gradient-to-br from-[#130a06] to-[#130a06] border-orange-500/30 overflow-hidden relative shadow-[0_0_40px_rgba(6,182,212,0.1)] hover:shadow-[0_0_60px_rgba(6,182,212,0.2)] transition-shadow duration-500">
                        <div className="absolute top-0 right-0 p-10 opacity-10">
                            <Shield className="w-64 h-64 text-orange-500" />
                        </div>
                        <CardHeader className="relative z-10 pb-2">
                            <div className="flex items-center gap-3 mb-2">
                                <Shield className="h-8 w-8 text-orange-500" />
                                <CardTitle className="text-3xl font-serif">Security & Compliance</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="relative z-10 mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                "256-bit encryption at rest and in transit",
                                "SOC 2 Type II compliance",
                                "Regular third-party security audits",
                                "Role-based access controls",
                                "Two-factor authentication required",
                                "GDPR, CCPA compliant"
                            ].map((check, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-orange-500 mt-0.5 shrink-0" />
                                    <span className="text-gray-300">{check}</span>
                                </div>
                            ))}
                        </CardContent>
                        <CardFooter className="relative z-10 mt-6 border-t border-white/10 pt-6">
                            <p className="text-sm text-gray-400">
                                Your data is encrypted, isolated, and protected. We undergo regular security audits and comply with international data protection standards.
                            </p>
                        </CardFooter>
                    </Card>
                </ScrollReveal>
            </section>

            {/* Footer CTA */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-b from-transparent to-orange-500/5">
                <ScrollReveal delay={0.1}>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif">Ready to build your AI team?</h2>
                    <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">Start with one agent. Scale to your entire operation.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button variant="glowing" size="lg" className="w-full sm:w-auto">Start Free Trial</Button>
                        <Button size="lg" variant="outline" className="transition-transform hover:scale-105">Request Demo</Button>
                    </div>
                </ScrollReveal>
            </section>

        </div>
    );
}
