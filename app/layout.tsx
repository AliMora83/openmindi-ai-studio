import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Space_Mono } from "next/font/google";
import Cursor from "@/components/ui/Cursor";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["700", "900"],
    style: ["normal", "italic"],
    variable: "--font-playfair",
});

const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500"],
    variable: "--font-dm-sans",
});

const spaceMono = Space_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-space-mono",
});

export const metadata: Metadata = {
    title: "OpenMindi Studio | Premium Web Design & Development",
    description:
        "AI-powered web design and React development from South Africa. We build premium, high-converting websites in days, not weeks.",
    keywords: [
        "React developer South Africa",
        "AI web studio",
        "Next.js developer",
        "landing page design",
        "SaaS UI design",
        "Web3 developer",
        "brand identity South Africa",
    ],
    openGraph: {
        title: "OpenMindi Studio | Premium Web Design & Development",
        description: "AI-powered web design and React development from South Africa. We build premium, high-converting websites in days, not weeks.",
        url: "https://openmindi.co.za",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
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
                className={`${playfair.variable} ${dmSans.variable} ${spaceMono.variable} font-dmsans antialiased bg-warm-white text-bark transition-colors duration-300 overflow-x-hidden`}
            >
                <Cursor />
                <Nav />
                {children}
                <Footer />
            </body>
        </html>
    );
}
