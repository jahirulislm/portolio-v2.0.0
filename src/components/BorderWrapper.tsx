"use client";

import React from "react";
import { motion } from "framer-motion";

interface BorderWrapperProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  borderRadius?: string;
}

export const BorderWrapper = ({
  children,
  className = "",
  containerClassName = "",
  borderRadius = "0px",
}: BorderWrapperProps) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className={`relative group p-0.5 overflow-hidden ${containerClassName}`}
      style={{ borderRadius }}
    >
      {/* Animated Gradient Background (revealed on hover) */}
      <motion.div
        variants={{
          initial: {
            opacity: 0,
          },
          hover: {
            opacity: 1,
          },
        }}
        className="absolute inset-[-1000%] bg-[conic-gradient(from_0deg,#05c125,#d6d204,#05c125)] z-0"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          opacity: { duration: 0.4 },
          rotate: {
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      />

      {/* Subtle glow effect on hover */}
      <motion.div
        variants={{
          initial: {
            opacity: 0,
            scale: 0.8,
          },
          hover: {
            opacity: 0.15,
            scale: 1,
          },
        }}
        className="absolute inset-0 bg-[#0066ff] blur-xl z-0 pointer-events-none"
        transition={{ duration: 0.5 }}
      />

      {/* Content Container */}
      <div
        className={`relative z-10 bg-terminal-bg h-full transition-all duration-300 group-hover:bg-terminal-bg/90 ${className}`}
        style={{
          borderRadius:
            borderRadius !== "0px" ? `calc(${borderRadius} - 2px)` : "0px",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
};
