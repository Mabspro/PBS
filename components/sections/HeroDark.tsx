"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { useIntake } from "@/lib/intake-context";

export function HeroDark() {
    const { openBusinessIntake } = useIntake();
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="relative overflow-hidden bg-navy-900 pt-16 pb-20 lg:pt-24 lg:pb-32 text-white">
            <div className="container-custom relative z-10 mx-auto">
                <div className="mx-auto max-w-4xl text-center">
                    <FadeIn delay={0.1}>
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl mb-8 leading-tight">
                            Bookkeeping Cleanup for <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white"> Clarity & Confidence</span>
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-navy-100 mb-10 leading-relaxed">
                            We specialize in project-based bookkeeping cleanup.
                            Restoring financial accuracy for business owners and CPAs without the judgment.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                            <Button onClick={openBusinessIntake} size="lg" className="text-base px-8 h-14 bg-white text-navy-900 hover:bg-blue-50 border-0">
                                I Need My Books Cleaned
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="text-base px-8 h-14 border-navy-700 text-white hover:bg-navy-800 hover:text-white"
                                asChild
                            >
                                <a href="#cpas">I&apos;m a CPA / Tax Pro</a>
                            </Button>
                        </div>
                    </FadeIn>
                </div>

                {/* Video Placeholder */}
                <FadeIn delay={0.5} direction="up">
                    <div className="mt-8 mx-auto max-w-5xl rounded-2xl overflow-hidden shadow-2xl shadow-black/20 border border-navy-700 bg-navy-800 aspect-video flex items-center justify-center relative group">
                        {!isPlaying ? (
                            <button
                                onClick={() => setIsPlaying(true)}
                                className="relative w-full h-full block group cursor-pointer"
                                aria-label="Play Introduction Video"
                            >
                                <img
                                    src="/images/for-business-owners.png"
                                    alt="Video Thumbnail"
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                                />
                                <div className="absolute inset-0 bg-navy-900/30 group-hover:bg-navy-900/10 transition-colors" />

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-full shadow-lg z-10 group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
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
            <div className="absolute top-0 inset-0 -z-10">
                <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-navy-800 to-navy-900" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-3xl" />
            </div>
        </section>
    );
}
