import type { Metadata } from "next";
import { Layout } from "@/components/layout/layout";
import ChallengesPage from "@/components/app/challenges/challenges-page";

export const metadata: Metadata = {
    title: "Challenges",
    description: "Daily STEM challenges and problem-solving exercises. Test your skills with new mathematics, physics, and astronomy problems.",
    openGraph: {
        title: "Challenges | Karsilo",
        description: "Daily STEM challenges and problem-solving exercises. Test your skills with new mathematics, physics, and astronomy problems.",
    },
};

export default function Challenges() {
    return (
        <Layout>
            <ChallengesPage />
        </Layout>
    );
}