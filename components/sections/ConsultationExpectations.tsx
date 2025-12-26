import { AlertCircle, Calendar } from "lucide-react";

export function ConsultationExpectations() {
    return (
        <section className="py-20 lg:py-24 bg-slate-50">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl mb-4">
                        What to Expect From Your Cleanup Consultation
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        This 30-minute consultation is designed to understand your business, identify bookkeeping problem areas, and determine the most appropriate next step.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Before the Call */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                <Calendar className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-navy-900">Before the Call</h3>
                        </div>
                        <div className="space-y-4 text-slate-600">
                            <p>
                                After booking, you will complete a brief intake requesting business background information, current bookkeeping system, key pain points, and recent financial reports (if available).
                            </p>
                            <div className="bg-amber-50 border border-amber-100 p-4 rounded-lg flex gap-3 text-sm text-amber-800">
                                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                <p>Please complete the intake at least 48 hours before your consultation. Incomplete intakes may result in rescheduling.</p>
                            </div>
                        </div>
                    </div>

                    {/* During the Call */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-navy-50 flex items-center justify-center text-navy-600">
                                <UsersIcon className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-navy-900">During the Call</h3>
                        </div>
                        <ul className="space-y-3 mb-6">
                            {[
                                "Review your current situation",
                                "Discuss identified issues",
                                "Clarify what cleanup would involve",
                                "Determine alignment and next steps"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-slate-600">
                                    <div className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-slate-900 font-medium border-t border-slate-100 pt-4">
                            If aligned, you will receive a clear scope and pricing.
                        </p>
                    </div>
                </div>

                <div className="mt-12 text-center max-w-3xl mx-auto">
                    <h4 className="text-lg font-semibold text-navy-900 mb-2">Our Approach</h4>
                    <p className="text-slate-600 leading-relaxed">
                        Phoenix Bookkeeping works best with business owners and professionals who value clarity, preparation, and accuracy. Our goal is to deliver clean, reliable books that support confident decision-making and smooth handoff to CPAs or tax professionals when needed.
                    </p>
                </div>
            </div>
        </section>
    );
}

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
    // Simple inline icon to avoid import issues if not already imported or strict
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}
