"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}
export function Providers({ children }: Props) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
    );
}
