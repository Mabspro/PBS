"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useIntake } from "@/lib/intake-context";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const { openBusinessIntake } = useIntake();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Process", href: "#process" },
        { name: "For Owners", href: "#business-owners" },
        { name: "For CPAs", href: "#cpas" },
        { name: "Consultation", href: "#expectations" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out",
                isScrolled
                    ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container-custom flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="relative z-50">
                    <span className="font-serif text-2xl font-bold text-navy-900 tracking-tight">
                        Phoenix<span className="text-blue-600">.</span>
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-slate-600 hover:text-navy-900 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <Button onClick={openBusinessIntake} variant={isScrolled ? "default" : "secondary"} size="sm">
                        Get Started
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden relative z-50 p-2 text-navy-900"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Nav Overlay */}
                <div
                    className={cn(
                        "fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out md:hidden",
                        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    )}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-xl font-medium text-navy-900"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button
                        onClick={() => {
                            openBusinessIntake();
                            setMobileMenuOpen(false);
                        }}
                        size="lg"
                    >
                        Get Started
                    </Button>
                </div>
            </div>
        </nav>
    );
}
