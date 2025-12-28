import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
    return (
        <section className="relative border-t bg-linear-to-br from-primary/10 via-primary/5 to-background overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-grid-white/5 mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]" />

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
    );
}
