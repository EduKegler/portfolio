import { highlightsByCompany } from "@/features/home/data/works";
import { resumeData } from "@/features/resume/data/resume-data";

function years(period: string): string {
  const [from, to] = period.split(" - ");
  const start = from.split("/")[1];
  const end = to === "Present" ? "now" : to.split("/")[1];
  return start === end ? start : `${start}–${end}`;
}

export default function ExperienceList() {
  return (
    <ol className="border-t border-level1/15">
      {resumeData.jobs.map((job) => (
        <li key={job.company} className="border-b border-level1/15 py-4 text-[15px] sm:grid sm:grid-cols-[6.5rem_minmax(0,1fr)] sm:gap-x-6">
          <span className="block tabular-nums text-level3">{years(job.period)}</span>
          <span>
            <span className="font-semibold">{job.company}</span>
            <span className="text-level2">, {job.role}</span>
            {highlightsByCompany[job.company] && (
              <span className="block tabular-nums text-level3">{highlightsByCompany[job.company].join(" · ")}</span>
            )}
          </span>
        </li>
      ))}
    </ol>
  );
}
