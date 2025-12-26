"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { CheckCircle2 } from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-20 bg-slate-50 border-t border-slate-200">
            <div className="container-custom">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Visual / Image Placeholder */}
                    <div className="order-2 md:order-1 relative aspect-[4/5] bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                        {/* Placeholder for Headshot */}
                        <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                            <span className="text-slate-400 font-medium">Founder Portrait</span>
                        </div>
                        {/* Optional overlay or pattern */}
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/10 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="order-1 md:order-2">
                        <FadeIn delay={0.1}>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold tracking-wide uppercase mb-6">
                                The Expert Behind the Process
                            </span>
                            <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl mb-6">
                                Decades of Financial Wisdom, Applied to Your Business
                            </h2>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="prose prose-slate prose-lg text-slate-600 mb-8 leading-relaxed">
                                <p>
                                    Bookkeeping cleanup isn&apos;t just about data entry—it&apos;s about understanding the story behind the numbers.
                                </p>
                                <p>
                                    With decades of experience navigating complex financial landscapes, we bring a steady hand and a seasoned perspective to every project. We&apos;ve seen it all, and we know exactly how to fix it.
                                </p>
                                <p>
                                    Our approach is built on patience, precision, and a deep respect for the hard work you&apos;ve put into your business.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    "30+ Years of Experience",
                                    "Certified QuickBooks ProAdvisor",
                                    "Specialized in Cleanup",
                                    "Judgment-Free Partner"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <span className="font-medium text-navy-900">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
