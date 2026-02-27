"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ArticleCard, { Article } from "@/components/ArticleCard";

const latestArticles: Article[] = [
    {
        slug: "why-most-landing-pages-fail",
        category: "CONVERSION",
        readTime: "5 MIN READ",
        title: "Why Most Landing Pages Fail (And What to Do About It)",
        excerpt:
            "We've audited hundreds of websites with our AI Roaster tool. The same five mistakes appear every time — and they're all fixable in under a week.",
        date: "FEB 2026",
        coverGradient: "linear-gradient(135deg, #C1622F 0%, #2E1A0E 100%)",
    },
    {
        slug: "building-with-ai-what-changed",
        category: "AI & PROCESS",
        readTime: "7 MIN READ",
        title: "Building With AI: What's Actually Changed in Our Workflow",
        excerpt:
            "Gemini for research. Claude for strategy and copy. Kimi for long-context work. Here's how we use AI tools to deliver projects 3× faster without cutting corners.",
        date: "JAN 2026",
        coverGradient:
            "linear-gradient(135deg, #D4903A 0%, #C1622F 60%, #1A0F0A 100%)",
    },
];

export default function LatestThinking() {
    return (
        <section className="bg-cream px-6 py-24 border-t border-bark/10">
            <div className="max-w-7xl mx-auto">
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <span className="block font-spacemono text-clay uppercase tracking-[0.15em] text-sm mb-4">
                            — LATEST THINKING
                        </span>
                        <h2 className="font-playfair text-[32px] md:text-[48px] text-bark leading-tight">
                            Recent articles.
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    >
                        <Link
                            href="/articles"
                            className="font-spacemono text-sm text-clay uppercase tracking-wider hover:underline underline-offset-4"
                        >
                            Read all articles →
                        </Link>
                    </motion.div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {latestArticles.map((article, index) => (
                        <ArticleCard key={article.slug} article={article} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
