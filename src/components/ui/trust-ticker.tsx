"use client";

import { motion } from "framer-motion";
import { Database, MessageSquare, Briefcase, Box, Mail, Server, Smartphone, Monitor } from "lucide-react";

export function TrustTicker() {
    return (
        <div className="w-full border-y border-white/5 bg-[#130a06]/50 py-6 overflow-hidden flex items-center relative z-10">
            <div className="px-8 shrink-0 border-r border-white/10 hidden md:flex items-center">
                <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">Integrates seamlessly with</span>
            </div>
            
            {/* Gradient Mask for fading edges */}
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#130a06] to-transparent z-10 pointer-events-none hidden md:block" />
            <div className="absolute left-0 md:left-64 top-0 bottom-0 w-32 bg-gradient-to-r from-[#130a06] to-transparent z-10 pointer-events-none hidden md:block" />

            <div className="flex flex-1 overflow-hidden">
                <motion.div
                    className="flex shrink-0 items-center gap-12 sm:gap-24 px-12"
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                >
                    {/* Double the logos to make the infinite loop seamless */}
                    {[1, 2].map((set) => (
                        <div key={set} className="flex items-center gap-12 sm:gap-24 opacity-40 grayscale">
                            <div className="flex items-center gap-2"><Database className="w-6 h-6" /><span className="text-xl font-bold font-sans">Salesforce</span></div>
                            <div className="flex items-center gap-2"><Briefcase className="w-6 h-6" /><span className="text-xl font-bold font-serif">HubSpot</span></div>
                            <div className="flex items-center gap-2"><MessageSquare className="w-6 h-6" /><span className="text-xl font-bold font-sans tracking-tight">Slack</span></div>
                            <div className="flex items-center gap-2"><Smartphone className="w-6 h-6" /><span className="text-xl font-bold font-sans">Zendesk</span></div>
                            <div className="flex items-center gap-2"><Server className="w-6 h-6" /><span className="text-xl font-bold font-sans tracking-wide">NetSuite</span></div>
                            <div className="flex items-center gap-2"><Mail className="w-6 h-6" /><span className="text-xl font-bold font-sans">Outlook</span></div>
                            <div className="flex items-center gap-2"><Box className="w-6 h-6" /><span className="text-xl font-bold font-sans tracking-tight">Shopify</span></div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
