"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface IntakeContextType {
    isBusinessOpen: boolean;
    openBusinessIntake: () => void;
    closeBusinessIntake: () => void;
    isCPAOpen: boolean;
    openCPAIntake: () => void;
    closeCPAIntake: () => void;
}

const IntakeContext = createContext<IntakeContextType | undefined>(undefined);

export function IntakeProvider({ children }: { children: ReactNode }) {
    const [isBusinessOpen, setIsBusinessOpen] = useState(false);
    const [isCPAOpen, setIsCPAOpen] = useState(false);

    return (
        <IntakeContext.Provider
            value={{
                isBusinessOpen,
                openBusinessIntake: () => setIsBusinessOpen(true),
                closeBusinessIntake: () => setIsBusinessOpen(false),
                isCPAOpen,
                openCPAIntake: () => setIsCPAOpen(true),
                closeCPAIntake: () => setIsCPAOpen(false),
            }}
        >
            {children}
        </IntakeContext.Provider>
    );
}

export function useIntake() {
    const context = useContext(IntakeContext);
    if (context === undefined) {
        throw new Error("useIntake must be used within an IntakeProvider");
    }
    return context;
}
