"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button className="px-3 py-1 border border-[#00aa00] text-[#00aa00] text-xs font-mono">
                [THEME]
            </button>
        );
    }

    // For TUI, we keep it always dark but could toggle between color schemes
    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="px-3 py-1 border border-[#00aa00] text-[#00aa00] hover:border-[#00ff00] hover:text-[#00ff00] hover:bg-[#00ff00]/10 transition-all text-xs font-mono"
            title="Toggle theme"
        >
            {theme === "dark" ? "[◐ DARK]" : "[◑ LITE]"}
        </button>
    );
}
