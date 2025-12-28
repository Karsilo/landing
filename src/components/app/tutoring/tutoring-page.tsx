"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, GraduationCap, DollarSign } from "lucide-react";

type Tutor = {
    id: string;
    name: string;
    subject: string;
    specializations: string[];
    level: string;
    hourlyRate: number;
    email: string;
    phone?: string;
    bio: string;
    experience: string;
};

const tutors: Tutor[] = [
    {
        id: "1",
        name: "Dr. Sarah Chen",
        subject: "Mathematics",
        specializations: ["Calculus", "Linear Algebra", "Differential Equations"],
        level: "University",
        hourlyRate: 75,
        email: "sarah.chen@karsilo.com",
        phone: "+1 (555) 123-4567",
        bio: "PhD in Mathematics with 10 years of teaching experience at university level.",
        experience: "10+ years",
    },
    {
        id: "2",
        name: "Michael Rodriguez",
        subject: "Mathematics",
        specializations: ["Algebra", "Geometry", "Trigonometry"],
        level: "High School",
        hourlyRate: 45,
        email: "michael.rodriguez@karsilo.com",
        phone: "+1 (555) 234-5678",
        bio: "Experienced high school math teacher specializing in making complex concepts accessible.",
        experience: "8 years",
    },
    {
        id: "3",
        name: "Prof. James Wilson",
        subject: "Mathematics",
        specializations: ["Statistics", "Probability", "Data Analysis"],
        level: "University",
        hourlyRate: 80,
        email: "james.wilson@karsilo.com",
        bio: "Statistics professor with expertise in data science and probability theory.",
        experience: "15+ years",
    },
    {
        id: "4",
        name: "Dr. Emily Thompson",
        subject: "Physics",
        specializations: ["Classical Mechanics", "Electromagnetism", "Thermodynamics"],
        level: "University",
        hourlyRate: 85,
        email: "emily.thompson@karsilo.com",
        phone: "+1 (555) 345-6789",
        bio: "Research physicist with extensive experience in undergraduate and graduate teaching.",
        experience: "12+ years",
    },
    {
        id: "5",
        name: "David Park",
        subject: "Physics",
        specializations: ["AP Physics", "Mechanics", "Electricity & Magnetism"],
        level: "High School",
        hourlyRate: 50,
        email: "david.park@karsilo.com",
        phone: "+1 (555) 456-7890",
        bio: "AP Physics certified teacher with a track record of student success.",
        experience: "6 years",
    },
    {
        id: "6",
        name: "Dr. Amanda Foster",
        subject: "Physics",
        specializations: ["Quantum Mechanics", "Modern Physics", "Particle Physics"],
        level: "University",
        hourlyRate: 90,
        email: "amanda.foster@karsilo.com",
        bio: "Theoretical physicist specializing in quantum mechanics and modern physics.",
        experience: "18+ years",
    },
    {
        id: "7",
        name: "Dr. Robert Martinez",
        subject: "Chemistry",
        specializations: ["Organic Chemistry", "Biochemistry", "Reaction Mechanisms"],
        level: "University",
        hourlyRate: 80,
        email: "robert.martinez@karsilo.com",
        phone: "+1 (555) 567-8901",
        bio: "Organic chemistry expert with a passion for helping students understand complex reactions.",
        experience: "14+ years",
    },
    {
        id: "8",
        name: "Lisa Anderson",
        subject: "Chemistry",
        specializations: ["General Chemistry", "AP Chemistry", "Chemical Bonding"],
        level: "High School",
        hourlyRate: 48,
        email: "lisa.anderson@karsilo.com",
        phone: "+1 (555) 678-9012",
        bio: "Chemistry teacher dedicated to making chemistry engaging and understandable.",
        experience: "7 years",
    },
    {
        id: "9",
        name: "Dr. Kevin Nguyen",
        subject: "Computer Science",
        specializations: ["Data Structures", "Algorithms", "Python Programming"],
        level: "University",
        hourlyRate: 70,
        email: "kevin.nguyen@karsilo.com",
        bio: "Computer science professor with industry experience at major tech companies.",
        experience: "9+ years",
    },
    {
        id: "10",
        name: "Rachel Kim",
        subject: "Computer Science",
        specializations: ["Web Development", "JavaScript", "React"],
        level: "All Levels",
        hourlyRate: 65,
        email: "rachel.kim@karsilo.com",
        phone: "+1 (555) 789-0123",
        bio: "Full-stack developer and educator specializing in modern web technologies.",
        experience: "5 years",
    },
];

function TutorCard({ tutor }: { tutor: Tutor }) {
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
                        <a
                            href={`mailto:${tutor.email}`}
                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <Mail className="h-4 w-4" />
                            {tutor.email}
                        </a>
                        {tutor.phone && (
                            <a
                                href={`tel:${tutor.phone}`}
                                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Phone className="h-4 w-4" />
                                {tutor.phone}
                            </a>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export function TutoringPage() {
    // Group tutors by subject
    const tutorsBySubject = tutors.reduce((acc, tutor) => {
        if (!acc[tutor.subject]) {
            acc[tutor.subject] = [];
        }
        acc[tutor.subject].push(tutor);
        return acc;
    }, {} as Record<string, Tutor[]>);

    const subjects = Object.keys(tutorsBySubject).sort();

    return (
        <>
            {/* Tutors by Subject */}
            <section className="container py-8 md:py-16">
                <div className="space-y-4 mb-8">
                    <h2 className="text-3xl font-bold tracking-tight">Find Your Tutor</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        Browse our qualified tutors by subject area. Each tutor brings
                        expertise and dedication to help you succeed.
                    </p>
                </div>

                <Tabs defaultValue={subjects[0]} className="w-full">
                    <TabsList className="mb-8">
                        {subjects.map((subject) => (
                            <TabsTrigger key={subject} value={subject}>
                                {subject}
                                <Badge variant="secondary" className="ml-2">
                                    {tutorsBySubject[subject].length}
                                </Badge>
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {subjects.map((subject) => (
                        <TabsContent key={subject} value={subject}>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {tutorsBySubject[subject].map((tutor) => (
                                    <TutorCard key={tutor.id} tutor={tutor} />
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </section>

            {/* CTA Section */}
            <section className="border-t bg-muted/40">
                <div className="container py-16 md:py-24">
                    <div className="mx-auto max-w-2xl text-center space-y-6 rounded-lg border bg-card p-12">
                        <h2 className="text-2xl font-bold tracking-tight">
                            Interested in Becoming a Tutor?
                        </h2>
                        <p className="text-muted-foreground">
                            Join our team of expert tutors and help students achieve their
                            academic goals. We're always looking for qualified educators.
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Contact us at tutors@karsilo.com to learn more
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
