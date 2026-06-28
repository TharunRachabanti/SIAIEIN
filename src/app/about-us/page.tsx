import { Card, CardContent } from "@/components/ui/card";
import { Users, Lightbulb, Rocket, Globe, Linkedin as LinkedIn, Mail } from "lucide-react";
import * as React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function AboutUsPage() {
    return (
        <div className="flex flex-col min-h-screen w-full relative pt-24 overflow-hidden">
            {/* Background Gradient Map */}
            <div className="absolute top-0 inset-x-0 h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#130a06] to-[#130a06] pointer-events-none" />

            {/* Hero Section */}
            <ScrollReveal delay={0.1}>
                <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center text-center z-10">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-8 font-serif">
                        Who We Are
                    </h1>
                    <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mb-6 font-light leading-relaxed text-balance font-serif">
                        A team of builders obsessed with one question: <strong className="text-white font-bold">what work should humans never have to do again?</strong>
                    </p>
                </section>
            </ScrollReveal>

            {/* Our Story & What Drives Us Container */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start relative">

                    {/* Left: Complex Abstract Visual */}
                    <div className="lg:sticky lg:top-32">
                        <ScrollReveal delay={0.2} direction="right">
                            <div className="h-[500px] w-full bg-gradient-to-br from-[#130a06] to-[#130a06] rounded-[3rem] border border-white/10 relative overflow-hidden shadow-2xl p-8 flex items-center justify-center">
                                {/* Animated Network nodes */}
                                <div className="absolute inset-0 opacity-20">
                                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-orange-500" />
                                            </pattern>
                                        </defs>
                                        <rect width="100%" height="100%" fill="url(#grid)" />
                                    </svg>
                                </div>
                                <div className="relative z-10 grid grid-cols-2 gap-4 w-full max-w-md">
                                    <div className="h-32 bg-orange-500/10 border border-orange-500/20 rounded-2xl flex items-center justify-center translate-y-8 backdrop-blur-md">
                                        <Users className="w-10 h-10 text-orange-500" />
                                    </div>
                                    <div className="h-32 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl flex items-center justify-center -translate-y-8 backdrop-blur-md">
                                        <Lightbulb className="w-10 h-10 text-indigo-400" />
                                    </div>
                                    <div className="h-32 bg-orange-500/10 border border-orange-500/20 rounded-2xl flex items-center justify-center translate-y-4 backdrop-blur-md">
                                        <Globe className="w-10 h-10 text-orange-500" />
                                    </div>
                                    <div className="h-32 bg-purple-500/10 border border-purple-500/20 rounded-2xl flex items-center justify-center -translate-y-4 backdrop-blur-md">
                                        <Rocket className="w-10 h-10 text-purple-400" />
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right: Text content */}
                    <div className="space-y-16">
                        <ScrollReveal delay={0.1}>
                            <div>
                                <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-4 font-serif">
                                    <span className="w-8 h-1 bg-orange-500 rounded-full"></span> Our Story
                                </h2>
                                <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                                    <p>
                                        We started with a simple observation — businesses everywhere were spending enormous energy on tasks that added no real value. Repetitive, manual, soul-draining work that existed only because there was no intelligent alternative.
                                    </p>
                                    <p className="text-white font-medium">
                                        We decided to build that alternative.
                                    </p>
                                    <p>
                                        We combine deep expertise in software engineering, AI systems, and business operations to build AI agents that actually work in the real world — not just in demos.
                                    </p>
                                    <p>
                                        Our approach is simple: understand the business problem deeply, design the right AI solution, and deliver something that measurably changes how the company operates.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <div>
                                <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-4 font-serif">
                                    <span className="w-8 h-1 bg-indigo-500 rounded-full"></span> What Drives Us
                                </h2>
                                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                                    We are fast learners who believe any problem can be understood, broken down, and solved with the right combination of intelligence and effort. When a new challenge appears that we haven't faced before, we treat it as an opportunity — learn it completely, solve it well, and add that capability to everything we build going forward.
                                </p>
                                <p className="text-xl font-bold text-indigo-400">
                                    This is how we grow. This is how our clients grow.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Cards */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/5">
                <ScrollReveal delay={0.1}>
                    <Card className="bg-gradient-to-br from-blue-900/20 to-[#130a06] border-orange-500/20 p-8 md:p-12 h-full hover:border-orange-500/50 transition-colors group">
                        <CardContent className="p-0">
                            <div className="bg-orange-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-500 group-hover:scale-110 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                                <Rocket className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-6 font-serif">Our Mission</h3>
                            <p className="text-xl text-blue-100/70 leading-relaxed">
                                Build intelligent AI systems that eliminate repetitive work and give businesses the freedom to focus on what actually matters.
                            </p>
                        </CardContent>
                    </Card>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <Card className="bg-gradient-to-br from-indigo-900/20 to-[#130a06] border-indigo-500/20 p-8 md:p-12 h-full hover:border-indigo-500/50 transition-colors group">
                        <CardContent className="p-0">
                            <div className="bg-indigo-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-500 group-hover:scale-110 transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                                <Globe className="w-8 h-8 text-indigo-400 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-6 font-serif">Our Vision</h3>
                            <p className="text-xl text-indigo-100/70 leading-relaxed">
                                A world where every business — regardless of size, industry, or resources — has access to an intelligent AI workforce that handles operations autonomously.
                            </p>
                        </CardContent>
                    </Card>
                </ScrollReveal>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-white/5">
              <ScrollReveal delay={0.1}>
                <h2 className="text-3xl font-bold text-white mb-12 text-center font-serif">
                  The People Behind SIAIEIN
                </h2>
                <div className="flex justify-center">
                  <div className="bg-[#130a06] border border-white/10 rounded-3xl p-10 max-w-md hover:border-orange-500/30 transition-colors">
                    <div className="w-24 h-24 rounded-full bg-orange-500/20 border-2 border-orange-500/50 mx-auto mb-6 overflow-hidden">
                      <img 
                        src="/team/tharun.jpg" 
                        alt="Tharun Rachabanti"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white text-center mb-2">
                      Tharun Rachabanti
                    </h3>
                    <p className="text-orange-500 text-center font-medium mb-4">
                      Founder & CEO
                    </p>
                    <p className="text-gray-400 text-center leading-relaxed mb-6">
                      Builder of AI systems and automation infrastructure. Focused on making enterprise-grade AI accessible to Indian B2B businesses.
                    </p>
                    <div className="flex justify-center gap-4">
                      <a 
                        href="https://linkedin.com/in/tharun-rachabanti" 
                        target="_blank"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 border border-blue-600/30 rounded-lg text-blue-400 hover:bg-blue-600/30 transition-colors text-sm font-medium"
                      >
                        <LinkedIn className="w-4 h-4" /> LinkedIn
                      </a>
                      <a 
                        href="mailto:hello@siaiein.com"
                        className="flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-lg text-orange-400 hover:bg-orange-500/20 transition-colors text-sm font-medium"
                      >
                        <Mail className="w-4 h-4" /> Email
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </section>

        </div>
    );
}
