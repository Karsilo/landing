import { HeroSection } from "./hero-section";
import { StatsSection } from "./stats-section";
import { FeaturedCoursesSection } from "./featured-courses-section";
import { ToolsPreviewSection } from "./tools-preview-section";
import { QuestionsSection } from "./questions-section";
import { TutoringSection } from "./tutoring-section";
import { CTASection } from "./cta-section";

export function HomePage() {
    return (
        <>
            <HeroSection />
            <StatsSection />
            <FeaturedCoursesSection />
            <ToolsPreviewSection />
            <QuestionsSection />
            <TutoringSection />
            <CTASection />
        </>
    );
}
