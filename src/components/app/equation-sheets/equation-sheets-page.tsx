"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

type Subject = {
    id: string;
    name: string;
    pdfPath: string;
    description: string;
};

const subjects: Subject[] = [
    {
        id: "mathematics",
        name: "Mathematics",
        pdfPath: "/pdfs/mathematics/equation-sheet.pdf",
        description: "Essential formulas and equations for calculus, algebra, trigonometry, and more.",
    },
    {
        id: "physics",
        name: "Physics",
        pdfPath: "/pdfs/physics/equation-sheet.pdf",
        description: "Key equations for mechanics, electromagnetism, thermodynamics, and modern physics.",
    },
    {
        id: "astronomy",
        name: "Astronomy",
        pdfPath: "/pdfs/astronomy/equation-sheet.pdf",
        description: "Important formulas for celestial mechanics, astrophysics, and cosmology.",
    },
];

export function EquationSheetsPage() {
    const handleDownload = (pdfPath: string, subjectName: string) => {
        const link = document.createElement("a");
        link.href = pdfPath;
        link.download = `${subjectName.toLowerCase()}-equation-sheet.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            {/* Equation Sheets Section */}
            <section className="container py-16 md:py-24">
                <div className="mx-auto max-w-5xl">
                    <Tabs defaultValue="mathematics" className="space-y-8">
                        <TabsList className="grid w-full grid-cols-3">
                            {subjects.map((subject) => (
                                <TabsTrigger key={subject.id} value={subject.id}>
                                    {subject.name}
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        {subjects.map((subject) => (
                            <TabsContent key={subject.id} value={subject.id}>
                                <Card>
                                    <CardContent className="p-8 space-y-6">
                                        <div className="flex items-start justify-between gap-6">
                                            <div className="space-y-3 flex-1">
                                                <div className="flex items-center gap-3">
                                                    <FileText className="h-8 w-8 text-primary" />
                                                    <h2 className="text-2xl font-bold">{subject.name} Equation Sheet</h2>
                                                </div>
                                                <p className="text-muted-foreground">
                                                    {subject.description}
                                                </p>
                                            </div>
                                            <Button
                                                onClick={() => handleDownload(subject.pdfPath, subject.name)}
                                                size="lg"
                                            >
                                                <Download className="mr-2 h-5 w-5" />
                                                Download PDF
                                            </Button>
                                        </div>

                                        {/* PDF Preview */}
                                        <div className="border rounded-lg overflow-hidden bg-muted/20">
                                            <iframe
                                                src={subject.pdfPath}
                                                className="w-full h-[600px]"
                                                title={`${subject.name} Equation Sheet`}
                                            />
                                        </div>

                                        <div className="flex items-center justify-between pt-4 border-t">
                                            <p className="text-sm text-muted-foreground">
                                                <FileText className="inline h-4 w-4 mr-1" />
                                                PDF format, ready to print
                                            </p>
                                            <Button
                                                onClick={() => handleDownload(subject.pdfPath, subject.name)}
                                                variant="outline"
                                            >
                                                <Download className="mr-2 h-4 w-4" />
                                                Download
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </section>

            {/* Additional Info Section */}
            <section className="border-t bg-muted/40">
                <div className="container py-16 md:py-24">
                    <div className="mx-auto max-w-3xl space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold tracking-tight mb-4">
                                How to Use Equation Sheets
                            </h2>
                            <div className="space-y-4 text-muted-foreground">
                                <p>
                                    These equation sheets contain the most important formulas and equations for each subject, organized by topic.
                                </p>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Download and print for quick reference during study sessions</li>
                                    <li>Review before exams to ensure you know all key formulas</li>
                                    <li>Use as a checklist to verify your understanding of each topic</li>
                                    <li>Keep handy while solving practice problems</li>
                                </ul>
                                <p className="text-sm">
                                    <strong>Note:</strong> Always check with your instructor about which formulas will be provided during exams.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
