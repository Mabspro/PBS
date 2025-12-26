import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Schedule Your Consultation | Phoenix Bookkeeping",
    robots: "noindex, nofollow", // Private page
};

export default function SchedulePage() {
    return (
        <main className="min-h-screen bg-slate-50 py-20">
            <div className="container-custom max-w-4xl">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-navy-900 mb-4">Schedule Your Consultation</h1>
                    <p className="text-slate-600">
                        Select a time below that works best for you.
                    </p>
                </div>

                {/* Calendly Embed Placeholder */}
                <div className="bg-white p-4 rounded-2xl shadow-sm h-[700px] border border-slate-200">
                    {/* In production, replace with actual Calendly iframe or component */}
                    <div className="w-full h-full flex items-center justify-center bg-slate-50 rounded-xl border border-dashed border-slate-300">
                        <div className="text-center">
                            <p className="text-slate-500 font-medium mb-2">Calendly Embed Placeholder</p>
                            <p className="text-sm text-slate-400">Add user&apos;s Calendly embed code here</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
