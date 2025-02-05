import TextBody from "@/primitives/TextBody";
import { memo } from "react";
import Copy from "@/assets/copyright.svg";
import Image from "next/image";

function Footer() {
  const currentDate = new Date().getFullYear();
  return (
    <footer className="flex px-4 lg:px-20 gap-2 w-full pb-32 pt-20 lg:py-20 items-center">
      <Image
        src={Copy}
        alt={""}
        width={24}
        height={24}
        className="rounded-full"
      />
      <TextBody>Eduardo Kegler {currentDate}</TextBody>
    </footer>
  );
}

export default memo(Footer);
