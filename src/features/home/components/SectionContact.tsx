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
                aria-label="Hire Eduardo Kegler on Toptal"
              >
                <TextBody>Hire me on Toptal</TextBody>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default memo(SectionContact);
