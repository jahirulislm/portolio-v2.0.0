"use client";

import React from "react";
import { motion } from "framer-motion";

const processSteps = [
  {
    title: "Discussion",
    description:
      "Deep-dive sessions to extract every project requirement and client preference.",
    icon: "💬",
    color: "#00ffff",
    className: "md:col-span-1 md:row-span-1",
    pId: "0x01",
  },
  {
    title: "Planning",
    description:
      "Architecting the perfect roadmap for a scalable business foundation.",
    icon: "�",
    color: "#00ff00",
    className: "md:col-span-1 md:row-span-1",
    pId: "0x02",
  },
  {
    title: "Wireframing",
    description:
      "Defining structural layouts and user-flow logic before any pixels are placed.",
    icon: "�️",
    color: "#ffff00",
    className: "md:col-span-1 md:row-span-1",
    pId: "0x03",
  },
  {
    title: "Design",
    description:
      "Crafting visually stunning high-fidelity interfaces that convert visitors.",
    icon: "🎨",
    color: "#ff00ff",
    className: "md:col-span-1 md:row-span-1",
    pId: "0x04",
  },
  {
    title: "Development",
    description:
      "Engineered with precision using cutting-edge tech stacks for peak performance.",
    icon: "⚡",
    color: "#00ff00",
    className: "md:col-span-1 md:row-span-1",
    pId: "0x05",
  },
  {
    title: "Test & Review",
    description:
      "Rigorous quality assurance to ensure 100% bug-free deployment.",
    icon: "🧪",
    color: "#00ffff",
    className: "md:col-span-1 md:row-span-1",
    pId: "0x06",
  },
  {
    title: "Launch",
    description:
      "Igniting your business presence across the global digital marketplace.",
    icon: "🚀",
    color: "#ffb000",
    className: "md:col-span-1 md:row-span-1",
    pId: "0x07",
  },
];

