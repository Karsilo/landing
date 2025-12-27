import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PDFButton } from "./pdf-download-button";

interface QuestionModuleCardProps {
    course: string;
    module: string;
    questionsUrl: string;
    answersUrl: string;
    questionCount?: number;
    comingSoon?: boolean;
}

export function QuestionModuleCard({
    course,
    module,
    questionsUrl,
    answersUrl,
    questionCount,
    comingSoon = false,
}: QuestionModuleCardProps) {
    return (
        <Card className="transition-all hover:shadow-lg max-w-md">
            <CardHeader>
                <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1 flex-1">
                        <CardTitle className="text-xl">{module}</CardTitle>
                        <CardDescription>{course}</CardDescription>
                    </div>
                    <Badge variant="secondary">PDF</Badge>
                </div>
            </CardHeader>

            <CardContent>
                <div className="space-y-4">
                    {questionCount && (
                        <p className="text-sm text-muted-foreground">
                            {questionCount} practice questions
                        </p>
                    )}

                    {comingSoon ? (
                        <div className="flex flex-col gap-2 sm:flex-row">
                            <Badge variant="outline" className="justify-center py-2">
                                Coming Soon
                            </Badge>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-2 sm:flex-row">
                            <PDFButton
                                href={questionsUrl}
                                label="Questions"
                                variant="default"
                            />
                            <PDFButton
                                href={answersUrl}
                                label="Answers"
                                variant="outline"
                            />
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
