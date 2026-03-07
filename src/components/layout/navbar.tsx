"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const serviceItems = [
    { title: "AI Workflow Automation", href: "/services/ai-workflow-automation", desc: "Automate manual business processes" },
    { title: "Agentic AI Development", href: "/services/agentic-ai-development", desc: "Custom AI agents for complex tasks" },
    { title: "Custom Software Development", href: "/services/custom-software-development", desc: "Scalable web & mobile applications" },
    { title: "AI Consulting & Strategy", href: "/services/ai-consulting-strategy", desc: "Strategic roadmaps for AI adoption" },
    { title: "Data Engineering", href: "/services/data-engineering", desc: "Data pipelines and infrastructure" },
];

const industryItems = [
    { title: "E-commerce", href: "/industries/ecommerce" },
    { title: "SaaS & Technology", href: "/industries/saas-technology" },
    { title: "Healthcare", href: "/industries/healthcare" },
    { title: "Finance & Accounting", href: "/industries/finance-accounting" },
    { title: "Manufacturing", href: "/industries/manufacturing" },
    { title: "Retail", href: "/industries/retail" },
    { title: "HR & Recruitment", href: "/industries/hr-recruitment" },
    { title: "Legal", href: "/industries/legal" },
];

const agentItems = [
    { title: "Agent Directory", href: "/agents", desc: "Browse pre-built autonomous agents" },
    { title: "Interactive Playground", href: "/playground", desc: "Watch an agent execute a workflow" },
    { title: "Build Custom Agent", href: "/build-agent", desc: "Design your own customized AI worker" },
];

const resourceItems = [
    { title: "Methodology", href: "/how-it-works", desc: "How we deploy Agentic architectures" },
    { title: "Architectural Blueprints", href: "/case-studies", desc: "Deep dive into our engineering solutions" },
];

