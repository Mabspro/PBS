"use client";

import { useState } from "react";
import { FadeInStagger, FadeInItem } from "@/components/ui/fade-in";
import { ChevronDown } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

const businessOwnerFAQs: FAQItem[] = [
    {
        question: "What is bookkeeping cleanup?",
        answer: "Bookkeeping cleanup fixes inaccurate, incomplete, or inconsistent financial records so your books accurately reflect your business. It's a reset—not ongoing bookkeeping.",
    },
    {
        question: "How do I know if I need cleanup?",
        answer: "If you don't fully trust your numbers, haven't reconciled consistently, or feel anxious about tax time or decisions, cleanup is usually the right starting point.",
    },
    {
        question: "Do you offer monthly bookkeeping?",
        answer: "No. We specialize in project-based cleanup only. After cleanup, we support a smooth handoff to your CPA or ongoing bookkeeper.",
    },
    {
        question: "Will you work with my CPA or tax professional?",
        answer: "Yes. Our process is designed to produce CPA-ready financials with clear documentation.",
    },
    {
        question: "Is this judgment-free?",
        answer: "Absolutely. Messy books are common. Our focus is fixing the records and systems—not assigning blame.",
    },
    {
        question: "How do we get started?",
        answer: "Start with a cleanup assessment so we can determine what's needed and outline next steps clearly.",
    },
];

export function BusinessOwnerFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <FadeInStagger className="space-y-4 max-w-4xl mx-auto">
            {businessOwnerFAQs.map((faq, index) => (
                <FadeInItem key={index}>
                    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white hover:border-navy-300 transition-colors">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:ring-offset-2"
                            aria-expanded={openIndex === index}
                            aria-controls={`faq-answer-${index}`}
                        >
                            <span className="font-semibold text-navy-900 text-lg pr-8">
                                {faq.question}
                            </span>
                            <ChevronDown
                                className={`w-5 h-5 text-navy-600 shrink-0 transition-transform duration-200 ${
                                    openIndex === index ? "rotate-180" : ""
                                }`}
                            />
                        </button>
                        <div
                            id={`faq-answer-${index}`}
                            className={`overflow-hidden transition-all duration-300 ${
                                openIndex === index ? "max-h-96" : "max-h-0"
                            }`}
                        >
                            <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                </FadeInItem>
            ))}
        </FadeInStagger>
    );
}
