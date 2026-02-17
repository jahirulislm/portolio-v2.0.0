"use client";

import React from "react";
import { SiGithub, SiLinkedin, SiX, SiYoutube } from "react-icons/si";
import { ExternalLink } from "lucide-react";

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  size?: number;
}

/**
 * A reusable Social Icon component with terminal-style animations.
 * Includes animated corners, grid background, and 3D rotation.
 */
export const SocialIcon = ({ href, icon, title, size = 40 }: SocialIconProps) => {
  const iconSize = size / 2;
  const cornerSize = Math.max(16, size * 0.6);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group grid place-items-center transition-all duration-300"
      style={{ width: size, height: size }}
      aria-label={title}
    >
      {/* Dynamic Terminal Corners */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Right */}
        <svg
          className="absolute -top-[1px] -right-[1px] z-10 duration-500 group-hover:translate-x-1.5 group-hover:-translate-y-1.5 ease-spring opacity-20 group-hover:opacity-100 text-terminal-green"
          width={cornerSize} height={cornerSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
        >
          <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
        </svg>
        {/* Bottom Left */}
        <svg
          className="absolute -bottom-[1px] -left-[1px] z-10 duration-500 group-hover:-translate-x-1.5 group-hover:translate-y-1.5 ease-spring opacity-20 group-hover:opacity-100 text-terminal-green"
          width={cornerSize} height={cornerSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
        >
          <path d="M3 16v3a2 2 0 0 0 2 2h3" />
        </svg>
        {/* Bottom Right */}
        <svg
          className="absolute -bottom-[1px] -right-[1px] z-10 duration-500 group-hover:translate-x-1.5 group-hover:translate-y-1.5 ease-spring opacity-20 group-hover:opacity-100 text-terminal-green"
          width={cornerSize} height={cornerSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
        >
          <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
        </svg>
        {/* Top Left */}
        <svg
          className="absolute -top-[1px] -left-[1px] z-10 duration-500 group-hover:-translate-x-1.5 group-hover:-translate-y-1.5 ease-spring opacity-20 group-hover:opacity-100 text-terminal-green"
          width={cornerSize} height={cornerSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
        >
          <path d="M8 3H5a2 2 0 0 0-2 2v3" />
        </svg>
      </div>

      {/* Grid Pattern and Glow Overlay */}
      <div className="absolute inset-0 bg-grid-lines opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />
      <div className="absolute inset-0 bg-terminal-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm" />

      {/* Main Icon with 3D Flip Animation */}
      <div
        className="relative z-0 flex items-center justify-center transition-all duration-700 preserve-3d group-hover:[transform:rotateX(180deg)_rotateY(180deg)_rotateZ(180deg)] text-terminal-cyan group-hover:text-terminal-green"
        style={{ width: iconSize, height: iconSize }}
      >
        <div className="backface-hidden w-full h-full flex items-center justify-center">
          {icon}
        </div>
        {/* Reflection/Secondary side of the flip */}
        <div className="absolute inset-0 backface-hidden [transform:rotateX(180deg)] flex items-center justify-center">
          <ExternalLink style={{ width: iconSize * 0.8, height: iconSize * 0.8 }} />
        </div>
      </div>
    </a>
  );
};


/**
 * Collection of social icons for use in footer or contact sections.
 */
const SocialIcons = () => {
  const socialLinks = [
    { href: "https://github.com", icon: <SiGithub size={20} />, title: "GitHub" },
    { href: "https://linkedin.com", icon: <SiLinkedin size={20} />, title: "LinkedIn" },
    { href: "https://twitter.com", icon: <SiX size={20} />, title: "Twitter" },
    { href: "https://youtube.com", icon: <SiYoutube size={20} />, title: "YouTube" },
  ];

  return (
    <div className="social-icons flex justify-center gap-6 mt-12">
      {socialLinks.map((link) => (
        <SocialIcon key={link.title} {...link} />
      ))}
    </div>
  );
};

export default SocialIcons;