const companyItems = [
    { title: "Our Vision", href: "/vision", desc: "Our perspective on the AI revolution" },
    { title: "About Us", href: "/about-us", desc: "The team building SIAIEIN" },
    { title: "Contact", href: "/contact", desc: "Get in touch with our engineers directly" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [isAgentsOpen, setIsAgentsOpen] = React.useState(false);
    const [isServicesOpen, setIsServicesOpen] = React.useState(false);
    const [isIndustriesOpen, setIsIndustriesOpen] = React.useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = React.useState(false);
    const [isCompanyOpen, setIsCompanyOpen] = React.useState(false);

    React.useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsAgentsOpen(false);
        setIsServicesOpen(false);
        setIsIndustriesOpen(false);
        setIsResourcesOpen(false);
        setIsCompanyOpen(false);
    }, [pathname]);

    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-800/80 backdrop-blur-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="flex items-center gap-3 group">
                            <motion.div
                                className="relative h-12 w-12 flex items-center justify-center"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full animate-pulse" />
                                <Image
                                    src="/images/branding/logo_v2.jpg"
                                    alt="SIAIEIN Logo"
                                    width={48}
                                    height={48}
                                    className="relative object-contain rounded-xl shadow-lg border border-white/10"
                                    priority
                                />
                            </motion.div>
                            <div className="flex flex-col">
                                <motion.span
                                    className="text-2xl font-black tracking-tighter text-white leading-none"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    SIAIEIN
                                </motion.span>
                                <motion.span
                                    className="text-[10px] uppercase font-bold tracking-[0.2em] text-cyan-400 leading-none mt-1 hidden xs:block"
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    Imagination + AI = Innovation
                                </motion.span>
                            </div>
                        </Link>
                    </div>

                    <nav className="hidden xl:flex items-center gap-6">
                        <Link href="/" className={cn("text-sm font-medium transition-colors hover:text-cyan-400", pathname === "/" ? "text-cyan-400 underline underline-offset-[12px] decoration-cyan-400/50" : "text-gray-300")}>Home</Link>

                        {/* Services Dropdown Menu */}
                        <div
                            className="relative group h-20 flex items-center"
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                        >
                            <Link href="/services" className={cn("flex items-center gap-1 text-sm font-medium transition-colors hover:text-cyan-400", pathname.startsWith("/services") ? "text-cyan-400 underline underline-offset-[12px] decoration-cyan-400/50" : "text-gray-300")}>
                                Services <ChevronDown className="h-4 w-4 opacity-70" />
                            </Link>

                            <div className={cn(
                                "absolute top-20 left-0 w-[300px] transition-all duration-200 origin-top",
                                isServicesOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
                            )}>
                                <div className="bg-slate-800/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden p-2">
                                    {serviceItems.map((item) => (
                                        <Link key={item.href} href={item.href} className="block p-3 rounded-lg hover:bg-cyan-500/10 transition-colors group/item" onClick={() => setIsServicesOpen(false)}>
                                            <div className="font-semibold text-white group-hover/item:text-cyan-400 text-sm mb-0.5">{item.title}</div>
                                            <div className="text-xs text-gray-500">{item.desc}</div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* AI Agents Dropdown Menu */}
                        <div
                            className="relative group h-20 flex items-center"
                            onMouseEnter={() => setIsAgentsOpen(true)}
                            onMouseLeave={() => setIsAgentsOpen(false)}
                        >
                            <Link href="/agents" className={cn("flex items-center gap-1 text-sm font-medium transition-colors hover:text-cyan-400", pathname.startsWith("/agents") ? "text-cyan-400 underline underline-offset-[12px] decoration-cyan-400/50" : "text-gray-300")}>
                                AI Agents <ChevronDown className="h-4 w-4 opacity-70" />
                            </Link>

                            <div className={cn(
                                "absolute top-20 left-0 w-[300px] transition-all duration-200 origin-top",
                                isAgentsOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
                            )}>
                                <div className="bg-slate-800/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden p-2">
                                    {agentItems.map((item) => (
                                        <Link key={item.href} href={item.href} className="block p-3 rounded-lg hover:bg-cyan-500/10 transition-colors group/item">
                                            <div className="font-semibold text-white group-hover/item:text-cyan-400 text-sm mb-0.5">{item.title}</div>
                                            <div className="text-xs text-gray-500">{item.desc}</div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Industries Dropdown Menu */}
                        <div
                            className="relative group h-20 flex items-center"
                            onMouseEnter={() => setIsIndustriesOpen(true)}
                            onMouseLeave={() => setIsIndustriesOpen(false)}
                        >
                            <Link href="/industries" className={cn("flex items-center gap-1 text-sm font-medium transition-colors hover:text-cyan-400", pathname.startsWith("/industries") ? "text-cyan-400 underline underline-offset-[12px] decoration-cyan-400/50" : "text-gray-300")}>
                                Industries <ChevronDown className="h-4 w-4 opacity-70" />
                            </Link>

                            <div className={cn(
                                "absolute top-20 left-0 w-[400px] transition-all duration-200 origin-top -ml-[50px]",
                                isIndustriesOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
                            )}>
                                <div className="bg-slate-800/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden p-4">
                                    <div className="grid grid-cols-2 gap-2">
                                        {industryItems.map((item) => (
                                            <Link key={item.href} href={item.href} className="block p-3 rounded-lg hover:bg-cyan-500/10 transition-colors group/item" onClick={() => setIsIndustriesOpen(false)}>
                                                <div className="font-medium text-white group-hover/item:text-cyan-400 text-sm">{item.title}</div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Resources Dropdown Menu */}
                        <div
                            className="relative group h-20 flex items-center"
                            onMouseEnter={() => setIsResourcesOpen(true)}
                            onMouseLeave={() => setIsResourcesOpen(false)}
                        >
                            <span className={cn("flex cursor-pointer items-center gap-1 text-sm font-medium transition-colors hover:text-cyan-400 text-gray-300")}>
                                Resources <ChevronDown className="h-4 w-4 opacity-70" />
                            </span>

                            <div className={cn(
                                "absolute top-20 left-0 w-[300px] transition-all duration-200 origin-top",
                                isResourcesOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
                            )}>
                                <div className="bg-slate-800/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden p-2">
                                    {resourceItems.map((item) => (
                                        <Link key={item.href} href={item.href} className="block p-3 rounded-lg hover:bg-cyan-500/10 transition-colors group/item" onClick={() => setIsResourcesOpen(false)}>
                                            <div className="font-semibold text-white group-hover/item:text-cyan-400 text-sm mb-0.5">{item.title}</div>
                                            <div className="text-xs text-gray-500">{item.desc}</div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Company Dropdown Menu */}
                        <div
                            className="relative group h-20 flex items-center"
                            onMouseEnter={() => setIsCompanyOpen(true)}
                            onMouseLeave={() => setIsCompanyOpen(false)}
                        >
                            <span className={cn("flex cursor-pointer items-center gap-1 text-sm font-medium transition-colors hover:text-cyan-400 text-gray-300")}>
                                Company <ChevronDown className="h-4 w-4 opacity-70" />
                            </span>

                            <div className={cn(
                                "absolute top-20 left-0 w-[300px] transition-all duration-200 origin-top",
                                isCompanyOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
                            )}>
                                <div className="bg-slate-800/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden p-2">
                                    {companyItems.map((item) => (
                                        <Link key={item.href} href={item.href} className="block p-3 rounded-lg hover:bg-cyan-500/10 transition-colors group/item" onClick={() => setIsCompanyOpen(false)}>
                                            <div className="font-semibold text-white group-hover/item:text-cyan-400 text-sm mb-0.5">{item.title}</div>
                                            <div className="text-xs text-gray-500">{item.desc}</div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </nav>

                    <div className="hidden xl:flex items-center gap-4">
                        <Button className="font-semibold shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:scale-105 transition-transform">
                            Book Free AI Audit
                        </Button>
                    </div>

                    <button
                        className="xl:hidden text-gray-300 hover:text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="xl:hidden border-t border-white/10 bg-slate-900/95 backdrop-blur-xl p-4 max-h-[calc(100vh-80px)] overflow-y-auto absolute top-20 left-0 w-full shadow-2xl">
                    <nav className="flex flex-col gap-2">
                        <Link href="/" className="text-sm font-medium p-2 rounded-md text-gray-300 hover:text-cyan-400" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>

                        <div className="p-2 border-y border-white/5 my-2">
                            <Link href="/services" className="text-sm font-bold text-white mb-2 ml-2 block hover:text-cyan-400" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
                            {serviceItems.map((item) => (
                                <Link key={item.href} href={item.href} className="block p-2 ml-2 text-sm text-gray-400 hover:text-cyan-400" onClick={() => setIsMobileMenuOpen(false)}>
                                    {item.title}
                                </Link>
                            ))}
                        </div>

                        <div className="p-2 border-b border-white/5 mb-2">
                            <Link href="/agents" className="text-sm font-bold text-white mb-2 ml-2 block hover:text-cyan-400" onClick={() => setIsMobileMenuOpen(false)}>AI Agents</Link>
                            {agentItems.map((item) => (
                                <Link key={item.href} href={item.href} className="block p-2 ml-2 text-sm text-gray-400 hover:text-cyan-400" onClick={() => setIsMobileMenuOpen(false)}>
                                    {item.title}
                                </Link>
                            ))}
                        </div>

                        <div className="p-2 border-b border-white/5 mb-2">
                            <Link href="/industries" className="text-sm font-bold text-white mb-2 ml-2 block hover:text-cyan-400" onClick={() => setIsMobileMenuOpen(false)}>Industries</Link>
                            <div className="grid grid-cols-2 gap-1 mb-2">
                                {industryItems.map((item) => (
                                    <Link key={item.href} href={item.href} className="block p-2 ml-2 text-sm text-gray-400 hover:text-cyan-400" onClick={() => setIsMobileMenuOpen(false)}>
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="p-2 border-b border-white/5 mb-2">
                            <span className="text-sm font-bold text-white mb-2 ml-2 block">Resources</span>
                            {resourceItems.map((item) => (
                                <Link key={item.href} href={item.href} className="block p-2 ml-2 text-sm text-gray-400 hover:text-cyan-400" onClick={() => setIsMobileMenuOpen(false)}>
                                    {item.title}
                                </Link>
                            ))}
                        </div>

                        <div className="p-2 border-b border-white/5 mb-2">
                            <span className="text-sm font-bold text-white mb-2 ml-2 block">Company</span>
                            {companyItems.map((item) => (
                                <Link key={item.href} href={item.href} className="block p-2 ml-2 text-sm text-gray-400 hover:text-cyan-400" onClick={() => setIsMobileMenuOpen(false)}>
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                        <div className="pt-4 mt-2 border-t border-white/10 mb-8">
                            <Button className="w-full font-semibold shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:scale-105 transition-transform" onClick={() => setIsMobileMenuOpen(false)}>Book Free AI Audit</Button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
