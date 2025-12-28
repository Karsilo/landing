import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ToolCard } from "@/components/tool-card";
import { FileText, Archive, Award } from "lucide-react";

export function ToolsPreviewSection() {
    return (
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
    );
}
