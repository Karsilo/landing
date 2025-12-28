import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/course-card";
import { ToolCard } from "@/components/tool-card";
import {
    Calculator,
    Atom,
    Telescope,
    FileText,
    Archive,
    BookOpen,
    Award,
    ArrowRight,
    GraduationCap,
    Users,
    Clock,
} from "lucide-react";

export function HomePage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
                <div className="container relative py-24 md:py-32 lg:py-24 2xl:py-32">
                    <div className="mx-auto max-w-3xl text-center space-y-8">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                            Master University
                            <span className="block text-primary mt-2">
                                Mathematics & Science
                            </span>
                        </h1>
                        <p className="text-xl text-muted-foreground md:text-2xl">
                            Free courses, practice questions, and tools for STEM students
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

            {/* Stats Section */}
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

            {/* Featured Courses Section */}
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
                        icon={<Calculator className="h-8 w-8 text-primary" />}
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
                        icon={<Atom className="h-8 w-8 text-secondary" />}
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
                        icon={<Telescope className="h-8 w-8 text-orange-500" />}
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

            {/* Tools Preview Section */}
            <section className="border-t bg-muted/40">
                <div className="container py-16 md:py-24">
                    <div className="space-y-4 text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                            Student Tools
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Free utilities designed to make studying and research easier
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
                        <ToolCard
                            title="Bibliography Creator"
                            description="Generate properly formatted citations in APA, MLA, Chicago, and Harvard styles instantly."
                            icon={<FileText className="h-6 w-6" />}
                            href="/tools/bibliography-creator"
                        />

                        <ToolCard
                            title="File Compressor"
                            description="Compress images and PDFs to reduce file size while maintaining quality for your assignments."
                            icon={<Archive className="h-6 w-6" />}
                            href="/tools/file-compressor"
                        />

                        <ToolCard
                            title="More Coming Soon"
                            description="We're constantly adding new tools to help you succeed in your studies."
                            icon={<Award className="h-6 w-6" />}
                            href="/tools"
                            comingSoon
                        />
                    </div>

                    <div className="mt-12 text-center">
                        <Button size="lg" asChild>
                            <Link href="/tools">Explore All Tools</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Questions Section */}
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
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="relative flex justify-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 group-hover:scale-110 transition-transform duration-300">
                                <Calculator className="h-10 w-10 text-primary" />
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
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

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
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="relative flex justify-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-orange-500/10 group-hover:scale-110 transition-transform duration-300">
                                <Telescope className="h-10 w-10 text-orange-500" />
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

            {/* Tutoring Section */}
            <section className="border-t bg-muted/40">
                <div className="container py-16 md:py-24">
                    <div className="mx-auto max-w-5xl">
                        <div className="space-y-4 text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                                Need Personalized Help?
                            </h2>
                            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                                Connect with expert tutors for one-on-one guidance tailored to your learning needs
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            <div className="flex flex-col items-center text-center space-y-3">
                                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                                    <GraduationCap className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="font-bold text-lg">Expert Tutors</h3>
                                <p className="text-sm text-muted-foreground">
                                    Qualified educators with years of experience in mathematics, physics, chemistry, and computer science
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center space-y-3">
                                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                                    <Users className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="font-bold text-lg">Personalized Learning</h3>
                                <p className="text-sm text-muted-foreground">
                                    One-on-one sessions customized to your pace, learning style, and academic goals
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center space-y-3">
                                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                                    <Clock className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="font-bold text-lg">Flexible Scheduling</h3>
                                <p className="text-sm text-muted-foreground">
                                    Book sessions that fit your schedule with tutors available for all levels
                                </p>
                            </div>
                        </div>

                        <div className="text-center">
                            <Button size="lg" asChild>
                                <Link href="/tutoring">
                                    Find Your Tutor
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative border-t bg-gradient-to-br from-primary/10 via-primary/5 to-background overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

                <div className="container relative py-20 md:py-32">
                    <div className="mx-auto max-w-3xl text-center space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                                Ready to Start Learning?
                            </h2>
                            <p className="text-xl text-muted-foreground mx-auto max-w-2xl">
                                Join thousands of students mastering STEM subjects with Karsilo
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                            <Button size="lg" className="group/cta text-lg px-8 py-6 h-auto" asChild>
                                <a href="https://app.karsilo.com/sign-up">
                                    Get Started for Free
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover/cta:translate-x-1 transition-transform" />
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto" asChild>
                                <Link href="/questions">Browse Questions</Link>
                            </Button>
                        </div>

                        <p className="text-sm text-muted-foreground pt-4">
                            No credit card required • Free forever • 190+ practice questions
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
