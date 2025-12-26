import * as React from "react"
import { cn } from "@/lib/utils"

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-900 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Input.displayName = "Input"

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
    ({ className, ...props }, ref) => {
        return (
            <textarea
                className={cn(
                    "flex min-h-[80px] w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-900 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Textarea.displayName = "Textarea"

export const Label = React.forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
    ({ className, ...props }, ref) => (
        <label
            ref={ref}
            className={cn(
                "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-navy-900",
                className
            )}
            {...props}
        />
    )
)
Label.displayName = "Label"

export const RadioGroupItem = React.forwardRef<HTMLInputElement, InputProps & { label: string }>(
    ({ className, label, id, ...props }, ref) => {
        return (
            <div className="flex items-center space-x-2">
                <input
                    type="radio"
                    className={cn("h-4 w-4 border-slate-300 text-navy-900 focus:ring-navy-900", className)}
                    ref={ref}
                    id={id}
                    {...props}
                />
                <label htmlFor={id} className="text-sm text-slate-700 font-normal cursor-pointer select-none">
                    {label}
                </label>
            </div>
        )
    }
)
RadioGroupItem.displayName = "RadioGroupItem"


export const CheckboxItem = React.forwardRef<HTMLInputElement, InputProps & { label: string }>(
    ({ className, label, id, ...props }, ref) => {
        return (
            <div className="flex items-center space-x-2">
                <input
                    type="checkbox"
                    className={cn("h-4 w-4 rounded border-slate-300 text-navy-900 focus:ring-navy-900", className)}
                    ref={ref}
                    id={id}
                    {...props}
                />
                <label htmlFor={id} className="text-sm text-slate-700 font-normal cursor-pointer select-none">
                    {label}
                </label>
            </div>
        )
    }
)
CheckboxItem.displayName = "CheckboxItem"
