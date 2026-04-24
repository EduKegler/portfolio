import TextBody from "@/components/ui/TextBody";

export type BackSkillProps = {
  label: string;
};

export default function BackSkill({ label }: BackSkillProps) {
  return (
    <div className="flex py-8 flex-1 border-[0.5px] border-solid border-level2 items-center justify-center">
      <TextBody>{label}</TextBody>
    </div>
  );
}

