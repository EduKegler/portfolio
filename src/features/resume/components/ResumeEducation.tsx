import type { ResumeEducation as ResumeEducationData } from "@/features/resume/data";
import TextBase from "@/components/ui/TextBase";
import styles from "./resume.module.css";

type ResumeEducationProps = {
  items: ResumeEducationData[];
};

export default function ResumeEducation({ items }: ResumeEducationProps) {
  return (
    <div>
      {items.map((item) => (
        <div key={`${item.school}-${item.period}`} className={styles.education}>
          <TextBase as="p" color="inherit">
            <span className={styles.educationSchool}>{item.school}</span>
            {` | ${item.degree} | `}
            <span className={styles.educationMeta}>
              {`${item.period} | ${item.location}`}
            </span>
          </TextBase>
        </div>
      ))}
    </div>
  );
}
