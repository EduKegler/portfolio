import type { ResumeSkillGroup } from "@/features/resume/data";
import TextBase from "@/components/ui/TextBase";
import styles from "./resume.module.css";

type ResumeSkillsProps = {
  groups: ResumeSkillGroup[];
};

export default function ResumeSkills({ groups }: ResumeSkillsProps) {
  return (
    <div className={styles.skillsList}>
      {groups.map((group) => (
        <TextBase
          key={group.label}
          as="p"
          color="inherit"
          className={styles.skillLine}
        >
          <span className={styles.skillLabel}>{`${group.label}: `}</span>
          {group.items.join(", ")}
        </TextBase>
      ))}
    </div>
  );
}
