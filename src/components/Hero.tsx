"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { BorderWrapper } from "./BorderWrapper";
import { Mounted } from "./Mounted";
import { TerminalDemo } from "./Terminal";
import { MorphingText } from "@/components/ui/morphing-text";
import Image from "next/image";
import { SocialIcon } from "./SocialProfiles";
import { LiaLinkedin, LiaYoutube } from "react-icons/lia";
import { SiGithub } from "react-icons/si";
import { X } from "lucide-react";

const Hero = () => {
  const fullText = "Full-Stack Developer";
  const descriptionLines = [
    // "Full-Stack Developer",
    // "Crafting futuristic web and mobile experiences",
    // "with Next.js, Django, and Golang.",
    // "Bridging complex backend systems with stunning UIs.",
    "Simple, direct, instantly clear.",
    "Action-focused, conversion-oriented.",
    "Digital products that convert.",
    "Build. Launch. Convert.",
    "Websites that sell.",
    "Apps that turn clicks into sales.",
    "From code to customers — I make it happen.",
    "Web and mobile solutions that convert traffic.",
    "Websites and apps that grow your customer base.",
  ];

  const [typedDescription, setTypedDescription] = useState<string[]>([
    "",
    "",
    "",
    "",
  ]);

  // function openWhatsApp() {
  //   const parts = [
  //     "8",
  //     "8",
  //     "0",
  //     "1",
  //     "7",
  //     "1",
  //     "2",
  //     "3",
  //     "4",
  //     "5",
  //     "6",
  //     "7",
  //     "8",
  //   ];
  //   const number = parts.join("");
  //   const text = encodeURIComponent("Hello, I need help");
  //   window.open(`https://wa.me/${number}?text=${text}`, "_blank");
  // }
  const [isAllDone, setIsAllDone] = useState(false);

  // CRT Flicker effect states
  const [isFlickering, setIsFlickering] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);
  const [glitchOffset, setGlitchOffset] = useState({ x: 0, y: 0 });
  const [colorShift, setColorShift] = useState(0);
  const [welcomeDone, setWelcomeDone] = useState(false);
  const [welcomeText, setWelcomeText] = useState("");
  const fullWelcome = "WELCOME TO MY DIGITAL WORKSPACE 😀🙋";

  // Glitch characters for text corruption effect
  const glitchChars = useMemo(
    () => [
      "█",
      "▓",
      "▒",
      "░",
      "▀",
      "▄",
      "■",
      "□",
      "▪",
      "▫",
      "●",
      "○",
      "◊",
      "◆",
    ],
    [],
  );

  // CRT Flicker Animation Effect - More frequent and visible
  useEffect(() => {
    // Random flicker effect - happens more often
    const flickerInterval = setInterval(
      () => {
        if (Math.random() > 0.3) {
          // 70% chance to flicker
          setIsFlickering(true);
          setTimeout(() => setIsFlickering(false), 80 + Math.random() * 150);
        }
      },
      800 + Math.random() * 1500,
    ); // More frequent: every 0.8-2.3 seconds

    // Random glitch effect - more dramatic
    const glitchInterval = setInterval(
      () => {
        if (Math.random() > 0.4) {
          // 60% chance to glitch
          setIsGlitching(true);
          setGlitchOffset({
            x: (Math.random() - 0.5) * 12, // More dramatic offset
            y: (Math.random() - 0.5) * 8,
          });
          setColorShift(Math.random() * 20 - 10); // More color shift

          setTimeout(
            () => {
              setIsGlitching(false);
              setGlitchOffset({ x: 0, y: 0 });
              setColorShift(0);
            },
            100 + Math.random() * 200,
          );
        }
      },
      1000 + Math.random() * 1500,
    ); // More frequent: every 1-2.5 seconds

    return () => {
      clearInterval(flickerInterval);
      clearInterval(glitchInterval);
    };
  }, []);

  // Description typing effect loop
  useEffect(() => {
    if (isAllDone) {
      const timeout = setTimeout(() => {
        setTypedDescription(["", "", "", ""]);
        setIsAllDone(false);
      }, 1000); // Wait 1 second before restarting (Reduced restart time)
      return () => clearTimeout(timeout);
    }

    let lineIdx = 0;
    let charIdx = 0;

    const typeDesc = setInterval(() => {
      if (lineIdx < descriptionLines.length) {
        const currentLine = descriptionLines[lineIdx];
        if (charIdx < currentLine.length) {
          setTypedDescription((prev) => {
            const newDesc = [...prev];
            newDesc[lineIdx] = currentLine.slice(0, charIdx + 1);
            return newDesc;
          });
          charIdx++;
        } else {
          lineIdx++;
          charIdx = 0;
        }
      } else {
        clearInterval(typeDesc);
        setIsAllDone(true);
      }
    }, 85); // Adjusted speed to be less "too fast" but still under 90ms

    return () => clearInterval(typeDesc);
  }, [isAllDone]);

  // Welcome message typing effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullWelcome.length) {
        setWelcomeText(fullWelcome.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setWelcomeDone(true);
        }, 1500); // Show ASCII art after 1 second
      }
    }, 200);
    return () => clearInterval(interval);
  }, []);

  //     const asciiArt = `
  //        ██╗ █████╗ ██╗  ██╗██╗██████╗ ██╗   ██╗██╗         ██╗███████╗██╗      █████╗ ███╗   ███╗
  //        ██║██╔══██╗██║  ██║██║██╔══██╗██║   ██║██║         ██║██╔════╝██║     ██╔══██╗████╗ ████║
  //        ██║███████║███████║██║██████╔╝██║   ██║██║         ██║███████╗██║     ███████║██╔████╔██║
  //   ██   ██║██╔══██║██╔══██║██║██╔══██╗██║   ██║██║         ██║╚════██║██║     ██╔══██║██║╚██╔╝██║
  //   ╚█████╔╝██║  ██║██║  ██║██║██║  ██║╚██████╔╝███████╗    ██║███████║███████╗██║  ██║██║ ╚═╝ ██║
  //    ╚════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝    ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝
  //     `;

  const asciiArt = `██╗ █████╗ ██╗  ██╗██╗██████╗ ██╗   ██╗██╗         ██╗███████╗██╗      █████╗ ███╗   ███╗
      ██║██╔══██╗██║  ██║██║██╔══██╗██║   ██║██║         ██║██╔════╝██║     ██╔══██╗████╗ ████║
      ██║███████║███████║██║██████╔╝██║   ██║██║         ██║███████╗██║     ███████║██╔████╔██║
██╗   ██║██╔══██║██╔══██║██║██╔══██╗██║   ██║██║         ██║╚════██║██║     ██╔══██║██║╚██╔╝██║
╚██████╔╝██║  ██║██║  ██║██║██║  ██║╚██████╔╝███████╗    ██║███████║███████╗██║  ██║██║ ╚═╝ ██║
 ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝    ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝`;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden"
    >
      <Mounted>
        <div className="w-full relative z-10">
          {/* ASCII Art Header with CRT Effects */}
          <div className="relative inline-block w-full">
            {!welcomeDone ? (
              <div className="flex flex-col items-center justify-center min-h-[100px] mb-8">
                <div className="text-[#00ff00] font-mono text-lg flex items-center gap-2">
                  <span className="opacity-70">$</span>
                  <span className="font-extrabold text-3xl">{welcomeText}</span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="w-2 h-5 bg-[#00ff00]"
                  />
                </div>
              </div>
            ) : (
              <>
                {/* Color separation layers for glitch effect - MORE VISIBLE */}
                {isGlitching && (
                  <>
                    {/* Red channel offset */}
                    <motion.pre
                      className="absolute inset-0 text-red-500 text-[8px] sm:text-[10px] md:text-xs whitespace-pre text-center opacity-70 pointer-events-none z-10"
                      style={{
                        transform: `translate(${glitchOffset.x + 4}px, ${
                          glitchOffset.y
                        }px)`,
                      }}
                    >
                      {asciiArt}
                    </motion.pre>
                    {/* Blue channel offset */}
                    <motion.pre
                      className="absolute inset-0 text-blue-500 text-[8px] sm:text-[10px] md:text-xs whitespace-pre text-center opacity-70 pointer-events-none z-10"
                      style={{
                        transform: `translate(${glitchOffset.x - 4}px, ${
                          glitchOffset.y
                        }px)`,
                      }}
                    >
                      {asciiArt}
                    </motion.pre>
                    {/* Cyan channel offset */}
                    <motion.pre
                      className="absolute inset-0 text-cyan-400 text-[8px] sm:text-[10px] md:text-xs whitespace-pre text-center opacity-40 pointer-events-none z-10"
                      style={{
                        transform: `translate(${-glitchOffset.x}px, ${
                          glitchOffset.y + 2
                        }px)`,
                      }}
                    >
                      {asciiArt}
                    </motion.pre>
                  </>
                )}

                {/* Main ASCII Art */}
                <motion.pre
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: isFlickering ? [1, 0.2, 1, 0.4, 1, 0.1, 1] : 1,
                    x: glitchOffset.x,
                    y: glitchOffset.y,
                    scale: isGlitching ? [1, 1.02, 0.98, 1] : 1,
                  }}
                  whileHover={{ scale: 1.08 }}
                  transition={{
                    duration: isFlickering ? 0.1 : 0.5,
                    x: { duration: 0.03 },
                    y: { duration: 0.03 },
                    scale: { duration: 0.08 },
                  }}
                  className="relative z-10 text-[#00ff00] text-[8px] sm:text-[10px] md:text-xs mb-8 whitespace-pre text-center"
                  style={{
                    textShadow: isGlitching
                      ? `0 0 20px #00ff00, 0 0 40px #00ff00, 0 0 60px #00ff00, ${
                          glitchOffset.x
                        }px 0 #ff0000, ${-glitchOffset.x}px 0 #0000ff`
                      : "0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00",
                    filter: isGlitching
                      ? `brightness(${
                          1.5 + colorShift * 0.05
                        }) contrast(${1.3}) hue-rotate(${colorShift * 8}deg)`
                      : isFlickering
                        ? "brightness(1.2)"
                        : "brightness(1)",
                  }}
                >
                  {asciiArt}
                </motion.pre>
              </>
            )}
          </div>

          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="border border-[#00aa00] bg-[#0a0a0a]/80 max-w-3xl mx-auto"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-[#00aa00] bg-[#001a00]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]" />
              </div>
              <span className="text-[#00aa00] text-xs">bash - 80x24</span>
              <div className="text-[#00aa00] text-xs">⬚</div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm space-y-4">
              {/* Welcome message */}
              <div className="text-[#00aa00] flex justify-between">
                <div>
                  <span className="text-[#00ffff]">system</span>@
                  <span className="text-[#00ff00]">portfolio</span>:~$ cat
                  welcome.txt
                </div>

                <div className="flex justify-center animate-pulse">
                  <a
                    href="https://linktr.ee/jahirulislamd"
                    target="_blank"
                    className="group relative flex items-center justify-center gap-0 hover:gap-3 px-6 py-2 bg-[#06830c77] hover:bg-[#54c53b]  rounded-full transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 sm:w-auto w-full"
                  >
                    <div className="w-0 opacity-0 group-hover:w-8 group-hover:opacity-100 transition-all duration-300 ease-in-out overflow-hidden shrink-0">
                      {/* <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jahirul"
                        alt="Avatar"
                        className="w-8 h-8 rounded-full border border-white/30 object-cover"
                      /> */}
                      <Image
                        src="/jahirul_islam.jpg"
                        alt="Profile avatar"
                        width={36}
                        height={36}
                        className="w-8 h-8 rounded-full items-center object-fill border border-white/30"
                        priority
                      />
                    </div>
                    <span className="font-bold text-white hover:text-black tracking-wider whitespace-nowrap">
                      SOCIAL LINKS
                    </span>
                  </a>
                </div>
              </div>

              {/* <div className="border-l-2 border-[#00aa00] pl-4 py-2">
                <div className="text-[#00ffff] mb-2">
                  ╭─────────────────────────────────────╮
                </div>
                <div className="text-[#ffb000]">
                  │ Welcome to my digital workspace │
                </div>
                <div className="text-[#00ffff]">
                  ╰─────────────────────────────────────╯
                </div>
              </div> */}

              {/* Static Role Name */}
              <div>
                <span className="text-[#00aa00]">$ </span>
                <span className="text-[#00ffff]">tasks i do</span>
              </div>
              {/* <div className="text-2xl md:text-5xl font-extrabold gradient-title min-h-[1.5em] leading-tight mt-1">
                {fullText}
              </div> */}
              <MorphingText
                texts={[
                  // "Jahirul islam",
                  "Full-Stack Developer",
                  "Website Creator",
                  "Mobile Application",
                  "Content Management System",
                  "Web Designer",
                  // "Data Specialist",
                  // "Tech Enthusiast",
                  // "Software Engineer",
                  // "Cyber Security",
                ]}
              />

              {/* Description */}
              {/* <div>
                <span className="text-[#00aa00]">$ </span>
                <span className="text-[#00ffff]">cat To-Dos</span>
              </div> */}
              {/* <div className="text-[#00aa00] leading-relaxed min-h-[6em]">
                {typedDescription.map(
                  (line, idx) =>
                    (line ||
                      (!isAllDone &&
                        idx ===
                          typedDescription.findIndex(
                            (l, i) => l.length < descriptionLines[i].length
                          ))) && (
                      <div key={idx}>
                        <span className="text-[#ffb000]">&gt;</span> {line}
                        {!isAllDone &&
                          idx ===
                            typedDescription.findIndex(
                              (l, i) => l.length < descriptionLines[i].length
                            ) && (
                            <span className="inline-block w-1.5 h-3 bg-[#00ff00] ml-1 animate-pulse" />
                          )}
                      </div>
                    )
                )}
              </div> */}
              <TerminalDemo />
              {/* Status */}
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00ff00] animate-pulse status-active" />
                <span className="text-[#00ff00] text-xs uppercase tracking-wider">
                  Available for new projects
                </span>
              </div>

              {/* Call To Action buttons*/}
              <div className="flex flex-row justify-between items-center">
                {/* <BorderWrapper
                  borderRadius="0px"
                  containerClassName="w-full sm:w-auto"
                >
                  <a
                    href="#projects"
                    className="block px-8 py-3 text-[#00ff00] hover:text-[#0a0a0a] hover:bg-[#00ff00] hover:rounded-md transition-all duration-300 text-center font-bold tracking-wider terminal-glow"
                  >
                    [EXPLORE_PROJECTS]
                  </a>
                </BorderWrapper> */}
                {/* <BorderWrapper
                  borderRadius="0px"
                  containerClassName="w-full sm:w-auto"
                >
                  <a
                    href="#contact"
                    className="block px-8 py-3 text-[#00ffff] hover:text-terminal-bg hover:rounded-md transition-all duration-300 text-center font-bold tracking-wider"
                  >
                    [INIT_CONTACT]
                  </a>
                </BorderWrapper> */}

                <div className="hero-btns w-48 flex flex-col sm:flex-row gap-4 m-0">
                  <div className="flex justify-center animate-pulse">
                    <a
                      href="#projects"
                      className="group relative flex items-center justify-center gap-0 hover:gap-2 px-6 py-2 bg-[#06830c77] hover:bg-[#54c53b]  rounded-full transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 sm:w-auto w-full"
                    >
                      <span className="font-bold text-white hover:text-black tracking-wider whitespace-nowrap">
                        EXPLORE PROJECTS
                      </span>
                      <div className="w-0 opacity-0 group-hover:w-6 group-hover:opacity-100 transition-all duration-300 ease-in-out overflow-hidden shrink-0">
                        <Image
                          src="/jahirul_islam.jpg"
                          alt="Profile avatar"
                          width={36}
                          height={36}
                          className="w-8 h-8 rounded-full items-center object-fill"
                          priority
                        />
                      </div>
                    </a>
                  </div>
                  <div className="flex justify-center animate-pulse">
                    <a
                      href="#contact"
                      className="group relative flex items-center justify-center gap-0 hover:gap-3 px-6 py-2 bg-[#06830c77] hover:bg-[#54c53b]  rounded-full transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 sm:w-auto w-full"
                    >
                      <div className="w-0 opacity-0 group-hover:w-8 group-hover:opacity-100 transition-all duration-300 ease-in-out overflow-hidden shrink-0">
                        {/* <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jahirul"
                        alt="Avatar"
                        className="w-8 h-8 rounded-full border border-white/30 object-cover"
                      /> */}
                        <Image
                          src="/jahirul_islam.jpg"
                          alt="Profile avatar"
                          width={36}
                          height={36}
                          className="w-8 h-8 rounded-full items-center object-fill border border-white/30"
                        />
                      </div>
                      <span className="font-bold text-white hover:text-black tracking-wider whitespace-nowrap">
                        Book a Call
                      </span>
                    </a>
                  </div>
                </div>
                <div className="social-icons w-48 flex justify-center">
                  <SocialIcon
                    href="https://www.linkedin.com/in/jahirulislam77/"
                    icon={<LiaLinkedin size={20} />}
                    title="LinkedIn"
                  />
                  <SocialIcon
                    href="https://www.youtube.com/@Jahirulislamds"
                    icon={<LiaYoutube size={20} />}
                    title="YouTube"
                  />
                  <SocialIcon
                    href="https://x.com/DevJahirulislam"
                    icon={<X size={20} />}
                    title="X (Twitter)"
                  />
                  <SocialIcon
                    href="https://github.com/jahirulislm"
                    icon={<SiGithub size={18} />}
                    title="GitHub"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-center mt-16 text-[#00aa00] text-xs"
          >
            <div className="mb-2">[skill section]</div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-[#00ff00]"
            >
              ▼
            </motion.div>
          </motion.div> */}
         

         
        </div>
      </Mounted>
    </section>
  );
};

export default Hero;
