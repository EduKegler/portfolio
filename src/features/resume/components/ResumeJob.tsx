import type { ResumeJob as ResumeJobData } from "@/features/resume/data";
import TextBase from "@/components/ui/TextBase";
import styles from "./resume.module.css";

type ResumeJobProps = {
  job: ResumeJobData;
};

export default function ResumeJob({ job }: ResumeJobProps) {
  const companyLabel = job.companyDetail
    ? `${job.company} (${job.companyDetail})`
    : job.company;

  return (
    <article className={styles.job}>
      <div className={styles.jobHeader}>
        <TextBase as="h3" color="inherit" className={styles.jobCompany}>
          {companyLabel}
        </TextBase>
        <TextBase as="p" color="inherit" className={styles.jobRole}>
          {job.role}
        </TextBase>
        <TextBase as="p" color="inherit" className={styles.jobMeta}>
          {`${job.period} | ${job.location}`}
        </TextBase>
        {job.stack && job.stack.length > 0 && (
          <TextBase as="p" color="inherit" className={styles.jobStack}>
            {`Stack: ${job.stack.join(", ")}`}
          </TextBase>
        )}
      </div>
      {job.bullets && job.bullets.length > 0 && (
        <ul className={styles.bullets}>
          {job.bullets.map((bullet, index) => (
            <li key={index} className={styles.bullet}>
              <span className={styles.bulletMark} aria-hidden="true">
                •
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
