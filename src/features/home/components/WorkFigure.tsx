import Image from "next/image";
import clsx from "clsx";
import type { Work } from "@/features/home/data/works";
import WorkLabel from "./WorkLabel";

type WorkFigureProps = {
  work: Work;
  sizes: string;
  priority?: boolean;
  hangHeight?: string;
};

export default function WorkFigure({ work, sizes, priority, hangHeight }: WorkFigureProps) {
  return (
    <figure id={work.id} className="scroll-mt-8">
      <div className={clsx("flex items-center", hangHeight)}>
        <div
          className={clsx(
            "w-full bg-white p-[clamp(6px,0.9vw,12px)] ring-1 ring-level1/10 shadow-[0_18px_40px_-18px_rgba(47,49,76,0.45),0_2px_6px_-2px_rgba(47,49,76,0.18)] dark:bg-[#1c1f2d] dark:ring-white/10 dark:shadow-[0_18px_40px_-18px_rgba(0,0,0,0.8)]",
            work.orientation === "portrait" && "max-w-[220px]",
          )}
        >
          <Image src={work.image} alt={work.alt} sizes={sizes} priority={priority} className="block h-auto w-full" />
        </div>
      </div>
      <figcaption>
        <WorkLabel work={work} />
      </figcaption>
    </figure>
  );
}
