"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const FloatingWhatsappButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="fixed bottom-52 right-6 z-50">
        <a
          href="/whatsapp"
          target="_blank"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          //   className="whatsapp-float cursor-pointer flex items-center justify-center bg-white shadow-[0_4px_12px_rgba(255,255,255,0.4)] hover:shadow-[0_0_20px_rgba(37,211,102,0.6)] transition-all duration-300"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-[#0a0a0a] border-2 border-[#00aa00] shadow-[0_0_20px_rgba(0,170,0,0.4)] hover:shadow-[0_0_30px_rgba(0,255,0,0.6)] hover:border-[#00ff00] text-[#00ff00] transition-all cursor-pointer group relative overflow-hidden"
          style={{ position: "relative", bottom: "auto", right: "auto" }}
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            width={28}
            height={28}
            className="w-7 h-7"
          />

          {/* Pulse effect */}
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-full bg-[#25D366]"
          />
        </a>
      </div>

      {/* <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.2, x: 50, filter: "blur(10px)" }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="fixed bottom-48 right-24 z-[45] pointer-events-none select-none"
          >
            <div className="relative">
              {/* Massive background text */}
      {/* <span className="text-8xl md:text-[12rem] font-black text-[#25D366]/10 absolute -top-1/2 right-0 -translate-y-1/2 whitespace-nowrap uppercase tracking-tighter italic">
                WHATSAPP
              </span> */}

      {/* Main bold text */}
      {/* <span className="text-6xl md:text-8xl font-black text-[#25D366] drop-shadow-[0_0_20px_rgba(37,211,102,0.8)] tracking-tighter uppercase italic block">
                CHAT
              </span> */}

      {/* Underline effect */}
      {/* <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                className="h-2 bg-[#25D366] shadow-[0_0_10px_rgba(37,211,102,0.8)] mt-[-10px]"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.2, x: 50, filter: "blur(10px)" }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="fixed bottom-52 right-24 z-[45] pointer-events-none select-none"
          >
            <div className="relative">
              {/* Massive background text */}
              <span className="text-8xl md:text-[12rem] font-black text-[#00ff00]/10 absolute -top-1/2 right-0 -translate-y-1/2 whitespace-nowrap uppercase tracking-tighter italic">
                Whatsapp
              </span>

              {/* Main bold text */}
              {/* <span className="text-6xl md:text-8xl font-black text-[#00ff00] terminal-glow tracking-tighter uppercase italic drop-shadow-[0_0_20px_rgba(0,255,0,0.8)] block">
                Chat
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

export default FloatingWhatsappButton;
