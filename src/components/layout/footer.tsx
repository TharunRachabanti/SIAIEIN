"use client";

import Link from "next/link";
import { Linkedin, Twitter, Mail } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 mt-auto relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-blue-900/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-16">

                    {/* Branding Column */}
                    <div className="col-span-2 space-y-8 pr-4">
                        <Link href="/" className="flex items-center gap-3 group">
                            <motion.div
                                className="bg-white/5 p-2 rounded-xl border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                                whileHover={{ scale: 1.05, rotate: -2 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Image
                                    src="/images/branding/logo_v2.jpg"
                                    alt="SIAIEIN Logo"
                                    width={40}
                                    height={40}
                                    className="object-contain rounded-lg"
                                />
                            </motion.div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-black tracking-tight text-white leading-none">
                                    SIAIEIN
                                </span>
                                <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-cyan-500 leading-none mt-1">
                                    Imagination + AI = Innovation
                                </span>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-base max-w-sm leading-relaxed">
                            Building the autonomous infrastructure for the next generation of global enterprise. We replace complexity with intelligence.
                        </p>
                        <div className="pt-4 border-t border-white/10">
                            <h4 className="text-white font-bold text-sm tracking-wider mb-2">Global Engineering Team</h4>
                            <p className="text-gray-400 text-sm">
                                Remote First.<br />
                                Operating Worldwide.
                            </p>
                        </div>
                        <div className="flex items-center gap-4 pt-2">
                            <Link href="#" className="p-2.5 bg-white/5 rounded-full hover:bg-indigo-500/20 hover:text-indigo-400 transition-colors text-gray-400 border border-white/5">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="p-2.5 bg-white/5 rounded-full hover:bg-indigo-500/20 hover:text-indigo-400 transition-colors text-gray-400 border border-white/5">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="p-2.5 bg-white/5 rounded-full hover:bg-indigo-500/20 hover:text-indigo-400 transition-colors text-gray-400 border border-white/5">
                                <Mail className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Column 1: Company */}
                    <div>
                        <h4 className="font-bold text-white mb-6 text-sm tracking-wider">Company</h4>
                        <ul className="space-y-4 text-sm text-gray-400 font-medium">
                            <li><Link href="/about-us" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
                            <li><Link href="/vision" className="hover:text-indigo-400 transition-colors">Our Vision</Link></li>
                            <li><Link href="/how-it-works" className="hover:text-indigo-400 transition-colors">How It Works</Link></li>
                            <li><Link href="#" className="hover:text-indigo-400 transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-indigo-400 transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h4 className="font-bold text-white mb-6 text-sm tracking-wider">Services</h4>
                        <ul className="space-y-4 text-sm text-gray-400 font-medium">
                            <li><Link href="/services" className="hover:text-blue-400 transition-colors">AI Automation</Link></li>
                            <li><Link href="/services" className="hover:text-blue-400 transition-colors">Agentic AI Development</Link></li>
                            <li><Link href="/services" className="hover:text-blue-400 transition-colors">Software Development</Link></li>
                            <li><Link href="/services" className="hover:text-blue-400 transition-colors">AI Consulting</Link></li>
                            <li><Link href="/services" className="hover:text-blue-400 transition-colors">Data Engineering</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: AI Agents */}
                    <div>
                        <h4 className="font-bold text-white mb-6 text-sm tracking-wider">AI Agents</h4>
                        <ul className="space-y-4 text-sm text-gray-400 font-medium">
                            <li><Link href="/agents" className="hover:text-purple-400 transition-colors text-white font-bold bg-purple-500/10 px-2 py-1 rounded inline-block -ml-2 mb-2">Agent Directory</Link></li>
                            <li><Link href="/playground" className="hover:text-cyan-400 transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" /> Live Playground</Link></li>
                            <li><Link href="/build-agent" className="hover:text-indigo-400 transition-colors">Build Custom Agent</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Industries */}
                    <div>
                        <h4 className="font-bold text-white mb-6 text-sm tracking-wider">Industries</h4>
                        <ul className="space-y-4 text-sm text-gray-400 font-medium">
                            <li><Link href="/industries" className="hover:text-cyan-400 transition-colors">E-commerce</Link></li>
                            <li><Link href="/industries" className="hover:text-cyan-400 transition-colors">SaaS</Link></li>
                            <li><Link href="/industries" className="hover:text-cyan-400 transition-colors">Healthcare</Link></li>
                            <li><Link href="/industries" className="hover:text-cyan-400 transition-colors">Finance</Link></li>
                            <li><Link href="/industries" className="hover:text-cyan-400 transition-colors">Manufacturing</Link></li>
                            <li><Link href="/industries" className="hover:text-cyan-400 transition-colors">Retail</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-gray-500 text-sm font-semibold tracking-wide">
                        <p>© {new Date().getFullYear()} SIAIEIN. All rights reserved.</p>
                        <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-600" />
                        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                            <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-cyan-500" /> Enterprise Security Built-In</span>
                            <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-emerald-500" /> SOC2 Architecture Ready</span>
                            <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-emerald-500" /> GDPR Architecture Ready</span>
                        </div>
                    </div>
                    <div className="flex gap-6 text-sm text-gray-500 font-medium">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
