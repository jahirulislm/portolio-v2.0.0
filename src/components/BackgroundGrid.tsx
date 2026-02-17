"use client";

import React, { useEffect, useRef } from "react";

const BackgroundGrid = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const autopilotRef = useRef({ x: 0, y: 0, active: true });
    const lastMouseMoveRef = useRef(Date.now());

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let width = window.innerWidth;
        let height = window.innerHeight;

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
            lastMouseMoveRef.current = Date.now();
            autopilotRef.current.active = false;
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);
        handleResize();

        const gridSize = 60;
        const mouseRadius = 350;

        const draw = (time: number) => {
            ctx.clearRect(0, 0, width, height);

            // Update autopilot if idle
            if (Date.now() - lastMouseMoveRef.current > 2000) {
                autopilotRef.current.active = true;
            }

            let targetX = mouseRef.current.x;
            let targetY = mouseRef.current.y;

            if (autopilotRef.current.active) {
                const radiusX = width * 0.35;
                const radiusY = height * 0.35;
                // Fast autopilot speed
                targetX = width / 2 + Math.cos(time * 0.0012) * radiusX;
                targetY = height / 2 + Math.sin(time * 0.0018) * radiusY;
            }

            const cols = Math.ceil(width / gridSize) + 1;
            const rows = Math.ceil(height / gridSize) + 1;
            // Pulsing effect
            const pulse = Math.sin(time * 0.003) * 0.5 + 0.5;

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const x = i * gridSize;
                    const y = j * gridSize;

                    const dx = targetX - x;
                    const dy = targetY - y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    let offsetX = 0;
                    let offsetY = 0;
                    let scale = 1;
                    let rotation = 0;

                    if (distance < mouseRadius) {
                        const angle = Math.atan2(dy, dx);
                        const force = (mouseRadius - distance) / mouseRadius;
                        const move = force * 35;
                        offsetX = -Math.cos(angle) * move;
                        offsetY = -Math.sin(angle) * move;
                        scale = 1 + force * 1.5;
                        rotation = force * Math.PI;
                    }

                    ctx.save();
                    ctx.translate(x + offsetX, y + offsetY);
                    ctx.rotate(rotation + time * 0.0006 + (i + j) * 0.05);
                    ctx.scale(scale, scale);

                    const baseOpacity = 0.04 + pulse * 0.06;
                    const opacity = distance < mouseRadius
                        ? baseOpacity + (1 - distance / mouseRadius) * 0.75
                        : baseOpacity;

                    // Enhanced Glow
                    if (distance < mouseRadius) {
                        ctx.shadowBlur = 20 * (1 - distance / mouseRadius);
                        ctx.shadowColor = "rgba(0, 255, 0, 0.8)";
                    } else {
                        ctx.shadowBlur = 4;
                        ctx.shadowColor = "rgba(0, 255, 0, 0.3)";
                    }

                    ctx.strokeStyle = `rgba(0, 255, 0, ${opacity})`;
                    ctx.lineWidth = distance < mouseRadius ? 2 : 1;

                    // Technical crosshair
                    ctx.beginPath();
                    ctx.moveTo(-5, 0);
                    ctx.lineTo(5, 0);
                    ctx.moveTo(0, -5);
                    ctx.lineTo(0, 5);
                    ctx.stroke();

                    // Middle dot
                    if (distance < mouseRadius * 0.6) {
                        ctx.fillStyle = `rgba(0, 255, 0, ${opacity})`;
                        ctx.fillRect(-1.5, -1.5, 3, 3);
                    }

                    ctx.restore();

                    // Data Streams
                    if (distance < mouseRadius && Math.random() > 0.94) {
                        ctx.beginPath();
                        ctx.moveTo(x + offsetX, y + offsetY);
                        ctx.lineTo(targetX, targetY);
                        ctx.shadowBlur = 15;
                        ctx.shadowColor = "rgba(0, 255, 255, 0.6)";
                        ctx.strokeStyle = `rgba(0, 255, 255, ${0.2 * (1 - distance / mouseRadius)})`;
                        ctx.lineWidth = 0.6;
                        ctx.stroke();
                    }
                }
            }

            // Scanner Sweep Effect
            const scanY = (time * 0.3) % height;
            ctx.beginPath();
            ctx.moveTo(0, scanY);
            ctx.lineTo(width, scanY);
            ctx.strokeStyle = "rgba(0, 255, 0, 0.05)";
            ctx.lineWidth = 3;
            ctx.stroke();

            animationFrameId = requestAnimationFrame(draw);
        };

        animationFrameId = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ background: "transparent" }}
        />
    );
};

export default BackgroundGrid;
