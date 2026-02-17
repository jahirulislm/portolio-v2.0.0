"use client";

import React from "react";
import { motion } from "framer-motion";
import { BorderWrapper } from "./BorderWrapper";

const skills = [
  {
    category: "FRONTEND",
    items: [
      "HTML/CSS",
      "Bootstrap",
      "Tailwind CSS",
      "Shadcn UI",
      "React.js",
      "Next.js",
      "Vue.js",
    ],
    icon: "◆",
    color: "#00ffff",
  },
  {
    category: "BACKEND",
    items: [
      "NEXT.JS",
      "Django",
      "Flask",
      "Laravel",
      "Express.js",
      "Node.js",
      "FastAPI",
    ],
    icon: "◉",
    color: "#ffb000",
  },
  {
    category: "LANGUAGES",
    items: [
      "JavaScript",
      "TypeScript",
      "Python",
      "PHP",
      "GoLang",
      "DART",
      "RUST[ is loading...]",
    ],
    icon: "◈",
    color: "#ff00ff",
  },
  {
    category: "MOBILE",
    items: ["Flutter", "React Native"],
    icon: "◈",
    color: "#ff00ff",
  },
  {
    category: "CMS - TOOLS",
    items: ["WordPress", "Webflow", "Framer no-code", "FlutterFlow no-code"],
    icon: "◈",
    color: "#ff00ff",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-10 relative">
      <div className="w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="text-terminal-dim text-sm mb-2">
            <span className="text-terminal-cyan">user</span>@
            <span className="text-terminal-dim">skills</span>:~$ ls -la
            ./tech-stack/
          </div>
          <div className="flex items-center gap-4">
            {/* <h2 className="text-2xl md:text-3xl font-bold text-terminal-dim terminal-glow">
              TECH_STACK
            </h2> */}
            <h2 className="text-2xl md:text-3xl font-bold text-white terminal-glow">
              TECH_STACKS & TOOLS
            </h2>
            <div className="flex-1 border-t border-dashed text-terminal-dim" />
            <span className="text-[#00aa00] bg-terminal-dim text-black text-sm">
              [{skills.length} directories]
            </span>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skillGroup, idx) => (
            <BorderWrapper key={skillGroup.category} borderRadius="10px">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border border-terminal-dim bg-[#001a00]/30 group-hover:border-transparent transition-all group h-full"
              >
                {/* Card Header */}
                <div
                  className="px-4 py-2 border-b border-terminal-dim flex items-center justify-between"
                  style={{ borderColor: skillGroup.color + "40" }}
                >
                  <div className="flex items-center gap-2">
                    <span style={{ color: skillGroup.color }}>
                      {skillGroup.icon}
                    </span>
                    <span
                      className="font-bold text-sm tracking-wider"
                      style={{ color: skillGroup.color }}
                    >
                      {skillGroup.category}/
                    </span>
                  </div>
                  <span className="text-[#00aa00] bg-terminal-dim text-black text-xs rounded">
                    [{skillGroup.items.length}]
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-4 space-y-2">
                  {skillGroup.items.map((skill, skillIdx) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 text-sm text-terminal-dim hover:text-[#00ff00] hover:bg-[#00ff00]/5 px-2 py-1 transition-all cursor-default"
                    >
                      <span className="text-[#00aa00]">├──</span>
                      <span className="text-[#00ffff]">
                        {String(skillIdx + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[#00ff00]">{skill}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-2 text-sm text-[#00aa00] px-2 pt-2">
                    <span>└──</span>
                    <span className="text-[#00aa00]/60">[END]</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="px-4 pb-4">
                  <div className="text-[10px] text-[#00aa00] mb-1 flex justify-between">
                    <span>PROFICIENCY</span>
                    <span>{85 + idx * 5}%</span>
                  </div>
                  <div className="h-2 border border-[#00aa00] bg-[#001a00]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${85 + idx * 5}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + idx * 0.1, duration: 0.8 }}
                      className="h-full terminal-progress-fill"
                      style={{
                        background: `linear-gradient(90deg, ${skillGroup.color}60, ${skillGroup.color})`,
                        boxShadow: `0 0 10px ${skillGroup.color}50`,
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </BorderWrapper>
          ))}
        </div>

        {/* Footer command */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-[#00aa00] text-sm"
        >
          <span className="text-[#00ffff]">$</span> echo "Total skills loaded:{" "}
          {skills.reduce((acc, s) => acc + s.items.length, 0)}"
          <span className="ml-2 text-[#00ff00]">✓</span>
        </motion.div>
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center mt-12 text-[#00aa00] text-xs"
        >
          <div className="mb-2">[Blog section]</div>
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

export default Skills;
