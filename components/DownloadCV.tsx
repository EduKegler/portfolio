'use client'

import clsx from "clsx";
import { motion } from "motion/react"
import { memo } from "react";

function DownloadCV() {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'cv.pdf';
    link.click();
  };

  return (
    <motion.button
      className={clsx(
        "whitespace-nowrap",
        "text-[16px] leading-[20px]",
        "lg:text-[20px] lg:leading-[24px]",
        "px-8 py-4 hover:opacity-60 rounded-full border-solid border border-level1"
      )}
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleDownload}
    >
      Download Resume
    </motion.button>
  );
}

export default memo(DownloadCV);
