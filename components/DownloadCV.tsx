import clsx from "clsx";
import { memo } from "react";

function DownloadCV() {
  return (
    <a
      className={clsx(
        "whitespace-nowrap",
        "text-[16px] leading-[20px]",
        "lg:text-[20px] lg:leading-[24px]",
        "px-8 py-4 hover:opacity-60 rounded-full border-solid border border-level1"
      )}
      href="cv.pdf"
      target="_blank"
    >
      Download Resume
    </a>
  );
}

export default memo(DownloadCV);
