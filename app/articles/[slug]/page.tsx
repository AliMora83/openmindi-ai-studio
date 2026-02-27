"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";

// Define the dummy data directly here (or ordinarily from a CMS)
const articlesData = {
    "what-is-agentic-ai": {
        category: "AGENTIC AI",
        readTime: "8 MIN READ",
        title: "What is Agentic AI?",
        date: "FEB 26, 2026",
        coverGradient: "linear-gradient(135deg, #C1622F 0%, #2E1A0E 100%)",
        author: "Ali Mora",
        content: `After analysing hundreds of sites with our AI Roaster, five patterns emerge every time:

01. THE HEADLINE TALKS ABOUT YOU, NOT THEM
Most headlines say "We are a leading provider of..." Nobody cares. 
Your headline should answer one question: what does the visitor get?

02. THE CTA IS GENERIC
"Contact Us" is not a call to action. "Get your free AI audit" is.
Specificity converts. Vagueness doesn't.

03. THERE IS NO SOCIAL PROOF ABOVE THE FOLD
Testimonials, client logos, case study results — these belong at the top, not buried at the bottom.

04. THE PAGE LOADS TOO SLOWLY
Every second of load time costs you 7% of conversions. If your site isn't on Next.js or a modern stack, you're losing clients before they even see your headline.

05. THERE IS NO CLEAR NEXT STEP
What should a visitor do after reading your homepage? If you can't answer that in one sentence, neither can they.

The good news: all five are fixable. We can usually address them all in 3-5 days from $400.

→ Run your site through our free AI Roaster to see your score.`,
    },
    "hire-first-ai-employee": {
        category: "AI & PROCESS",
        readTime: "10 MIN READ",
        title: "Hire Your First AI Employee",
        date: "FEB 2026",
        coverGradient: "linear-gradient(135deg, #D4903A 0%, #C1622F 60%, #1A0F0A 100%)",
        author: "Ali Mora",
        content: `A year ago, a typical project took us 3-4 weeks. Today, the same quality of work takes 5-7 days. Here's what changed:

RESEARCH IS NOW INSTANT
We used to spend days researching a client's market, competitors, and audience. Now Gemini does this in minutes — pulling competitor positioning, common objections, and keyword opportunities before we write a single line of copy.

COPY IS DRAFTED IN THE FIRST SESSION
Claude helps us write benefit-driven headlines, CTAs, and body copy that's already tailored to the client's audience. We edit and refine rather than writing from scratch.

BUILDS ARE FASTER BECAUSE THE THINKING IS DONE FIRST
When research and copy are solid before we open a code editor, the build has no surprises. We know exactly what each section needs to say and do before we write a single component.

WHAT HASN'T CHANGED
Client relationships. Strategic thinking. Design taste. Knowing when something is off and why. AI accelerates the work — it doesn't replace the judgment that makes the work good.

The result: we charge less than agencies, deliver faster than freelancers, and produce work that's better than both.`,
    },
    "r15k-private-ai-build-sa": {
        category: "CASE STUDY",
        readTime: "12 MIN READ",
        title: "R15k Private AI Build SA",
        date: "FEB 2026",
        coverGradient: "linear-gradient(135deg, #2E1A0E 0%, #C1622F 50%, #D4903A 100%)",
        author: "Ali Mora",
        content: `CLIENT: Micassa Suites · Hospitality · Kampala, Uganda
TIMELINE: 5 days
DELIVERABLES: Logo, brand guidelines, website, booking flow

THE BRIEF
Micassa needed to launch before the peak travel season. They had a name, a vision, and a hard deadline. No existing brand assets.

DAY 1 — RESEARCH & STRATEGY
Gemini analysed the Kampala hospitality market, competitor positioning, and the target audience's booking behaviour. Claude synthesised this into a brand positioning statement and messaging hierarchy.

DAY 2 — BRAND IDENTITY
Logo concepts, colour palette, typography system. We presented three directions; the client chose the warm terracotta direction immediately.

DAY 3-4 — WEBSITE BUILD
Next.js · Tailwind · Framer Motion. Five sections: Hero, Rooms, Experiences, Testimonials, Booking CTA. Mobile-first, fast, beautiful.

DAY 5 — REVIEW & LAUNCH
One round of revisions, DNS configuration, SSL, and go-live.

THE RESULT
Micassa launched on time. Their booking inquiry rate in the first month exceeded their original target by 40%.

This is what's possible when research, design, and development happen in parallel — powered by AI, guided by experience.`,
    },
};

export default function ArticlePage({ params }: { params: { slug: string } }) {
    const article = articlesData[params.slug as keyof typeof articlesData];

    if (!article) {
        notFound();
    }

    return (
        <main className="bg-cream min-h-screen">

            <article className="pt-[120px] pb-24 px-6 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {/* Back Link */}
                    <div className="mb-8">
                        <Link
                            href="/articles"
                            className="font-spacemono text-sm text-clay hover:underline underline-offset-4"
                        >
                            ← Back to Articles
                        </Link>
                    </div>

                    {/* Header */}
                    <div className="max-w-3xl mb-12">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="inline-block px-3 py-1 font-spacemono text-xs border border-clay text-clay rounded-full uppercase tracking-wider">
                                {article.category}
                            </span>
                            <span className="font-spacemono text-xs text-muted uppercase tracking-wider">
                                {article.readTime}
                            </span>
                        </div>
                        <h1 className="font-playfair text-[40px] md:text-[52px] text-bark leading-tight mb-6">
                            {article.title}
                        </h1>
                        <div className="font-spacemono text-sm text-bark/60">
                            {article.date} · by {article.author}
                        </div>
                    </div>

                    {/* Cover Gradient */}
                    <div
                        className="w-full h-[300px] md:h-[400px] rounded-2xl mb-16"
                        style={{ background: article.coverGradient }}
                    />

                    {/* Article Body */}
                    <div className="max-w-[680px] mx-auto font-spacemono text-[15px] text-bark leading-[1.8] whitespace-pre-wrap">
                        {article.content}
                    </div>
                </motion.div>
            </article>
        </main>
    );
}
