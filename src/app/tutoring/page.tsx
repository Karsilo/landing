import type { Metadata } from "next";
import { Layout } from "@/components/layout/layout";
import { TutoringPage } from "@/components/app/tutoring/tutoring-page";

export const metadata: Metadata = {
    title: "Tutoring",
    description: "Get personalized tutoring for university-level mathematics, physics, and astronomy. Expert help for STEM students.",
    openGraph: {
        title: "Tutoring | Karsilo",
        description: "Get personalized tutoring for university-level mathematics, physics, and astronomy. Expert help for STEM students.",
    },
};

export default function Tutoring() {
    return (
        <Layout>
            <TutoringPage />
        </Layout>
    );
}
