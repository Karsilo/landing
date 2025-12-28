import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calculator, Atom, Telescope, ArrowRight } from "lucide-react";

export function QuestionsSection() {
    return (
        <section className="container py-16 md:py-24">
            <div className="space-y-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                    Practice Makes Perfect
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                    Test your knowledge with curated problem sets and detailed solutions
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-4xl mx-auto">
                <div className="group relative rounded-lg border bg-card p-6 text-center space-y-4 transition-all duration-300 hover:shadow-xl hover:border-primary/50 overflow-hidden">
                    {/* Decorative background gradient */}
                    <div className="absolute inset-0 bg-lienar-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative flex justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-orange-500/10 group-hover:scale-110 transition-transform duration-300">
                            <Calculator className="h-10 w-10 text-orange-500" />
                        </div>
                    </div>
                    <h3 className="relative font-bold text-xl">Mathematics</h3>
                    <p className="relative text-sm text-muted-foreground leading-relaxed">
                        Differential equations, limits, and complex numbers
                    </p>
                    <Button variant="outline" asChild className="relative w-full group/button">
                        <Link href="/questions?course=mathematics">
                            View Problems
                            <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </div>

                <div className="group relative rounded-lg border bg-card p-6 text-center space-y-4 transition-all duration-300 hover:shadow-xl hover:border-primary/50 overflow-hidden">
                    {/* Decorative background gradient */}
                    <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative flex justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 group-hover:scale-110 transition-transform duration-300">
                            <Atom className="h-10 w-10 text-primary" />
                        </div>
                    </div>
                    <h3 className="relative font-bold text-xl">Physics</h3>
                    <p className="relative text-sm text-muted-foreground leading-relaxed">
                        Circular motion, waves, optics, and oscillations
                    </p>
                    <Button variant="outline" asChild className="relative w-full group/button">
                        <Link href="/questions?course=physics">
                            View Problems
                            <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </div>

                <div className="group relative rounded-lg border bg-card p-6 text-center space-y-4 transition-all duration-300 hover:shadow-xl hover:border-primary/50 overflow-hidden">
                    {/* Decorative background gradient */}
                    <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative flex justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-purple-500/10 group-hover:scale-110 transition-transform duration-300">
                            <Telescope className="h-10 w-10 text-purple-500" />
                        </div>
                    </div>
                    <h3 className="relative font-bold text-xl">Astronomy</h3>
                    <p className="relative text-sm text-muted-foreground leading-relaxed">
                        Planetary motion, Kepler&apos;s Laws, and orbital mechanics
                    </p>
                    <Button variant="outline" asChild className="relative w-full group/button">
                        <Link href="/questions?course=astronomy">
                            View Problems
                            <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </div>
            </div>

            <div className="mt-12 text-center">
                <Button size="lg" asChild>
                    <Link href="/questions">Browse All Questions</Link>
                </Button>
            </div>
        </section>
    );
}
