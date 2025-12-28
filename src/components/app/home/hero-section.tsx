import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-background to-background" />
            <div className="container relative py-24 md:py-32 lg:py-24 2xl:py-32">
                <div className="mx-auto max-w-3xl text-center space-y-8">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        Learn Anything
                        <span className="block text-primary mt-2">
                            Achieve Everything
                        </span>
                    </h1>
                    <p className="text-xl text-muted-foreground md:text-2xl">
                        Free courses, practice questions, and learning tools for every student
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                        <Button size="lg" asChild>
                            <Link href="/courses">
                                Browse Courses
                                <BookOpen className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/tools">Try Tools</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
