"use client";

import Link from "next/link";
import { ArrowRight, Twitter, Linkedin as LinkedIn, Mail, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import Image from "next/image";
import * as React from "react";
import { CalendlyButton } from "@/components/ui/calendly-button";

export function Footer() {
    return (
        <footer className="relative bg-[#0a0604] border-t border-white/5 pt-24 pb-12 overflow-hidden mt-20">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Mega CTA Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 pb-20 border-b border-white/5">
                    <div className="max-w-3xl mb-8 md:mb-0">
                        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6 font-serif">Ready to build your autonomous future?</h2>
                        <p className="text-lg text-orange-200/50 max-w-2xl text-balance">Stop wasting hours on manual workflows. Book a free audit and let us show you exactly how Agentic AI can transform your operations.</p>
                    </div>
                    <CalendlyButton 
                        text="Book Free AI Audit"
                        className="w-full sm:w-auto h-12 text-lg"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    {/* Brand & Newsletter */}
                    <div className="lg:col-span-4 space-y-8">
                        <Link href="/" className="flex items-center gap-3 group">
                            <motion.div
                                className="relative h-12 w-12 bg-[#0a0604] rounded-xl border border-white/10 shadow-[0_0_20px_rgba(249,115,22,0.05)] overflow-hidden shrink-0"
                                whileHover={{ scale: 1.05, rotate: -2 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <Image
                                    src="/logo.jpg"
                                    alt="SIAIEIN Logo"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                            <span className="text-xl font-bold tracking-widest text-white group-hover:text-orange-500 transition-colors uppercase">
                                SIAIEIN
                            </span>
                        </Link>
                        <div className="space-y-4">
                            <h4 className="text-white font-medium">Join our weekly newsletter</h4>
                            <p className="text-gray-400 text-sm">Insights on the future of autonomous work.</p>
                            <form className="flex gap-2">
                                <Input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="bg-white/5 border-white/10 text-white focus-visible:ring-orange-500 h-10"
                                />
                                <Button type="submit" className="bg-orange-600 hover:bg-orange-500 text-white px-4 h-10">
                                    Subscribe
                                </Button>
                            </form>
                        </div>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                                <LinkedIn className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="space-y-4">
                            <h4 className="text-white font-bold tracking-wider uppercase text-sm">Company</h4>
                            <ul className="space-y-3 text-sm text-gray-400">
                                <li><Link href="/about-us" className="hover:text-orange-500 transition-colors">About Us</Link></li>
                                <li><Link href="/vision" className="hover:text-orange-500 transition-colors">Vision</Link></li>
                                <li><Link href="/contact" className="hover:text-orange-500 transition-colors">Contact</Link></li>
                                <li><Link href="/careers" className="hover:text-orange-500 transition-colors">Careers</Link></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-white font-bold tracking-wider uppercase text-sm">Platform</h4>
                            <ul className="space-y-3 text-sm text-gray-400">
                                <li><Link href="/agents" className="hover:text-orange-500 transition-colors">AI Agents</Link></li>
                                <li><Link href="/products/crm" className="hover:text-orange-500 transition-colors">AI-Native CRM</Link></li>
                                <li><Link href="/how-it-works" className="hover:text-orange-500 transition-colors">How it Works</Link></li>
                                <li><Link href="/pricing" className="hover:text-orange-500 transition-colors">Pricing</Link></li>
                                <li><Link href="/playground" className="hover:text-orange-500 transition-colors flex items-center gap-2">Playground <span className="bg-orange-500/20 text-orange-500 text-[10px] px-1.5 py-0.5 rounded uppercase font-bold tracking-wider">Demo</span></Link></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-white font-bold tracking-wider uppercase text-sm">Use Cases</h4>
                            <ul className="space-y-3 text-sm text-gray-400">
                                <li><Link href="/services/ai-lead-generation" className="hover:text-orange-500 transition-colors">Sales & Lead Gen</Link></li>
                                <li><Link href="/services/customer-support" className="hover:text-orange-500 transition-colors">Customer Support</Link></li>
                                <li><Link href="/services/data-processing" className="hover:text-orange-500 transition-colors">Data Processing</Link></li>
                                <li><Link href="/case-studies" className="hover:text-orange-500 transition-colors">Case Studies</Link></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-white font-bold tracking-wider uppercase text-sm">Legal</h4>
                            <ul className="space-y-3 text-sm text-gray-400">
                                <li><Link href="/privacy" className="hover:text-orange-500 transition-colors">Privacy Policy</Link></li>
                                <li><Link href="/terms" className="hover:text-orange-500 transition-colors">Terms of Service</Link></li>
                                <li><Link href="/security" className="hover:text-orange-500 transition-colors">Security</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">
                        © 2026 SIAIEIN. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" /> All systems operational
                    </div>
                </div>
            </div>
        </footer>
    );
}
