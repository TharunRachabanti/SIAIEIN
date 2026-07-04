"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { CalendlyButton } from "@/components/shared/calendly-button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Terminal, BrainCircuit, Activity, CheckCircle2, Play, Search, Link2, Settings, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const simulationSteps = [
    { text: "Analyzing task objective...", tool: "Planner", delay: 1000 },
    { text: "Breaking down goal into 4 executable steps.", tool: "Planner", delay: 1500 },
    { text: "Connecting to CRM Database...", tool: "Integration API", delay: 1200 },
    { text: "Data fetched successfully. 4,203 records found.", tool: "Data Fetcher", delay: 800 },
    { text: "Filtering leads by industry criteria...", tool: "Data Analyst", delay: 1400 },
    { text: "Generating personalized outreach sequences...", tool: "Email Composer", delay: 2000 },
    { text: "Workflow complete. 142 actions queued for deployment.", tool: "Executor", delay: 1000 }
];

export default function PlaygroundPage() {
    const [isRunning, setIsRunning] = React.useState(false);
    const [currentStepIndex, setCurrentStepIndex] = React.useState(-1);
    const [completedSteps, setCompletedSteps] = React.useState<number[]>([]);

    const runSimulation = () => {
        if (isRunning) return;
        setIsRunning(true);
        setCurrentStepIndex(-1);
        setCompletedSteps([]);

        let currentDelay = 0;

        simulationSteps.forEach((step, index) => {
            currentDelay += step.delay;
            setTimeout(() => {
                setCurrentStepIndex(index);
                if (index > 0) {
                    setCompletedSteps(prev => [...prev, index - 1]);
                }

                // Finish simulation
                if (index === simulationSteps.length - 1) {
                    setTimeout(() => {
                        setCompletedSteps(prev => [...prev, index]);
                        setIsRunning(false);
                    }, step.delay);
                }
            }, currentDelay);
        });
    };

    const resetSimulation = () => {
        setIsRunning(false);
        setCurrentStepIndex(-1);
        setCompletedSteps([]);
    };

    return (
        <div className="flex flex-col min-h-screen w-full bg-[#0a0502] pt-24">

            {/* Hero Section */}
            <ScrollReveal delay={0.1}>
                <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto flex flex-col items-center text-center">
                    <p className="section-label mb-4">Interactive Demo</p>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-5 leading-tight">
                        AI Agent <span className="text-orange-500">Playground</span>
                    </h1>
                    <p className="text-stone-400 text-lg max-w-xl text-balance leading-relaxed">
                        Give the agent a goal and watch it plan and execute the workflow step by step.
                    </p>
                </section>
            </ScrollReveal>

            {/* Playground Area */}
            <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full border-t border-white/[0.06]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">

                    {/* Left Controls - 4 cols */}
                    <div className="lg:col-span-4 space-y-5">
                        <div className="card-surface h-full">
                            <div className="p-6 md:p-7 space-y-5 h-full flex flex-col">
                                <div>
                                    <p className="section-label mb-2">Configure</p>
                                    <h3 className="text-lg font-bold text-white mb-1">Task Setup</h3>
                                    <p className="text-xs text-stone-500">Set the goal for the agent.</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Agent Type</label>
                                        <Select disabled={isRunning} defaultValue="sales">
                                            <SelectTrigger className="bg-white/[0.04] border-white/[0.08] text-white h-10 text-sm">
                                                <SelectValue placeholder="Pick an agent" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-[#0e0703] border-white/[0.08] text-white">
                                                <SelectItem value="sales">Sales Strategy Agent</SelectItem>
                                                <SelectItem value="support">Customer Support Agent</SelectItem>
                                                <SelectItem value="research">Market Research Agent</SelectItem>
                                                <SelectItem value="ops">Business Operations Agent</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Objective</label>
                                        <Input
                                            disabled={isRunning}
                                            defaultValue="Analyse leads and generate 50 outreach emails."
                                            className="bg-white/[0.04] border-white/[0.08] text-white h-10 text-sm placeholder:text-stone-600"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Integrations</label>
                                        <div className="flex flex-wrap gap-2">
                                            {["Salesforce", "Gmail", "LinkedIn API"].map(tag => (
                                                <span key={tag} className="px-2.5 py-1 bg-white/[0.04] border border-white/[0.08] rounded-md text-xs text-stone-300 flex items-center gap-1.5">
                                                    <Link2 className="w-3 h-3" /> {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-5 border-t border-white/[0.06] mt-auto">
                                    {!isRunning && currentStepIndex === -1 ? (
                                        <Button onClick={runSimulation} variant="glowing" className="w-full">
                                            <Play className="w-4 h-4 mr-2" fill="currentColor" /> Run Agent
                                        </Button>
                                    ) : (
                                        <Button onClick={resetSimulation} variant="outline" className="w-full">
                                            Reset
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Terminal - 8 cols */}
                    <div className="lg:col-span-8">
                        <div className="card-surface h-[520px] flex flex-col overflow-hidden">
                            {/* Terminal Header */}
                            <div className="h-10 border-b border-white/[0.06] flex items-center px-4 justify-between shrink-0">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-white/[0.1]" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-white/[0.1]" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-white/[0.1]" />
                                </div>
                                <div className="flex items-center gap-2 text-xs text-stone-600 font-mono">
                                    <Terminal className="w-3.5 h-3.5" /> Agent Terminal v2.4.1
                                </div>
                                <div className="w-16" />
                            </div>

                            {/* Terminal Body */}
                            <div className="p-5 font-mono text-sm overflow-y-auto flex-1">
                                {currentStepIndex === -1 && !isRunning ? (
                                    <div className="h-full flex flex-col items-center justify-center text-gray-600 space-y-4">
                                        <BrainCircuit className="w-16 h-16 opacity-20" />
                                        <p>System idle. Waiting for deployment command...</p>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        <div className="text-orange-500 mb-6">
                                            $ initialize_agent --mode=autonomous --target="Analyze leads"<br />
                                            <span className="text-gray-500 text-xs mt-1 block">Starting Agentic Neural Network...</span>
                                        </div>

                                        <AnimatePresence>
                                            {simulationSteps.map((step, idx) => (
                                                idx <= currentStepIndex && (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        className="flex items-start gap-4"
                                                    >
                                                        <div className="mt-1 shrink-0">
                                                            {completedSteps.includes(idx) ? (
                                                                <CheckCircle2 className="w-4 h-4 text-orange-500" />
                                                            ) : (
                                                                <Activity className="w-4 h-4 text-orange-400 animate-pulse" />
                                                            )}
                                                        </div>
                                                        <div>
                                                            <div className="text-gray-300">
                                                                [{new Date().toLocaleTimeString()}] <span className="text-orange-500 font-bold">[{step.tool}]</span>
                                                            </div>
                                                            <div className={`mt-1 ${completedSteps.includes(idx) ? 'text-gray-400' : 'text-white font-bold'}`}>
                                                                {step.text}
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )
                                            ))}
                                        </AnimatePresence>

                                        {isRunning && currentStepIndex < simulationSteps.length - 1 && (
                                            <div className="flex items-center gap-2 text-orange-500 mt-6 font-bold animate-pulse">
                                                <div className="w-2 h-4 bg-orange-500" /> Processing...
                                            </div>
                                        )}

                                        {!isRunning && currentStepIndex === simulationSteps.length - 1 && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="mt-6 p-4 border border-orange-500/20 bg-orange-500/5 rounded-xl flex flex-col gap-3"
                                            >
                                                <div className="text-orange-400 font-bold text-sm">Done. Agent back on standby.</div>
                                                <div className="text-stone-400 font-sans border-t border-white/[0.06] pt-3 text-xs">
                                                    <p className="mb-2">This is a simulation. Book a call to see it run on your actual data.</p>
                                                    <CalendlyButton 
                                                        text="Book Live Demo"
                                                        className="mt-2"
                                                    />
                                                </div>
                                            </motion.div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
