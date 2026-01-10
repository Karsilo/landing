"use client";

import { useState, useEffect, useRef } from "react";
import { Citation } from "@/types/citation";
import CitationDialog from "./CitationDialog";
import CitationList from "./CitationList";
import { Button } from "@/components/ui/button";
import { Plus, Copy, Check } from "lucide-react";
import { formatCitation } from "@/utils/citation-formatters";
import { events } from "@/lib/analytics";

const STORAGE_KEY = "bibliography-citations";

export function BibliographyCreatorPage() {
    const [citations, setCitations] = useState<Citation[]>(() => {
        // Only runs on client
        if (typeof window === 'undefined') return [];
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            try {
                return JSON.parse(stored);
            } catch (error) {
                console.error("Failed to load citations from storage:", error);
            }
        }
        return [];
    });
    const [editingCitation, setEditingCitation] = useState<Citation | undefined>();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [copiedAll, setCopiedAll] = useState(false);
    const isFirstRender = useRef(true);

    // Save citations to localStorage when they change (but not on first render)
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(citations));
    }, [citations]);

    const handleAddCitation = (citation: Citation) => {
        setCitations((prev) => [...prev, citation]);
    };

    const handleUpdateCitation = (citation: Citation) => {
        setCitations((prev) =>
            prev.map((c) => (c.id === citation.id ? citation : c))
        );
        setEditingCitation(undefined);
    };

    const handleDeleteCitation = (id: string) => {
        setCitations((prev) => prev.filter((c) => c.id !== id));
    };

    const handleEditCitation = (citation: Citation) => {
        setEditingCitation(citation);
        setIsDialogOpen(true);
    };

    const handleDialogClose = (open: boolean) => {
        setIsDialogOpen(open);
        if (!open) {
            setEditingCitation(undefined);
        }
    };

    const handleCopyAll = () => {
        const allCitations = citations
            .map((citation) => {
                const formatted = formatCitation(citation, citation.style);
                return formatted.replace(/<em>/g, "").replace(/<\/em>/g, "");
            })
            .join("\n\n");

        navigator.clipboard.writeText(allCitations);
        setCopiedAll(true);
        setTimeout(() => setCopiedAll(false), 2000);
    };

    return (
        <>
            {/* Tool Interface */}
            <section className="container py-16 md:py-24">
                <div className="mx-auto max-w-5xl space-y-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-xl font-bold tracking-tight">
                                Bibliography Creator
                            </h1>
                            <p className="text-muted-foreground">
                                Create professional citations in multiple formats
                            </p>
                        </div>
                        <div className="flex gap-2">
                            {citations.length > 0 && (
                                <Button onClick={handleCopyAll} size="lg" variant="outline">
                                    {copiedAll ? (
                                        <Check className="mr-2 h-5 w-5 text-green-500" />
                                    ) : (
                                        <Copy className="mr-2 h-5 w-5" />
                                    )}
                                    Copy All
                                </Button>
                            )}
                            <Button onClick={() => {
                                events.buttonClick('Add Citation', 'bibliography_creator');
                                setIsDialogOpen(true);
                            }} size="lg">
                                <Plus className="mr-2 h-5 w-5" />
                                Add Citation
                            </Button>
                        </div>
                    </div>

                    <CitationList
                        citations={citations}
                        onEditCitation={handleEditCitation}
                        onDeleteCitation={handleDeleteCitation}
                    />

                    <CitationDialog
                        open={isDialogOpen}
                        onOpenChange={handleDialogClose}
                        onAddCitation={handleAddCitation}
                        editingCitation={editingCitation}
                        onUpdateCitation={handleUpdateCitation}
                    />
                </div>
            </section>

            {/* Information Section */}
            <section className="border-t bg-muted/40">
                <div className="container py-16 md:py-24">
                    <div className="mx-auto max-w-3xl space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold tracking-tight mb-4">
                                Supported Citation Styles
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 bg-card rounded-lg border">
                                    <h3 className="font-semibold mb-1">APA</h3>
                                    <p className="text-sm text-muted-foreground">
                                        American Psychological Association - Common in social sciences
                                    </p>
                                </div>
                                <div className="p-4 bg-card rounded-lg border">
                                    <h3 className="font-semibold mb-1">MLA</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Modern Language Association - Used in humanities
                                    </p>
                                </div>
                                <div className="p-4 bg-card rounded-lg border">
                                    <h3 className="font-semibold mb-1">Chicago</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Chicago Manual of Style - Popular in history
                                    </p>
                                </div>
                                <div className="p-4 bg-card rounded-lg border">
                                    <h3 className="font-semibold mb-1">IEEE</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Institute of Electrical and Electronics Engineers - Technical fields
                                    </p>
                                </div>
                                <div className="p-4 bg-card rounded-lg border">
                                    <h3 className="font-semibold mb-1">OSCOLA</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Oxford Standard for Citation of Legal Authorities
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
