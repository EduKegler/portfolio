import TextDisplay1 from "@/components/ui/TextDisplay1";
import TextTitle2 from "@/components/ui/TextTitle2";
import TextBody from "@/components/ui/TextBody";
import Image from "next/image";
import ProfileImage from "@/assets/profile.jpg";
import Divider from "@/components/ui/Divider";
import SectionProjects from "./SectionProjects";
import SectionJobs from "./SectionJobs";
import SectionSkills from "./SectionSkills";
import ResumeLink from "@/features/resume/components/ResumeLink";
import SectionContact from "./SectionContact";

export default function Content() {
  return (
    <main id="main-content" className="flex flex-col justify-center items-center">
      <section className="flex px-4 lg:px-20 min-h-[calc(100vh-229px)] lg:min-h-[calc(100vh-144px)] items-end">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="relative w-[80px] h-[80px] sm:w-[125px] sm:h-[125px] md:w-[180px] md:h-[180px]">
              <Image
                src={ProfileImage}
                alt="Picture of Eduardo"
                sizes="(max-width: 414px) 80px, (max-width: 768px) 125px, 180px"
                fill
                className="rounded-full"
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <TextDisplay1 color="level1">Eduardo Kegler</TextDisplay1>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start lg:items-center">
            <div className="flex flex-col gap-4">
              <TextTitle2 as="p">
                Senior Frontend Engineer building trading surfaces, auth flows
                and frontend systems for crypto and fintech products.
              </TextTitle2>
              <TextBody color="level3">
                Open to remote contract work. Florianópolis, Brazil (UTC-3).
              </TextBody>
            </div>
            <ResumeLink />
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

