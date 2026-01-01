import type { Metadata } from "next";
import { Layout } from "@/components/layout/layout";
import { CookiePolicyContent } from "@/components/app/legal/cookie-policy-content";

export const metadata: Metadata = {
    title: "Cookie Policy",
    description: "Learn about how we use cookies and similar technologies to improve your experience on Karsilo.",
    openGraph: {
        title: "Cookie Policy | Karsilo",
        description: "Learn about how we use cookies and similar technologies to improve your experience on Karsilo.",
    },
};

export default function CookiePolicy() {
    return (
        <Layout>
            <CookiePolicyContent />
        </Layout>
    );
}
