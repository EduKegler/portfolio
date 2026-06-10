"use client";
import TextBody from "@/components/ui/TextBody";
import TextTitle2 from "@/components/ui/TextTitle2";
import TextTitle3 from "@/components/ui/TextTitle3";
import { memo } from "react";
import ProfileImage from "@/assets/profile.jpg";
import Image from "next/image";
import TextDisplay2 from "@/components/ui/TextDisplay2";
import { motion } from "motion/react";

function SectionContact() {
  return (
    <motion.section
      className="px-4 lg:px-20 flex flex-col gap-4 lg:gap-10 w-full"
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Image
        src={ProfileImage}
        alt="Picture of Eduardo"
        width={80}
        height={80}
        className="rounded-full"
      />
      <div className="flex flex-col gap-10 lg:gap-20">
        <TextDisplay2 color={"level1"}>Let&apos;s Connect</TextDisplay2>
        <div className="flex flex-col gap-10">
          <div>
            <TextTitle2 as="p">
              Feel free to contact me if having any questions.
            </TextTitle2>
            <TextTitle2 as="p">
              I&apos;m available for new projects or just for chatting.
            </TextTitle2>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 lg:justify-between">
            <div className="flex flex-col gap-2">
              <TextTitle3 color={"level4"}>Get in touch</TextTitle3>
              <a
                href="mailto:eduardokegler1@gmail.com"
                className="hover:opacity-60"
                aria-label="Send email to eduardokegler1@gmail.com"
              >
                <TextBody>eduardokegler1@gmail.com</TextBody>
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <TextTitle3 color={"level4"}>Phone</TextTitle3>
              <a href="tel:+5548984148966" className="hover:opacity-60" aria-label="Call +5548984148966">
                <TextBody>+5548984148966</TextBody>
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <TextTitle3 color={"level4"}>LinkedIn</TextTitle3>
              <a
                href="https://www.linkedin.com/in/eduardokegler/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-60"
                aria-label="Visit Eduardo Kegler's LinkedIn profile"
              >
                <TextBody>eduardokegler</TextBody>
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <TextTitle3 color={"level4"}>Github</TextTitle3>
              <a
                href="https://github.com/EduKegler"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-60"
                aria-label="Visit Eduardo Kegler's GitHub profile"
              >
                <TextBody>EduKegler</TextBody>
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <TextTitle3 color={"level4"}>Toptal</TextTitle3>
              <a
                href="https://www.toptal.com/developers/resume/eduardo-da-silva-kegler#NWoaKm"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-60"
                aria-label="Visit Eduardo Kegler's Toptal profile — Top 3% Talent"
              >
                <svg
                  viewBox="0 0 108 30"
                  width={100}
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <g clipRule="evenodd" fill="currentColor" fillRule="evenodd">
                    <path d="m8.11 0 6.71 6.7c.05.05.09.1.15.15l5.85 5.85-9.51 9.46 4.35 4.36-2.91 2.89-6.66-6.66c-.08-.07-.16-.15-.24-.23l-5.85-5.84 9.48-9.43-4.32-4.31zm4.25 10.5c-.09-.02-.18-.02-.26 0-.09.03-.16.07-.32.22l-5.41 5.39c-.16.16-.2.23-.22.31-.03.09-.03.18 0 .26.02.09.07.17.22.32l1.72 1.72c.15.15.22.19.31.22.09.02.17.02.26 0 .09-.03.16-.07.31-.22l5.41-5.39c.16-.15.2-.23.23-.31.02-.09.02-.17 0-.26s-.07-.16-.22-.31l-1.72-1.72c-.15-.16-.23-.2-.31-.23z" />
                    <path d="m62.65 7.76c2.11 0 3.91.82 5.34 2.4 1.46 1.53 2.19 3.64 2.18 6.26 0 2.56-.75 4.8-2.24 6.38-1.47 1.57-3.34 2.37-5.58 2.37-1.93-.01-3.68-.7-4.84-1.89l-.16-.17-.01 6.75-3.82-.01v-.28l.04-21.61h3.8l-.01 2.64c1.25-1.41 3.26-2.84 5.3-2.84zm24.45.06c2.18 0 3.68.49 4.84 1.44 1.11.92 1.7 2.56 1.75 4.29v.26l-.02 11.14h-3.87v-.46c0-.48 0-.97 0-1.47-1.12 1.55-2.68 2.3-4.76 2.3-1.65 0-3.05-.5-4.07-1.43-1.03-.94-1.58-2.23-1.58-3.73.02-2.83 2.02-4.79 5.52-5.4l.27-.05 4.64-.73v-.37c0-.78-.23-1.72-.69-2.11-.47-.4-1.04-.73-2.03-.73-2.73 0-3.29 2.01-3.32 3.02v.09l-3.42.04c0-1.49.69-3.42 2.08-4.63 1.12-.97 2.75-1.42 4.33-1.47h.3zm-14.98-4.36h3.81l-.01 4.56h3.53v3.18l-3.54-.01-.01 8.54c0 .94.19 1.56.6 1.85.43.3 1.3.02 1.3.02l.34 3.32s-1.2.31-1.96.31c-.99 0-1.84-.25-2.49-.75-1.06-.8-1.6-2.2-1.6-4.17l.02-9.12-3.19-3.19 3.2.01zm-22.46 6.8c1.1 1.13 2.41 3.14 2.4 6.26-.01 3.11-1.32 5.11-2.41 6.24-1.5 1.54-3.54 2.42-5.59 2.42-.08 0-.16 0-.25-.01-2.19-.01-4.13-.79-5.75-2.33-1.63-1.55-2.46-3.68-2.46-6.36s.84-4.82 2.47-6.36c1.62-1.53 3.55-2.3 5.75-2.3 2.17-.07 4.29.83 5.84 2.44zm-8.81-7.04v3.77l-7.36.01.02 17.97-3.97-.01v-.34l.03-17.63h-7.51l.01-3.77zm54.68.25 3.42.01v.09l-.03 21.38-3.42-.01v-.1zm-5.71 13.58-3.81.64c-1.86.32-2.72 1.04-2.73 2.3-.01 1.15.81 1.92 2.09 1.99h.16.02c2.44 0 4.17-1.9 4.26-4.67l.01-.22zm-46.02-5.84c-1.28 0-2.39.49-3.29 1.47-.88.96-1.33 2.24-1.33 3.81 0 1.58.45 2.86 1.33 3.82.89.98 2 1.47 3.28 1.48 1.3 0 2.42-.49 3.31-1.47.9-.98 1.35-2.26 1.36-3.81.01-1.56-.45-2.84-1.35-3.82s-2.01-1.48-3.31-1.48zm17.94.12h-.02c-1.28 0-2.34.46-3.24 1.43-.9.94-1.35 2.16-1.36 3.63 0 1.49.45 2.83 1.35 3.8.92.95 1.98 1.42 3.25 1.42 1.29 0 2.38-.48 3.25-1.41.91-.97 1.35-2.3 1.36-3.79 0-1.48-.46-2.7-1.34-3.63-.87-.96-1.96-1.45-3.25-1.45z" />
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default memo(SectionContact);
