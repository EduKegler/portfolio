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
          <TextBase as="p" color="inherit" className={styles.educationSchool}>
            {item.school}
          </TextBase>
          <TextBase as="p" color="inherit">
            {item.degree}
          </TextBase>
          <TextBase as="p" color="inherit" className={styles.educationMeta}>
            {`${item.period} | ${item.location}`}
          </TextBase>
        </div>
      ))}
    </div>
  );
}
