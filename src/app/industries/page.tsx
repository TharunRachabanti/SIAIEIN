import { Card, CardContent } from "@/components/ui/card";
import { Search, ShoppingBag, Rocket, Activity, Landmark, Factory, Store, Users, Scale } from "lucide-react";
import * as React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function IndustriesPage() {
    return (
        <div className="flex flex-col min-h-screen w-full relative pt-24 overflow-hidden">
            {/* Background Map */}
            <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />

            {/* Hero Section */}
            <ScrollReveal delay={0.1}>
                <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center text-center z-10">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6">
                        Built for Your <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Industry</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl text-balance leading-relaxed">
                        We don't build generic AI. We build deep solutions for specific industries.
                    </p>
                </section>
            </ScrollReveal>

            {/* Industries Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10 border-t border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            id: "ecommerce",
                            slug: "ecommerce",
                            title: "E-commerce",
                            icon: ShoppingBag,
                            color: "text-cyan-400",
                            bg: "bg-cyan-500/10",
                            border: "hover:border-cyan-500/50",
                            list: ["AI order tracking and support", "Personalized product recommendation agents", "Inventory demand forecasting", "Customer returns automation", "Review analysis and response"]
                        },
                        {
                            id: "saas",
                            slug: "saas-technology",
                            title: "SaaS & Technology",
                            icon: Rocket,
                            color: "text-blue-400",
                            bg: "bg-blue-500/10",
                            border: "hover:border-blue-500/50",
                            list: ["User onboarding automation", "Customer success and retention agents", "Support ticket resolution", "Churn prediction and response workflows", "Product feedback analysis"]
                        },
                        {
                            id: "healthcare",
                            slug: "healthcare",
                            title: "Healthcare",
                            icon: Activity,
                            color: "text-emerald-400",
                            bg: "bg-emerald-500/10",
                            border: "hover:border-emerald-500/50",
                            list: ["Appointment scheduling agents", "Patient communication automation", "Medical document processing", "Insurance claim pre-processing", "Staff coordination workflows"]
                        },
                        {
                            id: "finance",
                            slug: "finance-accounting",
                            title: "Finance & Accounting",
                            icon: Landmark,
                            color: "text-amber-400",
                            bg: "bg-amber-500/10",
                            border: "hover:border-amber-500/50",
                            list: ["Transaction monitoring agents", "Fraud detection workflows", "Automated financial reporting", "Expense audit agents", "Regulatory compliance assistance"]
                        },
                        {
                            id: "manufacturing",
                            slug: "manufacturing",
                            title: "Manufacturing",
                            icon: Factory,
                            color: "text-purple-400",
                            bg: "bg-purple-500/10",
                            border: "hover:border-purple-500/50",
                            list: ["Predictive maintenance AI", "Supply chain monitoring agents", "Production analytics", "Inventory optimization", "Quality control data analysis"]
                        },
                        {
                            id: "retail",
                            slug: "retail",
                            title: "Retail",
                            icon: Store,
                            color: "text-rose-400",
                            bg: "bg-rose-500/10",
                            border: "hover:border-rose-500/50",
                            list: ["Demand forecasting agents", "Dynamic pricing optimization", "Customer loyalty workflows", "Store operations automation", "Supplier communication agents"]
                        },
                        {
                            id: "hr",
                            slug: "hr-recruitment",
                            title: "HR & Recruitment",
                            icon: Users,
                            color: "text-indigo-400",
                            bg: "bg-indigo-500/10",
                            border: "hover:border-indigo-500/50",
                            list: ["AI resume screening", "Candidate pipeline management", "Interview scheduling automation", "Employee onboarding workflows", "Policy and query response agents"]
                        },
                        {
                            id: "legal",
                            slug: "legal",
                            title: "Legal",
                            icon: Scale,
                            color: "text-slate-400",
                            bg: "bg-slate-500/10",
                            border: "hover:border-slate-500/50",
                            list: ["Contract analysis & extraction", "Case law research automation", "Document drafting workflows", "Client onboarding & triage", "Compliance monitoring agents"]
                        }
                    ].map((industry, i) => (
                        <ScrollReveal key={i} delay={0.05 * i} direction="up">
                            <Card id={industry.id} className={`bg-slate-800/40 border-white/5 hover:-translate-y-2 h-full transition-all duration-300 group ${industry.border} hover:bg-slate-800 shadow-none hover:shadow-2xl scroll-mt-32`}>
                                <CardContent className="p-8">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className={`p-4 rounded-xl ${industry.bg} border border-[currentcolor]/20 group-hover:scale-110 transition-transform duration-300`}>
                                            <industry.icon className={`w-8 h-8 ${industry.color}`} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white group-hover:text-gray-200 transition-colors uppercase tracking-tight">{industry.title}</h3>
                                    </div>
                                    <div className="mt-8 pt-6 border-t border-white/5">
                                        <Link href={`/industries/${industry.slug}`} className={`inline-flex items-center gap-2 ${industry.color} font-bold hover:gap-3 transition-all`}>
                                            Explore Industry Solutions <span className="text-xl">→</span>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-4 text-center mt-12 bg-gradient-to-t from-cyan-900/20 to-transparent border-t border-white/5 relative z-10">
                <ScrollReveal delay={0.1}>
                    <h2 className="text-4xl font-bold text-white mb-8">Don't see your industry?</h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        We build custom Agentic architectures for highly specialized domains. Let's discuss your specific operational challenges.
                    </p>
                    <Button size="lg" className="h-16 px-10 text-xl font-bold hover:scale-105 transition-transform shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                        Discuss Custom Architecture
                    </Button>
                </ScrollReveal>
            </section>
        </div>
    );
}
