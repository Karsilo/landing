"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { QuestionsHeader } from "./questions-header";
import { QuestionsContent } from "./questions-content";
import { QuestionsCTA } from "./questions-cta";

export function QuestionsPage() {
    const searchParams = useSearchParams();
    const courseParam = searchParams.get("course");

    // Initialize state with course param if valid, otherwise default to mathematics
    const initialTab = courseParam && (courseParam === "mathematics" || courseParam === "physics" || courseParam === "astronomy")
        ? courseParam
        : "mathematics";

    const [activeTab, setActiveTab] = useState(initialTab);

    return (
        <>
            <section className="container py-8 md:py-16">
                <QuestionsHeader />
                <QuestionsContent activeTab={activeTab} onTabChange={setActiveTab} />
            </section>
            <QuestionsCTA />
        </>
    );
}
