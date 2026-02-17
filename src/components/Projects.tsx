"use client";

import React from "react";
import { motion } from "framer-motion";
import { BorderWrapper } from "./BorderWrapper";
import { projects } from "../../content/projects/projects";
import CommonUsedBtn from "./CommonUsedBtn";

const Projects = () => {
  const [filter, setFilter] = React.useState("all");

  const filteredProjects = projects.filter(
    (p) => filter === "all" || p.category === filter,
  );

  return (
    <section id="projects" className="py-10 relative overflow-hidden">
      <div className="w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="mb-6 flex flex-col items-center gap-2 opacity-60 select-none text-center">
            <div className="flex items-center gap-6">
              <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-terminal-green/50 to-terminal-green" />
              <span className="text-[24px] font-mono tracking-[0.4em] text-terminal-green uppercase">
                PROJECTS WHAT HAVE BEEN DELIVERED
              </span>
              <div className="h-[1px] w-16 bg-gradient-to-l from-transparent via-terminal-green/50 to-terminal-green" />
            </div>
            {/* <div className="text-[12px] mt-2 mb-4 font-mono text-terminal-dim tracking-[0.2em] uppercase max-w-[400px] leading-relaxed">
              Proprietary Architecture • High-Frequency Execution • Distributed
              Systems
            </div> */}
            <div className="text-[#00aa00] text-sm mb-2">
              <span className="text-[#00ffff]">user</span>@
              <span className="text-[#00ff00]">projects</span>:~$ find ./works
              -type f -name "*.project"
            </div>
          </div>
          {/* <div className="flex items-center gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white terminal-glow">
              SELECTED_WORKS
            </h2>
            <div className="flex-1 border-t border-dashed border-[#00aa00]" />
            <span className="text-[#00aa00] bg-terminal-dim text-black text-sm">
              [{projects.length} total projects]
            </span>
          </div> */}

          {/* Filter Menu / Search Functionality */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 mb-8 font-mono text-sm">
            <span className="text-[#00ffff]">$ filter --type</span>
            <div className="flex gap-4">
              {["all", "website", "mobile", "desktop", "Native-App"].map(
                (category) => (
                  <button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`px-3 py-1 border transition-all ${
                      filter === category
                        ? "bg-[#00ff00] text-[#0a0a0a] border-[#00ff00] shadow-[0_0_10px_#00ff00]"
                        : "border-[#00aa00]/30 text-[#00aa00] hover:border-[#00ff00] hover:text-[#00ff00]"
                    }`}
                  >
                    [{category.toUpperCase()}]
                  </button>
                ),
              )}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid Container with Scroll Constraints and Glowing Border */}
        <div className="relative border border-[#00aa00]/30 rounded-xl p-4 bg-[#001a00]/10 backdrop-blur-sm shadow-[0_0_20px_rgba(0,170,0,0.1)]">
          {/* Top/Bottom Glow Indicators to highlight scrollability */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#00ff00]/50 to-transparent z-20 shadow-[0_0_10px_#00ff00]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#00ff00]/50 to-transparent z-20 shadow-[0_0_10px_#00ff00]" />

          <div className="max-h-[600px] overflow-y-auto pr-4 custom-scrollbar scroll-smooth">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-4">
              {filteredProjects.map((project, idx) => {
                const spans = [
                  "md:col-span-7",
                  "md:col-span-5",
                  "md:col-span-4",
                  "md:col-span-4",
                  "md:col-span-4",
                  "md:col-span-5",
                  "md:col-span-7",
                ];
                const colSpan = spans[idx % spans.length];

                return (
                  <BorderWrapper
                    key={project.id}
                    borderRadius="12px"
                    containerClassName={`w-full h-full ${colSpan}`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="border border-[#00aa00] bg-[#001a00]/10 group-hover:border-[#00ff00] group-hover:shadow-[0_0_25px_rgba(0,255,0,0.2)] transition-all duration-500 group h-full flex flex-col overflow-hidden relative shadow-lg"
                      style={{ borderRadius: "12px" }}
                    >
                      {/* Project Thumbnail Background with Hover Glow and Scroll Effect */}
                      <div
                        className="absolute inset-0 z-0 opacity-20 mix-blend-screen pointer-events-none grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-[3000ms] ease-in-out bg-top group-hover:bg-bottom"
                        style={{
                          backgroundImage: `url(${project.thumbnail})`,
                          backgroundSize: "cover",
                          filter: "drop-shadow(0 0 15px rgba(0, 255, 0, 0.4))",
                        }}
                      />

                      {/* Content Wrapper */}
                      <div className="relative z-10 flex flex-col h-full bg-[#001a00]/40 backdrop-blur-[2px] transition-colors duration-500 group-hover:bg-[#001a00]/20">
                        {/* Project Header */}
                        <div className="px-4 py-2 border-b border-[#00aa00] flex flex-wrap items-center justify-between gap-2 bg-[#001a00]/60 group-hover:border-[#00ff00] transition-colors">
                          <div className="flex items-center gap-4">
                            <span className="text-[#00ffff] text-xs font-bold">
                              {project.id}
                            </span>
                            <span className="text-[#00ff00] font-bold text-lg terminal-glow">
                              {project.title}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span
                              className="w-2 h-2 rounded-full animate-pulse shadow-[0_0_8px_currentColor]"
                              style={{
                                backgroundColor: project.statusColor,
                                color: project.statusColor,
                              }}
                            />
                            <span
                              className="text-xs font-bold tracking-wider"
                              style={{ color: project.statusColor }}
                            >
                              [{project.status}]
                            </span>
                          </div>
                        </div>

                        {/* Project Content */}
                        <div className="p-4 flex-1 flex flex-col">
                          <div className="flex-1">
                            {/* Description */}
                            <div className="mb-4">
                              <div className="text-[#00aa00] text-[10px] mb-1">
                                // DESCRIPTION
                              </div>
                              <p className="text-[#00ff00]/80 text-sm leading-relaxed group-hover:text-[#00ff00] transition-colors">
                                {project.description}
                              </p>
                            </div>

                            {/* Tech Stack */}
                            <div>
                              <div className="text-[#00aa00] text-[10px] mb-2">
                                // STACK
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                  <span
                                    key={t}
                                    className="px-2 py-0.5 border border-[#00ffff]/30 text-[#00ffff] text-[10px] font-mono hover:bg-[#00ffff]/10 transition-all shadow-sm"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex flex-wrap justify-center gap-2 mt-8">
                            <CommonUsedBtn text="View" project={project} />
                            <CommonUsedBtn text="CODE" project={project} />
                            <CommonUsedBtn
                              text="CASE STUDY"
                              project={project}
                            />
                          </div>
                        </div>

                        {/* Project Footer */}
                        <div className="px-4 py-2 border-t border-[#00aa00]/30 text-[10px] text-[#00aa00]/60 flex justify-between">
                          <span>LAST_MODIFIED: 2024-01-0{idx + 1}</span>
                          <span>VERSION: 1.{idx}.0</span>
                        </div>
                      </div>
                    </motion.div>
                  </BorderWrapper>
                );
              })}
            </div>
          </div>
        </div>

        {/* Load more hint */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center text-[#00aa00] text-sm"
        >
          <span className="text-[#00ffff]">$</span> more projects available on{" "}
          <a href="#" className="text-[#00ff00] hover:underline">
            [GitHub]
          </a>
          <span className="ml-2 cursor-blink">█</span>
        </motion.div> */}

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center mt-16 text-[#00aa00] text-xs"
        >
          <div className="mb-2">[Problem toward Solution]</div>
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

export default Projects;
