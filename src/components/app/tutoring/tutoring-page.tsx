"use client";

import { tutors } from "./tutors-data";
import { TutoringHeader } from "./tutoring-header";
import { TutorsContent } from "./tutors-content";
import { TutoringCTA } from "./tutoring-cta";

export function TutoringPage() {
    // Group tutors by subject
    const tutorsBySubject = tutors.reduce((acc, tutor) => {
        if (!acc[tutor.subject]) {
            acc[tutor.subject] = [];
        }
        acc[tutor.subject].push(tutor);
        return acc;
    }, {} as Record<string, typeof tutors>);

    const subjects = Object.keys(tutorsBySubject).sort();

    return (
        <>
            <section className="container py-8 md:py-16">
                <TutoringHeader />
                <TutorsContent tutorsBySubject={tutorsBySubject} subjects={subjects} />
            </section>
            <TutoringCTA />
        </>
    );
}
