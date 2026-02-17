"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Row = ({
  items,
  speed = 40,
  reverse = false,
}: {
  items: (Omit<any, "colors"> & { colors: string | string[] })[];
  speed?: number;
  reverse?: boolean;
}) => (
  <div className="flex overflow-hidden w-full relative group">
    <div
      className={`flex items-center gap-3 ${reverse ? "animate-infinite-scroll-reverse" : "animate-infinite-scroll"} hover:[animation-play-state:paused]`}
      style={{ animationDuration: `${speed}s` }}
    >
      {items.map((logo, index) => (
        <motion.div
          key={index}
          whileHover={{
            scale: 1.05,
            backgroundColor: "rgba(255, 255, 255, 0.12)",
          }}
          className={`flex-shrink-0 flex items-center gap-3 px-5 py-2.5 rounded-full border transition-all duration-300 cursor-default
            ${logo.name === "ReactJS"
              ? "border-terminal-cyan/40 bg-terminal-cyan/10 shadow-[0_0_20px_rgba(0,255,255,0.15)] ring-1 ring-terminal-cyan/20"
              : "border-white/5 bg-white/5 backdrop-blur-md hover:border-white/20"
            }`}
        >
          <div className="flex items-center justify-center">
            {typeof logo.colors === "string" ? (
              <div className="w-5 h-5 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                <Image
                  src={logo.colors}
                  alt={logo.name}
                  width={20}
                  height={20}
                  className="object-contain filter brightness-110"
                />
              </div>
            ) : (
              <div className="flex gap-1.5 px-0.5">
                {logo.colors.map((color, idx) => (
                  <div
                    key={idx}
                    className="w-2.5 h-2.5 rounded-[2px] shadow-sm brightness-110"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            )}
          </div>
          <span
            className={`font-mono text-[13px] tracking-tight ${logo.name === "ReactJS" ? "text-terminal-cyan font-bold" : "text-gray-300"}`}
          >
            {logo.name}
          </span>
        </motion.div>
      ))}
    </div>
  </div>
);

const LogoSlider = () => {
  const logos = [
    {
      name: "JavaScript",
      src: "/stack-logos/javascript.gif",
      colors: "/stack-logos/svglogos/svg-image-16.svg",
    },
    {
      name: "Python",
      src: "/stack-logos/python.png",
      colors: "/stack-logos/svglogos/svg-image-17.svg",
    },
    {
      name: "PHP",
      src: "/stack-logos/php.png",
      colors: "/stack-logos/svglogos/svg-image-30.svg",
    },
    {
      name: "Golang",
      src: "/stack-logos/golang.png",
      colors: ["#00add8"],
    },
    {
      name: "Java",
      src: "/stack-logos/java.png",
      colors: ["#007396"],
    },
    {
      name: "Dart",
      src: "/stack-logos/dart.jpg",
      colors: ["#0175c2"],
    },
    {
      name: "NodeJS",
      src: "/stack-logos/nodejs.png",
      colors: "/stack-logos/svglogos/svg-image-24.svg",
    },
    {
      name: "ReactJS",
      src: "/stack-logos/react-native.png",
      colors: "/stack-logos/svglogos/svg-image-11.svg",
    },
    {
      name: "NextJS",
      src: "/stack-logos/nextjs.png",
      colors: "/stack-logos/svglogos/svg-image-10.svg",
    },
    {
      name: "Tailwind",
      src: "/stack-logos/tailwind-css.png",
      colors: "/stack-logos/svglogos/svg-image-12.svg",
    },
    {
      name: "Framer",
      src: "/stack-logos/framer-motion.png",
      colors: "/stack-logos/svglogos/svg-image-6.svg",
    },
    {
      name: "Bootstrap",
      src: "/stack-logos/bootstrap.png",
      colors: "/stack-logos/svglogos/svg-image-13.svg",
    },
    {
      name: "Django",
      src: "/stack-logos/django.png",
      colors: ["#092e20"],
    },
    {
      name: "Flask",
      src: "/stack-logos/flask.png",
      colors: [ "#ffffff"],
    },
    {
      name: "MySQL",
      src: "/stack-logos/mysql.png",
      colors: ["#4479a1"],
    },
    {
      name: "PostgreSQL",
      src: "/stack-logos/postgress.svg",
      colors: "/stack-logos/postgress.svg",
    },
    {
      name: "Supabase",
      src: "/stack-logos/supabase.svg",
      colors: "/stack-logos/supabase.svg",
    },
    {
      name: "Stripe",
      src: "/stack-logos/stripe.png",
      colors: ["#635bff"],
    },
    {
      name: "WordPress",
      src: "/stack-logos/wordpress.png",
      colors: ["#21759b"],
    },
    {
      name: "FramerCMS",
      src: "/stack-logos/framercms.svg",
      colors: "/stack-logos/framercms.svg",
    },
    {
      name: "Anaconda",
      src: "/stack-logos/anaconda.png",
      colors: ["#44a833"],
    },
    
  ];

  // Distribute logos into 3 rows
  const row1 = [
    ...logos.slice(0, 8),
    ...logos.slice(0, 8),
    ...logos.slice(0, 8),
  ];
  const row2 = [
    ...logos.slice(8, 15),
    ...logos.slice(8, 15),
    ...logos.slice(8, 15),
  ];
  const row3 = [...logos.slice(15), ...logos.slice(15), ...logos.slice(15)];

  return (
    <div className="w-full flex flex-col items-center justify-center py-24 relative z-10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-terminal-green/5 to-transparent pointer-events-none opacity-20" />
      {/* Label/Decoration */}
      <div className="mb-6 flex flex-col items-center gap-2 opacity-60 select-none text-center">
        <div className="flex items-center gap-6">
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-terminal-green/50 to-terminal-green" />
          <span className="text-[24px] font-mono tracking-[0.4em] text-terminal-green uppercase">
            Core Technology Stack
          </span>
          <div className="h-[1px] w-16 bg-gradient-to-l from-transparent via-terminal-green/50 to-terminal-green" />
        </div>
        <div className="text-[12px] mt-2 mb-4 font-mono text-terminal-dim tracking-[0.2em] uppercase max-w-[400px] leading-relaxed">
          Proprietary Architecture • High-Frequency Execution • Distributed
          Systems
        </div>
      </div>
      <div className="w-full max-w-[1400px] flex flex-col gap-2 relative">
        {/* Row 1 */}
        <div className="relative flex justify-start">
          {/* <span className="absolute z-10 -top-4 left-120 text-center m-0 p-0 text-[10px] text-green-300 row-title">
            Front-End
          </span> */}
          <Row items={row1} speed={60} />
        </div>
        <div className="border-1"></div>

        {/* Row 2 */}
        <div className="relative flex justify-center -translate-x-12">
          {/* <span className="absolute z-10 -top-4 left-133 text-center m-0 p-0 text-[10px] text-green-300 row-title">
            Back-End
          </span> */}
          <Row items={row2} speed={50} reverse={true} />
        </div>
        <div className="border-1"></div>
        {/* Row 3 */}
        <div className="relative flex justify-center translate-x-12">
          {/* <span className="absolute z-10 -top-4 left-94 text-center m-0 p-0 text-[10px] text-green-300 row-title">
            CMS - Content Management System
          </span> */}
          <Row items={row3} speed={70} />
        </div>

        {/* Masking Gradients for edges */}
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent pointer-events-none z-20" />
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent pointer-events-none z-20" />
      </div>
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="text-center mt-16 text-[#00aa00] text-xs"
      >
        <div className="mb-2">[Project section]</div>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-[#00ff00]"
        >
          ▼
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LogoSlider;
