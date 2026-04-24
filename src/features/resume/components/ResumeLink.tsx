"use client";

import clsx from "clsx";
import { motion } from "motion/react";
import Link from "next/link";
import { memo } from "react";

function ResumeLink() {
  return (
    <motion.div
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <Link
        href="/resume"
        className={clsx(
          "inline-block whitespace-nowrap",
          "text-[16px] leading-[20px]",
          "lg:text-[20px] lg:leading-[24px]",
          "px-8 py-4 hover:opacity-60 rounded-full border-solid border border-level1",
        )}
      >
        Resume
      </Link>
    </motion.div>
  );
}

export default memo(ResumeLink);
