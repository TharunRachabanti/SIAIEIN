"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, FileText, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import * as React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { submitContactForm } from "@/app/actions/contact";
import { CalendlyButton } from "@/components/ui/calendly-button";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [errorMsg, setErrorMsg] = React.useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMsg("");
        
        const formData = new FormData(e.currentTarget);
        
        try {
            const res = await submitContactForm(formData);
            if (res.success) {
                setSuccess(true);
            } else {
                setErrorMsg(res.error || "Something went wrong. Please try again or email us directly at hello@siaiein.com");
            }
        } catch (err) {
            setErrorMsg("Something went wrong. Please try again or email us directly at hello@siaiein.com");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="flex flex-col min-h-screen w-full relative pt-24 overflow-hidden">
            {/* Background Map */}
            <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left Column: Form Info */}
                    <div>
                        <ScrollReveal delay={0.1}>
                            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-6 leading-tight font-serif">
                                Let's Build Something <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-500">Intelligent</span>
                            </h1>
                            <p className="text-xl text-gray-400 text-balance leading-relaxed mb-12">
                                Tell us about your business and we'll show you exactly where AI can transform your operations.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <div className="space-y-8 mt-16">
                                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                    What happens next:
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-orange-500/10 rounded-xl shrink-0 mt-1">
                                            <Clock className="w-6 h-6 text-orange-500" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white mb-2">1. Fast Review</h4>
                                            <p className="text-gray-300 text-base">We review your submission within 24 hours.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-orange-500/10 rounded-xl shrink-0 mt-1">
                                            <Calendar className="w-6 h-6 text-orange-500" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white mb-2">2. Discovery Call</h4>
                                            <p className="text-gray-300 text-base">We schedule a 30-minute discovery call to dive deep into your workflows.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-purple-500/10 rounded-xl shrink-0 mt-1">
                                            <FileText className="w-6 h-6 text-purple-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white mb-2">3. Opportunity Report</h4>
                                            <p className="text-gray-300 text-base">We send you a written AI Opportunity Report detailing actionable automations — absolutely free.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Enterprise Trust Elements */}
                        <ScrollReveal delay={0.3}>
                            <div className="mt-16 pt-16 border-t border-white/10">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                        <h4 className="text-white font-bold mb-2">Global Engineering</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            Remote First.<br />
                                            Operating Worldwide.
                                        </p>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                        <h4 className="text-white font-bold mb-2">Direct Contact</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-1">
                                            <span className="text-gray-500">Founder:</span> hello@siaiein.com
                                        </p>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            <span className="text-gray-500">Support:</span> support@siaiein.com
                                        </p>
                                    </div>
                                </div>

                                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-[#130a06] border border-orange-500/20 relative">
                                    <div className="absolute top-4 left-4 text-4xl text-orange-500/20 font-serif leading-none">"</div>
                                    <p className="text-gray-300 italic mb-4 relative z-10 pl-6 pt-2">
                                        We are not building tools for humans to use. We are building the synthetic workforce that will execute the world's digital labor, so humans can focus on strategy, creativity, and connection.
                                    </p>
                                    <div className="flex items-center gap-3 pl-6">
                                        <div>
                                            <p className="text-white font-bold text-sm tracking-widest uppercase">The SIAIEIN Vision</p>
                                            <p className="text-orange-500/80 text-xs">Day 1</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right Column: Form */}
                    <ScrollReveal delay={0.3} direction="up">
                        <Card className="bg-[#130a06]/50 border-white/10 p-8 md:p-10 shadow-2xl backdrop-blur-xl">
                            {success ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 className="w-8 h-8 text-green-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">✅ Message Received</h3>
                                    <p className="text-gray-300 mb-8 leading-relaxed text-balance">
                                        Thank you. We'll review your submission and reach out within 24 hours.
                                    </p>
                                    <p className="text-gray-400">
                                        In the meantime, feel free to explore our agents &rarr;
                                    </p>
                                </div>
                            ) : (
                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="name" className="text-gray-300">Full Name *</Label>
                                            <Input id="name" name="name" required placeholder="John Doe" className="bg-black/50 border-white/10 h-12 text-white focus-visible:ring-orange-500" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="company" className="text-gray-300">Company Name *</Label>
                                            <Input id="company" name="company" required placeholder="Acme Corp" className="bg-black/50 border-white/10 h-12 text-white focus-visible:ring-orange-500" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-gray-300">Email Address *</Label>
                                        <Input id="email" name="email" required type="email" placeholder="john@acme.com" className="bg-black/50 border-white/10 h-12 text-white focus-visible:ring-orange-500" />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label className="text-gray-300">Industry *</Label>
                                            <Select name="industry" required>
                                                <SelectTrigger className="bg-black/50 border-white/10 h-12 text-white focus:ring-orange-500">
                                                    <SelectValue placeholder="Select Industry" />
                                                </SelectTrigger>
                                                <SelectContent className="bg-[#130a06] border-white/10 text-white">
                                                    <SelectItem value="ecommerce">E-commerce</SelectItem>
                                                    <SelectItem value="saas">SaaS & Tech</SelectItem>
                                                    <SelectItem value="healthcare">Healthcare</SelectItem>
                                                    <SelectItem value="finance">Finance</SelectItem>
                                                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                                                    <SelectItem value="other">Other</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-gray-300">Company Size *</Label>
                                            <Select name="size" required>
                                                <SelectTrigger className="bg-black/50 border-white/10 h-12 text-white focus:ring-orange-500">
                                                    <SelectValue placeholder="Company Size" />
                                                </SelectTrigger>
                                                <SelectContent className="bg-[#130a06] border-white/10 text-white">
                                                    <SelectItem value="1-10">1-10 employees</SelectItem>
                                                    <SelectItem value="10-50">10-50 employees</SelectItem>
                                                    <SelectItem value="50-200">50-200 employees</SelectItem>
                                                    <SelectItem value="200+">200+ employees</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="challenge" className="text-gray-300">What is your biggest operational challenge right now? *</Label>
                                        <Textarea id="challenge" name="challenge" required placeholder="We spend 20 hours a week manually entering data..." className="bg-black/50 border-white/10 min-h-[120px] text-white focus-visible:ring-orange-500" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label className="text-gray-300">How did you hear about us?</Label>
                                        <Input name="source" placeholder="LinkedIn, Search, Referral..." className="bg-black/50 border-white/10 h-12 text-white focus-visible:ring-orange-500" />
                                    </div>

                                    <Button disabled={isSubmitting} type="submit" variant="glowing" size="lg" className="w-full sm:w-auto">
                                        {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : null}
                                        {isSubmitting ? "Submitting..." : "Request My Free AI Audit"}
                                    </Button>

                                    {errorMsg && (
                                        <p className="text-red-500 text-sm mt-4 text-center">{errorMsg}</p>
                                    )}

                                    <div className="mt-6 pt-6 border-t border-white/10 text-center">
                                        <p className="text-gray-300 mb-4">Or bypass the form and book a direct call:</p>
                                        <CalendlyButton 
                                            text="Book via Calendar" 
                                            className="w-full sm:w-auto h-12 text-lg"
                                        />
                                    </div>
                                </form>
                            )}
                        </Card>
                    </ScrollReveal>

                </div>
            </div>
        </div>
    );
}
