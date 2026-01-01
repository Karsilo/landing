import type { Metadata } from "next";
import { Layout } from "@/components/layout/layout";
import { EquationSheetsPage } from "@/components/app/equation-sheets/equation-sheets-page";

export const metadata: Metadata = {
    title: "Equation Sheets",
    description: "Comprehensive equation sheets and formula references for mathematics, physics, and astronomy. Quick reference guides for students.",
    openGraph: {
        title: "Equation Sheets | Karsilo",
        description: "Comprehensive equation sheets and formula references for mathematics, physics, and astronomy. Quick reference guides for students.",
    },
};

export default function EquationSheets() {
    return (
        <Layout>
            <EquationSheetsPage />
        </Layout>
    );
}
