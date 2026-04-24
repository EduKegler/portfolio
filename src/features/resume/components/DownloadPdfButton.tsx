import clsx from "clsx";
import styles from "./resume.module.css";

export default function DownloadPdfButton() {
  return (
    <div className={styles.toolbar}>
      <a
        href="/cv.pdf"
        download="eduardo-kegler-cv.pdf"
        className={clsx(styles.downloadButton, styles.noPrint)}
        aria-label="Download resume as PDF"
      >
        Download PDF
      </a>
    </div>
  );
}