const Process = () => {
  return (
    <section id="process" className=" relative overflow-hidden">
      <div className="w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="mb-6 mt-12 flex flex-col items-center gap-2 opacity-60 select-none text-center">
            <div className="flex items-center gap-6">
              <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-terminal-green/50 to-terminal-green" />
              <span className="text-[24px] font-mono tracking-[0.4em] text-terminal-green uppercase">
                Working Process
              </span>
              <div className="h-[1px] w-16 bg-gradient-to-l from-transparent via-terminal-green/50 to-terminal-green" />
            </div>
          <div className="text-[#00aa00] text-xs mb-2 font-mono">
            <span className="text-[#00ffff]">root</span>@
            <span className="text-[#00ff00]">core_system</span>:~$ cat
            ./creation_blueprint.json
          </div>
           
           
          </div>

          <div className="mt-4 relative max-w-2xl">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00ff00] via-[#00ffff] to-transparent" />
            <div className="bg-[#001a00]/20 p-4 backdrop-blur-md rounded-xl border border-[#00aa00]/10">
              <p className="text-[#00ffff] font-mono text-sm leading-tight ">
                <span className="text-white opacity-90">
                  &ldquo;If I had 8 hours to chop down a tree, I would spend 6 of
                  those hours sharpening my axe.&rdquo;
                </span>
                <span className="block mt-2 text-[10px] opacity-50 tracking-widest ">
                  — ABRAHAM LINCOLN
                </span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* HUD Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6 font-mono">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, type: "spring", stiffness: 100 }}
              className={`relative group ${step.className} min-h-[160px] flex flex-col rounded-xl bg-[#000a00] border border-[#00aa00]/15 transition-all duration-700 overflow-hidden`}
              style={{
                // @ts-expect-error CSS custom properties are not recognized by TypeScript
                "--hover-shadow": `0 0 25px ${step.color}40`,
                "--hover-border": `${step.color}60`,
              }}
              whileHover={{
                boxShadow: `0 0 30px ${step.color}30`,
                borderColor: `${step.color}80`,
              }}
            >
              {/* Layer 0: Animated HUD Scanning line */}
              <motion.div
                animate={{ top: ["-10%", "110%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-[2px] z-20 pointer-events-none opacity-0 group-hover:opacity-40"
                style={{
                  background: `linear-gradient(90deg, transparent, ${step.color}, transparent)`,
                }}
              />

              {/* Layer 1: Technical Corners & Multi-Borders */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                {/* 4 Bracket Corners */}
                <div
                  className="absolute top-2 left-2 w-4 h-4 border-t border-l opacity-20 group-hover:opacity-100 transition-all duration-500"
                  style={{ borderColor: step.color }}
                />
                <div
                  className="absolute top-2 right-2 w-4 h-4 border-t border-r opacity-20 group-hover:opacity-100 transition-all duration-500"
                  style={{ borderColor: step.color }}
                />
                <div
                  className="absolute bottom-2 left-2 w-4 h-4 border-b border-l opacity-20 group-hover:opacity-100 transition-all duration-500"
                  style={{ borderColor: step.color }}
                />
                <div
                  className="absolute bottom-2 right-2 w-4 h-4 border-b border-r opacity-20 group-hover:opacity-100 transition-all duration-500"
                  style={{ borderColor: step.color }}
                />

                {/* Secondary Offset Dash Border */}
                <div className="absolute inset-[4px] border border-dashed border-[#00aa00]/5 group-hover:border-[#00aa00]/20 transition-all" />
              </div>

              {/* Content Wrapper */}
              <div className="relative z-10 flex-1 p-5 flex flex-col justify-between group-hover:bg-gradient-to-br from-transparent to-[#001a00]/50 transition-all duration-500">
                <div className="flex flex-col gap-4">
                  {/* Step ID Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[9px] text-[#00aa00]/40 uppercase tracking-tighter">
                        Instance_id
                      </span>
                      <span
                        className="text-[10px] font-bold font-mono px-1.5 py-0 border leading-none"
                        style={{
                          color: step.color,
                          borderColor: `${step.color}40`,
                          boxShadow: `0 0 10px ${step.color}20`,
                        }}
                      >
                        {step.pId}
                      </span>
                    </div>
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      className="text-3xl filter grayscale group-hover:grayscale-0 transition-all duration-500 transform-gpu"
                      style={{
                        filter: `drop-shadow(0 0 12px ${step.color}50)`,
                      }}
                    >
                      {step.icon}
                    </motion.div>
                  </div>

                  {/* Text Content */}
                  <div className="space-y-1.5">
                    <h3
                      className="text-lg font-bold tracking-[0.1em] transition-all group-hover:tracking-[0.15em]"
                      style={{
                        color: step.color,
                        textShadow: `0 0 15px ${step.color}30`,
                      }}
                    >
                      {step.title.toUpperCase()}
                    </h3>

                    <p className="text-[12px] text-[#00aa00]/60 group-hover:text-[#00ff00]/90 leading-tight transition-colors line-clamp-2">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Status Bar HUD */}
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between items-end">
                    <span className="text-[8px] text-[#00aa00]/30 font-mono uppercase">
                      Node_Ready
                    </span>
                    <span
                      className="text-[9px] font-bold"
                      style={{ color: step.color }}
                    >
                      ACTIVE
                    </span>
                  </div>

                  {/* Segmented Progress Bar */}
                  <div className="flex gap-[1px]">
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: idx * 0.05 + i * 0.02 }}
                        className="h-[2px] flex-1"
                        style={{
                          backgroundColor: i < 9 ? step.color : "#001a00",
                          boxShadow: i < 9 ? `0 0 5px ${step.color}60` : "none",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Ambient Glow Background Effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-1000 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${step.color}, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Global HUD Stats Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-10 pt-4 border-t border-[#00aa00]/10 flex flex-wrap justify-between items-center gap-4 font-mono"
        >
          <div className="flex gap-6 text-[9px] text-[#00aa00]/40 uppercase tracking-[0.2em]">
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 bg-[#00ffff] animate-ping" />
              Sync_Active
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 bg-[#00ff00] animate-pulse" />
              Node_Healthy
            </div>
          </div>

          <div className="text-[9px] text-[#00aa00]/60 font-mono italic">
            [SYS_LOG]: PROCESS_CORE_STABILIZED_V3.1
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center mt-16 mb-8 text-[#00aa00] text-xs"
        >
          <div className="mb-2">[ contact section]</div>
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

export default Process;
