"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { useIntake } from "@/lib/intake-context";

export function BusinessOwners() {
    const { openBusinessIntake } = useIntake();

    return (
        <section id="business-owners" className="py-20 lg:py-32 bg-white">
            <div className="container-custom">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div>
                        <FadeIn delay={0.1}>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-800 text-sm font-semibold tracking-wide uppercase mb-6">
                                For Business Owners
                            </span>
                            <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl mb-6">
                                Restore Confidence in Your Financial Records
                            </h2>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="prose prose-slate prose-lg text-slate-600 mb-8">
                                <p>
                                    If your books don&apos;t feel right, you&apos;re not alone. Many business owners reach a point where they know cleanup is needed—but aren&apos;t sure where the issues are or how to fix them properly.
                                </p>
                                <p>
                                    Phoenix Bookkeeping provides project-based bookkeeping cleanup designed to restore clarity, accuracy, and confidence in your financial records.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 sm:p-8 mb-8">
                                <h3 className="text-lg font-semibold text-navy-900 mb-4">How It Works</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Complete a brief intake to help us understand your situation",
                                        "Book a free cleanup consultation",
                                        "Receive clear recommendations and next steps",
                                        "If aligned, we clean and organize your books so you can move forward confidently"
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3">
                                            <CheckCircle2 className="w-6 h-6 text-navy-600 flex-shrink-0" />
                                            <span className="text-slate-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <p className="text-slate-500 italic mb-8 border-l-4 border-navy-200 pl-4 py-1">
                                &quot;If your situation requires a CPA or tax professional after cleanup, we can help point you in the right direction.&quot;
                            </p>

                            <Button onClick={openBusinessIntake} size="lg" className="h-14 px-8 text-base shadow-lg shadow-navy-900/10">
                                Start Cleanup Assessment
                            </Button>
                        </FadeIn>
                    </div>

                    <div className="relative h-full min-h-[400px] bg-slate-100 rounded-3xl overflow-hidden hidden md:block">
                        <FadeIn delay={0.5} direction="left" className="h-full">
                            {/* Image: Stress / Overwhelmed */}
                            <img
                                src="/images/stress.png"
                                alt="Business owner feeling overwhelmed by paperwork"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            {/* Gradient Overlay for subtle text contrast if needed */}
                            <div className="absolute inset-0 bg-navy-900/10 mix-blend-multiply" />
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
