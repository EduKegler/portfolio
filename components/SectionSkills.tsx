import TextLabel1 from "@/primitives/TextLabel1";
import TextTitle2 from "@/primitives/TextTitle2";
import logoHTML from "@/assets/stack/html.svg";
import logoJS from "@/assets/stack/js.svg";
import logoCSS from "@/assets/stack/css.svg";
import logoTailwind from "@/assets/stack/tailwind.svg";
import logoNext from "@/assets/stack/next.svg";
import logoRedux from "@/assets/stack/redux.svg";
import logoTS from "@/assets/stack/ts.svg";
import logoReact from "@/assets/stack/react.svg";

import { memo } from "react";
import FrontSkill, { FrontSkillProps } from "./FrontSkill";
import BackSkill from "./BackSkill";

const frontSkills1: FrontSkillProps[] = [
  { image: logoJS, label: "Javascript" },
  { image: logoTS, label: "Typescript" },
  { image: logoReact, label: "React" },
  { image: logoRedux, label: "Redux" },
];

const frontSkills2: FrontSkillProps[] = [
  { image: logoNext, label: "NextJS" },
  { image: logoHTML, label: "HTML" },
  { image: logoCSS, label: "CSS" },
  { image: logoTailwind, label: "Tailwind" },
];

const backSkills1: FrontSkillProps[] = [
  { image: logoJS, label: "PHP" },
  { image: logoTS, label: "NodeJS" },
  { image: logoTailwind, label: "Jest" },
];

const backSkills2: FrontSkillProps[] = [
  { image: logoJS, label: ".NET" },
  { image: logoTS, label: "Graphql" },
  { image: logoTailwind, label: "Cypress" },
];

function SectionSkills() {
  return (
    <section className="px-4 lg:px-20 flex flex-col lg:flex-row gap-10 w-full">
      <TextLabel1 className="flex-[2]">SKILLS</TextLabel1>
      <div className="flex flex-[10] flex-col gap-20">
        <div className="flex flex-col gap-10">
          <TextTitle2>Frontend Stack</TextTitle2>
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
          <TextTitle2>Backend and Testing & DevOps</TextTitle2>
          <div className="border-[0.5px] border-solid border-foreground-light">
            <div className="flex justify-between items-center">
              {backSkills1.map((skill) => (
                <BackSkill key={skill.label} label={skill.label} />
              ))}
            </div>
            <div className="flex justify-between items-center">
              {backSkills2.map((skill) => (
                <BackSkill key={skill.label} label={skill.label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(SectionSkills);
