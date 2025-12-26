"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FadeIn, FadeInStagger } from "@/components/ui/fade-in";
import { useIntake } from "@/lib/intake-context";

export function Hero() {
    const { openBusinessIntake } = useIntake();
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-24 lg:pb-32">
            {/* ... keeping existing content ... */}
            <div className="container-custom relative z-10 mx-auto">
                <div className="mx-auto max-w-4xl text-center">
                    {/* ... headline and buttons ... */}
                    <FadeIn delay={0.1}>
                        <h1 className="text-4xl font-extrabold tracking-tight text-navy-900 sm:text-5xl lg:text-6xl mb-6">
                            Bookkeeping Cleanup for Clarity, Accuracy, and Confidence
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-slate-600 mb-10">
                            Project-based bookkeeping cleanup for business owners—with trusted
                            collaboration alongside CPAs and tax professionals when clean,
                            reliable books are required.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <Button onClick={openBusinessIntake} size="lg" className="text-base px-8 h-14">
                                I Need My Books Cleaned
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="text-base px-8 h-14 border-navy-200 text-navy-900 hover:bg-navy-50"
                                asChild
                            >
                                <a href="#cpas">I&apos;m a CPA / Tax Professional</a>
                            </Button>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <p className="text-sm text-slate-500 font-medium tracking-wide">
                            Phoenix Bookkeeping supports business owners and collaborates with
                            CPAs and tax professionals to prepare clean, reliable books.
                        </p>
                    </FadeIn>
                </div>

                {/* Video Placeholder */}
                <FadeIn delay={0.5} direction="up">
                    <div className="mt-16 sm:mt-24 mx-auto max-w-5xl rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-50 aspect-video flex items-center justify-center relative group">
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
                </FadeIn>
            </div>

            {/* Background Decor */}
            <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-blue-50 to-white -z-10" />
        </section>
    );
}
