import { z } from "zod";

export const businessOwnerSchema = z.object({
    fullName: z.string().min(2, "Name must be at least 2 characters"),
    businessName: z.string().min(2, "Business name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    role: z.enum(["Owner", "Partner", "Manager", "Other"]),
    businessAge: z.enum(["< 1 year", "1–3 years", "3–5 years", "5+ years"]).optional(),
    industry: z.string().optional(),
    bookkeepingHandler: z.enum(["Me", "Bookkeeper", "Accountant/CPA", "Multiple people", "No one consistently"]).optional(),
    cleanupPrompt: z.enum([
        "CPA/tax preparer flagged issues",
        "Behind/overwhelmed",
        "Business grew",
        "Financing/planning",
        "Not confident in numbers",
    ]).optional(),
    separateAccounts: z.enum(["Yes, consistently", "Mostly", "No, mixed"]).optional(),
    monthsBehind: z.enum(["Up to 3 months", "4–6 months", "7–12 months", "Over 1 year", "Not sure"]).optional(),
    changes: z.array(z.string()).optional(), // For checkboxes
    desiredOutcome: z.enum([
        "CPA-ready books",
        "Understand my numbers",
        "Peace of mind",
        "Not sure, but something feels off",
    ]).optional(),
    additionalNotes: z.string().optional(),
});

export const cpaSchema = z.object({
    cpaName: z.string().min(2, "Name must be at least 2 characters"),
    firmName: z.string().optional(),
    cpaEmail: z.string().email("Invalid email address"),
    cpaPhone: z.string().optional(),

    clientBusinessName: z.string().min(2, "Client business name is required"),
    clientContactName: z.string().min(2, "Client contact name is required"),
    clientEmail: z.string().email("Invalid client email"),

    referralReason: z.enum([
        "Books not tax-ready",
        "Reconciliation issues",
        "Misclassifications",
        "Missing periods",
        "Other",
    ]),

    cleanupPeriod: z.enum([
        "Last 3 months",
        "6 months",
        "12 months",
        "Multiple years",
        "Not sure"
    ]),

    software: z.enum([
        "QuickBooks Online",
        "QuickBooks Desktop",
        "Xero",
        "Other/Unsure"
    ]).optional(),

    additionalNotes: z.string().optional(),
});

export type BusinessOwnerFormData = z.infer<typeof businessOwnerSchema>;
export type CPAFormData = z.infer<typeof cpaSchema>;
