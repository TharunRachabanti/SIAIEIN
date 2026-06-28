"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { CalendlyButton } from "@/components/ui/calendly-button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
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
        <div className="flex flex-col min-h-screen w-full relative pt-24 overflow-hidden bg-[#130a06]">
            {/* Background Map */}
            <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none" />

            {/* Hero Section */}
            <ScrollReveal delay={0.1}>
                <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center text-center z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-sm font-semibold mb-6">
                        <Activity className="w-4 h-4" /> Live Interactive Demo
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6 font-serif">
                        Agentic AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-500">Playground</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl text-balance leading-relaxed">
                        Specify a complex business goal and watch our simulated AI autonomous worker plan and execute the workflow.
                    </p>
                </section>
            </ScrollReveal>

            {/* Playground Area */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">

                    {/* Left Controls - 4 cols */}
                    <div className="lg:col-span-4 space-y-6">
                        <Card className="bg-[#130a06]/60 border-white/10 backdrop-blur-md shadow-2xl h-full">
                            <CardContent className="p-6 md:p-8 space-y-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                        <Settings className="w-5 h-5 text-orange-500" /> Task Configurator
                                    </h3>
                                    <p className="text-sm text-gray-400">Define the parameters for the autonomous agent.</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Select Agent Type</label>
                                        <Select disabled={isRunning} defaultValue="sales">
                                            <SelectTrigger className="bg-black/50 border-white/10 text-white h-12">
                                                <SelectValue placeholder="Industry" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-[#130a06] border-white/10 text-white">
                                                <SelectItem value="sales">Sales Strategy Agent</SelectItem>
                                                <SelectItem value="support">Customer Support Agent</SelectItem>
                                                <SelectItem value="research">Market Research Agent</SelectItem>
                                                <SelectItem value="ops">Business Operations Agent</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Target Objective</label>
                                        <Input
                                            disabled={isRunning}
                                            defaultValue="Analyze leads and generate 50 outreach emails."
                                            className="bg-black/50 border-white/10 text-white h-12"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Integrations Required</label>
                                        <div className="flex flex-wrap gap-2">
                                            {["Salesforce", "Gmail", "LinkedIn API"].map(tag => (
                                                <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-gray-300 flex items-center gap-1">
                                                    <Link2 className="w-3 h-3" /> {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-white/10">
                                    {!isRunning && currentStepIndex === -1 ? (
                                        <Button onClick={runSimulation} variant="glowing" size="lg" className="w-full sm:w-auto">
                                            <Play className="w-5 h-5 mr-2" fill="currentColor" /> Deploy Agent
                                        </Button>
                                    ) : (
                                        <Button onClick={resetSimulation} variant="outline" size="lg" className="w-full h-14 font-bold border-white/20 text-white hover:bg-white/10">
                                            Reset Terminal
                                        </Button>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Terminal - 8 cols */}
                    <div className="lg:col-span-8">
                        <Card className="bg-black border-white/10 shadow-2xl h-[550px] flex flex-col overflow-hidden relative group">
                            {/* Terminal Header */}
                            <div className="h-12 border-b border-white/10 bg-[#130a06]/50 flex items-center px-4 justify-between shrink-0">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                                    <Terminal className="w-4 h-4" /> Agent OS Terminal v2.4.1
                                </div>
                            </div>

                            {/* Terminal Body */}
                            <CardContent className="p-6 font-mono text-sm sm:text-base overflow-y-auto flex-1 custom-scrollbar">
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
                                                                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                                            ) : (
                                                                <Activity className="w-5 h-5 text-orange-500 animate-pulse" />
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
                                                className="mt-8 p-4 border border-emerald-500/30 bg-emerald-500/10 rounded-lg flex flex-col gap-4"
                                            >
                                                <div className="text-emerald-400 font-bold">Mission Accomplished. Agent returning to standby mode.</div>
                                                <div className="text-gray-300 font-sans border-t border-emerald-500/20 pt-4 mt-2">
                                                    <p className="mb-2 text-sm text-emerald-100/70">This is a simulated preview of how our AI agents execute workflows.</p>
                                                    <p className="mb-4 text-sm text-emerald-100/70">Book a call to see a live demonstration with your actual business data.</p>
                                                    <CalendlyButton 
                                                        text="Book Live Demo →"
                                                        className="w-full sm:w-auto h-12 text-lg"
                                                    />
                                                </div>
                                            </motion.div>
                                        )}
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>

                </div>
            </section>
        </div>
    );
}
