import Image from "next/image";
import TextBody from "@/components/ui/TextBody";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import clsx from "clsx";

export type FrontSkillProps = {
  image: string | StaticImport;
  label: string;
};

export default function FrontSkill({ image, label }: FrontSkillProps) {
  return (
    <div className="flex flex-1 flex-col gap-1 items-center justify-between h-full">
      <div className={clsx("relative w-[48px] h-[48px]")}>
        <Image
          src={image}
          alt={`Logo of ${label} skill`}
          sizes="48px"
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      <TextBody>{label}</TextBody>
    </div>
  );
}

