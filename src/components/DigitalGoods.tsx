"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Resource {
    title: string;
    description: string;
    image: string;
    link: string;
}

const resources: Resource[] = [
    {
        title: "My Favourite Tech & Gear of 2025",
        description: "Every year, there are a few products that actually stick. From minimal desk setups to everyday carry essentials.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
        link: "#",
    },
    {
        title: "Coding a Mac app without any coding knowledge",
        description: "I have very little code knowledge, some experience in javascript. Here's how I built a native Mac app using AI tools.",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
        link: "#",
    },
    {
        title: "15 Premium EDC Essentials I Actually Use",
        description: "I've done a few \"things I don't regret buying\" type of videos, but these are the true essentials that never leave my bag.",
        image: "https://images.unsplash.com/photo-1585298723682-7115561c51b7?q=80&w=1964&auto=format&fit=crop",
        link: "#",
    },
    {
        title: "The Best Way to Get All My Wallpapers in One Place",
        description: "Over time, I've made a lot of wallpaper packs. Some are free, some are paid, but here's where they all live now.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop",
        link: "#",
    },
    {
        title: "3D Color Waves Wallpaper Pack",
        description: "When I first released the original Color Waves Wallpaper Pack (over 3 years ago), it became an instant favourite.",
        image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop",
        link: "#",
    },
    {
        title: "Why I Always Shoot in ProRAW on iPhone",
        description: "If you've followed me for a while, you already know. ProRAW on iPhone is a game changer for mobile photography.",
        image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?q=80&w=1974&auto=format&fit=crop",
        link: "#",
    },
    {
        title: "iPhone vs $2000 Pro Camera — How Close Are They Really?",
        description: "I've always loved cameras. Ever since I was a kid, I was fascinated by the ability to capture a moment in time.",
        image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=2070&auto=format&fit=crop",
        link: "#",
    },
    {
        title: "How I Edit Photos on iPhone",
        description: "You don't need a big camera or expensive software to make your photos look professional. Here is my mobile workflow.",
        image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop",
        link: "#",
    },
];

const ScrollingCard = ({ resource, index }: { resource: Resource; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
        >
            <div className="relative aspect-[16/11] overflow-hidden rounded-xl bg-[#1a1a1a] mb-5 border border-white/5 group-hover:border-[#00ff00]/30 transition-all duration-500 shadow-lg">
                {/* Scrolling Image Container */}
                <div
                    className="absolute inset-0 w-full h-full bg-top transition-all duration-[4000ms] ease-in-out group-hover:bg-bottom"
                    style={{
                        backgroundImage: `url(${resource.image})`,
                        backgroundSize: '100% auto'
                    }}
                />
                {/* Shine/Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00ff00]/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Border Glow internal */}
                <div className="absolute inset-0 rounded-xl border border-[#00ff00]/0 group-hover:border-[#00ff00]/20 transition-all duration-500 pointer-events-none" />
            </div>

            <Link href={resource.link} className="block space-y-2">
                <h3 className="text-white text-lg font-bold flex items-center justify-between group-hover:text-[#00ff00] transition-colors leading-tight">
                    <span className="flex-1">{resource.title}</span>
                    <ArrowRight className="w-4 h-4 ml-2 flex-shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </h3>
                <p className="text-white/50 text-sm line-clamp-2 leading-relaxed group-hover:text-white/70 transition-colors font-medium">
                    {resource.description}
                </p>
            </Link>
        </motion.div>
    );
};

const DigitalGoods = () => {
    return (
        <section id="resources" className="py-20 relative">
            <div className="w-full">
                {/* Section Header - Matching the terminal aesthetic of the site */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="text-[#00aa00] text-sm mb-2 font-mono">
                        <span className="text-[#00ffff]">user</span>@
                        <span className="text-[#00ff00]">resources</span>:~$ ls -la ./digital_goods
                    </div>
                    <div className="flex items-center gap-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-white terminal-glow uppercase">
                            Digital_Goods
                        </h2>
                        <div className="flex-1 border-t border-dashed border-[#00aa00]" />
                        <span className="text-[#00aa00] bg-terminal-dim text-black text-sm px-2 font-mono">
                            [{resources.length} items]
                        </span>
                    </div>
                </motion.div>

                {/* Resources Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                    {resources.map((resource, index) => (
                        <ScrollingCard key={index} resource={resource} index={index} />
                    ))}
                </div>

                {/* Scroll indicator - Matching site style */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="text-center mt-20 text-[#00aa00] text-xs font-mono"
                >
                    <div className="mb-2">[Next Section]</div>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-[#00ff00]"
                    >
                        ▼
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default DigitalGoods;
