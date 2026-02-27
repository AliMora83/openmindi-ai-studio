"use client";

import { motion } from "framer-motion";
import ArticleCard, { Article } from "@/components/ArticleCard";

const articles: Article[] = [
    {
        slug: 'what-is-agentic-ai',
        title: 'What is Agentic AI?',
        excerpt: 'The plain-English guide for SMB owners — no CS degree required.',
        category: 'AGENTIC AI',
        date: 'Feb 26, 2026',
        readTime: '8 min read',
        coverGradient: "linear-gradient(135deg, #C1622F 0%, #2E1A0E 100%)",
    },
    {
        slug: 'hire-first-ai-employee',
        title: 'Hire Your First AI Employee',
        excerpt: 'Step-by-step: build your first agentic workflow from scratch.',
        category: 'AI & PROCESS',
        date: 'Feb 2026',
        readTime: '10 min read',
        coverGradient: "linear-gradient(135deg, #D4903A 0%, #C1622F 60%, #1A0F0A 100%)",
    },
    {
        slug: 'r15k-private-ai-build-sa',
        title: 'R15k Private AI Build SA',
        excerpt: 'How we built a fully private, local AI setup for under R15,000.',
        category: 'CASE STUDY',
        date: 'Feb 2026',
        readTime: '12 min read',
        coverGradient: "linear-gradient(135deg, #2E1A0E 0%, #C1622F 50%, #D4903A 100%)",
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function ArticlesPage() {
    return (
        <main className="bg-cream min-h-screen">

            {/* Page Header Section */}
            <section className="pt-[120px] pb-[60px] px-6 max-w-7xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="max-w-4xl"
                >
                    {/* Eyebrow */}
                    <motion.span
                        variants={itemVariants}
                        className="block font-spacemono text-clay uppercase tracking-[0.15em] text-sm mb-6"
                    >
                        — ARTICLES & INSIGHTS
                    </motion.span>

                    {/* Main Heading */}
                    <motion.h1
                        variants={itemVariants}
                        className="font-playfair text-bark text-[40px] md:text-[64px] leading-tight mb-6"
                    >
                        Thoughts on design,<br />
                        <em style={{ color: "#C1622F", fontStyle: "italic" }}>
                            AI, and the web.
                        </em>
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        variants={itemVariants}
                        className="font-spacemono text-bark/60 text-base max-w-[520px] leading-relaxed"
                    >
                        Behind-the-scenes thinking on how we build faster, design
                        smarter, and use AI to deliver world-class digital work from South
                        Africa.
                    </motion.p>
                </motion.div>
            </section>

            {/* Articles Grid */}
            <section className="px-6 pb-24 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <ArticleCard key={article.slug} article={article} index={index} />
                    ))}
                </div>
            </section>
        </main>
    );
}
