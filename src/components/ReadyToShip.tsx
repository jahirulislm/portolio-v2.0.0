"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { SocialIcon } from "./SocialProfiles";
import {
  LiaLinkedin,
  LiaTwitch,
  LiaXRaySolid,
  LiaYoutube,
} from "react-icons/lia";
import { X } from "lucide-react";

const ReadyToShip = () => {
  return (
    <section className="pb-20 relative overflow-hidden font-sans">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className=" border border-white/10 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-[#00ff00]/5"
        >
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#00ff00]/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 space-y-8">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
              <span className="terminal-glow">Ready to</span>{" "}
              <span className="text-[#00ffff] italic">ship?</span>
            </h2>

            <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto leading-relaxed font-medium">
              I&apos;ll help you define your goals, identify the right
              Tech-Stacks & Tools. If we&apos;re a fit,
              <span className="ml-1.5 px-0.5 bg-terminal-green text-black">
                I&apos;ll map your MVP in 18-days and{" "}
              </span>
              <span className="ml-8 px-0.5 bg-terminal-green text-black">
                Launch online.
              </span>
            </p>

            <div className="pt-4 flex justify-center animate-pulse">
              <a
                href="#contact"
                className="group relative flex items-center justify-center gap-0 hover:gap-3 px-6 py-2 bg-[#06830c77] hover:bg-[#00ff00] rounded-full transition-all duration-300 shadow-xl shadow-emerald-500/20 hover:shadow-[#00ff00]/40 sm:w-auto w-full"
              >
                <div className="w-0 opacity-0 group-hover:w-6 group-hover:opacity-100 transition-all duration-300 ease-in-out overflow-hidden shrink-0">
                  <Image
                    src="/jahirul_islam.jpg"
                    alt="Profile avatar"
                    width={40}
                    height={40}
                    className="w-8 h-8 rounded-full border border-white/30 object-cover"
                  />
                </div>
                <span className="font-bold text-white group-hover:text-black tracking-wider whitespace-nowrap text-lg">
                  Book a Call
                </span>
              </a>
            </div>
          </div>
        </motion.div>
        <div className="flex justify-center items-center gap-1.5 mt-12">
          <SocialIcon
            href="https://www.linkedin.com/in/jahirulislam77/"
            icon={<LiaLinkedin size={48} />}
            title="LinkedIn"
            size={60}
          />
          <SocialIcon
            href="https://www.youtube.com/@Jahirulislamds"
            icon={<LiaYoutube size={48} />}
            title="YouTube"
            size={60}
          />
          <SocialIcon
            href="https://github.com/jahirulislm"
            icon={<SiGithub size={44} />}
            title="GitHub"
            size={50}
          />
          <SocialIcon
            href="https://x.com/DevJahirulislam"
            icon={<X size={48} />}
            title="X (Twitter)"
            size={60}
          />
        </div>
      </div>
    </section>
  );
};

export default ReadyToShip;
