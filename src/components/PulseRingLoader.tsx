"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Ring = ({ delay, color }: { delay: number; color: string }) => {
    return (
        <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{
                scale: [.3, 1.5],
                opacity: [0, 0.5, 0],
            }}
            transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: delay,
                ease: "easeOut",
            }}
            className="absolute inset-0 rounded-full border-2"
            style={{ borderColor: color, boxShadow: `0 0 20px ${color}` }}
        />
    );
};

export default function PulseRingLoader() {
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

    if (!mounted) return null;

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        scale: 1.1,
                        filter: "blur(10px)",
                        transition: { duration: 0.8, ease: "easeInOut" }
                    }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden"
                >
                    {/* Background Ambient Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,170,0.05)_0%,transparent_70%)]" />

                    {/* Pulse Container */}
                    <div className="relative w-28 h-28 flex items-center justify-center">
                        {/* The Pulsing Rings */}
                        <Ring delay={0} color="#00ffaa" />
                        <Ring delay={0.8} color="#00ddff" />
                        <Ring delay={1.6} color="#00ffaa" />

                        {/* Central Hexagon Core */}
                        <motion.div
                            animate={{
                                scale: [0.4, 0.75, 0.50],
                                // boxShadow: [
                                //     "0 0 20px rgba(0,255,170,0.3)",
                                //     "0 0 40px rgba(0,255,170,0.5)",
                                //     "0 0 20px rgba(0,255,170,0.3)",
                                // ],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="relative z-10 w-24 h-24 bg-[#0a0a0a] flex items-center justify-center"
                            style={{
                                clipPath: "polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)",
                                //  clipPath: "polygon(50% 30%, 68% 40%, 68% 60%, 50% 70%, 32% 60%, 32% 40%)",
                                border: ".75px solid #5d5dc8",
                            }}
                        >
                            {/* <div className="absolute inset-0 border-2 border-[#00ffaa] opacity-20"
                                style={{ clipPath: "polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)", transform: "scale(0.8)" }}
                            /> */}
                            <span className="text-xl font-bold font-InLoader text-[#00ffaa] tracking-widest drop-shadow-[0_0_10px_#00ffaa]">
                                জহির
                            </span>
                        </motion.div>

                        {/* Orbiting Particles */}
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    rotate: 360,
                                }}
                                transition={{
                                    duration: 3 + i,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute w-full h-full"
                            >
                                <div
                                    className="absolute w-2 h-2 rounded-full bg-[#00ffff] blur-[1px]"
                                    style={{
                                        top: "10%",
                                        left: "50%",
                                        boxShadow: "0 0 10px #00ffff"
                                    }}
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-12 flex flex-col items-center gap-4"
                    >
                        <div className="font-mono text-[#00ffaa] text-sm uppercase tracking-[0.4em]">
                            Establishing Connection{dots}
                        </div>

                        {/* Minimalist Progress Bar */}
                        <div className="w-64 h-[1px] bg-[#1a1a1a] relative overflow-hidden">
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-[#00ffaa] to-transparent"
                            />
                        </div>


                    </motion.div>

                    {/* Scanning Line Effect */}
                    {/* <motion.div
                        animate={{
                            y: ["0%", "100%", "0%"],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="fixed inset-0 pointer-events-none z-[10000] opacity-[0.03] bg-gradient-to-b from-transparent via-[#00ffaa] to-transparent h-20 w-full"
                    /> */}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
