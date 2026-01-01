import type { Metadata } from "next";
import { Layout } from "@/components/layout/layout";
import { BibliographyCreatorPage } from "@/components/app/tools/bibliography-creator/BibliographyCreatorPage";

export const metadata: Metadata = {
    title: "Bibliography Creator",
    description: "Generate properly formatted citations in APA, MLA, Chicago, and Harvard styles instantly. Free bibliography and citation tool for research papers.",
    openGraph: {
        title: "Bibliography Creator | Karsilo",
        description: "Generate properly formatted citations in APA, MLA, Chicago, and Harvard styles instantly. Free bibliography and citation tool for research papers.",
    },
};

export default function BibliographyCreator() {
    return (
        <Layout>
            <BibliographyCreatorPage />
        </Layout>
    );
}
