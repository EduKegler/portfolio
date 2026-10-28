import { Fragment } from "react";
import type { ResumeContact } from "@/features/resume/data";
import TextBase from "@/components/ui/TextBase";
import styles from "./resume.module.css";

type ResumeHeaderProps = {
  name: string;
  title: string;
  contact: ResumeContact;
};

export default function ResumeHeader({ name, title, contact }: ResumeHeaderProps) {
  const profiles = [
    { name: "LinkedIn", link: contact.linkedin },
    { name: "GitHub", link: contact.github },
    { name: "Portfolio", link: contact.portfolio },
  ];

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
          {`Location: ${contact.location}`}
        </TextBase>
        <TextBase as="p" color="inherit">
          Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </TextBase>
        <TextBase as="p" color="inherit">
          {profiles.map(({ name, link }, index) => (
            <Fragment key={name}>
              {index > 0 && <span className={styles.contactSeparator}>{" | "}</span>}
              <span className={styles.contactItem}>
                {`${name}: `}
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </span>
            </Fragment>
          ))}
        </TextBase>
      </address>
    </header>
  );
}
