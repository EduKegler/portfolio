import TextDisplay1 from "@/primitives/TextDisplay1";
import TextTitle2 from "@/primitives/TextTitle2";
import Image from "next/image";
import ProfileImage from "@/assets/profile.jpg";
import { memo } from "react";
import Divider from "@/primitives/Divider";
import SectionProjects from "./SectionProjects";
import SectionJobs from "./SectionJobs";
import SectionSkills from "./SectionSkills";
import DownloadCV from "./DownloadCV";
import { Color } from "@/contants/colors";
import SectionContact from "./SectionContact";

function Header() {
  return (
    <main className="flex flex-col justify-center items-center">
      <section className="flex px-4 lg:px-20 min-h-[calc(100vh-229px)] lg:min-h-[calc(100vh-144px)] items-end">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="relative w-[80px] h-[80px] sm:w-[125px] sm:h-[125px] md:w-[180px] md:h-[180px]">
              <Image
                src={ProfileImage}
                alt="Picture of Eduardo"
                sizes="100%"
                fill
                className="rounded-full"
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <TextDisplay1 color={Color.level1}>Eduardo Kegler</TextDisplay1>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start lg:items-center">
            <TextTitle2>
              Senior Software Engineer passionate about building reusable
              frontend architectures and driving innovation.
            </TextTitle2>
            <DownloadCV />
          </div>
        </div>
      </section>
      <div className="px-4 lg:px-20 w-full py-20" id="projects">
        <Divider />
      </div>
      <SectionProjects />
      <div className="px-4 lg:px-20 w-full py-20" id="experience">
        <Divider />
      </div>
      <SectionJobs />
      <div className="px-4 lg:px-20 w-full py-20" id="skills">
        <Divider />
      </div>
      <SectionSkills />
      <div className="px-4 lg:px-20 w-full py-20" id="contact">
        <Divider />
      </div>
      <SectionContact />
    </main>
  );
}

export default memo(Header);
