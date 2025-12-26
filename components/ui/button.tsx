import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline" | "ghost" | "link" | "secondary"
    size?: "default" | "sm" | "lg"
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(
                    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 disabled:pointer-events-none disabled:opacity-50",
                    {
                        "bg-navy-900 text-white hover:bg-navy-800 shadow-md transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200": variant === "default",
                        "bg-blue-100 text-navy-900 hover:bg-blue-200": variant === "secondary",
                        "border border-slate-200 bg-white hover:bg-slate-100 text-slate-900": variant === "outline",
                        "hover:bg-slate-100 hover:text-slate-900": variant === "ghost",
                        "text-navy-900 underline-offset-4 hover:underline": variant === "link",
                        "h-10 px-4 py-2": size === "default",
                        "h-9 rounded-md px-3": size === "sm",
                        "h-12 rounded-md px-8 text-lg": size === "lg",
                    },
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
