"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, RotateCcw, Terminal, Zap, CheckCircle2, Loader2, AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface DemoStep {
    text: string;
    type: "info" | "success" | "processing" | "result" | "warning" | "tool";
    tool?: string;
    delay: number;
}

export interface DemoConfig {
    id: string;
    title: string;
    color: string;
    accentBg: string;
    tools: string[];
    steps: DemoStep[];
}

interface DemoModalProps {
    config: DemoConfig;
    isOpen: boolean;
    onClose: () => void;
}

export function DemoModal({ config, isOpen, onClose }: DemoModalProps) {
    const [currentStep, setCurrentStep] = React.useState(-1);
    const [completedSteps, setCompletedSteps] = React.useState<DemoStep[]>([]);
    const [isRunning, setIsRunning] = React.useState(false);
    const [activeTools, setActiveTools] = React.useState<Set<string>>(new Set());
    const [actionCount, setActionCount] = React.useState(0);
    const [elapsedTime, setElapsedTime] = React.useState(0);
    const terminalRef = React.useRef<HTMLDivElement>(null);
    const timerRef = React.useRef<NodeJS.Timeout | null>(null);
    const runIdRef = React.useRef(0);

    const progress = config.steps.length > 0
        ? Math.round((completedSteps.length / config.steps.length) * 100)
        : 0;

    React.useEffect(() => {
        if (isOpen) {
            startSimulation();
        }
        return () => {
            // Invalidate current run so its async loop stops
            runIdRef.current++;
            if (timerRef.current) clearInterval(timerRef.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    React.useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [completedSteps]);

    function startSimulation() {
        // Increment run ID to invalidate any previous run
        runIdRef.current++;
        const thisRunId = runIdRef.current;

        setCurrentStep(-1);
        setCompletedSteps([]);
        setIsRunning(true);
        setActiveTools(new Set());
        setActionCount(0);
        setElapsedTime(0);

        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setElapsedTime(prev => prev + 0.1);
        }, 100);

        runSteps(config.steps, thisRunId);
    }

    async function runSteps(steps: DemoStep[], runId: number) {
        for (let i = 0; i < steps.length; i++) {
            // If another run has started, stop this one
            if (runIdRef.current !== runId) return;

            const step = steps[i];
            setCurrentStep(i);

            if (step.tool) {
                setActiveTools(prev => new Set(prev).add(step.tool!));
            }

            await new Promise(resolve => setTimeout(resolve, step.delay));

            // Check again after the delay
            if (runIdRef.current !== runId) return;

            setCompletedSteps(prev => [...prev, step]);
            setActionCount(prev => prev + Math.floor(Math.random() * 5) + 1);
        }

        if (runIdRef.current === runId) {
            setIsRunning(false);
            if (timerRef.current) clearInterval(timerRef.current);
        }
    }

    function handleRestart() {
        startSimulation();
    }

    function handleClose() {
        runIdRef.current++;
        setIsRunning(false);
        if (timerRef.current) clearInterval(timerRef.current);
        setCurrentStep(-1);
        setCompletedSteps([]);
        setActiveTools(new Set());
        setActionCount(0);
        setElapsedTime(0);
        onClose();
    }

    function getStepIcon(type: DemoStep["type"]) {
        switch (type) {
            case "success": return <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0" />;
            case "processing": return <Loader2 className="w-4 h-4 text-orange-500 shrink-0 animate-spin" />;
            case "result": return <Zap className="w-4 h-4 text-orange-500 shrink-0" />;
            case "warning": return <AlertCircle className="w-4 h-4 text-orange-400 shrink-0" />;
            case "tool": return <ArrowRight className="w-4 h-4 text-purple-400 shrink-0" />;
            default: return <Terminal className="w-4 h-4 text-gray-400 shrink-0" />;
        }
    }

    function getStepColor(type: DemoStep["type"]) {
        switch (type) {
            case "success": return "text-emerald-300";
            case "processing": return "text-orange-300";
            case "result": return "text-orange-300 font-semibold";
            case "warning": return "text-orange-300";
            case "tool": return "text-purple-300";
            default: return "text-gray-300";
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={handleClose} />

                    {/* Modal */}
                    <motion.div
                        className="relative w-full max-w-3xl bg-[#0a0604] border border-white/10 rounded-xl sm:rounded-2xl shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col max-h-[90vh]"
                        initial={{ scale: 0.95, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.95, y: 20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-white/10 bg-[#130a06]/50 shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="hidden sm:flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer hover:bg-red-400" onClick={handleClose} />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <div className="flex items-center gap-2 sm:ml-3">
                                    <Terminal className="w-4 h-4 text-gray-400" />
                                    <span className="text-xs sm:text-sm font-mono text-gray-300 truncate max-w-[200px] sm:max-w-none">{config.title}: Live Demo</span>
                                </div>
                            </div>
                            <button onClick={handleClose} className="p-1 sm:p-1.5 hover:bg-white/10 rounded-lg transition-colors">
                                <X className="w-5 h-5 text-gray-400" />
                            </button>
                        </div>

                        {/* Simulated Preview Banner */}
                        <div className="bg-orange-500/10 border-b border-orange-500/20 px-4 py-2 sm:px-6 sm:py-3 shrink-0 flex items-start sm:items-center gap-3">
                            <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 shrink-0 mt-0.5 sm:mt-0" />
                            <p className="text-xs sm:text-sm text-orange-200/80 font-sans leading-relaxed">
                                <strong>Note:</strong> This is a simulated preview of an agent execution environment. 
                                <span className="block sm:inline sm:ml-1">Book a live demo to see this workflow process live data.</span>
                            </p>
                        </div>

                        {/* Terminal Body */}
                        <div
                            ref={terminalRef}
                            className="flex-1 overflow-y-auto p-4 sm:p-5 font-mono text-xs sm:text-sm space-y-2 sm:space-y-2.5 scroll-smooth bg-[#0d1117] min-h-[250px] sm:h-[350px]"
                        >
                            {/* Initial boot */}
                            <div className="text-gray-600 text-[10px] sm:text-xs mb-3">
                                SIAIEIN Agent Runtime v2.4.1: {config.title}
                            </div>

                            {completedSteps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    className="flex items-start gap-2 sm:gap-2.5 flex-wrap sm:flex-nowrap"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="mt-0.5 shrink-0">{getStepIcon(step.type)}</div>
                                    <span className={`${getStepColor(step.type)} break-words w-full sm:w-auto`}>{step.text}</span>
                                    {step.tool && (
                                        <span className="sm:ml-auto w-full sm:w-auto text-[10px] sm:text-xs text-gray-500 font-mono mt-0.5 sm:mt-0 opacity-70">[{step.tool}]</span>
                                    )}
                                </motion.div>
                            ))}

                            {/* Current step typing indicator */}
                            {isRunning && currentStep >= 0 && currentStep < config.steps.length && completedSteps.length <= currentStep && (
                                <motion.div
                                    className="flex items-center gap-2 sm:gap-2.5 mt-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <Loader2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500 animate-spin shrink-0" />
                                    <span className="text-orange-500/70 truncate">
                                        {config.steps[currentStep].text.length > 25 ? config.steps[currentStep].text.substring(0, 25) + "..." : config.steps[currentStep].text}
                                    </span>
                                    <span className="animate-pulse text-orange-500">▊</span>
                                </motion.div>
                            )}

                            {/* Completion message */}
                            {!isRunning && completedSteps.length === config.steps.length && completedSteps.length > 0 && (
                                <motion.div
                                    className="mt-4 pt-4 border-t border-white/5"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <div className="flex items-center gap-2 text-rose-400 font-bold">
                                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                                        <span>Demo Complete</span>
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        {/* Progress Bar */}
                        <div className="h-1 bg-[#130a06] shrink-0">
                            <motion.div
                                className={`h-full ${config.accentBg}`}
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            />
                        </div>

                        {/* Footer Stats */}
                        <div className="px-4 sm:px-6 py-3 sm:py-4 bg-[#130a06]/80 border-t border-white/5 shrink-0 flex flex-col sm:block gap-3">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                {/* Tools */}
                                <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap order-2 sm:order-1">
                                    <span className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider font-bold mr-1 hidden sm:inline-block">Tools:</span>
                                    {config.tools.map((tool, i) => (
                                        <span
                                            key={i}
                                            className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[10px] sm:text-xs font-mono font-medium transition-all duration-300 ${activeTools.has(tool)
                                                ? "bg-orange-500/20 text-orange-300 border border-orange-500/30"
                                                : "bg-white/5 text-gray-500 border border-white/5"
                                                }`}
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>

                                {/* Metrics */}
                                <div className="flex items-center gap-3 sm:gap-5 text-[10px] sm:text-xs font-mono order-1 sm:order-2 bg-black/20 sm:bg-transparent p-2 sm:p-0 rounded-lg sm:rounded-none">
                                    <div className="text-gray-400">
                                        <span className="text-gray-500">Time:</span>
                                        <span className="text-white ml-1">{elapsedTime.toFixed(1)}s</span>
                                    </div>
                                    <div className="text-gray-400">
                                        <span className="text-gray-500 hidden sm:inline">Actions:</span>
                                        <span className="text-gray-500 sm:hidden">Act:</span>
                                        <span className="text-white ml-1">{actionCount}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 ml-auto sm:ml-0">
                                        <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${isRunning ? "bg-rose-400 animate-pulse" : progress === 100 ? "bg-rose-400" : "bg-gray-600"}`} />
                                        <span className={isRunning ? "text-rose-400" : "text-gray-400"}>
                                            {isRunning ? "Running" : progress === 100 ? "Done" : "Idle"}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Restart Button */}
                            {!isRunning && completedSteps.length > 0 && (
                                <motion.div
                                    className="mt-3 sm:mt-4 flex justify-center"
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="text-[10px] sm:text-xs border-white/10 text-gray-400 hover:text-white hover:bg-white/5 w-full sm:w-auto"
                                        onClick={handleRestart}
                                    >
                                        <RotateCcw className="w-3 h-3 mr-1.5" /> Replay Demo
                                    </Button>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
