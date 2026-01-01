import type { Metadata } from "next";
import { Layout } from "@/components/layout/layout";
import { TermsOfServiceContent } from "@/components/app/legal/terms-of-service-content";

export const metadata: Metadata = {
    title: "Terms of Service",
    description: "Clear, straightforward terms that protect both you and us. Review our complete terms of service for using Karsilo's educational platform.",
    openGraph: {
        title: "Terms of Service | Karsilo",
        description: "Clear, straightforward terms that protect both you and us. Review our complete terms of service for using Karsilo's educational platform.",
    },
};

export default function TermsOfService() {
    return (
        <Layout>
            <TermsOfServiceContent />
        </Layout>
    );
}
