import TextBody from "@/primitives/TextBody";
import TextLabel1 from "@/primitives/TextLabel1";
import TextTitle2 from "@/primitives/TextTitle2";
import TextTitle3 from "@/primitives/TextTitle3";
import { memo } from "react";
import DownloadCV from "./DownloadCV";
import { Color } from "@/contants/colors";

function SectionJobs() {
  return (
    <section className="px-4 lg:px-20 flex flex-col lg:flex-row gap-10">
      <TextLabel1 className="flex-[2]">EXPERIENCE</TextLabel1>
      <div className="flex flex-[10] flex-col gap-10 lg:gap-20">
        <TextTitle2>
          Senior Frontend Engineer with 7+ years of experience building
          highperformance, scalable web applications across Real Estate, Work
          Safety, and Cryptocurrency sectors. 
        </TextTitle2>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 sm:gap-10">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-1 flex-col">
                <TextTitle3>Coinbase</TextTitle3>
                <TextBody color={Color.level2}>
                  Senior Software Engineer
                </TextBody>
                <TextLabel1 color={Color.level4}>
                  August 2021 - present
                </TextLabel1>
              </div>
              <div className="flex flex-1 flex-col">
                <TextTitle3>Tech6</TextTitle3>
                <TextBody color={Color.level2}>Software Engineer</TextBody>
                <TextLabel1 color={Color.level4}>
                  June 2019 — August 2021
                </TextLabel1>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-1 flex-col">
                <TextTitle3>Todobit</TextTitle3>
                <TextBody color={Color.level2}>
                  Junior Software Engineer
                </TextBody>
                <TextLabel1 color={Color.level4}>
                  August 2018 — August 2019
                </TextLabel1>
              </div>
              <div className="flex flex-1 flex-col">
                <TextTitle3>Santinvest</TextTitle3>
                <TextBody color={Color.level2}>IT&apos;s Intern</TextBody>
                <TextLabel1 color={Color.level4}>
                  September 2017 — August 2018
                </TextLabel1>
              </div>
            </div>
          </div>

          <div>
            <DownloadCV />
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(SectionJobs);
