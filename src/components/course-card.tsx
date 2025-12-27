import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface CourseCardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    href: string;
    modules?: string[];
    questionsHref?: string;
}

export function CourseCard({
    title,
    description,
    icon,
    href,
    modules,
    questionsHref,
}: CourseCardProps) {
    return (
        <Card className="group relative flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:border-primary/50 overflow-hidden">
            {/* Decorative background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <CardHeader className="relative space-y-4 pb-4">
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                        {icon && (
                            <div className="flex-shrink-0 p-3 rounded-xl bg-primary/10 group-hover:scale-110 transition-transform duration-300">
                                {icon}
                            </div>
                        )}
                        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
                    </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                    {description}
                </CardDescription>
            </CardHeader>

            {modules && modules.length > 0 && (
                <CardContent className="relative flex-1 pt-0">
                    <div className="space-y-3">
                        {modules.map((module, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-2.5 text-sm group/item"
                            >
                                <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                                <span className="text-foreground/80">{module}</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            )}

            <CardFooter className="relative flex flex-col gap-3 pt-6">
                <Button asChild className="w-full group/button">
                    <a href={href}>
                        View Course
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
                    </a>
                </Button>
                {questionsHref && (
                    <Button variant="outline" asChild className="w-full">
                        <Link href={questionsHref}>Practice Questions</Link>
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
}
