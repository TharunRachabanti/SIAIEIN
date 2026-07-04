"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { CalendlyButton } from "@/components/shared/calendly-button";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const serviceItems = [
  { title: "AI Workflow Automation", href: "/services/ai-workflow-automation", desc: "Automate manual business processes" },
  { title: "Agentic AI Development", href: "/services/agentic-ai-development", desc: "Custom AI agents for complex tasks" },
  { title: "Custom Software Development", href: "/services/custom-software-development", desc: "Scalable web & mobile applications" },
  { title: "AI Consulting & Strategy", href: "/services/ai-consulting-strategy", desc: "Strategic roadmaps for AI adoption" },
  { title: "Data Engineering", href: "/services/data-engineering", desc: "Data pipelines and infrastructure" },
];

const industryItems = [
  { title: "E-commerce", href: "/industries/ecommerce", desc: "AI systems that scale retail operations without scaling headcount." },
  { title: "SaaS & Technology", href: "/industries/saas-technology", desc: "Intelligent systems to scale product operations without hiring overhead." },
  { title: "Healthcare", href: "/industries/healthcare", desc: "Secure, compliant AI workflows for medical administration." },
  { title: "Finance & Accounting", href: "/industries/finance-accounting", desc: "Precision AI for transaction monitoring and reporting." },
  { title: "Manufacturing", href: "/industries/manufacturing", desc: "Predictive intelligence for supply chains and production." },
  { title: "Retail", href: "/industries/retail", desc: "Omnichannel automation for modern retail operations." },
  { title: "HR & Recruitment", href: "/industries/hr-recruitment", desc: "Intelligent automation for hiring pipelines and operations." },
  { title: "Legal", href: "/industries/legal", desc: "Accelerate legal research and document processing." },
];

const agentItems = [
  { title: "Sales Outreach Agent", href: "/agents/sales-outreach", desc: "Find leads, write emails, book meetings" },
  { title: "Customer Support Agent", href: "/agents/customer-support", desc: "Resolve tickets 24/7 without humans" },
  { title: "Research & Intelligence", href: "/agents/research-intelligence", desc: "Market monitoring and weekly insights" },
  { title: "Operations Agent", href: "/agents/operations", desc: "Project tracking and workflow coordination" },
  { title: "Finance & Accounting", href: "/agents/finance-accounting", desc: "Invoices, reconciliation, and reporting" },
  { title: "HR & Recruitment", href: "/agents/hr-recruitment", desc: "Resume screening and interview scheduling" },
  { title: "Data Analyst Agent", href: "/agents/data-analyst", desc: "Automated analysis and dashboard updates" },
];

const resourceItems = [
  { title: "Methodology", href: "/how-it-works", desc: "How we deploy Agentic architectures" },
  { title: "Case Studies", href: "/case-studies", desc: "Deep dive into our engineering solutions" },
];

const companyItems = [
  { title: "Our Vision", href: "/vision", desc: "Our perspective on the AI revolution" },
  { title: "About Us", href: "/about-us", desc: "The team building SIAIEIN" },
  { title: "Contact", href: "/contact", desc: "Get in touch with our engineers directly" },
];

// Reusable dropdown panel
function DropdownPanel({ children, wide = false }: { children: React.ReactNode; wide?: boolean }) {
  return (
    <div className={cn(
      "absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50",
      wide ? "w-[400px]" : "w-[280px]"
    )}>
      <div className="bg-[#0e0703]/98 backdrop-blur-2xl border border-white/[0.08] rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden p-1.5">
        {children}
      </div>
    </div>
  );
}

function DropdownItem({ href, title, desc, onClick }: { href: string; title: string; desc?: string; onClick?: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex flex-col gap-0.5 px-3 py-2.5 rounded-lg hover:bg-white/[0.05] transition-colors group/item"
    >
      <span className="text-sm font-medium text-stone-200 group-hover/item:text-white transition-colors">{title}</span>
      {desc && <span className="text-xs text-stone-500 group-hover/item:text-stone-400 transition-colors">{desc}</span>}
    </Link>
  );
}

