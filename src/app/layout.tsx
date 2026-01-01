import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fira_Code } from "next/font/google";
import { Providers } from "./providers";
import Script from "next/script";

// Styles
import "@/styles/globals.css";

const plusJakarta = Plus_Jakarta_Sans({
    variable: "--font-sans",
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "600", "700", "800"],
});

const firaCode = Fira_Code({
    variable: "--font-mono",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "Karsilo - Master University Mathematics & Science",
        template: "%s | Karsilo",
    },
    description:
        "Free university-level courses in mathematics, physics, and astronomy. Comprehensive lessons, practice problems, and student tools for STEM students.",
    keywords: [
        "mathematics",
        "physics",
        "astronomy",
        "university courses",
        "STEM education",
        "calculus",
        "linear algebra",
        "quantum mechanics",
        "free courses",
        "practice problems",
        "student tools",
    ],
    authors: [{ name: "Karsilo" }],
    creator: "Karsilo",
    metadataBase: new URL("https://karsilo.com"),
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://karsilo.com",
        siteName: "Karsilo",
        title: "Karsilo - Master University Mathematics & Science",
        description:
            "Free university-level courses in mathematics, physics, and astronomy with practice problems and tools.",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Karsilo - STEM Education Platform",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Karsilo - Master University Mathematics & Science",
        description:
            "Free university-level courses in mathematics, physics, and astronomy with practice problems and tools.",
        images: ["/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${plusJakarta.variable} ${firaCode.variable} font-sans antialiased`}
                suppressHydrationWarning
            >
                <Script id="apollo-tracker" strategy="afterInteractive">
                    {`
                        function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");
                        o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,
                        o.onload=function(){window.trackingFunctions.onLoad({appId:"6956d131bc2b940021598491"})},
                        document.head.appendChild(o)}initApollo();
                    `}
                </Script>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
