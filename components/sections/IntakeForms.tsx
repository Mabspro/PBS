"use client";

import { BusinessOwnerSection } from "@/components/sections/forms/BusinessOwnerSection";
import { CPASection } from "@/components/sections/forms/CPASection";
import { FadeIn } from "@/components/ui/fade-in";

export function IntakeForms() {
    return (
        <div className="bg-white py-20 lg:py-32">
            <div className="container-custom">
                <FadeIn>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-navy-900 mb-4">Start Your Cleanup</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Select the option that best describes you to begin the process.
                        </p>
                    </div>
                </FadeIn>
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <FadeIn delay={0.1} className="h-full">
                        <BusinessOwnerSection />
                    </FadeIn>
                    <FadeIn delay={0.2} className="h-full">
                        <CPASection />
                    </FadeIn>
                </div>
            </div>
        </div>
    );
}
