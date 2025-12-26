"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type FadeInProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    fullWidth?: boolean;
};

export function FadeIn({
    children,
    className,
    delay = 0,
    direction = "up",
    fullWidth = false,
}: FadeInProps) {
    const directions = {
        up: { y: 20 },
        down: { y: -20 },
        left: { x: 20 },
        right: { x: -20 },
        none: {},
    };

    return (
        <motion.div
            initial={{ opacity: 0, ...directions[direction] }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
            className={cn(className, fullWidth && "w-full")}
        >
            {children}
        </motion.div>
    );
}

export function FadeInStagger({ children, className, containerDelay = 0 }: { children: React.ReactNode; className?: string; containerDelay?: number }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ staggerChildren: 0.1, delayChildren: containerDelay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function FadeInItem({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
