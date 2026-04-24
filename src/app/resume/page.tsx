import { resumeData } from "@/features/resume/data";
import DownloadPdfButton from "@/features/resume/components/DownloadPdfButton";
import ResumeEducation from "@/features/resume/components/ResumeEducation";
import ResumeHeader from "@/features/resume/components/ResumeHeader";
import ResumeJob from "@/features/resume/components/ResumeJob";
import ResumeSection from "@/features/resume/components/ResumeSection";
import ResumeSkills from "@/features/resume/components/ResumeSkills";
import TextBase from "@/components/ui/TextBase";
import styles from "@/features/resume/components/resume.module.css";

export default function ResumePage() {
  return (
    <main id="main-content" className={styles.root}>
      <DownloadPdfButton />
      <ResumeHeader
        name={resumeData.name}
        title={resumeData.title}
        contact={resumeData.contact}
      />
      <ResumeSection title="Professional Summary" tight>
        <TextBase as="p" color="inherit" className={styles.summary}>
          {resumeData.summary}
        </TextBase>
      </ResumeSection>
      <ResumeSection title="Work Experience">
        {resumeData.jobs.map((job) => (
          <ResumeJob key={job.company} job={job} />
        ))}
      </ResumeSection>
      <ResumeSection title="Skills">
        <ResumeSkills groups={resumeData.skills} />
      </ResumeSection>
      <ResumeSection title="Education">
        <ResumeEducation items={resumeData.education} />
      </ResumeSection>
      <ResumeSection title="Languages">
        <TextBase as="p" color="inherit" className={styles.languages}>
          {resumeData.languages}
        </TextBase>
      </ResumeSection>
    </main>
  );
}
