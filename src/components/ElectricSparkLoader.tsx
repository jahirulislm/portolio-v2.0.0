"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Spark = ({ delay }: { delay: number }) => {
    const randomRotation = Math.random() * 360;
    const randomScale = 0.5 + Math.random() * 2;
    const randomDuration = 0.15 + Math.random() * 0.3;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0, x: 0, y: 0, rotate: randomRotation }}
            animate={{
                opacity: [0, 1, 0],
                scale: [0, randomScale, 0],
                x: (Math.random() - 0.5) * 300,
                y: (Math.random() - 0.5) * 300,
                rotate: randomRotation + (Math.random() - 0.5) * 180,
            }}
            transition={{
                duration: randomDuration,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut",
            }}
            className="absolute"
        >
            <svg width="20" height="40" viewBox="0 0 20 40" fill="none">
                <motion.path
                    d="M10 0 L15 15 L5 25 L10 40"
                    stroke={Math.random() > 0.5 ? "#00ffff" : "#00ff00"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: randomDuration, repeat: Infinity }}
                    className="drop-shadow-[0_0_5px_rgba(0,255,255,0.8)]"
                />
            </svg>
        </motion.div>
    );
};

export default function ElectricSparkLoader() {
    const [loading, setLoading] = useState(true);
    const [mounted, setMounted] = useState(false);
    const [dots, setDots] = useState("");

    useEffect(() => {
        setMounted(true);
        const timer = setTimeout(() => setLoading(false), 3000);
        const dotsInterval = setInterval(() => {
            setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
        }, 500);

        return () => {
            clearTimeout(timer);
            clearInterval(dotsInterval);
        };
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20, transition: { duration: 0.8, ease: "easeInOut" } }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden"
                >
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05)_0%,transparent_70%)]" />

                    {/* Spark Container */}
                    <div className="relative w-64 h-64 flex items-center justify-center">
                        {/* The "Gooey" Filter SVG */}
                        <svg className="absolute hidden">
                            <defs>
                                <filter id="goo">
                                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                                    <feColorMatrix
                                        in="blur"
                                        mode="matrix"
                                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
                                        result="goo"
                                    />
                                    <feBlend in="SourceGraphic" in2="goo" />
                                </filter>
                            </defs>
                        </svg>

                        {/* Electric Core */}
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.8, 1, 0.8],
                                boxShadow: [
                                    "0 0 20px rgba(0,255,0,0.2)",
                                    "0 0 40px rgba(0,255,255,0.4)",
                                    "0 0 20px rgba(0,255,0,0.2)",
                                ],
                            }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="relative z-10 w-24 h-24 rounded-full bg-[#0a0a0a] border-2 border-[#00ff00] flex items-center justify-center shadow-[0_0_20px_rgba(0,255,0,0.3)]"
                        >
                            <span className="text-3xl font-bold font-mono text-[#00ff00] tracking-tighter">
                                JIA
                            </span>

                            {/* Inner Rotating Ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border-t-2 border-r-2 border-[#00ffff] opacity-50"
                            />
                        </motion.div>

                        {/* Sparks */}
                        {mounted && (
                            <>
                                <div className="absolute inset-0 flex items-center justify-center" style={{ filter: "url(#goo)" }}>
                                    {[...Array(12)].map((_, i) => (
                                        <Spark key={i} delay={i * 0.1} />
                                    ))}
                                </div>

                                {/* Faster Sparks (no goo for sharpness) */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    {[...Array(8)].map((_, i) => (
                                        <Spark key={`fast-${i}`} delay={i * 0.15} />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                    {/* Loading Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-8 font-mono text-[#00ff00] flex flex-col items-center gap-2"
                    >
                        <div className="text-xs uppercase tracking-[0.5em] opacity-80">
                            Initializing System{dots}
                        </div>
                        <div className="w-48 h-[2px] bg-[#1a1a1a] rounded-full overflow-hidden relative">
                            <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 2.5, ease: "easeInOut" }}
                                className="absolute inset-0 bg-gradient-to-r from-[#00ff00] to-[#00ffff] shadow-[0_0_10px_rgba(0,255,255,0.5)]"
                            />
                        </div>
                    </motion.div>

                    {/* Grid Pattern Background */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style={{
                            backgroundImage: `radial-gradient(#00ff00 1px, transparent 1px)`,
                            backgroundSize: '24px 24px'
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
