"use client";

import { useTheme } from "next-themes";
import { motion } from "motion/react";
import { memo, useEffect, useState } from "react";

const springConfig = { type: "spring" as const, stiffness: 200, damping: 30 };

const rayLines = [
  { x1: 12, y1: 1, x2: 12, y2: 3 },
  { x1: 4.22, y1: 4.22, x2: 5.64, y2: 5.64 },
  { x1: 1, y1: 12, x2: 3, y2: 12 },
  { x1: 4.22, y1: 19.78, x2: 5.64, y2: 18.36 },
  { x1: 12, y1: 21, x2: 12, y2: 23 },
  { x1: 19.78, y1: 19.78, x2: 18.36, y2: 18.36 },
  { x1: 21, y1: 12, x2: 23, y2: 12 },
  { x1: 19.78, y1: 4.22, x2: 18.36, y2: 5.64 },
];

function ThemeToggle(): React.ReactNode {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  const isDark = resolvedTheme === "dark";

  function toggleTheme(): void {
    setTheme(isDark ? "light" : "dark");
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 hover:opacity-60 cursor-pointer"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <motion.svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ rotate: isDark ? 45 : 0 }}
        transition={springConfig}
      >
        <defs>
          <mask id="theme-toggle-mask">
            <rect x="0" y="0" width="24" height="24" fill="white" />
            <motion.circle
              cx="12"
              r={0}
              fill="black"
              initial={{ r: 0, cy: 4 }}
              animate={{ r: isDark ? 9 : 0, cy: isDark ? 9 : 4 }}
              transition={springConfig}
            />
          </mask>
        </defs>

        <motion.circle
          cx="12"
          cy="12"
          r={5}
          fill="currentColor"
          stroke="none"
          mask="url(#theme-toggle-mask)"
          initial={{ r: 5 }}
          animate={{ r: isDark ? 9 : 5 }}
          transition={springConfig}
        />

        <motion.g
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: isDark ? 0 : 1, scale: isDark ? 0 : 1 }}
          transition={springConfig}
          style={{ transformOrigin: "center" }}
        >
          {rayLines.map((line) => (
            <line
              key={`${line.x1}-${line.y1}`}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
            />
          ))}
        </motion.g>
      </motion.svg>
    </button>
  );
}

export default memo(ThemeToggle);
