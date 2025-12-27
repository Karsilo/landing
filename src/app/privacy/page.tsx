"use client";

import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye, ExternalLink } from "lucide-react";

export default function PrivacyPolicy() {
    const keyPoints = [
        {
            icon: Shield,
            title: "Data Security",
            description: "We protect your personal information with industry-standard security measures."
        },
        {
            icon: Lock,
            title: "Privacy First",
            description: "We collect only what's necessary and never sell your data to third parties."
        },
        {
            icon: Eye,
            title: "Transparency",
            description: "Clear information about what data we collect and how we use it."
        }
    ];

    return (
        <Layout>
            <div className="w-full">
                {/* Hero Section */}
                <section className="w-full py-20 lg:py-32">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                                Legal
                            </div>
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl max-w-3xl">
                                Privacy Policy
                            </h1>
                            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                                Your privacy matters to us. Learn how we collect, use, and protect your personal information.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Key Points Section */}
                <section className="w-full py-16 lg:py-24 bg-muted/40">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid gap-8 md:grid-cols-3 mb-12">
                            {keyPoints.map((point, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-card border transition-all hover:-translate-y-1"
                                >
                                    <div className="p-3 rounded-lg bg-primary/10">
                                        <point.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-semibold">
                                            {point.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {point.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="w-full py-16 lg:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-8 text-center max-w-3xl mx-auto">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                                    Review Our Full Privacy Policy
                                </h2>
                                <p className="text-base md:text-lg text-muted-foreground">
                                    Our complete privacy policy document covers all aspects of data collection, usage, storage, and your rights under GDPR, CCPA, and other data protection regulations.
                                </p>
                            </div>
                            <Button
                                size="lg"
                                className="gap-2"
                                onClick={() => window.open("#", "_blank")}
                            >
                                View Full Privacy Policy
                                <ExternalLink className="h-4 w-4" />
                            </Button>
                            <p className="text-sm text-muted-foreground">
                                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}
