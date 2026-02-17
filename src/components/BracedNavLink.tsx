"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface BracedNavLinkProps {
  href: string;
  children: string;
  isActive: boolean;
  onClick: () => void;
  className?: string;
  bracedClassName?: string;
  textClassName?: string;
}

export const BracedNavLink = ({
  href,
  children,
  isActive,
  onClick,
  className = "",
  bracedClassName = "",
  textClassName = "",
}: BracedNavLinkProps) => {
  const chars = Array.from(children);
  const firstChar = chars[0] || "";
  const rest = chars.slice(0).join("");

  const MotionLink = motion(Link);

  const textVariants = {
    initial: {
      fontSize: "8px",
      letterSpacing: "0.05em",
      opacity: 0.6,
    },
    hover: {
      fontSize: "14px",
      letterSpacing: "0px",
      opacity: 1,
    },
  };

  return (
    <MotionLink
      href={href}
      onClick={onClick}
      initial="initial"
      whileHover="hover"
      animate={isActive ? "hover" : "initial"}
      className={`group relative flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg border transition-all duration-500 ease-out hover:bg-[#00ff00]/10 ${isActive
          ? "bg-[#00ff00] text-[#0a0a0a] border-[#00ff00] shadow-[0_0_20px_rgba(0,255,0,0.5)]"
          : "text-[#00ff00] border-transparent hover:border-[#00ff00]/30 hover:shadow-[0_0_15px_rgba(0,255,0,0.1)]"
        } ${className}`}
    >
      {/* Braced First Letter */}
      <span
        className={`font-mono font-bold transition-all duration-300 ${isActive
            ? "text-[#0a0a0a]"
            : "text-[#00ffff] group-hover:text-[#00ff00] group-hover:scale-110"
          } ${bracedClassName}`}
      >
        [{firstChar}]
      </span>

      {/* Animated Rest of the Text */}
      {rest && (
        <motion.span
          variants={textVariants}
          className={`uppercase font-black leading-none transition-colors duration-300 origin-left flex items-center ${isActive
              ? "text-[#0a0a0a]"
              : "text-[#00ff00]/60 group-hover:text-[#00ff00]"
            } ${textClassName}`}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          {rest}
        </motion.span>
      )}
    </MotionLink>
  );
};

export default BracedNavLink;
