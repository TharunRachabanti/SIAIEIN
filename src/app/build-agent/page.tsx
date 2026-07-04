"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { Building2, Code2, Database, Workflow, ArrowRight, ArrowLeft, Bot, Lock, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendlyButton } from "@/components/shared/calendly-button";

const steps = [
  { title: "Define Role", icon: Bot },
  { title: "Data Connections", icon: Database },
  { title: "Task Rules", icon: Workflow },
  { title: "Review and Deploy", icon: Lock },
];

const roles = [
  { id: "sales", label: "Sales and BD", icon: Building2 },
  { id: "support", label: "Customer Support", icon: Bot },
  { id: "ops", label: "Internal Operations", icon: Workflow },
  { id: "data", label: "Data and Analytics", icon: Database },
  { id: "custom", label: "Custom Architecture", icon: Code2 },
];

const tools = ["Salesforce", "HubSpot", "Slack", "Gmail", "Notion", "Jira", "PostgreSQL", "Custom API"];

export default function BuildAgentPage() {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [selectedRole, setSelectedRole] = React.useState<string | null>(null);

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0));

  return (
    <div className="flex flex-col min-h-screen w-full bg-[#0a0502] pt-24">

      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">

        {/* Header */}
        <ScrollReveal delay={0.1}>
          <div className="text-center mb-14">
            <p className="section-label mb-4">Agent Builder</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-5 leading-tight">
              Design Your <span className="text-orange-500">Custom Agent</span>
            </h1>
            <p className="text-stone-400 max-w-xl mx-auto leading-relaxed">
              Tell us what you need. We will review your setup and come back with a technical architecture built around your business.
            </p>
          </div>
        </ScrollReveal>

        {/* Progress */}
        <div className="relative mb-12">
          <div className="hidden md:block absolute top-5 left-0 w-full h-px bg-white/[0.06]" />
          <div
            className="hidden md:block absolute top-5 left-0 h-px bg-orange-500 transition-all duration-500"
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          />
          <div className="relative flex justify-between gap-4 md:gap-0 max-w-2xl mx-auto overflow-x-auto pb-4 md:pb-0">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center gap-2.5 shrink-0">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center bg-[#0a0502] z-10 transition-all duration-300 ${i <= currentStep ? "border-orange-500 text-orange-500 bg-orange-500/10" : "border-white/[0.1] text-stone-600"}`}>
                  <step.icon className="w-4 h-4" />
                </div>
                <span className={`text-xs font-semibold text-center ${i <= currentStep ? "text-white" : "text-stone-600"}`}>
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="card-surface overflow-hidden min-h-[420px]">
          <AnimatePresence mode="wait">

            {/* Step 1 */}
            {currentStep === 0 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                className="p-8 md:p-10"
              >
                <h2 className="text-xl font-bold text-white mb-2">What is this agent for?</h2>
                <p className="text-stone-500 text-sm mb-8">Pick the area it will work in, or choose custom.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                  {roles.map(item => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedRole(item.id)}
                      className={`p-5 rounded-xl border text-left transition-all hover:scale-[1.02] ${selectedRole === item.id
                        ? "border-orange-500 bg-orange-500/10"
                        : "border-white/[0.08] bg-white/[0.02] hover:border-white/[0.2]"
                        }`}
                    >
                      <item.icon className={`w-6 h-6 mb-3 ${selectedRole === item.id ? "text-orange-500" : "text-stone-500"}`} />
                      <h3 className={`text-sm font-semibold ${selectedRole === item.id ? "text-white" : "text-stone-300"}`}>{item.label}</h3>
                    </button>
                  ))}
                </div>

                <div className="flex justify-end">
                  <Button onClick={nextStep} disabled={!selectedRole} variant="glowing">
                    Next <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 2 */}
            {currentStep === 1 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                className="p-8 md:p-10"
              >
                <h2 className="text-xl font-bold text-white mb-2">What tools does it need access to?</h2>
                <p className="text-stone-500 text-sm mb-8">Select everything the agent should connect to.</p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
                  {tools.map(tool => (
                    <div key={tool} className="p-4 border border-white/[0.08] bg-white/[0.02] rounded-xl flex items-center justify-between cursor-pointer hover:border-orange-500/40 hover:bg-orange-500/5 transition-colors group">
                      <span className="text-stone-300 text-sm font-medium group-hover:text-white">{tool}</span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between">
                  <Button onClick={prevStep} variant="ghost" className="text-stone-500 hover:text-white">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back
                  </Button>
                  <Button onClick={nextStep} variant="glowing">
                    Next <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 3+ */}
            {currentStep > 1 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                className="p-8 md:p-10 flex flex-col items-center justify-center min-h-[380px] text-center"
              >
                <div className="w-16 h-16 bg-orange-500/10 border border-orange-500/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-orange-500" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">Blueprint saved.</h2>
                <p className="text-stone-400 max-w-md mb-8 text-sm leading-relaxed">
                  Our engineers will look at your setup and reach out with a technical architecture for your business.
                </p>

                <div className="space-y-3 w-full max-w-sm">
                  <Input placeholder="Your work email" className="h-11 bg-white/[0.03] border-white/[0.08] text-center text-white placeholder:text-stone-600" />
                  <Button variant="glowing" className="w-full">
                    Submit Configuration
                  </Button>
                </div>

                <Button onClick={() => setCurrentStep(0)} variant="link" className="mt-6 text-stone-500 hover:text-white text-sm">
                  <ArrowLeft className="w-3.5 h-3.5 mr-1.5" /> Start Over
                </Button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Or just book a call */}
        <div className="mt-8 text-center">
          <p className="text-stone-600 text-sm mb-4">Or skip the form and talk to us directly</p>
          <CalendlyButton text="Book a Call" className="" />
        </div>

      </div>
    </div>
  );
}
