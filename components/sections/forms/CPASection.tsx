"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea, RadioGroupItem } from "@/components/ui/form-elements";
import { CheckCircle2, Loader2, ArrowRight, CalendarClock, ShieldCheck } from "lucide-react";
import { cpaSchema, type CPAFormData } from "@/lib/schemas";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useIntake } from "@/lib/intake-context";

export function CPASection() {
    const { isCPAOpen, openCPAIntake, closeCPAIntake } = useIntake();
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<CPAFormData>({
        resolver: zodResolver(cpaSchema),
    });

    const onSubmit = async (data: CPAFormData) => {
        console.log("Submitting CPA Data:", data);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSuccess(true);
    };

    return (
        <div id="intake-cpa" className="h-full">
            {/* Card View */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 h-full flex flex-col shadow-sm hover:shadow-lg transition-shadow">
                <div className="mb-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold tracking-wide uppercase mb-4">
                        For CPAs & Tax Pros
                    </span>
                    <h3 className="text-2xl font-bold text-navy-900 mb-2">Refer a Client</h3>
                    <p className="text-slate-600">
                        Need clean books before you can file? Send us the details and we&apos;ll handle the cleanup.
                    </p>
                </div>

                <div className="flex-grow space-y-4 mb-8">
                    <div className="flex items-start gap-3 p-4 bg-white border border-slate-100 rounded-lg shadow-sm">
                        <CalendarClock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-slate-700">
                            <strong>Efficiency:</strong> Our focused cleanup process is designed to get tax-ready books back to you in as little as 2 weeks.
                        </p>
                    </div>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-sm text-slate-600">
                            <ShieldCheck className="w-4 h-4 text-blue-600" /> We Don&apos;t Compete on Tax/Audit
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-blue-600" /> Secure Hand-off Process
                        </li>
                    </ul>
                </div>

                <Button onClick={openCPAIntake} variant="secondary" size="lg" className="w-full justify-between group">
                    Start Referral <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>

            {/* Modal Form */}
            <Dialog open={isCPAOpen} onOpenChange={(open) => !open && closeCPAIntake()}>
                <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto sm:max-h-[85vh]">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-navy-900">
                            {isSuccess ? "Referral Received" : "Client Cleanup Referral"}
                        </DialogTitle>
                        {!isSuccess && (
                            <DialogDescription>
                                Share the client details below so we can coordinate an efficient cleanup.
                            </DialogDescription>
                        )}
                    </DialogHeader>

                    {isSuccess ? (
                        <div className="py-12 text-center animate-in fade-in zoom-in duration-500 fill-mode-forwards">
                            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-navy-900 mb-4">Referral Received</h3>
                            <p className="text-lg text-slate-600 max-w-md mx-auto">
                                Thank you. We have received your client referral and will follow up with you to confirm the next steps.
                            </p>
                            <Button onClick={closeCPAIntake} variant="outline" className="mt-8">
                                Close Window
                            </Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 mt-4">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="cpaName">Your Name <span className="text-red-500">*</span></Label>
                                    <Input {...register("cpaName")} id="cpaName" />
                                    {errors.cpaName && <p className="text-red-500 text-sm">{errors.cpaName.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="firmName">Firm Name</Label>
                                    <Input {...register("firmName")} id="firmName" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="cpaEmail">Your Email <span className="text-red-500">*</span></Label>
                                    <Input {...register("cpaEmail")} id="cpaEmail" type="email" />
                                    {errors.cpaEmail && <p className="text-red-500 text-sm">{errors.cpaEmail.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="cpaPhone">Phone</Label>
                                    <Input {...register("cpaPhone")} id="cpaPhone" type="tel" />
                                </div>
                            </div>

                            <div className="h-px bg-slate-100 my-4" />
                            <h3 className="text-lg font-semibold text-navy-900">Client Details</h3>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="clientBusinessName">Client Business Name <span className="text-red-500">*</span></Label>
                                    <Input {...register("clientBusinessName")} id="clientBusinessName" />
                                    {errors.clientBusinessName && <p className="text-red-500 text-sm">{errors.clientBusinessName.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="clientContactName">Client Contact Name <span className="text-red-500">*</span></Label>
                                    <Input {...register("clientContactName")} id="clientContactName" />
                                    {errors.clientContactName && <p className="text-red-500 text-sm">{errors.clientContactName.message}</p>}
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <Label htmlFor="clientEmail">Client Contact Email <span className="text-red-500">*</span></Label>
                                    <Input {...register("clientEmail")} id="clientEmail" type="email" />
                                    {errors.clientEmail && <p className="text-red-500 text-sm">{errors.clientEmail.message}</p>}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <Label>Primary reason for cleanup referral <span className="text-red-500">*</span></Label>
                                <div className="grid sm:grid-cols-2 gap-2">
                                    <Controller name="referralReason" control={control} render={({ field }) => (
                                        <>
                                            {["Books not tax-ready", "Reconciliation issues", "Misclassifications", "Missing periods", "Other"].map(opt => (
                                                <RadioGroupItem key={opt} name="referralReason" id={`r-${opt}`} label={opt} checked={field.value === opt} onChange={() => field.onChange(opt)} />
                                            ))}
                                        </>
                                    )} />
                                </div>
                                {errors.referralReason && <p className="text-red-500 text-sm">{errors.referralReason.message}</p>}
                            </div>

                            <div className="space-y-3">
                                <Label>Cleanup period needed <span className="text-red-500">*</span></Label>
                                <div className="grid sm:grid-cols-3 gap-2">
                                    <Controller name="cleanupPeriod" control={control} render={({ field }) => (
                                        <>
                                            {["Last 3 months", "6 months", "12 months", "Multiple years", "Not sure"].map(opt => (
                                                <RadioGroupItem key={opt} name="cleanupPeriod" id={`per-${opt}`} label={opt} checked={field.value === opt} onChange={() => field.onChange(opt)} />
                                            ))}
                                        </>
                                    )} />
                                </div>
                                {errors.cleanupPeriod && <p className="text-red-500 text-sm">{errors.cleanupPeriod.message}</p>}
                            </div>


                            <div className="space-y-3">
                                <Label>Accounting software</Label>
                                <div className="grid sm:grid-cols-2 gap-2">
                                    <Controller name="software" control={control} render={({ field }) => (
                                        <>
                                            {["QuickBooks Online", "QuickBooks Desktop", "Xero", "Other/Unsure"].map(opt => (
                                                <RadioGroupItem key={opt} name="software" id={`s-${opt}`} label={opt} checked={field.value === opt} onChange={() => field.onChange(opt)} />
                                            ))}
                                        </>
                                    )} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="additionalNotes">Anything we should know?</Label>
                                <Textarea {...register("additionalNotes")} id="additionalNotes" placeholder="Additional context..." />
                            </div>

                            <Button type="submit" variant="secondary" size="lg" className="w-full h-12 text-base" disabled={isSubmitting}>
                                {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</> : "Submit Referral"}
                            </Button>
                        </form>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}
