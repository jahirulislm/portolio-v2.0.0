"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import BracedNavLink from "./BracedNavLink";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  // Check if animation has already played this session
  const [shouldAnimate] = useState(() => {
    const hasAnimated = sessionStorage.getItem("navbarAnimated");
    if (!hasAnimated) {
      sessionStorage.setItem("navbarAnimated", "true");
      return true;
    }
    return false;
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString("en-US", { hour12: true }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "PROJECTS", href: "/#projects" },
    { name: "SKILLS", href: "/#skills" },
    // { name: "BLOGS", href: "/#blog" },
    // { name: "Testimonials", href: "/#socail-profes", shortcut: "F4" },
    { name: "CONTACT", href: "/#contact" },
  ];

  return (
    <motion.nav
      initial={shouldAnimate ? { y: -100, opacity: 0 } : false}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Terminal Header Bar */}
      <div className="bg-[#0a0a0a] border-b border-[#00aa00]">
        <div className="max-w-7xl mx-auto">
          {/* Top status bar */}
          <div className="flex justify-between items-center px-4 py-1 text-[10px] text-[#00aa00] border-b border-[#00aa00]/30">
            <div className="flex items-center gap-4">
              <span>◉ CONNECTED</span>
              <span className="text-[#00ffff]">PID: 1337</span>
            </div>
            <div className="flex items-center gap-4">
              <span>MEM: 64MB</span>
              <span>CPU: 12%</span>
              <span
                className="text-[#00ff00] font-bold"
                suppressHydrationWarning
              >
                {currentTime} <span className="text-[8px]">BD</span>
              </span>
            </div>
          </div>

          {/* Main nav bar */}
          <div className="flex justify-between items-center px-4 py-2">
            {/* Logo/Terminal prompt */}
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-100 transition-opacity"
              onClick={() => setClickedIndex(null)}
            >
              <div className="relative w-8 h-8 md:w-8 md:h-8 z-50">
                <Image
                  src="/newlogo.png"
                  alt="Logo"
                  fill
                  className="object-contain rounded-full"
                  priority
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#00ff00] terminal-glow font-bold text-lg">
                  JI-DS@{" "}
                </span>
                <span className="text-[#00aa00]">:</span>
                <span className="text-[#00ffff]">~</span>
                <span className="text-[#00ff00]">$</span>
                {/* Rotating single letter display in a green box */}
                <span className="ml-1 relative w-6 h-6 inline-flex items-center justify-center rounded-sm shadow-[0_0_8px_rgba(0,255,0,0.4)]">
                  {["J", "A", "H", "I", "R"].map((letter, i) => (
                    <span
                      key={i}
                      className="absolute text-terminal-dim font-black text-sm animate-letter-rotate"
                      style={{
                        animationDelay: `${i * 0.5}s`,
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            {/* <div className="hidden md:flex items-center gap-4"> */}
            <div className="navlinks hidden md:flex items-center gap-2 ">
              {navLinks.map((link, idx) => (
                <BracedNavLink
                  key={link.name}
                  href={link.href}
                  isActive={clickedIndex === idx}
                  onClick={() => setClickedIndex(idx)}
                >
                  {link.name}
                </BracedNavLink>
              ))}

              {/* CTA - Book a call */}
              <div className="animate-pulse">
                <a
                  href="#contact"
                  className="group relative flex items-center justify-center gap-0 hover:gap-3 px-4 py-1 bg-[#06830c77] hover:bg-[#54c53b]  rounded-full transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 sm:w-auto w-full"
                >
                  <span className="text-sm text-white animate-bounce pause hover:text-black tracking-wider whitespace-nowrap">
                    Book a Call
                  </span>
                  <div className="w-8 opacity-0 group-hover:w-8 group-hover:opacity-100 transition-all duration-300 ease-in-out overflow-hidden shrink-0">
                    <Image
                      src="/jahirul_islam.jpg"
                      alt="Profile avatar"
                      width={36}
                      height={36}
                      className="w-8 h-8 rounded-full items-center object-fill border border-white/30"
                      priority
                    />
                  </div>
                </a>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden px-3 py-1 border border-[#00aa00] text-[#00ff00] hover:bg-[#00ff00] hover:text-[#0a0a0a] transition-all text-sm"
            >
              {isOpen ? "[×] CLOSE" : "[≡] MENU"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a] border-b border-[#00aa00] overflow-hidden"
          >
            <div className="max-w-5xl mx-auto px-4 py-4">
              <div className="text-terminal-dim text-xs mb-2">
                SELECT DESTINATION:
              </div>
              {navLinks.map((link, idx) => (
                <BracedNavLink
                  key={link.name}
                  href={link.href}
                  isActive={clickedIndex === idx}
                  onClick={() => {
                    setIsOpen(false);
                    setClickedIndex(idx);
                  }}
                  className="block py-2 px-4 border-l-2 rounded-none mb-1"
                >
                  {link.name}
                </BracedNavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
