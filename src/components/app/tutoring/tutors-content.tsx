import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";
import { TutorCard } from "./tutor-card";
import { Tutor } from "./tutors-data";

type TutorsContentProps = {
    tutorsBySubject: Record<string, Tutor[]>;
    subjects: string[];
};

export function TutorsContent({ tutorsBySubject, subjects }: TutorsContentProps) {
    if (subjects.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-16 text-center">
                <GraduationCap className="h-16 w-16 text-muted-foreground/50 mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Tutors Currently Available</h3>
                <p className="text-muted-foreground max-w-md">
                    We don&apos;t have any tutors available at the moment.
                    Please check back later or contact us for more information.
                </p>
            </div>
        );
    }

    return (
        <Tabs defaultValue={subjects[0]} className="w-full">
            <TabsList className="mb-8">
                {subjects.map((subject) => (
                    <TabsTrigger key={subject} value={subject}>
                        {subject}
                        <Badge variant="secondary" className="ml-2">
                            {tutorsBySubject[subject].length}
                        </Badge>
                    </TabsTrigger>
                ))}
            </TabsList>

            {subjects.map((subject) => (
                <TabsContent key={subject} value={subject}>
                    {tutorsBySubject[subject].length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-16 text-center">
                            <GraduationCap className="h-16 w-16 text-muted-foreground/50 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">No Tutors Currently Available</h3>
                            <p className="text-muted-foreground max-w-md">
                                We don&apos;t have any tutors available for {subject} at the moment.
                                Please check back later or contact us for more information.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {tutorsBySubject[subject].map((tutor) => (
                                <TutorCard key={tutor.id} tutor={tutor} />
                            ))}
                        </div>
                    )}
                </TabsContent>
            ))}
        </Tabs>
    );
}
