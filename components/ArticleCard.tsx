import Link from "next/link";
import { motion } from "framer-motion";

export interface Article {
    slug: string;
    category: string;
    readTime: string;
    title: string;
    excerpt: string;
    date: string;
    coverGradient: string; // CSS gradient string
}

interface ArticleCardProps {
    article: Article;
    index: number;
}

export default function ArticleCard({ article, index }: ArticleCardProps) {
    const formattedNumber = (index + 1).toString().padStart(2, "0");

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            className="group"
        >
            <Link href={`/articles/${article.slug}`} className="block">
                <div className="flex flex-col h-full bg-cream transition-transform duration-200 ease-out hover:-translate-y-1">
                    {/* Cover Image Placeholder */}
                    <div
                        className="relative w-full aspect-video rounded-xl overflow-hidden mb-5"
                        style={{ background: article.coverGradient }}
                    >
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <span className="font-spacemono text-[120px] leading-none text-white/5 font-bold select-none">
                                {formattedNumber}
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col flex-grow">
                        {/* Category & Read Time */}
                        <div className="flex items-center justify-between mb-2">
                            <span className="inline-block px-3 py-1 font-spacemono text-[0.65rem] border border-clay text-clay rounded-full uppercase tracking-wider">
                                {article.category}
                            </span>
                            <span className="font-spacemono text-[0.65rem] text-muted uppercase tracking-wider">
                                {article.readTime}
                            </span>
                        </div>

                        {/* Title & Excerpt */}
                        <h3 className="font-playfair text-2xl text-bark leading-snug mt-2 mb-2 group-hover:text-clay transition-colors">
                            {article.title}
                        </h3>
                        <p className="font-spacemono text-[13px] text-bark/65 leading-relaxed line-clamp-3 mb-6 flex-grow">
                            {article.excerpt}
                        </p>

                        {/* Footer (Date & Read More) */}
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-bark/10">
                            <span className="font-spacemono text-xs text-muted">
                                {article.date}
                            </span>
                            <span className="font-spacemono text-xs text-clay group-hover:underline underline-offset-4">
                                Read More →
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