type DropdownKey = "products" | "services" | "agents" | "industries" | "resources" | "company";

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState<DropdownKey | null>(null);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (key: DropdownKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(key);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 80);
  };

  React.useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const navItems: { key: DropdownKey; label: string; href?: string; active?: boolean }[] = [
    { key: "products", label: "Products", href: "/products/crm", active: pathname.startsWith("/products") },
    { key: "services", label: "Services", href: "/services", active: pathname.startsWith("/services") },
    { key: "agents", label: "AI Agents", href: "/agents", active: pathname.startsWith("/agents") || pathname.startsWith("/playground") },
    { key: "industries", label: "Industries", href: "/industries", active: pathname.startsWith("/industries") },
    { key: "resources", label: "Resources", active: pathname.startsWith("/how-it-works") || pathname.startsWith("/case-studies") },
    { key: "company", label: "Company", active: pathname.startsWith("/about") || pathname.startsWith("/vision") || pathname.startsWith("/contact") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#0a0502]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-8">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative h-9 w-9 rounded-lg border border-white/10 overflow-hidden bg-[#0a0502]">
              <Image
                src="/images/branding/logo_v3.jpg"
                alt="SIAIEIN Logo"
                fill
                className="object-cover scale-[1.3]"
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-black tracking-tighter text-white">SIAIEIN</span>
              <span className="text-[9px] font-bold tracking-[0.18em] text-orange-500 uppercase mt-0.5">Agentic AI</span>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {/* Home */}
            <Link
              href="/"
              className={cn(
                "px-3 py-1.5 rounded-lg text-sm font-medium transition-colors",
                pathname === "/" ? "text-orange-500" : "text-stone-400 hover:text-white hover:bg-white/[0.04]"
              )}
            >
              Home
            </Link>

            {/* Dropdown items */}
            {navItems.map((item) => (
              <div
                key={item.key}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.key)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors",
                    item.active ? "text-orange-500" : "text-stone-400 hover:text-white hover:bg-white/[0.04]"
                  )}
                >
                  {item.label}
                  <ChevronDown className={cn("h-3.5 w-3.5 opacity-60 transition-transform duration-200", openDropdown === item.key ? "rotate-180" : "")} />
                </button>

                {/* Dropdown panel — invisible when closed */}
                <div className={cn("transition-all duration-150", openDropdown === item.key ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none")}>
                  {item.key === "products" && (
                    <DropdownPanel>
                      <DropdownItem href="/products/crm" title="AI-Native CRM" desc="The first CRM built for autonomous agent workforces." onClick={() => setOpenDropdown(null)} />
                    </DropdownPanel>
                  )}
                  {item.key === "services" && (
                    <DropdownPanel>
                      {serviceItems.map((s) => <DropdownItem key={s.href} href={s.href} title={s.title} desc={s.desc} onClick={() => setOpenDropdown(null)} />)}
                    </DropdownPanel>
                  )}
                  {item.key === "agents" && (
                    <DropdownPanel wide>
                      <div className="grid grid-cols-2 gap-0.5">
                        {agentItems.map((s) => <DropdownItem key={s.href} href={s.href} title={s.title} desc={s.desc} onClick={() => setOpenDropdown(null)} />)}
                      </div>
                    </DropdownPanel>
                  )}
                  {item.key === "industries" && (
                    <DropdownPanel wide>
                      <div className="grid grid-cols-2 gap-0.5">
                        {industryItems.map((s) => <DropdownItem key={s.href} href={s.href} title={s.title} desc={s.desc} onClick={() => setOpenDropdown(null)} />)}
                      </div>
                    </DropdownPanel>
                  )}
                  {item.key === "resources" && (
                    <DropdownPanel>
                      {resourceItems.map((s) => <DropdownItem key={s.href} href={s.href} title={s.title} desc={s.desc} onClick={() => setOpenDropdown(null)} />)}
                    </DropdownPanel>
                  )}
                  {item.key === "company" && (
                    <DropdownPanel>
                      {companyItems.map((s) => <DropdownItem key={s.href} href={s.href} title={s.title} desc={s.desc} onClick={() => setOpenDropdown(null)} />)}
                    </DropdownPanel>
                  )}
                </div>
              </div>
            ))}
          </nav>

          {/* ── CTA ── */}
          <div className="hidden lg:flex items-center shrink-0">
            <CalendlyButton text="Book Free AI Audit" className="" />
          </div>

          {/* ── Mobile toggle ── */}
          <button
            className="lg:hidden p-2 rounded-lg text-stone-400 hover:text-white hover:bg-white/[0.06] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu (Full Screen Overlay) ── */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute left-0 right-0 top-[65px] h-[calc(100dvh-65px)] bg-[#0a0502]/98 backdrop-blur-xl overflow-y-auto z-40">
          <nav className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-1 pb-24">
            <Link href="/" className="px-4 py-2.5 text-lg font-bold text-white hover:bg-white/[0.04] rounded-xl" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>

            {/* Mobile sections */}
            {[
              { label: "Products", items: [{ title: "AI-Native CRM", href: "/products/crm" }] },
              { label: "Services", items: serviceItems },
              { label: "AI Agents", items: agentItems },
              { label: "Industries", items: industryItems },
              { label: "Resources", items: resourceItems },
              { label: "Company", items: companyItems },
            ].map((section) => (
              <div key={section.label} className="pt-2.5">
                <div className="px-4 py-1.5 text-[11px] font-bold tracking-[0.15em] text-orange-500 uppercase">{section.label}</div>
                <div className="pl-4 border-l border-white/[0.06] ml-4 flex flex-col gap-0.5 mt-0.5">
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="px-4 py-2 text-[15px] font-medium text-stone-300 hover:text-white hover:bg-white/[0.04] rounded-xl transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div className="pt-8 mt-6 border-t border-white/[0.06] px-4">
              <CalendlyButton text="Book Free AI Audit" className="w-full h-14" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
