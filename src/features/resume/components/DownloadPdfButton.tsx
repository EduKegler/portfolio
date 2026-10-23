import clsx from "clsx";
import styles from "./resume.module.css";

type DownloadPdfButtonProps = {
  href: string;
  downloadName: string;
};

export default function DownloadPdfButton({
  href,
  downloadName,
}: DownloadPdfButtonProps) {
  return (
    <div className={styles.toolbar}>
      <a
        href={href}
        download={downloadName}
        className={clsx(styles.downloadButton, styles.noPrint)}
        aria-label="Download resume as PDF"
      >
        Download PDF
      </a>
    </div>
  );
}
