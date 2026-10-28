import { resumeData } from "@/features/resume/data";
import TextLabel1 from "@/components/ui/TextLabel1";
import TextTitle2 from "@/components/ui/TextTitle2";
import TextTitle3 from "@/components/ui/TextTitle3";
import Tag from "@/components/ui/Tag";
import logoHTML from "@/assets/stack/html.svg";
import logoJS from "@/assets/stack/js.svg";
import logoCSS from "@/assets/stack/css.svg";
import logoTailwind from "@/assets/stack/tailwind.svg";
import logoNext from "@/assets/stack/next.svg";
import logoTS from "@/assets/stack/ts.svg";
import logoReact from "@/assets/stack/react.svg";

import FrontSkill, { FrontSkillProps } from "./FrontSkill";

const frontSkills1: FrontSkillProps[] = [
  { image: logoTS, label: "TypeScript" },
  { image: logoReact, label: "React" },
  { image: logoReact, label: "React Native" },
  { image: logoNext, label: "Next.js" },
];

const frontSkills2: FrontSkillProps[] = [
  { image: logoJS, label: "JavaScript" },
  { image: logoTailwind, label: "Tailwind" },
  { image: logoHTML, label: "HTML" },
  { image: logoCSS, label: "CSS" },
];

export default function SectionSkills() {
  return (
    <section className="px-4 lg:px-20 flex flex-col lg:flex-row gap-10 w-full">
      <TextLabel1 className="flex-2">SKILLS</TextLabel1>
      <div className="flex flex-10 flex-col gap-20">
        <div className="flex flex-col gap-10">
          <TextTitle2>Core Stack</TextTitle2>
          <div className="flex flex-col lg:flex-row w-full gap-10 lg:gap-6">
            <div className="flex flex-1 gap-1 lg:gap-6 justify-between items-center">
              {frontSkills1.map((skill) => (
                <FrontSkill
                  key={skill.label}
                  label={skill.label}
                  image={skill.image}
                />
              ))}
            </div>
            <div className="flex flex-1 gap-1 lg:gap-6 justify-between items-center">
              {frontSkills2.map((skill) => (
                <FrontSkill
                  key={skill.label}
                  label={skill.label}
                  image={skill.image}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <TextTitle2>Toolkit</TextTitle2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {resumeData.skills.map((group) => (
              <div key={group.label} className="flex flex-col gap-4">
                <TextTitle3>{group.label}</TextTitle3>
                <div className="flex gap-2 flex-wrap">
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
