import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/course-card";
import { Calculator, Atom, Telescope } from "lucide-react";

export function FeaturedCoursesSection() {
    return (
        <section className="container py-16 md:py-24">
            <div className="space-y-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                    Featured Courses
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                    In-depth university-level courses designed to help you master
                    complex concepts
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <CourseCard
                    title="Mathematics"
                    description="Master differential equations, complex numbers, limits, and advanced mathematical techniques with detailed problem sets and solutions."
                    icon={<Calculator className="h-8 w-8 text-orange-500" />}
                    href="https://mathematics.karsilo.com"
                    modules={[
                        "Ordinary Differential Equations",
                        "De Moivre's Theorem",
                        "Limits & Calculus",
                        "Complex Numbers",
                    ]}
                    questionsHref="/questions?course=mathematics"
                />

                <CourseCard
                    title="Physics"
                    description="Explore circular motion, wave mechanics, oscillations, and optics through rigorous problem-solving and theoretical analysis."
                    icon={<Atom className="h-8 w-8 text-blue-500" />}
                    href="https://physics.karsilo.com"
                    modules={[
                        "Circular Motion",
                        "Waves & Optics",
                        "Oscillations",
                        "Doppler Effect",
                    ]}
                    questionsHref="/questions?course=physics"
                />

                <CourseCard
                    title="Astronomy"
                    description="Study planetary motion, Kepler's Laws, orbital mechanics, and spacecraft trajectories with practical applications."
                    icon={<Telescope className="h-8 w-8 text-purple-500" />}
                    href="https://astronomy.karsilo.com"
                    modules={[
                        "Kepler's Laws",
                        "Planetary Motion",
                        "Orbital Mechanics",
                        "Hohmann Transfers",
                    ]}
                    questionsHref="/questions?course=astronomy"
                />
            </div>

            <div className="mt-12 text-center">
                <Button size="lg" variant="outline" asChild>
                    <Link href="/courses">View All Courses</Link>
                </Button>
            </div>
        </section>
    );
}
