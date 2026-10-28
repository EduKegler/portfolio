import type { Work } from "@/features/home/data/works";

type WorkLabelProps = {
  work: Work;
};

export default function WorkLabel({ work }: WorkLabelProps) {
  return (
    <div className="mt-5 max-w-[36ch] text-[15px] leading-[1.5]">
      <h3 className="text-[17px] font-semibold text-level1">{work.title}</h3>
      <p className="text-level2">
        {work.company}, {work.years}
      </p>
      <p className="mt-1 text-[13px] text-level3">{work.stack.join(", ")}</p>
      <p className="mt-3 text-level2 text-pretty">{work.note}</p>
      <p className="mt-3 font-semibold tabular-nums text-level1">{work.outcome}</p>
      {work.link && (
        <a
          href={work.link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-block text-level2 underline decoration-1 underline-offset-4 hover:text-level1"
        >
          Visit {work.link.label}
        </a>
      )}
    </div>
  );
}
