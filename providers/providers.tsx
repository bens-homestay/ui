"use client";

import React from "react";
import { TanstackProvider } from "@/providers/tanstack-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { ProgressProvider } from "@/providers/progress-provider";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            <ProgressProvider>
                <TanstackProvider>{children}</TanstackProvider>
            </ProgressProvider>
        </ThemeProvider>
    );
}