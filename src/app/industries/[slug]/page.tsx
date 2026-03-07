import { notFound } from "next/navigation";
import { getIndustryBySlug, industriesData } from "@/lib/data/industries";
import { ShoppingBag, Rocket, Activity, Landmark, Factory, Store, Users, Scale, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const iconMap: Record<string, React.ReactNode> = {
    ShoppingBag: <ShoppingBag className="w-12 h-12 text-cyan-400" />,
    Rocket: <Rocket className="w-12 h-12 text-blue-400" />,
    Activity: <Activity className="w-12 h-12 text-emerald-400" />,
    Landmark: <Landmark className="w-12 h-12 text-amber-400" />,
    Factory: <Factory className="w-12 h-12 text-purple-400" />,
    Store: <Store className="w-12 h-12 text-rose-400" />,
    Users: <Users className="w-12 h-12 text-indigo-400" />,
    Scale: <Scale className="w-12 h-12 text-slate-400" />
};

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return industriesData.map((industry) => ({
        slug: industry.slug,
    }));
}

export default async function IndustryPage({ params }: PageProps) {
    const { slug } = await params;
    const industry = getIndustryBySlug(slug);

    if (!industry) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen w-full relative pt-24 overflow-hidden">
            {/* Dynamic Background Glow directly linked to industry color class implicitly */}
            <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-white/5 blur-[150px] rounded-full pointer-events-none" />

            {/* Hero Section */}
            <ScrollReveal delay={0.1}>
                <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center text-center z-10">
                    <div className={`mb-8 p-6 ${industry.bgClass} border border-white/10 rounded-2xl shadow-xl inline-block group-hover:scale-110 transition-transform`}>
                        {iconMap[industry.iconName] || <Rocket className="w-12 h-12 text-white" />}
                    </div>
                    <h1 className={`text-4xl md:text-6xl font-black tracking-tight mb-6 uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500`}>
                        {industry.title} AI Solutions
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl text-balance leading-relaxed mb-10">
                        {industry.shortDescription}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/contact">
                            <Button size="lg" className="h-14 px-8 text-lg font-bold shadow-lg hover:scale-105 transition-transform bg-white hover:bg-gray-200 text-slate-900 w-full sm:w-auto">
                                Deploy Industry Agents
                            </Button>
                        </Link>
                    </div>
                </section>
            </ScrollReveal>

            {/* Platform Impact */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10 border-t border-white/5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div className="space-y-8">
                        <ScrollReveal delay={0.2} direction="up">
                            <h2 className="text-3xl font-bold text-white">Transforming Operational Efficiency</h2>
                        </ScrollReveal>
                        <ScrollReveal delay={0.3} direction="up">
                            <p className="text-lg text-gray-400 leading-relaxed">
                                {industry.longDescription}
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.4} direction="up">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                                <div className="p-6 bg-slate-800/40 border border-white/5 rounded-xl">
                                    <div className="text-4xl font-black text-white mb-2">3x</div>
                                    <div className="text-gray-400 text-sm uppercase tracking-wider font-semibold">Faster Execution</div>
                                </div>
                                <div className="p-6 bg-slate-800/40 border border-white/5 rounded-xl">
                                    <div className="text-4xl font-black text-white mb-2">-40%</div>
                                    <div className="text-gray-400 text-sm uppercase tracking-wider font-semibold">OpEx Reduction</div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    <ScrollReveal delay={0.5} direction="left">
                        <div className={`bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden`}>
                            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
                            <h3 className="text-2xl font-bold text-white mb-8 relative z-10">Automation Capabilities</h3>
                            <ul className="space-y-6 relative z-10">
                                {industry.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-4 p-4 bg-black/20 rounded-xl hover:bg-black/40 transition-colors">
                                        <CheckCircle2 className={`w-6 h-6 ${industry.colorClass} shrink-0 mt-0.5`} />
                                        <span className="text-gray-300 font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
