import TextBody from "@/primitives/TextBody";
import TextLabel1 from "@/primitives/TextLabel1";
import TextTitle2 from "@/primitives/TextTitle2";
import TextTitle3 from "@/primitives/TextTitle3";
import { memo } from "react";
import DownloadCV from "./DownloadCV";

function SectionJobs() {
  return (
    <section className="px-4 lg:px-20 flex flex-col lg:flex-row gap-10">
      <TextLabel1 className="flex-2">EXPERIENCE</TextLabel1>
      <div className="flex flex-10 flex-col gap-10 lg:gap-20">
        <TextTitle2 as="p">
          Senior Frontend Engineer with 8+ years of experience building
          high-performance, scalable web applications across Real Estate, Work
          Safety, and Cryptocurrency sectors.
        </TextTitle2>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 sm:gap-10">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-1 flex-col">
                <TextTitle3>Liquid Labs</TextTitle3>
                <TextBody color={"level2"}>
                  Senior Frontend Engineer
                </TextBody>
                <TextLabel1 color={"level4"}>
                  March 2025 — present
                </TextLabel1>
              </div>
              <div className="flex flex-1 flex-col">
                <TextTitle3>Coinbase</TextTitle3>
                <TextBody color={"level2"}>
                  Senior Software Engineer
                </TextBody>
                <TextLabel1 color={"level4"}>
                  August 2021 — March 2025
                </TextLabel1>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-1 flex-col">
                <TextTitle3>Tech6</TextTitle3>
                <TextBody color={"level2"}>Software Engineer</TextBody>
                <TextLabel1 color={"level4"}>
                  June 2019 — August 2021
                </TextLabel1>
              </div>
              <div className="flex flex-1 flex-col">
                <TextTitle3>Todobit</TextTitle3>
                <TextBody color={"level2"}>
                  Junior Software Engineer
                </TextBody>
                <TextLabel1 color={"level4"}>
                  August 2018 — August 2019
                </TextLabel1>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-1 flex-col">
                <TextTitle3>Santinvest</TextTitle3>
                <TextBody color={"level2"}>IT&apos;s Intern</TextBody>
                <TextLabel1 color={"level4"}>
                  September 2017 — August 2018
                </TextLabel1>
              </div>
              <div className="flex flex-1 flex-col" />
            </div>
          </div>
          <div className="mt-4">
            <DownloadCV />
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(SectionJobs);
