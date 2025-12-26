"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { useIntake } from "@/lib/intake-context";

export function HeroSplit() {
    const { openBusinessIntake } = useIntake();
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-32 lg:pb-40">
            <div className="container-custom relative z-10 mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Content */}
                    <div className="max-w-2xl text-left">
                        <FadeIn delay={0.1}>
                            <h1 className="text-4xl font-extrabold tracking-tight text-navy-900 sm:text-5xl lg:text-6xl mb-6">
                                Bookkeeping Cleanup for <span className="text-blue-600">Clarity</span>, <span className="text-blue-600">Accuracy</span>, and Confidence
                            </h1>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <p className="mt-6 text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed">
                                Project-based bookkeeping cleanup for business owners—collaborating with CPAs to deliver clean, tax-ready financial records.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <Button onClick={openBusinessIntake} size="lg" className="text-base px-8 h-14 shadow-xl shadow-blue-900/10">
                                    I Need My Books Cleaned
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="text-base px-8 h-14 border-navy-200 text-navy-900 hover:bg-navy-50"
                                    asChild
                                >
                                    <a href="#cpas">I&apos;m a CPA / Tax Pro</a>
                                </Button>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.4}>
                            <div className="flex items-center gap-4 text-sm font-medium text-slate-500">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white" />
                                    ))}
                                </div>
                                <p>Trusted by 50+ Business Owners</p>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right Column: Video */}
                    <div className="relative">
                        <FadeIn delay={0.4} direction="left">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-50 aspect-video group w-full">
                                {!isPlaying ? (
                                    <button
                                        onClick={() => setIsPlaying(true)}
                                        className="relative w-full h-full block group cursor-pointer"
                                        aria-label="Play Introduction Video"
                                    >
                                        <img
                                            src="/images/for-business-owners.png"
                                            alt="Video Thumbnail"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-navy-900/20 transition-colors" />

                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-full shadow-lg z-10 group-hover:scale-110 transition-transform duration-300">
                                                <svg className="w-8 h-8 text-navy-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </button>
                                ) : (
                                    <iframe
                                        className="w-full h-full"
                                        src="https://www.youtube.com/embed/nKP4Tfb88E0?autoplay=1&rel=0&modestbranding=1"
                                        title="Phoenix Bookkeeping Introduction"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                )}
                            </div>
                            {/* Decorative Blob */}
                            <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10 animate-blob" />
                            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-navy-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10 animate-blob animation-delay-2000" />
                        </FadeIn>
                    </div>

                </div>
            </div>
        </section>
    );
}
