import { Suspense } from "react";
import { Layout } from "@/components/layout/layout";
import { QuestionsPage } from "@/components/app/questions/questions-page";

export default function Questions() {
  return (
    <Layout>
      <Suspense fallback={<div className="container py-16">Loading...</div>}>
        <QuestionsPage />
      </Suspense>
    </Layout>
  );
}
