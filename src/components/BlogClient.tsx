"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BorderWrapper } from "./BorderWrapper";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  image: string;
}

const BlogClient = ({
  posts,
  showAll = false,
}: {
  posts: BlogPost[];
  showAll?: boolean;
}) => {
  const displayedPosts = showAll ? posts : posts.slice(0, 3);

  return (
    <section id="blog" className="py-20 relative">
      <div className="w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="text-[#00aa00] text-sm mb-2">
            <span className="text-[#00ffff]">user</span>@
            <span className="text-[#00ff00]">blog</span>:~$ tail -n 10
            ./logs/insights.log
          </div>
          <div className="flex items-center gap-4">
            <h2 className="text-2xl md:text-4xl font-bold text-white bg-[#00aa00] terminal-glow">
              {showAll ? "ALL_ARCHIVES" : "LATEST_INSIGHTS"}
            </h2>

            <div className="flex-1 border-t border-dashed border-[#00aa00]" />
            <span className="text-[#00aa00] bg-terminal-dim text-black text-sm">
              [{displayedPosts.length} posts]
            </span>
          </div>
        </motion.div>

        {/* Blog Posts Grid Container with Scroll Constraints and Glowing Border */}
        <div className="relative border border-[#00aa00]/30 rounded-xl p-4 bg-[#001a00]/10 backdrop-blur-sm shadow-[0_0_20px_rgba(0,170,0,0.1)]">
          {/* Top/Bottom Glow Indicators to highlight scrollability */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#00ff00]/50 to-transparent z-20 shadow-[0_0_10px_#00ff00]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#00ff00]/50 to-transparent z-20 shadow-[0_0_10px_#00ff00]" />

          <div className="max-h-[600px] overflow-y-auto pr-4 custom-scrollbar scroll-smooth">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-4">
              {displayedPosts.map((post, idx) => {
                const spans = [
                  "md:col-span-7",
                  "md:col-span-5",
                  "md:col-span-4",
                  "md:col-span-4",
                  "md:col-span-4",
                  "md:col-span-5",
                  "md:col-span-7",
                ];
                const colSpan = spans[idx % spans.length];

                return (
                  <BorderWrapper
                    key={post.slug}
                    borderRadius="12px"
                    containerClassName={`w-full h-full ${colSpan}`}
                  >
                    <motion.article
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="border border-[#00aa00]/50 bg-transparent group-hover:border-[#00ff00] group-hover:shadow-[0_0_25px_rgba(0,255,0,0.2)] transition-all duration-500 group h-full flex flex-col overflow-hidden relative shadow-lg"
                      style={{ borderRadius: "12px" }}
                    >
                      {/* Blog Thumbnail Background - More Visible */}
                      {post.image ? (
                        <div
                          className="absolute inset-0 z-0 opacity-40 pointer-events-none group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                          style={{
                            backgroundImage: `url(${post.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            filter: "brightness(0.7) saturate(0.8)",
                          }}
                        />
                      ) : (
                        /* Fallback pattern for posts without images */
                        <div
                          className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                          style={{
                            backgroundImage:
                              "radial-gradient(circle at 25% 25%, #00ff00 1px, transparent 1px), radial-gradient(circle at 75% 75%, #00ff00 1px, transparent 1px)",
                            backgroundSize: "20px 20px",
                          }}
                        />
                      )}

                      {/* Dark overlay for text readability */}
                      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/60 to-[#0a0a0a]/40 group-hover:from-[#0a0a0a]/80 group-hover:via-[#0a0a0a]/50 group-hover:to-[#0a0a0a]/30 transition-all duration-500" />

                      {/* Content Wrapper */}
                      <div className="relative z-10 flex flex-col h-full backdrop-blur-[1px]">
                        {/* Post Header */}
                        <div className="px-4 py-2 border-b border-[#00aa00]/50 flex flex-wrap items-center justify-between gap-2 bg-[#0a0a0a]/40 group-hover:border-[#00ff00]/70 transition-colors">
                          <div className="flex items-center gap-4">
                            <span className="text-[#00ffff] text-xs font-bold">
                              [{String(idx + 1).padStart(3, "0")}]
                            </span>
                            <span className="text-[#00ff00] font-bold text-lg terminal-glow">
                              {post.title}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span
                              className="w-2 h-2 rounded-full animate-pulse shadow-[0_0_8px_#ffb000]"
                              style={{ backgroundColor: "#ffb000" }}
                            />
                            <span className="text-[#ffb000] text-xs font-bold tracking-wider">
                              [{post.date}]
                            </span>
                          </div>
                        </div>

                        {/* Post Content */}
                        <div className="p-4 flex-1 flex flex-col">
                          <div className="flex-1">
                            {/* Tags */}
                            <div className="mb-4">
                              <div className="text-[#00aa00] text-[10px] mb-2">
                                // TAGS
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {(post.tags || []).slice(0, 3).map((tag) => (
                                  <span
                                    key={tag}
                                    className="px-2 py-0.5 border border-[#ffb000]/30 text-[#ffb000] text-[10px] font-mono hover:bg-[#ffb000]/10 transition-all shadow-sm"
                                  >
                                    #{tag}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Excerpt */}
                            <div>
                              <div className="text-[#00aa00] text-[10px] mb-1">
                                // EXCERPT
                              </div>
                              <p className="text-[#00ff00]/80 text-sm leading-relaxed group-hover:text-[#00ff00] transition-colors line-clamp-3">
                                {post.excerpt}
                              </p>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex justify-center gap-4 mt-8">
                            <Link
                              href={`/blog/${post.slug}`}
                              className="w-28 py-2 border border-[#00ff00] text-[#00ff00] bg-[#0a0a0a]/50 hover:bg-[#00ff00] hover:text-[#0a0a0a] hover:shadow-[0_0_15px_#00ff00] transition-all text-xs font-bold text-center backdrop-blur-sm"
                            >
                              [READ]
                            </Link>
                          </div>
                        </div>

                        {/* Post Footer */}
                        <div className="px-4 py-2 border-t border-[#00aa00]/30 text-[10px] text-[#00ff00]/70 flex justify-between bg-[#0a0a0a]/30">
                          <span>
                            SIZE: ~{Math.floor(post.excerpt.length / 10) + 2}KB
                          </span>
                          <span>TYPE: markdown</span>
                        </div>
                      </div>
                    </motion.article>
                  </BorderWrapper>
                );
              })}
            </div>
          </div>
        </div>

        {/* {!showAll && (
          <div className="mt-8 flex justify-center">
            <Link
              href="/blog"
              className="px-8 py-3 border border-[#00ff00] text-[#00ff00] hover:bg-[#00ff00] hover:text-[#0a0a0a] transition-all font-mono font-bold tracking-widest text-sm"
            >
              [ READ_MORE_BLOGS ]
            </Link>
          </div>
        )} */}

        {/* Command line footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-[#00aa00] text-sm font-mono"
        >
          <div className="flex items-center gap-2">
            <span className="text-[#00ffff]">$</span>
            <span>{showAll ? "ls -la ./blog/archive" : "cat EOF"}</span>
            <span className="text-[#00aa00]/60">
              -- {showAll ? "All posts loaded" : "End of log stream"} --
            </span>
          </div>
        </motion.div>
       
      </div>
    </section>
  );
};

export default BlogClient;
