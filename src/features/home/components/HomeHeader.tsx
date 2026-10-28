import Link from "next/link";
import ThemeToggle from "@/components/common/ThemeToggle";
import { resumeData } from "@/features/resume/data/resume-data";

export default function HomeHeader() {
  return (
    <header className="flex items-center justify-between gap-6 py-5 lg:py-7 text-[15px]">
      <h1>
        <span className="font-semibold">{resumeData.name}</span>
        <span className="block sm:inline text-level3">
          <span className="hidden sm:inline"> · </span>
          {resumeData.title}
        </span>
      </h1>
      <nav aria-label="Main" className="flex shrink-0 items-center gap-5 lg:gap-7 text-level2">
        <a href="#work" className="-m-2 hidden p-2 hover:text-level1 sm:inline">Work</a>
        <a href="#experience" className="-m-2 hidden p-2 hover:text-level1 sm:inline">Experience</a>
        <Link href="/resume" className="-m-2 p-2 hover:text-level1">CV</Link>
        <a href={`mailto:${resumeData.contact.email}`} className="-m-2 p-2 hover:text-level1">Email</a>
        <ThemeToggle />
      </nav>
    </header>
  );
}
