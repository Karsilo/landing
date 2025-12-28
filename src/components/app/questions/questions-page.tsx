"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { QuestionModuleCard } from "@/components/question-module-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, Atom, Telescope } from "lucide-react";

const questionSets = {
    mathematics: [
        {
            module: "Variant Questions",
            questionsUrl: "/pdfs/mathematics/variant-questions.pdf",
            answersUrl: "/pdfs/mathematics/variant-answers.pdf",
            questionCount: 48,
        },
        {
            module: "Ordinary Differential Equations",
            questionsUrl: "/pdfs/mathematics/ordinary-differential-equations-questions.pdf",
            answersUrl: "/pdfs/mathematics/ordinary-differential-equations-answers.pdf",
            questionCount: 20,
        },
        {
            module: "De Moivre's Theorem",
            questionsUrl: "/pdfs/mathematics/de-moirves-theorem-questions.pdf",
            answersUrl: "/pdfs/mathematics/de-moirves-theorem-answers.pdf",
            questionCount: 10,
        },
        {
            module: "Limits",
            questionsUrl: "/pdfs/mathematics/limits-questions.pdf",
            answersUrl: "/pdfs/mathematics/limits-answers.pdf",
            questionCount: 10,
        },
        {
            module: "Roots of Unity",
            questionsUrl: "/pdfs/mathematics/roots-of-unity-questions.pdf",
            answersUrl: "/pdfs/mathematics/roots-of-unity-answers.pdf",
            questionCount: 20,
        },
        {
            module: "Proof by Induction",
            questionsUrl: "/pdfs/mathematics/proof-by-induction-questions.pdf",
            answersUrl: "/pdfs/mathematics/proof-by-induction-answers.pdf",
            questionCount: 19,
        },
    ],
    physics: [
        {
            module: "Circular Motion",
            questionsUrl: "/pdfs/physics/circular-motion-questions.pdf",
            answersUrl: "/pdfs/physics/circular-motion-answers.pdf",
            questionCount: 20,
        },
        {
            module: "Waves and Optics",
            questionsUrl: "/pdfs/physics/waves-and-optics-questions.pdf",
            answersUrl: "/pdfs/physics/waves-and-optics-answers.pdf",
            questionCount: 10,
        },
        {
            module: "Oscillations",
            questionsUrl: "/pdfs/physics/oscillations-questions.pdf",
            answersUrl: "/pdfs/physics/oscillations-answers.pdf",
            questionCount: 27,
        },
    ],
    astronomy: [
        {
            module: "Planetary Motion",
            questionsUrl: "/pdfs/astronomy/planetary-motion-questions.pdf",
            answersUrl: "/pdfs/astronomy/planetary-motion-answers.pdf",
            questionCount: 20,
        },
        {
            module: "Variant Questions",
            questionsUrl: "/pdfs/astronomy/variant-questions.pdf",
            answersUrl: "/pdfs/astronomy/variant-answers.pdf",
            questionCount: 22,
        },
    ],
};

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
            {/* Questions Content */}
            <section className="container py-8 md:py-16">
                <div className="mb-10">
                    <h1 className="text-xl font-bold tracking-tight">
                        Practice Questions
                    </h1>
                    <p className="text-muted-foreground">
                        Test your knowledge with curated problem sets and detailed solutions
                    </p>
                </div>
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <div className="flex justify-start mb-12">
                        <TabsList className="grid w-full max-w-md grid-cols-3">
                            <TabsTrigger value="mathematics">
                                <Calculator className="h-4 w-4 mr-2" />
                                Math
                            </TabsTrigger>
                            <TabsTrigger value="physics">
                                <Atom className="h-4 w-4 mr-2" />
                                Physics
                            </TabsTrigger>
                            <TabsTrigger value="astronomy">
                                <Telescope className="h-4 w-4 mr-2" />
                                Astronomy
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="mathematics" className="space-y-4">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold flex items-center gap-2">
                                <Calculator className="h-6 w-6 text-primary" />
                                Mathematics
                            </h2>
                            <p className="text-muted-foreground">
                                Differential equations, complex numbers, limits, and mathematical proofs
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                            {questionSets.mathematics.map((question, index) => (
                                <QuestionModuleCard
                                    key={index}
                                    course="Mathematics"
                                    module={question.module}
                                    questionsUrl={question.questionsUrl}
                                    answersUrl={question.answersUrl}
                                    questionCount={question.questionCount}
                                />
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="physics" className="space-y-4">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold flex items-center gap-2">
                                <Atom className="h-6 w-6 text-primary" />
                                Physics
                            </h2>
                            <p className="text-muted-foreground">
                                Circular motion, waves, optics, and oscillations
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                            {questionSets.physics.map((question, index) => (
                                <QuestionModuleCard
                                    key={index}
                                    course="Physics"
                                    module={question.module}
                                    questionsUrl={question.questionsUrl}
                                    answersUrl={question.answersUrl}
                                    questionCount={question.questionCount}
                                />
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="astronomy" className="space-y-4">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold flex items-center gap-2">
                                <Telescope className="h-6 w-6 text-primary" />
                                Astronomy
                            </h2>
                            <p className="text-muted-foreground">
                                Planetary motion and Kepler&apos;s Laws
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                            {questionSets.astronomy.map((question, index) => (
                                <QuestionModuleCard
                                    key={index}
                                    course="Astronomy"
                                    module={question.module}
                                    questionsUrl={question.questionsUrl}
                                    answersUrl={question.answersUrl}
                                    questionCount={question.questionCount}
                                />
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </section>

            {/* CTA Section */}
            <section className="border-t bg-muted/40">
                <div className="container py-16 md:py-24">
                    <div className="mx-auto max-w-3xl text-center space-y-4">
                        <h2 className="text-3xl font-bold tracking-tight">
                            Want more practice?
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Sign up for full access to our courses with additional practice problems
                            and interactive lessons
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
