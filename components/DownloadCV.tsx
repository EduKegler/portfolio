import { Color } from "@/contants/colors";
import TextBody from "@/primitives/TextBody";
import { memo } from "react";

function DownloadCV() {
  return (
    <div className="px-8 py-4 rounded-full border-solid border border-foreground h-fit w-fit whitespace-nowrap ">
      <a className=" whitespace-nowrap " href="cv.pdf" target="_blank">
        <TextBody as="span" color={Color.foreground}>
          Download Resume
        </TextBody>
      </a>
    </div>
  );
}

export default memo(DownloadCV);
