import { BookOpen, FileText, Award } from "lucide-react";

export function StatsSection() {
    return (
        <section className="border-t bg-muted/40">
            <div className="container py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3 text-center">
                    <div className="space-y-2">
                        <div className="flex justify-center">
                            <BookOpen className="h-10 w-10 text-primary" />
                        </div>
                        <h3 className="text-3xl font-bold">3</h3>
                        <p className="text-muted-foreground">Comprehensive Courses</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-center">
                            <FileText className="h-10 w-10 text-secondary" />
                        </div>
                        <h3 className="text-3xl font-bold">190+</h3>
                        <p className="text-muted-foreground">Practice Questions</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-center">
                            <Award className="h-10 w-10 text-accent" />
                        </div>
                        <h3 className="text-3xl font-bold">Free</h3>
                        <p className="text-muted-foreground">Always Free Access</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
