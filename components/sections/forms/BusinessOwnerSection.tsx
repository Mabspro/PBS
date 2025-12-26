"use client";

import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea, RadioGroupItem, CheckboxItem } from "@/components/ui/form-elements";
import { CheckCircle2, Loader2, ArrowRight, BarChart3 } from "lucide-react";
import { businessOwnerSchema, type BusinessOwnerFormData } from "@/lib/schemas";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useIntake } from "@/lib/intake-context";

export function BusinessOwnerSection() {
    const { isBusinessOpen, openBusinessIntake, closeBusinessIntake } = useIntake();
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        control,
        handleSubmit,
        setValue,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<BusinessOwnerFormData>({
        resolver: zodResolver(businessOwnerSchema),
        defaultValues: {
            changes: [],
        },
    });

    // Smart Expand Logic via Hash
    useEffect(() => {
        if (window.location.hash === "#intake-business") {
            openBusinessIntake();
            // Clear hash to prevent reopening on refresh if desired, or leave it. 
            // Leaving it is fine, but maybe better to clean URL?
            // window.history.replaceState(null, "", " ");
        }
    }, [openBusinessIntake]);

    const onSubmit = async (data: BusinessOwnerFormData) => {
        console.log("Submitting Business Owner Data:", data);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSuccess(true);
    };

    const handleCheckboxChange = (value: string, checked: boolean) => {
        const currentChanges = watch("changes") || [];
        if (checked) {
            setValue("changes", [...currentChanges, value]);
        } else {
            setValue(
                "changes",
                currentChanges.filter((item) => item !== value)
            );
        }
    };

    return (
        <div id="intake-business" className="h-full">
            {/* Card View */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full flex flex-col shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-navy-50 text-navy-800 text-xs font-semibold tracking-wide uppercase mb-4">
                        Business Owners
                    </span>
                    <h3 className="text-2xl font-bold text-navy-900 mb-2">Cleanup Assessment</h3>
                    <p className="text-slate-600">
                        Start here if you need your books cleaned, organized, or trusted.
                    </p>
                </div>

                <div className="flex-grow space-y-4 mb-8">
                    <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                        <BarChart3 className="w-5 h-5 text-navy-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-slate-700">
                            <strong>Did you know?</strong> 92% of business owners report feeling immediate relief after their first assessment call.
                        </p>
                    </div>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-sm text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-green-600" /> Confidential & Judgment-Free
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-green-600" /> ~5 Minutes to Complete
                        </li>
                    </ul>
                </div>

                <Button onClick={openBusinessIntake} size="lg" className="w-full justify-between group">
                    Start Assessment <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>

            {/* Modal Form */}
            <Dialog open={isBusinessOpen} onOpenChange={(open) => !open && closeBusinessIntake()}>
                <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto sm:max-h-[85vh]">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-navy-900">
                            {isSuccess ? "Assessment Received" : "Business Cleanup Assessment"}
                        </DialogTitle>
                        {!isSuccess && (
                            <DialogDescription>
                                Please answer the following to help us prepare for your consultation.
                            </DialogDescription>
                        )}
                    </DialogHeader>

                    {isSuccess ? (
                        <div className="py-12 text-center animate-in fade-in zoom-in duration-500 fill-mode-forwards">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-navy-900 mb-4">You&apos;re All Set!</h3>
                            <p className="text-lg text-slate-600 max-w-md mx-auto">
                                We have received your assessment directly. We will review your details and reach out shortly to schedule your free consultation.
                            </p>
                            <Button onClick={closeBusinessIntake} variant="outline" className="mt-8">
                                Close Window
                            </Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 mt-4">
                            {/* Form Fields - Reusing previous logic */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="fullName">Full Name <span className="text-red-500">*</span></Label>
                                    <Input {...register("fullName")} id="fullName" placeholder="Jane Doe" />
                                    {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="businessName">Business Name <span className="text-red-500">*</span></Label>
                                    <Input {...register("businessName")} id="businessName" placeholder="Acme Inc." />
                                    {errors.businessName && <p className="text-red-500 text-sm">{errors.businessName.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                                    <Input {...register("email")} id="email" type="email" placeholder="jane@example.com" />
                                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone</Label>
                                    <Input {...register("phone")} id="phone" type="tel" placeholder="(555) 123-4567" />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <Label>Your role in the business <span className="text-red-500">*</span></Label>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                    <Controller name="role" control={control} render={({ field }) => (
                                        <>
                                            {["Owner", "Partner", "Manager", "Other"].map(role => (
                                                <RadioGroupItem key={role} name="role" id={`role-${role}`} label={role} checked={field.value === role} onChange={() => field.onChange(role)} />
                                            ))}
                                        </>
                                    )} />
                                </div>
                                {errors.role && <p className="text-red-500 text-sm">{errors.role.message}</p>}
                            </div>

                            <div className="space-y-3">
                                <Label>How long has your business been operating?</Label>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                    <Controller name="businessAge" control={control} render={({ field }) => (
                                        <>
                                            {["< 1 year", "1–3 years", "3–5 years", "5+ years"].map(opt => (
                                                <RadioGroupItem key={opt} name="businessAge" id={`age-${opt}`} label={opt} checked={field.value === opt} onChange={() => field.onChange(opt)} />
                                            ))}
                                        </>
                                    )} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="industry">Industry</Label>
                                <Input {...register("industry")} id="industry" placeholder="e.g. Retail, Consulting..." />
                            </div>

                            <div className="space-y-3">
                                <Label>Who handled bookkeeping during the cleanup period?</Label>
                                <div className="grid sm:grid-cols-2 gap-2">
                                    <Controller name="bookkeepingHandler" control={control} render={({ field }) => (
                                        <>
                                            {["Me", "Bookkeeper", "Accountant/CPA", "Multiple people", "No one consistently"].map(opt => (
                                                <RadioGroupItem key={opt} name="bookkeepingHandler" id={`h-${opt}`} label={opt} checked={field.value === opt} onChange={() => field.onChange(opt)} />
                                            ))}
                                        </>
                                    )} />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <Label>What prompted cleanup now?</Label>
                                <div className="grid sm:grid-cols-2 gap-2">
                                    <Controller name="cleanupPrompt" control={control} render={({ field }) => (
                                        <>
                                            {["CPA/tax preparer flagged issues", "Behind/overwhelmed", "Business grew", "Financing/planning", "Not confident in numbers"].map(opt => (
                                                <RadioGroupItem key={opt} name="cleanupPrompt" id={`p-${opt}`} label={opt} checked={field.value === opt} onChange={() => field.onChange(opt)} />
                                            ))}
                                        </>
                                    )} />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <Label>Do you use separate business bank accounts?</Label>
                                <div className="grid sm:grid-cols-3 gap-2">
                                    <Controller name="separateAccounts" control={control} render={({ field }) => (
                                        <>
                                            {["Yes, consistently", "Mostly", "No, mixed"].map(opt => (
                                                <RadioGroupItem key={opt} name="separateAccounts" id={`b-${opt}`} label={opt} checked={field.value === opt} onChange={() => field.onChange(opt)} />
                                            ))}
                                        </>
                                    )} />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <Label>How far behind are your books?</Label>
                                <div className="grid sm:grid-cols-3 gap-2">
                                    <Controller name="monthsBehind" control={control} render={({ field }) => (
                                        <>
                                            {["Up to 3 months", "4–6 months", "7–12 months", "Over 1 year", "Not sure"].map(opt => (
                                                <RadioGroupItem key={opt} name="monthsBehind" id={`mb-${opt}`} label={opt} checked={field.value === opt} onChange={() => field.onChange(opt)} />
                                            ))}
                                        </>
                                    )} />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <Label>Business changes in last 2 years</Label>
                                <div className="grid sm:grid-cols-2 gap-2">
                                    {[
                                        "Rapid growth",
                                        "New employees/contractors",
                                        "New payment platforms",
                                        "Entity/structure change",
                                        "None"
                                    ].map((item) => (
                                        <CheckboxItem
                                            key={item}
                                            id={`ch-${item}`}
                                            label={item}
                                            onChange={(e) => handleCheckboxChange(item, e.target.checked)}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <Label>What outcome do you want from cleanup?</Label>
                                <div className="grid sm:grid-cols-2 gap-2">
                                    <Controller name="desiredOutcome" control={control} render={({ field }) => (
                                        <>
                                            {["CPA-ready books", "Understand my numbers", "Peace of mind", "Not sure, but something feels off"].map(opt => (
                                                <RadioGroupItem key={opt} name="desiredOutcome" id={`o-${opt}`} label={opt} checked={field.value === opt} onChange={() => field.onChange(opt)} />
                                            ))}
                                        </>
                                    )} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="additionalNotes">Anything else you want us to know?</Label>
                                <Textarea {...register("additionalNotes")} id="additionalNotes" placeholder="Tell us more..." />
                            </div>

                            <Button type="submit" size="lg" className="w-full h-12 text-base" disabled={isSubmitting}>
                                {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</> : "Submit Form"}
                            </Button>
                        </form>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}
