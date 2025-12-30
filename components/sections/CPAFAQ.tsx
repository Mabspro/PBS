"use client";

import { useState } from "react";
import { FadeInStagger, FadeInItem } from "@/components/ui/fade-in";
import { ChevronDown } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

const cpaFAQs: FAQItem[] = [
    {
        question: "What type of work does Phoenix Bookkeeping Solutions handle?",
        answer: "We specialize exclusively in bookkeeping cleanup and financial record recovery—not ongoing monthly bookkeeping or tax preparation.",
    },
    {
        question: "How does Phoenix support CPAs?",
        answer: "We prepare clean, reconciled, and well-documented books so CPAs can step in efficiently without rework, uncertainty, or time drain.",
    },
    {
        question: "Do you replace a client's CPA or tax preparer?",
        answer: "No. We complement CPA services by addressing bookkeeping issues before tax work begins, then returning the client with CPA-ready financials.",
    },
    {
        question: "How are cleanup decisions documented?",
        answer: "All corrections are handled systematically with clear documentation, reconciliations, and support for professional review.",
    },
    {
        question: "What types of clients are a good fit for referral?",
        answer: "Clients with messy, inconsistent, or unreliable books who need cleanup before tax filing, advisory work, or audits.",
    },
    {
        question: "How does handoff work after cleanup?",
        answer: "Once cleanup is complete, we provide organized records and documentation so CPAs can proceed confidently with minimal follow-up.",
    },
];

export function CPAFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="mt-12">
            <FadeInStagger className="space-y-4">
                {cpaFAQs.map((faq, index) => (
                    <FadeInItem key={index}>
                        <div className="border border-navy-700 rounded-xl overflow-hidden bg-navy-800/50 hover:border-navy-600 transition-colors">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-navy-900"
                                aria-expanded={openIndex === index}
                                aria-controls={`cpa-faq-answer-${index}`}
                            >
                                <span className="font-semibold text-white text-lg pr-8">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-blue-300 shrink-0 transition-transform duration-200 ${
                                        openIndex === index ? "rotate-180" : ""
                                    }`}
                                />
                            </button>
                            <div
                                id={`cpa-faq-answer-${index}`}
                                className={`overflow-hidden transition-all duration-300 ${
                                    openIndex === index ? "max-h-96" : "max-h-0"
                                }`}
                            >
                                <div className="px-6 pb-5 text-navy-100 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    </FadeInItem>
                ))}
            </FadeInStagger>
        </div>
    );
}
