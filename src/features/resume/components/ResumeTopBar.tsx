import clsx from "clsx";
import Link from "next/link";
import ThemeToggle from "@/components/common/ThemeToggle";
import styles from "./resume.module.css";

type ResumeTopBarProps = {
  pdfHref: string;
  downloadName: string;
};

export default function ResumeTopBar({ pdfHref, downloadName }: ResumeTopBarProps) {
  return (
    <nav aria-label="Resume" className={styles.toolbar}>
      <Link href="/" className={clsx(styles.homeLink, styles.noPrint)}>
        kegler.dev
      </Link>
      <div className={clsx(styles.toolbarActions, styles.noPrint)}>
        <a href={pdfHref} download={downloadName} className={styles.downloadButton}>
          Download PDF
        </a>
        <ThemeToggle />
      </div>
    </nav>
  );
}
