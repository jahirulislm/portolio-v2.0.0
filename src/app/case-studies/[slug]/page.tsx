import { getProjectBySlug } from "@/lib/projects";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-[#00ff00] selection:bg-[#00ff00] selection:text-[#0a0a0a] pb-20">
            <Navbar />

            <div className="pt-32 container px-4 mx-auto max-w-4xl">
                {/* Back link */}
                <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 text-[#00aa00] hover:text-[#00ff00] transition-colors mb-8 font-mono text-sm group"
                >
                    <span className="transition-transform group-hover:-translate-x-1">←</span>
                    <span>[cd ../projects]</span>
                </Link>

                {/* Terminal Window */}
                <div className="border border-[#00aa00] bg-[#001a00]/30 shadow-[0_0_30px_rgba(0,170,0,0.1)]">
                    {/* Terminal Header */}
                    <div className="px-4 py-2 border-b border-[#00aa00] bg-[#001a00] flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                        </div>
                        <span className="text-[#00aa00] text-xs">case-study_{slug}.md</span>
                        <div className="text-[#00aa00] text-xs">━━━</div>
                    </div>

                    {/* Content */}
                    <MotionDivWrapper>
                        <div className="p-6 md:p-8">
                            {/* Project Image */}
                            {project.image && (
                                <div className="mb-8 relative h-[300px] md:h-[400px] border border-[#00aa00]/30 overflow-hidden group">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 grayscale hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#001a00] via-transparent to-transparent opacity-60" />
                                    {/* Scanline Effect */}
                                    <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(rgba(0,255,0,0.03)_0px,rgba(0,255,0,0.03)_1px,transparent_1px,transparent_2px)]" />
                                </div>
                            )}

                            {/* Meta info */}
                            <div className="flex flex-wrap items-center gap-4 mb-6 text-xs">
                                <span className="text-[#ffb000] font-mono">
                                    [TYPE: PROJECT_CASE_STUDY]
                                </span>
                                <span className="text-[#00aa00]">|</span>
                                <span className="text-[#00ffff] font-mono">
                                    [RELEASE: {project.date}]
                                </span>
                            </div>

                            {/* Title */}
                            <h1 className="text-2xl md:text-5xl font-bold mb-6 text-[#00ff00] terminal-glow leading-tight">
                                <span className="text-[#00aa00]">&gt; </span>
                                {project.title.toUpperCase()}
                            </h1>

                            {/* Tech Stack Chips */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="px-3 py-1 border border-[#00ffff]/30 text-[#00ffff] text-[10px] font-mono hover:bg-[#00ffff]/10 transition-all"
                                    >
                                        [{t}]
                                    </span>
                                ))}
                            </div>

                            {/* Divider */}
                            <div className="text-[#00aa00] text-xs mb-8 opacity-50">
                                ----------------------------------------------------------------------
                            </div>

                            {/* Project content with terminal-styled prose */}
                            <article className="prose prose-invert max-w-none 
                                prose-headings:text-[#00ff00] prose-headings:font-mono
                                prose-h1:text-3xl prose-h1:mb-6
                                prose-h2:text-xl prose-h2:border-b prose-h2:border-[#00aa00]/50 prose-h2:pb-2 prose-h2:mb-4
                                prose-h3:text-lg prose-h3:text-[#00ffff]
                                prose-p:text-[#00ff00]/80 prose-p:leading-relaxed prose-p:mb-6
                                prose-a:text-[#00ffff] prose-a:no-underline hover:prose-a:text-[#00ff00]
                                prose-strong:text-[#ffb000]
                                prose-code:text-[#ff00ff] prose-code:bg-[#001a00] prose-code:px-1 prose-code:py-0.5
                                prose-pre:bg-[#001a00] prose-pre:border prose-pre:border-[#00aa00]/30
                                prose-blockquote:border-l-2 prose-blockquote:border-[#ffb000] prose-blockquote:text-[#ffb000] prose-blockquote:italic
                                prose-li:text-[#00aa00] prose-li:marker:text-[#00ff00]
                            ">
                                <MDXRemote source={project.content} />
                            </article>

                            {/* Action Links */}
                            <div className="mt-12 flex flex-wrap gap-4">
                                {project.link && project.link !== "#" && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-2 border border-[#00ff00] text-[#0a0a0a] bg-[#00ff00] hover:bg-transparent hover:text-[#00ff00] transition-all font-mono text-sm font-bold"
                                    >
                                        [LIVE_DEMO]
                                    </a>
                                )}
                                {project.github && project.github !== "#" && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-2 border border-[#00aa00] text-[#00aa00] hover:bg-[#00aa00] hover:text-[#0a0a0a] transition-all font-mono text-sm font-bold"
                                    >
                                        [SOURCE_CODE]
                                    </a>
                                )}
                            </div>

                            {/* End of file */}
                            <div className="mt-12 pt-6 border-t border-[#00aa00]/30 text-[#00aa00] text-[10px] font-mono">
                                <div className="flex justify-between">
                                    <span>STATUS: ANALYZED</span>
                                    <span>PATH: ~/case-studies/{slug}.md</span>
                                </div>
                            </div>
                        </div>
                    </MotionDivWrapper>
                </div>

                {/* Navigation Footer */}
                <div className="mt-12 flex justify-between items-center px-2">
                    <Link
                        href="/#projects"
                        className="text-[#00aa00] hover:text-[#00ff00] transition-colors font-mono text-sm"
                    >
                        [&lt;&nbsp;BACK_TO_GRID]
                    </Link>
                    <div className="flex gap-4">
                        <span className="text-[#00aa00]/40 text-xs">v1.2.0</span>
                        <span className="text-[#00ff00] animate-pulse">█</span>
                    </div>
                </div>
            </div>
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
