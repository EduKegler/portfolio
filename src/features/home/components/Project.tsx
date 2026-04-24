import TextBody from "@/components/ui/TextBody";
import TextDisplay2 from "@/components/ui/TextDisplay2";
import { ReactNode } from "react";
import Image from "next/image";
import clsx from "clsx";
import Tag from "@/components/ui/Tag";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type ProjectProps = {
  order: "left" | "right";
  name: string;
  company: string;
  image: string | StaticImport;
  description: ReactNode;
  tags: string[];
  priority?: boolean;
};

export default function Project({ order, name, image, company, description, tags, priority = false }: ProjectProps) {
  return (
    <article className="flex flex-col md:flex-row gap-20 items-center">
      <div
        className={clsx(
          "flex flex-col gap-6 md:flex-7",
          order === "left" ? "md:order-1" : "md:order-2"
        )}
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <TextDisplay2 color={"level1"}>{name}</TextDisplay2>
            <TextBody color={"level1"} as="span" className="text-wrap">{`@ ${company}`}</TextBody>
          </div>
          <TextBody>{description}</TextBody>
        </div>
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
      <div
        className={clsx(
          "relative w-[90vw] h-[80vw] sm:w-[350px] sm:h-[280px] lg:w-[430px] lg:h-[335px] self-center md:flex-5",
          order === "left" ? "md:order-2" : "md:order-1"
        )}
      >
        <Image
          src={image}
          priority={priority}
          alt={`Picture of ${name} Project`}
          sizes="(max-width: 414px) 90vw, (max-width: 768px) 350px, 430px"
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </div>
    </article>
  );
}

