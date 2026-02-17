import React from "react";
import Navbar from "@/components/Navbar";
import { getAllPosts } from "@/lib/blog";
import BlogClient from "@/components/BlogClient";
import ScrollTop from "@/components/ScrollTop";
import FloatingBlogButton from "@/components/FloatingBlogButton";
import FloatingWhatsappButton from "@/components/FloatingWhatsappButton";

export const metadata = {
    title: "Blog Archives | Jahirul Islam",
    description: "Explore all technical insights and digital archives.",
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-[#00ff00] selection:bg-[#00ff00] selection:text-[#0a0a0a] overflow-x-hidden matrix-bg">
            {/* CRT Screen Border Effect */}
            <div className="fixed inset-0 pointer-events-none z-[100] border-[8px] border-[#0a0a0a] shadow-[inset_0_0_100px_rgba(0,255,0,0.05)]" />

            <Navbar />

            <div className="max-w-[1024px] mx-auto px-4 pt-32 relative z-10">
                <nav className="mb-12 font-mono text-sm">
                    <span className="text-[#00aa00]">~/home/archives/</span>
                    <span className="text-[#00ff00]">all_blogs</span>
                </nav>

                <BlogClient posts={posts} showAll={true} />
            </div> 

            <FloatingBlogButton />
            <FloatingWhatsappButton />
            <ScrollTop />

            <footer className="py-8 border-t border-[#00aa00] text-center text-[#00aa00] text-sm font-mono max-w-[1024px] mx-auto relative z-10">
                <div className="flex flex-col items-center gap-2">
                    <div className="text-[#00ff00]">
                        ╔══════════════════════════════════════════════════════════════╗
                    </div>
                    <div className="px-4" suppressHydrationWarning>
                        <span className="text-[#00ffff]">[SYS]</span> © {new Date().getFullYear()} • ARCHIVE_MODULE v1.0.0
                    </div>
                    <div className="text-[#00ff00]">
                        ╚══════════════════════════════════════════════════════════════╝
                    </div>
                </div>
            </footer>
        </main>
    );
}
