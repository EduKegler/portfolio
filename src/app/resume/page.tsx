import ResumeView from "@/features/resume/components/ResumeView";
import { resumeDefaultVariant } from "@/features/resume/data/variants";

export default function ResumePage() {
  return <ResumeView variant={resumeDefaultVariant} />;
}
