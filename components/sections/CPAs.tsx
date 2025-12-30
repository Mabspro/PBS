"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Users, ShieldCheck, FileCheck } from "lucide-react";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/fade-in";
import { useIntake } from "@/lib/intake-context";
import { CPAFAQ } from "./CPAFAQ";

export function CPAs() {
    const { openCPAIntake } = useIntake();

    return (
        <section id="cpas" className="py-20 lg:py-32 bg-navy-900 text-white">
            <div className="container-custom">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="order-2 md:order-1">
                        {/* Visual Cards for Collab */}
                        <FadeInStagger className="grid gap-6">
                            <FadeInItem className="bg-navy-800 p-6 rounded-xl border border-navy-700 flex items-start gap-4">
                                <Users className="w-8 h-8 text-blue-300 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-lg text-white mb-1">Refer</h4>
                                    <p className="text-navy-200 text-sm">You refer your client to Phoenix Bookkeeping</p>
                                </div>
                            </FadeInItem>
                            <FadeInItem className="bg-navy-800 p-6 rounded-xl border border-navy-700 flex items-start gap-4 translate-x-4">
                                <ShieldCheck className="w-8 h-8 text-blue-300 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-lg text-white mb-1">Clean</h4>
                                    <p className="text-navy-200 text-sm">We assess and clean the client&apos;s books</p>
                                </div>
                            </FadeInItem>
                            <FadeInItem className="bg-navy-800 p-6 rounded-xl border border-navy-700 flex items-start gap-4">
                                <FileCheck className="w-8 h-8 text-blue-300 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-lg text-white mb-1">Return</h4>
                                    <p className="text-navy-200 text-sm">We return the client to you—ready for the next step</p>
                                </div>
                            </FadeInItem>
                        </FadeInStagger>
                    </div>

                    <div className="order-1 md:order-2">
                        <FadeIn delay={0.2}>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-900/50 border border-blue-800 text-blue-100 text-sm font-semibold tracking-wide uppercase mb-6">
                                For CPAs & Tax Professionals
                            </span>
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                                Reliable Handoffs for Messy Books
                            </h2>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <div className="prose prose-lg text-navy-100 mb-8">
                                <p>
                                    When client books are not clean or usable, Phoenix Bookkeeping provides focused bookkeeping cleanup so your work can proceed smoothly and efficiently.
                                </p>
                                <p>
                                    We collaborate with CPAs and tax professionals by handling the cleanup phase and returning clients with organized, reliable, and tax-ready records.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <div className="p-4 bg-navy-800/50 border-l-4 border-blue-400 rounded-r-lg mb-10">
                                <p className="text-sm text-blue-100 font-medium tracking-wide">
                                    Boundary Statement: Phoenix Bookkeeping does not compete with tax preparation or advisory services.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* CPA FAQ Section */}
                <div className="mt-20">
                    <FadeIn>
                        <p className="text-navy-100 text-lg mb-6 text-center max-w-3xl mx-auto">
                            Phoenix Bookkeeping Solutions provides project-based bookkeeping cleanup designed to support CPAs by delivering clean, reconciled, well-documented, CPA-ready financials.
                        </p>
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8 text-center">
                            CPA Referral FAQ
                        </h2>
                    </FadeIn>
                    <CPAFAQ />
                    
                    <FadeIn delay={0.3}>
                        <div className="text-center mt-12">
                            <Button onClick={openCPAIntake} size="lg" variant="secondary" className="h-14 px-8 text-base">
                                Refer a Client for Cleanup <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
