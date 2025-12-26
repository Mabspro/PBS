"use client";

import { Star, Quote } from "lucide-react";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/fade-in";

const testimonials = [
    {
        quote:
            "I was embarrassed by the state of my books, but the team at Phoenix made me feel completely at ease. They fixed years of mess in weeks.",
        author: "Small Business Owner",
        location: "Retail",
        stars: 5,
    },
    {
        quote:
            "Finally, a cleanup service that actually understands what tax-ready means. My client handoffs have never been smoother.",
        author: "CPA Partner",
        location: "Accounting Firm",
        stars: 5,
    },
    {
        quote:
            "The clarity I have now is worth every penny. For the first time in years, I can actually make decisions based on real numbers.",
        author: "Founder",
        location: "Consulting Agency",
        stars: 5,
    },
];

export function Testimonials() {
    return (
        <section className="py-20 bg-white border-y border-slate-100">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <FadeIn>
                        <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl mb-6">
                            Trusted by Business Owners and CPAs
                        </h2>
                        <p className="text-lg text-slate-600">
                            We specialize in complex cleanups, transforming financial chaos into clarity.
                        </p>
                    </FadeIn>
                </div>

                <FadeInStagger className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <FadeInItem
                            key={idx}
                            className="bg-slate-50 p-8 rounded-2xl relative"
                        >
                            <Quote className="absolute top-8 left-8 w-10 h-10 text-navy-100 -z-0" />
                            <div className="relative z-10">
                                <div className="flex gap-1 mb-6">
                                    {[...Array(testimonial.stars)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-5 h-5 fill-yellow-400 text-yellow-400"
                                        />
                                    ))}
                                </div>
                                <blockquote className="text-lg text-slate-700 italic mb-6 leading-relaxed">
                                    &quot;{testimonial.quote}&quot;
                                </blockquote>
                                <div>
                                    <div className="font-semibold text-navy-900">
                                        {testimonial.author}
                                    </div>
                                    <div className="text-sm text-slate-500">
                                        {testimonial.location}
                                    </div>
                                </div>
                            </div>
                        </FadeInItem>
                    ))}
                </FadeInStagger>
            </div>
        </section>
    );
}
