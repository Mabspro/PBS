"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function About() {
    return (
        <section id="about" className="py-20 bg-slate-50 border-t border-slate-200">
            <div className="container-custom">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Founder Image */}
                    <div className="order-2 md:order-1 relative aspect-[4/5] bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                        <Image
                            src="/images/Founder Picture.jpg"
                            alt="Phoenix Bookkeeping Solutions Founder"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/10 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="order-1 md:order-2">
                        <FadeIn delay={0.1}>
                            <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl mb-6">
                                About Phoenix Bookkeeping Solutions
                            </h2>
                            <p className="text-lg font-semibold text-navy-700 mb-6">
                                Over a Decade of Accounting Experience, Focused on Cleanup
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="prose prose-slate prose-lg text-slate-600 mb-8 leading-relaxed">
                                <p className="mb-4">
                                    Phoenix Bookkeeping Solutions helps business owners recover and reset their books through a structured cleanup system that restores trust, clarity, and CPA-ready financials.
                                </p>
                                <p className="mb-4">
                                    When financial records don&apos;t feel reliable, every business decision becomes harder—cash flow planning, tax preparation, growth, and peace of mind. Phoenix Bookkeeping Solutions was created to solve this exact problem.
                                </p>
                                <p className="mb-4">
                                    Built on over 10 years of accounting experience, our work includes bookkeeping cleanup, reconciliations, and audit support. We&apos;ve worked inside the inconsistencies and discrepancies that cause business owners to second-guess their numbers.
                                </p>
                                <p className="mb-4">
                                    We specialize in project-based bookkeeping cleanup, not ongoing monthly bookkeeping. Our process is designed to identify what&apos;s broken, correct it accurately, and restore financial clarity so business owners can move forward with confidence—and so CPAs and tax professionals can rely on the records without hesitation.
                                </p>
                                <p className="mb-4">
                                    The result is clean, defensible financials that reduce stress, eliminate guesswork, and make running the business easier.
                                </p>
                                <p className="font-medium text-navy-900 italic">
                                    Clean books aren&apos;t about perfection. They&apos;re about clarity, accuracy, and a system that works.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <div>
                                <h3 className="text-xl font-bold text-navy-900 mb-6">
                                    Experience & Approach
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        "10+ Years in Accounting & Reconciliations",
                                        "Specialized in Bookkeeping Cleanup",
                                        "CPA-Ready Financials",
                                        "Judgment-Free, Process-Driven Work"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center shrink-0">
                                                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <span className="font-medium text-navy-900">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <div className="mt-8 pt-8 border-t border-slate-200">
                                <p className="text-slate-600">
                                    <span className="font-semibold text-navy-900">Do you work with CPAs?</span>{" "}
                                    Yes. Our cleanup process is designed to support CPAs by delivering clean, well-documented, CPA-ready financials.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
