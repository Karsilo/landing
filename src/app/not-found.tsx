import Link from "next/link";
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
    return (
        <Layout>
            <section className="container flex items-center justify-center min-h-[70vh] py-16 md:py-24">
                <div className="mx-auto max-w-2xl text-center space-y-8">
                    {/* 404 Display */}
                    <div className="space-y-4">
                        <h1 className="text-9xl font-bold text-muted-foreground/20">
                            404
                        </h1>
                        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            Page Not Found
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Sorry, we couldn't find the page you're looking for. It might
                            have been moved, deleted, or never existed.
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                        <Button asChild size="lg">
                            <Link href="/">
                                <Home className="h-4 w-4" />
                                Go to Homepage
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                            <Link href="/courses">
                                <Search className="h-4 w-4" />
                                Browse Courses
                            </Link>
                        </Button>
                    </div>

                    {/* Helpful Links */}
                    <div className="pt-8 border-t">
                        <p className="text-sm text-muted-foreground mb-4">
                            Here are some helpful links instead:
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center text-sm">
                            <Link
                                href="/courses"
                                className="text-primary hover:underline"
                            >
                                Courses
                            </Link>
                            <Link
                                href="/questions"
                                className="text-primary hover:underline"
                            >
                                Practice Questions
                            </Link>
                            <Link
                                href="/tools"
                                className="text-primary hover:underline"
                            >
                                Tools
                            </Link>
                            <Link
                                href="/tutoring"
                                className="text-primary hover:underline"
                            >
                                Tutoring
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
