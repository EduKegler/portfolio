import { memo } from "react";
import TextBody from "@/primitives/TextBody";

export type BackSkillProps = {
  label: string;
};

function BackSkill({ label }: BackSkillProps) {
  return (
    <div className="flex py-8 flex-1 border-[0.5px] border-solid border-level2 items-center justify-center">
      <TextBody>{label}</TextBody>
    </div>
  );
}

export default memo(BackSkill);
