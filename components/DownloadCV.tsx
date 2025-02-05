import { Color } from "@/contants/colors";
import TextBody from "@/primitives/TextBody";
import { memo } from "react";

function DownloadCV() {
  return (
    <div className="px-8 py-4 rounded-full border-solid border border-level1 h-fit w-fit whitespace-nowrap ">
      <a className=" whitespace-nowrap " href="cv.pdf" target="_blank">
        <TextBody as="span" color={Color.level1}>
          Download Resume
        </TextBody>
      </a>
    </div>
  );
}

export default memo(DownloadCV);
