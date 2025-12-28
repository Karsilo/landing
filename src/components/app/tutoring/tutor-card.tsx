"use client";

import { useState } from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, GraduationCap, DollarSign, Copy, Check } from "lucide-react";
import { Tutor } from "./tutors-data";

type TutorCardProps = {
    tutor: Tutor;
};

export function TutorCard({ tutor }: TutorCardProps) {
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);

    const copyToClipboard = async (text: string, type: 'email' | 'phone') => {
        try {
            await navigator.clipboard.writeText(text);
            if (type === 'email') {
                setCopiedEmail(true);
                setTimeout(() => setCopiedEmail(false), 2000);
            } else {
                setCopiedPhone(true);
                setTimeout(() => setCopiedPhone(false), 2000);
            }
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <Card>
            <CardHeader>
                <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1 flex-1">
                        <CardTitle className="text-xl">{tutor.name}</CardTitle>
                        <CardDescription>{tutor.bio}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="shrink-0">
                        <GraduationCap className="h-3 w-3" />
                        {tutor.level}
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                {/* Specializations */}
                <div>
                    <h4 className="text-sm font-medium mb-2">Specializations</h4>
                    <div className="flex flex-wrap gap-2">
                        {tutor.specializations.map((spec) => (
                            <Badge key={spec} variant="outline">
                                {spec}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Experience and Rate */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                    <div>
                        <p className="text-sm text-muted-foreground">Experience</p>
                        <p className="text-sm font-medium">{tutor.experience}</p>
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">Hourly Rate</p>
                        <p className="text-sm font-medium flex items-center gap-1">
                            <DollarSign className="h-3 w-3" />
                            {tutor.hourlyRate}/hour
                        </p>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="border-t pt-4 space-y-2">
                    <h4 className="text-sm font-medium">Contact</h4>
                    <div className="space-y-1.5">
                        <div className="flex items-center justify-between group">
                            <a
                                href={`mailto:${tutor.email}`}
                                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Mail className="h-4 w-4" />
                                {tutor.email}
                            </a>
                            <button
                                onClick={() => copyToClipboard(tutor.email, 'email')}
                                className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-muted rounded"
                                title="Copy email"
                            >
                                {copiedEmail ? (
                                    <Check className="h-4 w-4 text-green-600" />
                                ) : (
                                    <Copy className="h-4 w-4" />
                                )}
                            </button>
                        </div>
                        {tutor.phone && (
                            <div className="flex items-center justify-between group">
                                <a
                                    href={`tel:${tutor.phone}`}
                                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    <Phone className="h-4 w-4" />
                                    {tutor.phone}
                                </a>
                                <button
                                    onClick={() => copyToClipboard(tutor.phone!, 'phone')}
                                    className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-muted rounded"
                                    title="Copy phone number"
                                >
                                    {copiedPhone ? (
                                        <Check className="h-4 w-4 text-green-600" />
                                    ) : (
                                        <Copy className="h-4 w-4" />
                                    )}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
