import ResumeEducation from "@/features/resume/components/ResumeEducation";
import ResumeHeader from "@/features/resume/components/ResumeHeader";
import ResumeJob from "@/features/resume/components/ResumeJob";
import ResumeSection from "@/features/resume/components/ResumeSection";
import ResumeSkills from "@/features/resume/components/ResumeSkills";
import ResumeTopBar from "@/features/resume/components/ResumeTopBar";
import TextBase from "@/components/ui/TextBase";
import styles from "@/features/resume/components/resume.module.css";
import type { ResumeVariant } from "@/features/resume/data/variants";

type ResumeViewProps = {
  variant: ResumeVariant;
};

export default function ResumeView({ variant }: ResumeViewProps) {
  const { data, pdfFileName } = variant;
  const pdfHref = `/${pdfFileName}`;
  const pdfDownloadName = `eduardo-kegler-${pdfFileName}`;

  return (
    <main id="main-content" className={styles.root}>
      <ResumeTopBar pdfHref={pdfHref} downloadName={pdfDownloadName} />
      <ResumeHeader
        name={data.name}
        title={data.title}
        contact={data.contact}
      />
      <ResumeSection title="Professional Summary" tight>
        <TextBase as="p" color="inherit" className={styles.summary}>
          {data.summary}
        </TextBase>
      </ResumeSection>
      <ResumeSection title="Work Experience">
        {data.jobs.map((job) => (
          <ResumeJob key={job.company} job={job} />
        ))}
      </ResumeSection>
      <ResumeSection title="Skills">
        <ResumeSkills groups={data.skills} />
      </ResumeSection>
      <ResumeSection title="Education & Languages">
        <ResumeEducation items={data.education} />
        <TextBase as="p" color="inherit" className={styles.languages}>
          <span className={styles.skillLabel}>Languages:</span>
          {` ${data.languages}`}
        </TextBase>
      </ResumeSection>
    </main>
  );
}
