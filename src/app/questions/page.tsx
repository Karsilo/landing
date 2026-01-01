import type { Metadata } from "next";
import { Suspense } from "react";
import { Layout } from "@/components/layout/layout";
import { QuestionsPage } from "@/components/app/questions/questions-page";

export const metadata: Metadata = {
  title: "Practice Questions",
  description: "Practice problems and questions for mathematics, physics, and astronomy courses. Test your understanding with comprehensive problem sets.",
  openGraph: {
    title: "Practice Questions | Karsilo",
    description: "Practice problems and questions for mathematics, physics, and astronomy courses. Test your understanding with comprehensive problem sets.",
  },
};

export default function Questions() {
  return (
    <Layout>
      <Suspense fallback={<div className="container py-16">Loading...</div>}>
        <QuestionsPage />
      </Suspense>
    </Layout>
  );
}
