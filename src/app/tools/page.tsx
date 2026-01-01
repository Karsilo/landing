import type { Metadata } from "next";
import { Layout } from "@/components/layout/layout";
import { ToolCard } from "@/components/tool-card";
import {
    FileText,
    Archive,
    Calculator as CalcIcon,
    Ruler,
    TrendingUp,
    StickyNote,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Tools",
    description: "Free utilities to make studying and research easier. Bibliography creator, file compressor, and more tools for students.",
    openGraph: {
        title: "Tools | Karsilo",
        description: "Free utilities to make studying and research easier. Bibliography creator, file compressor, and more tools for students.",
    },
};

export default function Tools() {
    return (
        <Layout>
            {/* Page Header */}
            <section className="border-b bg-muted/40">
                <div className="container py-16 md:py-24">
                    <div className="mx-auto max-w-3xl text-center space-y-4">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                            Tools
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Free utilities to make studying and research easier
                        </p>
                    </div>
                </div>
            </section>

            {/* Available Tools */}
            <section className="container py-16 md:py-24">
                <div className="space-y-4 mb-12">
                    <h2 className="text-3xl font-bold tracking-tight">Available Tools</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        Practical tools designed to save you time and improve your workflow
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl">
                    <ToolCard
                        title="Bibliography Creator"
                        description="Generate properly formatted citations in APA, MLA, Chicago, and Harvard styles instantly. Perfect for research papers and assignments."
                        icon={<FileText className="h-6 w-6" />}
                        href="/tools/bibliography-creator"
                    />

                    <ToolCard
                        title="File Compressor"
                        description="Compress images and PDFs to reduce file size while maintaining quality. No uploads required - everything happens in your browser."
                        icon={<Archive className="h-6 w-6" />}
                        href="/tools/file-compressor"
                    />
                </div>
            </section>

            {/* Coming Soon Tools */}
            <section className="border-t bg-muted/40">
                <div className="container py-16 md:py-24">
                    <div className="space-y-4 mb-12">
                        <h2 className="text-3xl font-bold tracking-tight">Coming Soon</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl">
                            More tools are in development. We're constantly adding new features to help you succeed.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl">
                        <ToolCard
                            title="Equation Solver"
                            description="Step-by-step solutions for algebraic equations, calculus problems, and differential equations."
                            icon={<CalcIcon className="h-6 w-6" />}
                            href="/tools/equation-solver"
                            comingSoon
                        />

                        <ToolCard
                            title="Unit Converter"
                            description="Convert between metric, imperial, and scientific units for physics and chemistry calculations."
                            icon={<Ruler className="h-6 w-6" />}
                            href="/tools/unit-converter"
                            comingSoon
                        />

                        <ToolCard
                            title="Graph Plotter"
                            description="Visualize mathematical functions and data sets with an interactive graphing calculator."
                            icon={<TrendingUp className="h-6 w-6" />}
                            href="/tools/graph-plotter"
                            comingSoon
                        />

                        <ToolCard
                            title="Note Organizer"
                            description="Organize and structure your study notes with tags, categories, and search functionality."
                            icon={<StickyNote className="h-6 w-6" />}
                            href="/tools/note-organizer"
                            comingSoon
                        />
                    </div>
                </div>
            </section>

            {/* Suggestion CTA */}
            <section className="container py-16 md:py-24">
                <div className="mx-auto max-w-2xl text-center space-y-6 rounded-lg border bg-muted/40 p-12">
                    <h2 className="text-2xl font-bold tracking-tight">Have a Tool Suggestion?</h2>
                    <p className="text-muted-foreground">
                        We'd love to hear your ideas for new tools that would help with your studies.
                        Let us know what you need!
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Feature coming soon - check back later to submit suggestions
                    </p>
                </div>
            </section>
        </Layout>
    );
}
