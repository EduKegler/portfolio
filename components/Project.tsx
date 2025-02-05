import TextBody from "@/primitives/TextBody";
import TextDisplay2 from "@/primitives/TextDisplay2";
import { memo } from "react";
import Image from "next/image";
import clsx from "clsx";
import Tag from "../primitives/Tag";
import { Color } from "@/contants/colors";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type ProjectProps = {
  order: "left" | "right";
  name: string;
  image: string | StaticImport;
  description: string;
  tags: string[];
};

function Project({ order, name, image, description, tags }: ProjectProps) {
  return (
    <article className="flex flex-col md:flex-row gap-20 items-center">
      <div
        className={clsx(
          "flex flex-col gap-6 md:flex-[7]",
          order === "left" ? "md:order-1" : "md:order-2"
        )}
      >
        <div className="flex flex-col gap-4">
          <TextDisplay2 color={Color.foreground}>{name}</TextDisplay2>
          <TextBody>{description}</TextBody>
        </div>
        <div className="flex gap-2">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
      <div
        className={clsx(
          "relative w-[90vw] h-[80vw] sm:w-[380px] sm:h-[300px] lg:w-[430px] lg:h-[335px] self-center md:flex-[5]",
          order === "left" ? "md:order-2" : "md:order-1"
        )}
      >
        <Image
          src={image}
          // TODO: fix alt
          alt="Picture of X Project"
          sizes="100%"
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </div>
    </article>
  );
}

export default memo(Project);
