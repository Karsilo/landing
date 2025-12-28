'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, FileQuestion, Calendar } from 'lucide-react';
import Link from 'next/link';

interface ChallengeDatePageProps {
    date: string;
}

const ChallengeDatePage = ({ date }: ChallengeDatePageProps) => {
    const [hasChallenge, setHasChallenge] = useState<boolean | null>(null);
    const [pdfUrl, setPdfUrl] = useState<string>('');

    useEffect(() => {
        const checkChallengeExists = async () => {
            try {
                const challengeUrl = `/pdfs/challenges/${date}.pdf`;
                const response = await fetch(challengeUrl, { method: 'HEAD' });

                if (response.ok) {
                    setPdfUrl(challengeUrl);
                    setHasChallenge(true);
                } else {
                    setHasChallenge(false);
                }
            } catch (error) {
                console.error('Error checking challenge:', error);
                setHasChallenge(false);
            }
        };

        checkChallengeExists();
    }, [date]);

    const formatDate = (dateStr: string) => {
        if (!dateStr) return 'Invalid date';

        const parts = dateStr.split('-');
        if (parts.length !== 3) return dateStr;

        const [day, month, year] = parts;
        const dateObj = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));

        if (isNaN(dateObj.getTime())) return dateStr;

        return dateObj.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (hasChallenge === null) {
        return (
            <div className="min-h-screen bg-linear-to-b from-background to-secondary/20">
                <div className="container mx-auto px-4 py-16">
                    <div className="flex items-center justify-center min-h-[60vh]">
                        <div className="animate-pulse text-center">
                            <Calendar className="w-16 h-16 mx-auto mb-4 text-primary" />
                            <p className="text-xl text-muted-foreground">Loading challenge...</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (!hasChallenge) {
        return (
            <div className="min-h-screen bg-linear-to-b from-background to-secondary/20">
                <div className="container mx-auto px-4 py-16">
                    <Link
                        href="/challenges"
                        className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Calendar
                    </Link>

                    <div className="max-w-2xl mx-auto text-center py-16">
                        <FileQuestion className="w-24 h-24 mx-auto mb-6 text-muted-foreground" />
                        <h1 className="text-3xl font-bold mb-4">No Challenge Available</h1>
                        <p className="text-lg text-muted-foreground mb-4">
                            There is no challenge for {formatDate(date)}.
                        </p>
                        <p className="text-muted-foreground">
                            Check back later or try another date!
                        </p>
                        <Link
                            href="/challenges"
                            className="inline-block mt-8 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                        >
                            Back to Calendar
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-linear-to-b from-background to-secondary/20">
            <div className="container mx-auto px-4 py-8">
                <Link
                    href="/challenges"
                    className="inline-flex items-center gap-2 text-primary hover:underline mb-6"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Calendar
                </Link>

                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <Calendar className="w-8 h-8 text-primary" />
                        <h1 className="text-3xl md:text-4xl font-bold">
                            Daily Challenge
                        </h1>
                    </div>
                    <p className="text-lg text-muted-foreground">
                        {formatDate(date)}
                    </p>
                </div>

                {/* Challenge PDF */}
                <div className="max-w-5xl mx-auto">
                    <div className="bg-card rounded-xl shadow-lg border border-border overflow-hidden">
                        <div className="bg-primary/10 px-6 py-4 border-b border-border">
                            <h2 className="text-xl font-bold">Challenge (Question & Answer)</h2>
                        </div>
                        <div className="p-4">
                            <div className="w-full bg-muted rounded-lg overflow-hidden" style={{ height: '80vh' }}>
                                <iframe
                                    src={pdfUrl}
                                    className="w-full h-full"
                                    title="Daily Challenge"
                                />
                            </div>
                            <a
                                href={pdfUrl}
                                download
                                className="block mt-4 text-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                            >
                                Download Challenge PDF
                            </a>
                        </div>
                    </div>
                </div>

                {/* Tips Section */}
                <div className="max-w-7xl mx-auto mt-8 bg-primary/5 border border-primary/20 rounded-xl p-6">
                    <h3 className="text-lg font-bold mb-2">Tips</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Try to solve the question on your own before checking the answer</li>
                        <li>Take your time to understand each step of the solution</li>
                        <li>If you get stuck, review similar concepts in your notes</li>
                        <li>Download the PDFs for offline practice</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ChallengeDatePage;
