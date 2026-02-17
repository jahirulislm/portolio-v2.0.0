import { getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";
import FloatingBlogButton from "@/components/FloatingBlogButton";
import FloatingWhatsappButton from "@/components/FloatingWhatsappButton";

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-[#00ff00] selection:bg-[#00ff00] selection:text-[#0a0a0a] pb-20">
            <Navbar />

            <div className="pt-32 container px-4 mx-auto max-w-4xl">
                {/* Back link */}
                <Link
                    href="/#blog"
                    className="inline-flex items-center gap-2 text-[#00aa00] hover:text-[#00ff00] transition-colors mb-8 font-mono text-sm group"
                >
                    <span className="transition-transform group-hover:-translate-x-1">←</span>
                    <span>[cd ../blog]</span>
                </Link>

                {/* Terminal Window */}
                <div className="border border-[#00aa00] bg-[#001a00]/30">
                    {/* Terminal Header */}
                    <div className="px-4 py-2 border-b border-[#00aa00] bg-[#001a00] flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                        </div>
                        <span className="text-[#00aa00] text-xs">{slug}.md</span>
                        <div className="text-[#00aa00] text-xs">━━━</div>
                    </div>

                    {/* Content */}
                    <MotionDivWrapper>
                        <div className="p-6 md:p-8">
                            {/* Post Hero Image */}
                            {post.image && (
                                <div className="mb-8 relative h-[300px] md:h-[400px] border border-[#00aa00]/30 overflow-hidden group">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 grayscale hover:grayscale-0 filter sepia-[0.1] hue-rotate-[90deg] hover:hue-rotate-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#001a00] via-transparent to-transparent opacity-60" />
                                    {/* CRT Overlay on Hero */}
                                    <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(rgba(0,255,0,0.03)_0px,rgba(0,255,0,0.03)_1px,transparent_1px,transparent_2px)]" />
                                    <div className="absolute bottom-4 right-4 text-[#00ff00] text-[10px] font-mono bg-[#0a0a0a]/60 px-2 py-1 border border-[#00aa00]/50">
                                        [SOURCE: {new URL(post.image).hostname}]
                                    </div>
                                </div>
                            )}

                            {/* Meta info */}
                            <div className="flex flex-wrap items-center gap-4 mb-6 text-xs">
                                <span className="text-[#ffb000]">
                                    [DATE: {post.date}]
                                </span>
                                <span className="text-[#00aa00]">|</span>
                                <div className="flex gap-2">
                                    {post.tags?.map((tag: string) => (
                                        <span key={tag} className="text-[#00ffff]">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Title */}
                            <h1 className="text-2xl md:text-4xl font-bold mb-8 leading-tight text-[#00ff00] terminal-glow">
                                <span className="text-[#00aa00]">&gt; </span>
                                {post.title}
                            </h1>

                            {/* Divider */}
                            <div className="text-[#00aa00] text-xs mb-8">
                                ════════════════════════════════════════════════════════════
                            </div>

                            {/* Article content with terminal-styled prose */}
                            <article className="prose prose-invert max-w-none 
                                prose-headings:text-[#00ff00] prose-headings:font-mono
                                prose-h2:text-xl prose-h2:border-b prose-h2:border-[#00aa00] prose-h2:pb-2 prose-h2:mb-4
                                prose-h3:text-lg prose-h3:text-[#00ffff]
                                prose-p:text-[#00aa00] prose-p:leading-relaxed
                                prose-a:text-[#00ffff] prose-a:no-underline hover:prose-a:text-[#00ff00]
                                prose-strong:text-[#ffb000]
                                prose-code:text-[#ff00ff] prose-code:bg-[#001a00] prose-code:px-1 prose-code:py-0.5 prose-code:border prose-code:border-[#00aa00] prose-code:rounded-none
                                prose-pre:bg-[#001a00] prose-pre:border prose-pre:border-[#00aa00] prose-pre:rounded-none
                                prose-blockquote:border-l-2 prose-blockquote:border-[#ffb000] prose-blockquote:text-[#ffb000] prose-blockquote:italic
                                prose-ul:text-[#00aa00] prose-ol:text-[#00aa00]
                                prose-li:marker:text-[#00ff00]
                            ">
                                <MDXRemote source={post.content} />
                            </article>

                            {/* End of file */}
                            <div className="mt-12 pt-6 border-t border-[#00aa00]/30 text-[#00aa00] text-xs">
                                <div className="flex justify-between">
                                    <span>[EOF]</span>
                                    <span>~/{slug}.md</span>
                                </div>
                            </div>
                        </div>
                    </MotionDivWrapper>
                </div>

                {/* Navigation */}
                <div className="mt-8 flex justify-center">
                    <Link
                        href="/#blog"
                        className="px-6 py-3 border border-[#00ff00] text-[#00ff00] hover:bg-[#00ff00] hover:text-[#0a0a0a] transition-all font-mono text-sm"
                    >
                        [RETURN_TO_INDEX]
                    </Link>
                </div>
            </div>
            <FloatingBlogButton />
            <FloatingWhatsappButton />
        </main>
    );
}

function MotionDivWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            {children}
        </div>
    )
}
