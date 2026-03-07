"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Building2, Code2, Database, Workflow, ArrowRight, ArrowLeft, Bot, Link as LinkIcon, Lock, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
    { title: "Define Role", icon: Bot },
    { title: "Data Connections", icon: Database },
    { title: "Task Rules", icon: Workflow },
    { title: "Security & Deploy", icon: Lock },
];

export default function BuildAgentPage() {
    const [currentStep, setCurrentStep] = React.useState(0);
    const [selectedRole, setSelectedRole] = React.useState<string | null>(null);

    const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
    const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0));

    return (
        <div className="flex flex-col min-h-screen w-full relative pt-24 overflow-hidden bg-slate-800">
            {/* Background elements */}
            <div className="absolute top-0 right-[20%] w-[600px] h-[600px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">

                {/* Header */}
                <ScrollReveal delay={0.1}>
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6">
                            Architect Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500">Custom Agent</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Design the exact autonomous system your business needs. We will review your blueprint and provide a technical architecture.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Progress Bar */}
                <div className="relative mb-16">
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2 rounded-full hidden md:block" />
                    <div
                        className="absolute top-1/2 left-0 h-1 bg-indigo-500 -translate-y-1/2 rounded-full transition-all duration-500 hidden md:block"
                        style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
                    />

                    <div className="relative flex justify-between gap-4 md:gap-0 max-w-4xl mx-auto overflow-x-auto pb-4 md:pb-0">
                        {steps.map((step, i) => (
                            <div key={i} className="flex flex-col items-center gap-3 shrink-0">
                                <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center bg-slate-800 z-10 transition-colors duration-300 ${i <= currentStep ? 'border-indigo-500 text-indigo-400' : 'border-white/10 text-gray-600'
                                    }`}>
                                    <step.icon className="w-5 h-5" />
                                </div>
                                <span className={`text-sm font-bold ${i <= currentStep ? 'text-white' : 'text-gray-500'}`}>
                                    {step.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Form Container */}
                <Card className="bg-slate-800/50 border-white/10 shadow-2xl backdrop-blur-md overflow-hidden min-h-[500px] relative">
                    <CardContent className="p-0 h-full">
                        <AnimatePresence mode="wait">

                            {/* Step 1: Define Role */}
                            {currentStep === 0 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                                    className="p-8 md:p-12"
                                >
                                    <h2 className="text-2xl font-bold text-white mb-2">What is the agent's primary function?</h2>
                                    <p className="text-gray-400 mb-8">Select the department or specify a custom role.</p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                                        {[
                                            { id: 'sales', label: 'Sales & BD', icon: Building2 },
                                            { id: 'support', label: 'Customer Support', icon: Bot },
                                            { id: 'ops', label: 'Internal Operations', icon: Workflow },
                                            { id: 'data', label: 'Data & Analytics', icon: Database },
                                            { id: 'custom', label: 'Custom Architecture', icon: Code2 },
                                        ].map(item => (
                                            <button
                                                key={item.id}
                                                onClick={() => setSelectedRole(item.id)}
                                                className={`p-6 rounded-xl border text-left transition-all hover:scale-[1.02] ${selectedRole === item.id
                                                        ? 'border-indigo-500 bg-indigo-500/10'
                                                        : 'border-white/10 bg-black/40 hover:border-white/30'
                                                    }`}
                                            >
                                                <item.icon className={`w-8 h-8 mb-4 ${selectedRole === item.id ? 'text-indigo-400' : 'text-gray-500'}`} />
                                                <h3 className={`font-bold ${selectedRole === item.id ? 'text-white' : 'text-gray-300'}`}>{item.label}</h3>
                                            </button>
                                        ))}
                                    </div>

                                    <div className="flex justify-end">
                                        <Button onClick={nextStep} disabled={!selectedRole} size="lg" className="bg-white text-black hover:bg-gray-200">
                                            Next Step <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 2: Data Connections */}
                            {currentStep === 1 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                                    className="p-8 md:p-12"
                                >
                                    <h2 className="text-2xl font-bold text-white mb-2">Connect Your Toolstack</h2>
                                    <p className="text-gray-400 mb-8">Which tools does the agent need access to?</p>

                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
                                        {['Salesforce', 'HubSpot', 'Slack', 'Gmail', 'Notion', 'Jira', 'PostgreSQL', 'Custom API'].map(tool => (
                                            <div key={tool} className="p-4 border border-white/10 bg-black/40 rounded-lg flex items-center justify-between cursor-pointer hover:border-indigo-500/50 hover:bg-white/5 transition-colors group">
                                                <span className="text-gray-300 font-medium group-hover:text-white">{tool}</span>
                                                <div className="w-5 h-5 rounded border border-white/20 group-hover:border-indigo-500 flex items-center justify-center">
                                                    {/* Fake checkbox interaction just for UI */}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex justify-between">
                                        <Button onClick={prevStep} variant="ghost" className="text-gray-400 hover:text-white">
                                            <ArrowLeft className="w-4 h-4 mr-2" /> Back
                                        </Button>
                                        <Button onClick={nextStep} size="lg" className="bg-white text-black hover:bg-gray-200">
                                            Next Step <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 3: Fast Forward to End for Demo */}
                            {currentStep > 1 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                                    className="p-8 md:p-12 flex flex-col items-center justify-center min-h-[400px] text-center"
                                >
                                    <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mb-6 border border-emerald-500/20">
                                        <CheckCircle2 className="w-10 h-10" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-white mb-4">Blueprint Saved.</h2>
                                    <p className="text-xl text-gray-400 max-w-lg mb-8">
                                        Our engineers will review your configuration and contact you to discuss the final architecture.
                                    </p>

                                    <div className="space-y-4 w-full max-w-sm">
                                        <Input placeholder="Enter your work email" className="h-12 bg-black/50 border-white/10 text-center" />
                                        <Button size="lg" className="w-full h-14 font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_20px_rgba(79,70,229,0.3)]">
                                            Submit Configuration
                                        </Button>
                                    </div>

                                    <Button onClick={() => setCurrentStep(0)} variant="link" className="mt-8 text-gray-500 hover:text-white">
                                        <ArrowLeft className="w-4 h-4 mr-2" /> Start Over
                                    </Button>
                                </motion.div>
                            )}

                        </AnimatePresence>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
