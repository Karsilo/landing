import type { Metadata } from "next";
import { Layout } from "@/components/layout/layout";
import { PrivacyPolicyContent } from "@/components/app/legal/privacy-policy-content";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Your privacy matters to us. Learn how we collect, use, and protect your personal information on Karsilo.",
    openGraph: {
        title: "Privacy Policy | Karsilo",
        description: "Your privacy matters to us. Learn how we collect, use, and protect your personal information on Karsilo.",
    },
};

export default function PrivacyPolicy() {
    return (
        <Layout>
            <PrivacyPolicyContent />
        </Layout>
    );
}
