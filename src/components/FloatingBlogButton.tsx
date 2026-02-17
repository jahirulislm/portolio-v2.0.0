"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { BookText } from "lucide-react";

const FloatingBlogButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="fixed bottom-34 right-6 z-50">
        <Link href="/blog" target="_blank">
          <motion.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center flex-col w-14 h-14 rounded-full bg-[#0a0a0a] border-2 border-[#00aa00] shadow-[0_0_20px_rgba(0,170,0,0.4)] hover:shadow-[0_0_30px_rgba(0,255,0,0.6)] hover:border-[#00ff00] text-[#00ff00] transition-all cursor-pointer group relative overflow-hidden"
          >
            {/* Scanline effect inside button */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,0,0.05)_50%)] bg-[length:100%_4px] pointer-events-none" />
            <BookText className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            {/* Subtle pulse ring */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full border border-[#00ff00]"
            />
            <span className="text-[10px] uppercase font-bold">blog</span>
          </motion.div>
        </Link>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.2, x: 50, filter: "blur(10px)" }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="fixed bottom-34 right-24 z-[45] pointer-events-none select-none"
          >
            <div className="relative">
              {/* Massive background text */}
              <span className="text-8xl md:text-[12rem] font-black text-[#00ff00]/10 absolute -top-1/2 right-0 -translate-y-1/2 whitespace-nowrap uppercase tracking-tighter italic">
                BLOG
              </span>

              {/* Main bold text */}
              {/* <span className="text-6xl md:text-8xl font-black text-[#00ff00] terminal-glow tracking-tighter uppercase italic drop-shadow-[0_0_20px_rgba(0,255,0,0.8)] block">
                BLOG
              </span> */}

              {/* Underline effect */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                className="h-2 bg-[#00ffff] shadow-[0_0_10px_rgba(0,255,255,0.8)] mt-[-10px]"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingBlogButton;
