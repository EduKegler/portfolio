import { resumeData } from "@/features/resume/data";
import TextBody from "@/components/ui/TextBody";
import TextLabel1 from "@/components/ui/TextLabel1";
import TextTitle2 from "@/components/ui/TextTitle2";
import TextTitle3 from "@/components/ui/TextTitle3";
import ResumeLink from "@/features/resume/components/ResumeLink";

export default function SectionJobs() {
  return (
    <section className="px-4 lg:px-20 flex flex-col lg:flex-row gap-10">
      <TextLabel1 className="flex-2">EXPERIENCE</TextLabel1>
      <div className="flex flex-10 flex-col gap-10 lg:gap-20">
        <TextTitle2 as="p">
          Senior Frontend Engineer with 8+ years of experience building
          high-performance, scalable web applications across Real Estate, Work
          Safety, and Cryptocurrency sectors.
        </TextTitle2>
        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-y-10">
            {resumeData.jobs.map((job) => (
              <div key={job.company} className="flex flex-col">
                <TextTitle3>{job.company}</TextTitle3>
                <TextBody color="level2">{job.role}</TextBody>
                <TextLabel1 color="level4">{job.period}</TextLabel1>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <ResumeLink />
          </div>
        </div>
      </div>
    </section>
  );
}

