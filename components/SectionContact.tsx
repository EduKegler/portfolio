import TextBody from "@/primitives/TextBody";
import TextTitle2 from "@/primitives/TextTitle2";
import TextTitle3 from "@/primitives/TextTitle3";
import { memo } from "react";
import { Color } from "@/contants/colors";
import ProfileImage from "@/assets/profile.jpg";
import Image from "next/image";
import TextDisplay2 from "@/primitives/TextDisplay2";

function SectionContact() {
  return (
    <section className="px-4 lg:px-20 flex flex-col gap-4 lg:gap-10 w-full">
      <Image
        src={ProfileImage}
        alt={""}
        width={80}
        height={80}
        className="rounded-full"
      />
      <div className="flex flex-col gap-10 lg:gap-20">
        <TextDisplay2 color={Color.level1}>Let&apos;s Connect</TextDisplay2>
        <div className="flex flex-col gap-10">
          <div>
            <TextTitle2>
              Feel free to contact me if having any questions.
            </TextTitle2>
            <TextTitle2>
              I&apos;m available for new projects or just for chatting.
            </TextTitle2>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 lg:justify-between">
            <div className="flex flex-col gap-2">
              <TextTitle3 color={Color.level4}>Get in touch</TextTitle3>
              <a href="mailto:eduardokegler1@gmail.com">
                <TextBody>eduardokegler1@gmail.com</TextBody>
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <TextTitle3 color={Color.level4}>Phone</TextTitle3>
              <a href="phone:+5548984148966">
                <TextBody>+5548984148966</TextBody>
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <TextTitle3 color={Color.level4}>LinkedIn</TextTitle3>
              <a
                href="https://www.linkedin.com/in/eduardokegler/"
                target="_blank"
              >
                <TextBody>eduardokegler</TextBody>
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <TextTitle3 color={Color.level4}>Github</TextTitle3>
              <a href="https://github.com/EduKegler" target="_blank">
                <TextBody>EduKegler</TextBody>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(SectionContact);
