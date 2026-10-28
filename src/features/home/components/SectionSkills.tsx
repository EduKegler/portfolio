import { resumeData } from "@/features/resume/data";
import TextLabel1 from "@/components/ui/TextLabel1";
import TextTitle3 from "@/components/ui/TextTitle3";
import Tag from "@/components/ui/Tag";

export default function SectionSkills() {
  return (
    <section className="px-4 lg:px-20 flex flex-col lg:flex-row gap-10 w-full">
      <TextLabel1 className="flex-2">SKILLS</TextLabel1>
      <div className="grid flex-10 grid-cols-1 sm:grid-cols-2 gap-10">
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
    </section>
  );
}
