import { Layout } from "@/components/layout/layout";
import ChallengeDatePage from "@/components/app/challenges/challenge-date-page";

export default async function ChallengeDate({ params }: { params: Promise<{ date: string }> }) {
    const { date } = await params;

    return (
        <Layout>
            <ChallengeDatePage date={date} />
        </Layout>
    );
}
