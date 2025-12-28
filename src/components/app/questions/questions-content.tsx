"use client";

import { QuestionModuleCard } from "@/components/question-module-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, Atom, Telescope } from "lucide-react";
import { questionSets } from "./question-sets";

type QuestionsContentProps = {
    activeTab: string;
    onTabChange: (value: string) => void;
};

export function QuestionsContent({ activeTab, onTabChange }: QuestionsContentProps) {
    return (
        <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
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
    );
}
