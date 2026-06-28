import { notFound } from "next/navigation";
import { getServiceBySlug, servicesData } from "@/lib/data/services";
import { Network, Bot, Code, Search, Database, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ServiceDemoButton } from "@/components/ui/service-demo-button";
import { serviceDemos } from "@/lib/data/demos";

const iconMap: Record<string, React.ReactNode> = {
    Network: <Network className="w-12 h-12 text-orange-500" />,
    Bot: <Bot className="w-12 h-12 text-orange-500" />,
    Code: <Code className="w-12 h-12 text-rose-400" />,
    Search: <Search className="w-12 h-12 text-orange-500" />,
    Database: <Database className="w-12 h-12 text-purple-400" />,
};

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

// Generate static params so Next.js pre-builds these routes
export async function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServicePage({ params }: PageProps) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen w-full relative pt-24 overflow-hidden">
            {/* Background Map */}
            <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />

            {/* Hero Section */}
            <ScrollReveal delay={0.1}>
                <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center text-center z-10">
                    <div className="mb-8 p-6 bg-[#130a06]/50 border border-white/10 rounded-2xl shadow-[0_0_30px_rgba(6,182,212,0.15)] inline-block">
                        {iconMap[service.iconName] || <Bot className="w-12 h-12 text-orange-500" />}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6 uppercase font-serif">
                        {service.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl text-balance leading-relaxed mb-10">
                        {service.shortDescription}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/contact">
                            <Button variant="glowing" size="lg" className="w-full sm:w-auto">
                                Discuss Your Project
                            </Button>
                        </Link>
                        {serviceDemos[slug] && (
                            <ServiceDemoButton config={serviceDemos[slug]} />
                        )}
                    </div>
                </section>
            </ScrollReveal>

            {/* Main Content Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10 border-t border-white/5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left Column: Description & Features */}
                    <div className="space-y-12">
                        <ScrollReveal delay={0.2} direction="up">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-6 font-serif">Overview</h2>
                                <p className="text-lg text-gray-400 leading-relaxed">
                                    {service.longDescription}
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3} direction="up">
                            <div className="bg-[#130a06]/40 border border-white/5 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-white mb-6">Core Capabilities</h3>
                                <ul className="space-y-4">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" />
                                            <span className="text-gray-300 text-lg">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right Column: Use Cases & Tech Stack */}
                    <div className="space-y-12">
                        <ScrollReveal delay={0.4} direction="up">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-6 font-serif">Enterprise Use Cases</h2>
                                <div className="space-y-6">
                                    {service.useCases.map((useCase, i) => (
                                        <div key={i} className="group relative bg-[#130a06]/30 border border-white/5 hover:border-orange-500/30 p-6 rounded-xl transition-all duration-300 hover:bg-[#130a06]">
                                            <ArrowRight className="absolute top-6 right-6 w-5 h-5 text-gray-600 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                                            <p className="text-gray-300 pr-8">{useCase}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.5} direction="up">
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-6">Technology Stack</h2>
                                <div className="flex flex-wrap gap-3">
                                    {service.techStack.map((tech, i) => (
                                        <div key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 text-sm font-medium hover:bg-white/10 transition-colors">
                                            {tech}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </div>
    );
}
