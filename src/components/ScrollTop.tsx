"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;

      setScrollPercent(Math.round(scrolled));
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsHovered(false);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-1 p-3 border border-[#00aa00] bg-[#0a0a0a] hover:border-[#00ff00] hover:bg-[#00ff00]/10 transition-all group"
          >
            {/* Arrow */}
            <span className="text-[#00ff00] text-lg group-hover:animate-bounce">
              ▲
            </span>

            {/* Scroll percentage */}
            <span className="text-[#00aa00] text-[10px] font-mono group-hover:text-[#00ff00]">
              {scrollPercent}%
            </span>

            {/* Label */}
            <span className="text-[#00aa00] text-[8px] uppercase tracking-wider group-hover:text-[#00ff00]">
              TOP
            </span>

            {/* Progress bar */}
            <div className="w-8 h-1 border border-[#00aa00] bg-[#001a00] overflow-hidden">
              <div
                className="h-full bg-[#00ff00] transition-all"
                style={{ width: `${scrollPercent}%` }}
              />
            </div>
          </motion.button>

          // <div className="relative group">
          //   {/* Shadow */}
          //   <div className="absolute inset-0 bg-black rounded-full transform translate-y-2 opacity-60 blur-sm" />

          //   {/* Scan lines */}
          //   <div className="absolute inset-0 rounded-full overflow-hidden">
          //     <div className="absolute inset-0 bg-black" />
          //     <div className="absolute inset-0">
          //       {[
          //         "0%",
          //         "12.5%",
          //         "25%",
          //         "37.5%",
          //         "50%",
          //         "62.5%",
          //         "75%",
          //         "87.5%",
          //       ].map((top, i) => (
          //         <div
          //           key={i}
          //           className="absolute h-0.5 bg-green-500 animate-pulse"
          //           style={{
          //             top,
          //             left: "10%",
          //             right: "10%",
          //             animationDelay: `${i * 0.1}s`,
          //           }}
          //         />
          //       ))}
          //     </div>
          //   </div>

          //   {/* Outer glow */}
          //   <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-green-500/40 to-cyan-500/40 blur opacity-70 group-hover:opacity-100 group-hover:animate-pulse" />

          //   {/* Inner glow */}
          //   <div className="absolute inset-1 rounded-full bg-gradient-to-br from-green-900/20 to-black/40" />

          //   {/* Main body */}
          //   <div className="relative bg-gradient-to-br from-gray-100 via-green-500 to-gray-700 p-0.5 rounded-full shadow-2xl border border-green-500/30 group-hover:border-green-400/50 transition-all duration-300 group-hover:scale-110">
          //     {/* Binary overlay */}
          //     <div className="absolute inset-0 rounded-full overflow-hidden opacity-20">
          //       <div className="absolute inset-0 flex flex-col items-center justify-center">
          //         {[
          //           "101010",
          //           "010101",
          //           "010101",
          //           "101010",
          //           "010101",
          //           "101010",
          //         ].map((row, i) => (
          //           <div
          //             key={i}
          //             className="text-xs text-green-400 font-mono tracking-widest"
          //           >
          //             {row}
          //           </div>
          //         ))}
          //       </div>
          //     </div>

          //     {/* Icon container */}
          //     <div className="relative">
          //       <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full blur-md opacity-30 group-hover:opacity-50" />

          //       <div className="relative bg-gradient-to-br from-gray-900 to-black p-2 rounded-full border border-green-500/40 shadow-inner">
          //         <svg
          //           xmlns="http://www.w3.org/2000/svg"
          //           viewBox="0 0 24 24"
          //           fill="none"
          //           stroke="currentColor"
          //           strokeWidth="2"
          //           strokeLinecap="round"
          //           strokeLinejoin="round"
          //           className="w-6 h-6 text-cyan-400 drop-shadow-[0_0_8px_rgba(0,255,255,0.7)]"
          //         >
          //           <path d="m18 15-6-6-6 6" />
          //         </svg>
          //       </div>
          //     </div>

          //     {/* Ping ring */}
          //     <div className="absolute inset-0 rounded-full border-2 border-green-500/20 animate-ping opacity-0 group-hover:opacity-30" />
          //   </div>

          //   {/* Right tooltip placeholder */}
          //   <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          //     <div className="relative" />
          //   </div>
          // </div>
          // <motion.button>
          //   <div className="relative">
          //     <div className="absolute inset-0 bg-black rounded-full transform translate-y-2 opacity-60 blur-sm"></div>
          //     <div className="absolute inset-0 rounded-full overflow-hidden">
          //       <div className="absolute inset-0 bg-black "></div>
          //       <div className="absolute inset-0">
          //         <div
          //           className="absolute h-0.5 bg-green-500 animate-pulse"
          //           style={{
          //             top: "0%",
          //             left: "10%",
          //             right: "10%",
          //             animationDelay: "0s",
          //           }}
          //         ></div>
          //         <div
          //           className="absolute h-0.5 bg-green-500 animate-pulse"
          //           style={{
          //             top: "12.5%",
          //             left: "10%",
          //             right: "10%",
          //             animationDelay: "0.1s",
          //           }}
          //         ></div>
          //         <div
          //           className="absolute h-0.5 bg-green-500 animate-pulse"
          //           style={{
          //             top: "25%",
          //             left: "10%",
          //             right: "10%",
          //             animationDelay: "0.2s",
          //           }}
          //         ></div>
          //         <div
          //           className="absolute h-0.5 bg-green-500 animate-pulse"
          //           style={{
          //             top: "37.5%",
          //             left: "10%",
          //             right: "10%",
          //             animationDelay: "0.3s",
          //           }}
          //         ></div>
          //         <div
          //           className="absolute h-0.5 bg-green-500 animate-pulse"
          //           style={{
          //             top: "50%",
          //             left: "10%",
          //             right: "10%",
          //             animationDelay: "0.4s",
          //           }}
          //         ></div>
          //         <div
          //           className="absolute h-0.5 bg-green-500 animate-pulse"
          //           style={{
          //             top: "62.5%",
          //             left: "10%",
          //             right: "10%",
          //             animationDelay: "0.5s",
          //           }}
          //         ></div>
          //         <div
          //           className="absolute h-0.5 bg-green-500 animate-pulse"
          //           style={{
          //             top: "75%",
          //             left: "10%",
          //             right: "10%",
          //             animationDelay: "0.6s",
          //           }}
          //         ></div>
          //         <div
          //           className="absolute h-0.5 bg-green-500 animate-pulse"
          //           style={{
          //             top: "87.5%",
          //             left: "10%",
          //             right: "10%",
          //             animationDelay: "0.7s",
          //           }}
          //         ></div>
          //       </div>
          //     </div>
          //     <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-green-500/40 to-cyan-500/40 blur opacity-70 group-hover:opacity-100 group-hover:animate-pulse"></div>
          //     <div className="absolute inset-1 rounded-full bg-gradient-to-br from-green-900/20 to-black/40"></div>
          //     <div className="relative bg-gradient-to-br from-gray-100 via-green-500  to-gray-700  p-0.5 rounded-full shadow-2xl border border-green-500/30 group-hover:border-green-400/50 transition-all duration-300 group-hover:scale-110">
          //       <div className="absolute inset-0 rounded-full overflow-hidden opacity-20">
          //         <div className="absolute inset-0 flex flex-col items-center justify-center">
          //           <div className="text-xs text-green-400 font-mono tracking-widest">
          //             101010
          //           </div>
          //           <div className="text-xs text-green-400 font-mono tracking-widest">
          //             010101
          //           </div>
          //           <div className="text-xs text-green-400 font-mono tracking-widest">
          //             010101
          //           </div>
          //           <div className="text-xs text-green-400 font-mono tracking-widest">
          //             101010
          //           </div>
          //           <div className="text-xs text-green-400 font-mono tracking-widest">
          //             010101
          //           </div>
          //           <div className="text-xs text-green-400 font-mono tracking-widest">
          //             101010
          //           </div>
          //         </div>
          //       </div>
          //       <div className="relative">
          //         <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full blur-md opacity-30 group-hover:opacity-50"></div>
          //         <div className="relative bg-gradient-to-br from-gray-900 to-black p-2 rounded-full border border-green-500/40 shadow-inner">
          //           <svg
          //             xmlns="http://www.w3.org/2000/svg"
          //             width="24"
          //             height="24"
          //             viewBox="0 0 24 24"
          //             fill="none"
          //             stroke="currentColor"
          //             strokeWidth="2"
          //             strokeLinecap="round"
          //             strokeLinejoin="round"
          //             className="lucide lucide-chevron-up w-6 h-6 text-cyan-400 drop-shadow-[0_0_8px_rgba(0,255,255,0.7)]"
          //           >
          //             <path d="m18 15-6-6-6 6"></path>
          //           </svg>
          //         </div>
          //       </div>
          //       <div className="absolute inset-0 rounded-full border-2 border-green-500/20 animate-ping opacity-0 group-hover:opacity-30"></div>
          //     </div>
          //     <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          //       <div className="relative"></div>
          //     </div>
          //   </div>
          // </motion.button>
        )}
      </AnimatePresence>

      {/* <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.2, x: 50, filter: "blur(10px)" }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="fixed bottom-16 right-24 z-[45] pointer-events-none select-none"
          >
            <div className="relative">
              {/* Main bold text */}
      {/* <span className="text-2xl md:text-4xl font-black text-[#00ff00b9] tracking-tighter uppercase italic drop-shadow-[0_0_20px_rgba(0,255,0,0.8)] block">
                Scroll Top
              </span> */}

      {/* Underline effect */}
      {/* <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                className="h-0.5 bg-[#00ffff] shadow-[0_0_10px_rgba(0,255,255,0.8)] mt-[-10px] -z-10"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </>
  );
};

export default ScrollTop;
