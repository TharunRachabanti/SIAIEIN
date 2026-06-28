"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CalendlyButton } from "@/components/ui/calendly-button";
import { Menu, X, ChevronDown, BarChart3, Users, Zap, Shield, Globe, ShoppingCart, Activity } from "lucide-react";
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
    const [isProductsOpen, setIsProductsOpen] = React.useState(false);
    const [isIndustriesOpen, setIsIndustriesOpen] = React.useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = React.useState(false);
    const [isCompanyOpen, setIsCompanyOpen] = React.useState(false);

    React.useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsAgentsOpen(false);
        setIsServicesOpen(false);
        setIsProductsOpen(false);
        setIsIndustriesOpen(false);
        setIsResourcesOpen(false);
        setIsCompanyOpen(false);
    }, [pathname]);

    return (
        <header className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl rounded-full border border-white/5 bg-[#130a06]/90 backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,0,0,0.7)] transition-all">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 sm:h-20 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="flex items-center gap-3 group">
                            <motion.div
                                className="relative h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-xl border border-white/10 overflow-hidden shadow-lg shrink-0 bg-[#0a0604]"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <motion.div 
                                    className="absolute inset-0 bg-orange-500/20 blur-xl" 
                                    animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.2, 1] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                />
                                <Image
                                    src="/images/branding/logo_v3.jpg"
                                    alt="SIAIEIN Logo"
                                    fill
                                    className="object-cover scale-[1.3]"
                                    priority
                                />
                            </motion.div>
                            <div className="flex flex-col">
                                <motion.span
                                    className="text-xl sm:text-2xl font-black tracking-tighter text-white leading-none"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    SIAIEIN
                                </motion.span>
                                <motion.span
                                    className="text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.2em] text-orange-500 leading-none mt-1 hidden xs:block"
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    Agentic AI
                                </motion.span>
                            </div>
                        </Link>
                    </div>

                    <nav className="hidden xl:flex items-center gap-8">
                        <Link href="/" className={cn("text-sm font-medium transition-colors hover:text-orange-500", pathname === "/" ? "text-orange-500" : "text-stone-300")}>Home</Link>

                        {/* Products Dropdown Menu */}
                        <div
                            className="relative group h-20 flex items-center"
                            onMouseEnter={() => setIsProductsOpen(true)}
                            onMouseLeave={() => setIsProductsOpen(false)}
                        >
                            <Link href="/products/crm" className={cn("flex items-center gap-1 text-sm font-medium transition-colors hover:text-orange-500", pathname.startsWith("/products") ? "text-orange-500" : "text-stone-300")}>
                                Products <ChevronDown className="h-4 w-4 opacity-70" />
                            </Link>

                            <div className={cn(
                                "absolute top-20 left-1/2 -translate-x-1/2 w-[320px] transition-all duration-300 origin-top z-50",
                                isProductsOpen ? "opacity-100 scale-y-100 translate-y-0" : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
                            )}>
                                <div className="bg-[#130a06]/95 backdrop-blur-2xl border border-white/5 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden p-2">
                                    <Link href="/products/crm" className="block p-3 rounded-xl hover:bg-orange-500/10 transition-colors group/item" onClick={() => setIsProductsOpen(false)}>
                                        <div className="font-semibold text-white group-hover/item:text-orange-500 text-sm mb-0.5">AI-Native CRM</div>
                                        <div className="text-xs text-stone-500">The first CRM built for autonomous agent workforces.</div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Services Dropdown Menu */}
                        <div
                            className="relative group h-20 flex items-center"
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                        >
                            <Link href="/services" className={cn("flex items-center gap-1 text-sm font-medium transition-colors hover:text-orange-500", pathname.startsWith("/services") ? "text-orange-500" : "text-stone-300")}>
                                Services <ChevronDown className="h-4 w-4 opacity-70" />
                            </Link>

                            <div className={cn(
                                "absolute top-20 left-1/2 -translate-x-1/2 w-[320px] transition-all duration-300 origin-top",
                                isServicesOpen ? "opacity-100 scale-y-100 translate-y-0" : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
                            )}>
                                <div className="bg-[#130a06]/95 backdrop-blur-2xl border border-white/5 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden p-2">
                                    {serviceItems.map((item) => (
                                        <Link key={item.href} href={item.href} className="block p-3 rounded-xl hover:bg-orange-500/10 transition-colors group/item" onClick={() => setIsServicesOpen(false)}>
                                            <div className="font-semibold text-white group-hover/item:text-orange-500 text-sm mb-0.5">{item.title}</div>
                                            <div className="text-xs text-stone-500">{item.desc}</div>
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
                            <Link href="/agents" className={cn("flex items-center gap-1 text-sm font-medium transition-colors hover:text-orange-500", pathname.startsWith("/agents") ? "text-orange-500" : "text-stone-300")}>
                                AI Agents <ChevronDown className="h-4 w-4 opacity-70" />
                            </Link>

                            <div className={cn(
                                "absolute top-20 left-1/2 -translate-x-1/2 w-[320px] transition-all duration-300 origin-top",
                                isAgentsOpen ? "opacity-100 scale-y-100 translate-y-0" : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
                            )}>
                                <div className="bg-[#130a06]/95 backdrop-blur-2xl border border-white/5 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden p-2">
                                    {agentItems.map((item) => (
                                        <Link key={item.href} href={item.href} className="block p-3 rounded-xl hover:bg-orange-500/10 transition-colors group/item">
                                            <div className="font-semibold text-white group-hover/item:text-orange-500 text-sm mb-0.5">{item.title}</div>
                                            <div className="text-xs text-stone-500">{item.desc}</div>
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
                            <Link href="/industries" className={cn("flex items-center gap-1 text-sm font-medium transition-colors hover:text-orange-500", pathname.startsWith("/industries") ? "text-orange-500" : "text-stone-300")}>
                                Industries <ChevronDown className="h-4 w-4 opacity-70" />
                            </Link>

                            <div className={cn(
                                "absolute top-20 left-1/2 -translate-x-1/2 w-[420px] transition-all duration-300 origin-top",
                                isIndustriesOpen ? "opacity-100 scale-y-100 translate-y-0" : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
                            )}>
                                <div className="bg-[#130a06]/95 backdrop-blur-2xl border border-white/5 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden p-3">
                                    <div className="grid grid-cols-2 gap-1">
                                        {industryItems.map((item) => (
                                            <Link key={item.href} href={item.href} className="block p-3 rounded-xl hover:bg-orange-500/10 transition-colors group/item" onClick={() => setIsIndustriesOpen(false)}>
                                                <div className="font-medium text-white group-hover/item:text-orange-500 text-sm">{item.title}</div>
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
                            <span className={cn("flex cursor-pointer items-center gap-1 text-sm font-medium transition-colors hover:text-orange-500 text-stone-300")}>
                                Resources <ChevronDown className="h-4 w-4 opacity-70" />
                            </span>

                            <div className={cn(
                                "absolute top-20 left-1/2 -translate-x-1/2 w-[320px] transition-all duration-300 origin-top",
                                isResourcesOpen ? "opacity-100 scale-y-100 translate-y-0" : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
                            )}>
                                <div className="bg-[#130a06]/95 backdrop-blur-2xl border border-white/5 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden p-2">
                                    {resourceItems.map((item) => (
                                        <Link key={item.href} href={item.href} className="block p-3 rounded-xl hover:bg-orange-500/10 transition-colors group/item" onClick={() => setIsResourcesOpen(false)}>
                                            <div className="font-semibold text-white group-hover/item:text-orange-500 text-sm mb-0.5">{item.title}</div>
                                            <div className="text-xs text-stone-500">{item.desc}</div>
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
                            <span className={cn("flex cursor-pointer items-center gap-1 text-sm font-medium transition-colors hover:text-orange-500 text-stone-300")}>
                                Company <ChevronDown className="h-4 w-4 opacity-70" />
                            </span>

                            <div className={cn(
                                "absolute top-20 left-1/2 -translate-x-1/2 w-[320px] transition-all duration-300 origin-top",
                                isCompanyOpen ? "opacity-100 scale-y-100 translate-y-0" : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
                            )}>
                                <div className="bg-[#130a06]/95 backdrop-blur-2xl border border-white/5 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden p-2">
                                    {companyItems.map((item) => (
                                        <Link key={item.href} href={item.href} className="block p-3 rounded-xl hover:bg-orange-500/10 transition-colors group/item" onClick={() => setIsCompanyOpen(false)}>
                                            <div className="font-semibold text-white group-hover/item:text-orange-500 text-sm mb-0.5">{item.title}</div>
                                            <div className="text-xs text-stone-500">{item.desc}</div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </nav>

                    <div className="hidden xl:flex items-center gap-4">
                        <CalendlyButton text="Book Free AI Audit" className="w-full sm:w-auto h-12 text-lg" />
                    </div>

                    <button
                        className="xl:hidden text-stone-300 hover:text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="xl:hidden border border-white/5 bg-[#0a0604]/95 backdrop-blur-xl p-4 max-h-[80vh] overflow-y-auto absolute top-full left-0 mt-4 w-full rounded-3xl shadow-2xl">
                    <nav className="flex flex-col gap-2">
                        <Link href="/" className="block py-2 text-lg font-medium text-white hover:text-orange-500" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                        
                        <div className="py-2">
                            <div className="text-sm font-bold tracking-widest text-orange-500 uppercase mb-2">Products</div>
                            <div className="pl-4 border-l border-white/10 flex flex-col gap-3">
                                <Link href="/products/crm" className="text-stone-300 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>AI-Native CRM</Link>
                            </div>
                        </div>

                        <div className="p-2 border-y border-white/5 my-2">
                            <Link href="/services" className="text-sm font-bold text-white mb-2 ml-2 block hover:text-orange-500" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
                            {serviceItems.map((item) => (
                                <Link key={item.href} href={item.href} className="block p-2 ml-2 text-sm text-stone-400 hover:text-orange-500" onClick={() => setIsMobileMenuOpen(false)}>
                                    {item.title}
                                </Link>
                            ))}
                        </div>

                        <div className="p-2 border-b border-white/5 mb-2">
                            <Link href="/agents" className="text-sm font-bold text-white mb-2 ml-2 block hover:text-orange-500" onClick={() => setIsMobileMenuOpen(false)}>AI Agents</Link>
                            {agentItems.map((item) => (
                                <Link key={item.href} href={item.href} className="block p-2 ml-2 text-sm text-stone-400 hover:text-orange-500" onClick={() => setIsMobileMenuOpen(false)}>
                                    {item.title}
                                </Link>
                            ))}
                        </div>

                        <div className="p-2 border-b border-white/5 mb-2">
                            <Link href="/industries" className="text-sm font-bold text-white mb-2 ml-2 block hover:text-orange-500" onClick={() => setIsMobileMenuOpen(false)}>Industries</Link>
                            <div className="grid grid-cols-2 gap-1 mb-2">
                                {industryItems.map((item) => (
                                    <Link key={item.href} href={item.href} className="block p-2 ml-2 text-sm text-stone-400 hover:text-orange-500" onClick={() => setIsMobileMenuOpen(false)}>
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="p-2 border-b border-white/5 mb-2">
                            <span className="text-sm font-bold text-white mb-2 ml-2 block">Resources</span>
                            {resourceItems.map((item) => (
                                <Link key={item.href} href={item.href} className="block p-2 ml-2 text-sm text-stone-400 hover:text-orange-500" onClick={() => setIsMobileMenuOpen(false)}>
                                    {item.title}
                                </Link>
                            ))}
                        </div>

                        <div className="p-2 border-b border-white/5 mb-2">
                            <span className="text-sm font-bold text-white mb-2 ml-2 block">Company</span>
                            {companyItems.map((item) => (
                                <Link key={item.href} href={item.href} className="block p-2 ml-2 text-sm text-stone-400 hover:text-orange-500" onClick={() => setIsMobileMenuOpen(false)}>
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                        <div className="pt-4 mt-2 border-t border-white/5 mb-4">
                            <CalendlyButton text="Book Free AI Audit" className="w-full sm:w-auto h-12 text-lg" />
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
