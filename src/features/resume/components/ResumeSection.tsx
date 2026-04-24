import TextBase from "@/components/ui/TextBase";
import type { ReactNode } from "react";
import styles from "./resume.module.css";

type ResumeSectionProps = {
  title: string;
  tight?: boolean;
  children: ReactNode;
};

export default function ResumeSection({
  title,
  tight = false,
  children,
}: ResumeSectionProps) {
  return (
    <section className={tight ? styles.sectionTight : styles.section}>
      <TextBase
        as="h2"
        color="inherit"
        className={tight ? styles.sectionHeadingTight : styles.sectionHeading}
      >
        {title}
      </TextBase>
      {children}
    </section>
  );
}
