import clsx from "clsx";
import Link from "next/link";
import { displayFont, labelFont } from "@/lib/fonts";
import { works } from "@/features/home/data/works";
import { resumeData } from "@/features/resume/data/resume-data";
import HomeHeader from "./HomeHeader";
import WorkFigure from "./WorkFigure";
import ExperienceList from "./ExperienceList";

const [lead, ...rest] = works;
const pairs = [rest.slice(0, 2), rest.slice(2, 4)];

const sectionTitle = "font-[family-name:var(--font-display)] text-[28px] tracking-[-0.01em]";
const textLink = "underline decoration-1 underline-offset-4 hover:text-level1";

export default function Home() {
  const { contact } = resumeData;

  return (
    <div className={clsx(displayFont.variable, labelFont.variable, "px-5 sm:px-8 lg:px-16 pb-24 font-[family-name:var(--font-label)] text-level1 [&_:focus-visible]:rounded-sm [&_:focus-visible]:outline-2 [&_:focus-visible]:outline-offset-4 [&_:focus-visible]:outline-ink")}>
      <HomeHeader />

      <main id="main-content">
        <section className="grid items-start gap-12 pt-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 lg:pt-14">
          <div>
            <p className="font-[family-name:var(--font-display)] text-[clamp(2rem,1.2rem+2.4vw,3rem)] leading-[1.08] tracking-[-0.02em] text-balance">
              I build <span className="whitespace-nowrap">sign-in flows</span> and{" "}
              <span className="whitespace-nowrap">trading interfaces</span> for crypto and fintech.
            </p>
            <p className="mt-6 max-w-[46ch] text-[17px] leading-[1.6] text-level2 text-pretty">
              I&apos;m a Senior Frontend Engineer with 8 years of experience, the last 5 in crypto and fintech at{" "}
              <span className="text-level1">Coinbase</span>, <span className="text-level1">Liquid Labs</span> and{" "}
              <span className="text-level1">NG.cash</span>. I own products end to end, from the RFC to the A/B test,
              and work on the backend when a feature needs it. I took the GTE frontend from zero to{" "}
              <strong className="font-semibold text-level1">1M+ testnet users</strong> and raised Coinbase sign-up conversion
              by <strong className="font-semibold text-level1">35%</strong>.
            </p>
            <p className="mt-8 text-[15px] text-level3">Open to remote contract work. Florianópolis, Brazil (UTC-3).</p>
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href={`mailto:${contact.email}`}
                className="rounded-full bg-ink px-5 py-2.5 text-[15px] font-semibold text-[var(--ink-contrast)] transition-[filter] duration-200 hover:brightness-110"
              >
                Email me
              </a>
              <a href="/cv.pdf" className={clsx("text-[15px] text-level2", textLink)}>
                Download CV (PDF)
              </a>
            </div>
          </div>

          <div id="work" className="scroll-mt-8">
            <h2 className="sr-only">Work</h2>
            <WorkFigure work={lead} sizes="(min-width: 1024px) 700px, 100vw" priority />
          </div>
        </section>

        <h2 className={clsx(sectionTitle, "mt-28 lg:mt-40")}>More work</h2>
        <div className="mt-10 flex flex-col gap-20 lg:mt-14 lg:gap-28">
          {pairs.map((pair) => {
            const hasPortrait = pair.some((work) => work.orientation === "portrait");
            return (
              <div
                key={pair[0].id}
                className={clsx("grid gap-20 lg:grid-rows-[auto_auto] lg:gap-x-16 lg:gap-y-0", hasPortrait ? "lg:grid-cols-[220px_minmax(0,1fr)]" : "lg:grid-cols-2")}
              >
                {pair.map((work) => (
                  <WorkFigure
                    key={work.id}
                    work={work}
                    sizes="(min-width: 1024px) 640px, 100vw"
                    className="lg:row-span-2 lg:grid lg:grid-rows-subgrid"
                  />
                ))}
              </div>
            );
          })}
        </div>

        <section id="experience" className="mt-28 grid scroll-mt-8 gap-10 lg:mt-40 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <h2 className={sectionTitle}>Experience</h2>
          <div>
            <ExperienceList />
            <p className="mt-6 text-[15px] text-level2">
              Full history, skills and education in the{" "}
              <Link href="/resume" className={textLink}>CV</Link>.
            </p>
          </div>
        </section>

        <section id="contact" className="mt-28 grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <h2 className={sectionTitle}>Contact</h2>
          <div>
            <a
              href={`mailto:${contact.email}`}
              className="break-all font-[family-name:var(--font-display)] text-[clamp(1.5rem,1rem+1.6vw,2.25rem)] underline decoration-ink decoration-1 underline-offset-[6px] hover:text-ink sm:break-normal"
            >
              {contact.email}
            </a>
            <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-level2">
              <a href={contact.linkedin.url} className={textLink}>LinkedIn</a>
              <a href={contact.github.url} className={textLink}>GitHub</a>
              <span className="text-level3">Florianópolis, Brazil (UTC-3)</span>
            </p>
          </div>
        </section>
      </main>

      <footer className="mt-20 text-[13px] text-level3 lg:mt-24">© {resumeData.name}</footer>
    </div>
  );
}
