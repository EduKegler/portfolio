import type { ResumeContact } from "@/features/resume/data";
import TextBase from "@/components/ui/TextBase";
import styles from "./resume.module.css";

type ResumeHeaderProps = {
  name: string;
  title: string;
  contact: ResumeContact;
};

export default function ResumeHeader({ name, title, contact }: ResumeHeaderProps) {
  return (
    <header className={styles.header}>
      <TextBase as="h1" color="inherit" className={styles.name}>
        {name}
      </TextBase>
      <TextBase as="p" color="inherit" className={styles.title}>
        {title}
      </TextBase>
      <hr className={styles.topRule} aria-hidden="true" />
      <address className={styles.contactBlock}>
        <TextBase as="p" color="inherit">
          {`Location: ${contact.location} | Phone: ${contact.phone}`}
        </TextBase>
        <TextBase as="p" color="inherit">
          Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </TextBase>
        <TextBase as="p" color="inherit">
          LinkedIn:{" "}
          <a
            href={contact.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.linkedin.label}
          </a>
          {" | GitHub: "}
          <a
            href={contact.github.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.github.label}
          </a>
          {" | Portfolio: "}
          <a
            href={contact.portfolio.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.portfolio.label}
          </a>
        </TextBase>
      </address>
    </header>
  );
}
