import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Clock, ArrowRight } from "lucide-react";

export function TutoringSection() {
    return (
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
    );
}
