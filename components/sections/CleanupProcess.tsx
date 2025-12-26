import { ClipboardList, Stethoscope, Sparkles, CheckCircle2, Share2, FileSpreadsheet, RotateCcw } from "lucide-react";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/fade-in";

const businessSteps = [
    {
        title: "Assess",
        description: "Answer a few questions so we understand your situation before meeting.",
        icon: ClipboardList,
    },
    {
        title: "Diagnose",
        description: "We review your books at a high level to identify where cleanup is needed.",
        icon: Stethoscope,
    },
    {
        title: "Clean & Organize",
        description: "We correct errors, organize accounts, and restore financial clarity.",
        icon: Sparkles,
    },
    {
        title: "Move Forward",
        description: "You receive clean, reliable books ready for decision-making or CPA handoff.",
        icon: CheckCircle2,
    },
];

const cpaSteps = [
    {
        title: "Refer",
        description: "You send clients with messy or unusable books to Phoenix Bookkeeping.",
        icon: Share2,
    },
    {
        title: "Cleanup",
        description: "We handle the bookkeeping cleanup phase thoroughly and efficiently.",
        icon: FileSpreadsheet,
    },
    {
        title: "Return",
        description: "We return the client to you with clean, organized, tax-ready records.",
        icon: RotateCcw,
    },
];

export function CleanupProcess() {
    return (
        <section className="py-20 lg:py-32 bg-slate-50" id="process">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <FadeIn delay={0.1}>
                        <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl mb-4">
                            Our Cleanup Process
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-lg text-slate-600">
                            A focused approach designed to restore trust in your numbers—without unnecessary complexity.
                        </p>
                    </FadeIn>
                </div>

                {/* Business Owners Map */}
                <div className="mb-20">
                    <FadeIn delay={0.3}>
                        <div className="flex items-center justify-center mb-10">
                            <span className="px-4 py-1.5 rounded-full bg-navy-100 text-navy-800 text-sm font-semibold tracking-wide uppercase">For Business Owners</span>
                        </div>
                    </FadeIn>
                    <FadeInStagger className="grid gap-8 md:grid-cols-4 relative" containerDelay={0.4}>
                        {/* Connector Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-slate-200 -z-0 mx-16" />

                        {/* Connector Line (Mobile) */}
                        <div className="md:hidden absolute top-0 bottom-0 left-[2.25rem] w-0.5 bg-slate-200 -z-0" />

                        {businessSteps.map((step, idx) => (
                            <FadeInItem key={idx} className="relative z-10 flex md:flex-col items-start md:items-center text-left md:text-center group">
                                <div className="w-[4.5rem] h-[4.5rem] flex-shrink-0 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-0 md:mb-6 mr-6 md:mr-0 text-navy-600 relative z-10 group-last:mb-0">
                                    <step.icon className="w-8 h-8 md:w-10 md:h-10" />
                                </div>
                                <div className="pt-2 md:pt-0">
                                    <h3 className="text-lg font-semibold text-navy-900 mb-2">{step.title}</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed md:px-2">{step.description}</p>
                                </div>
                            </FadeInItem>
                        ))}
                    </FadeInStagger>
                </div>

                {/* CPAs Map */}
                <div>
                    <FadeIn delay={0.5}>
                        <div className="flex items-center justify-center mb-10">
                            <span className="px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold tracking-wide uppercase">For CPAs & Tax Pros</span>
                        </div>
                    </FadeIn>

                    <FadeInStagger className="grid gap-8 md:grid-cols-3 md:max-w-4xl mx-auto relative" containerDelay={0.6}>
                        {/* Connector Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-slate-200 -z-0 mx-16" />
                        {/* Connector Line (Mobile) */}
                        <div className="md:hidden absolute top-0 bottom-0 left-[2.25rem] w-0.5 bg-slate-200 -z-0" />

                        {cpaSteps.map((step, idx) => (
                            <FadeInItem key={idx} className="relative z-10 flex md:flex-col items-start md:items-center text-left md:text-center group">
                                <div className="w-[4.5rem] h-[4.5rem] flex-shrink-0 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-0 md:mb-6 mr-6 md:mr-0 text-blue-600 relative z-10">
                                    <step.icon className="w-8 h-8 md:w-10 md:h-10" />
                                </div>
                                <div className="pt-2 md:pt-0">
                                    <h3 className="text-lg font-semibold text-navy-900 mb-2">{step.title}</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed md:px-4">{step.description}</p>
                                </div>
                            </FadeInItem>
                        ))}
                    </FadeInStagger>
                </div>
            </div>
        </section>
    );
}
