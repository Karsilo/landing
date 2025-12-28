"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { QuestionsHeader } from "./questions-header";
import { QuestionsContent } from "./questions-content";
import { QuestionsCTA } from "./questions-cta";

export function QuestionsPage() {
    const searchParams = useSearchParams();
    const courseParam = searchParams.get("course");

    const [activeTab, setActiveTab] = useState("mathematics");

    useEffect(() => {
        if (courseParam && (courseParam === "mathematics" || courseParam === "physics" || courseParam === "astronomy")) {
            setActiveTab(courseParam);
        }
    }, [courseParam]);

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
