import { memo } from "react";
import About from "@/assets/menu/about.svg";
import Work from "@/assets/menu/work.svg";
import Experience from "@/assets/menu/experience.svg";
import Skills from "@/assets/menu/skills.svg";
import Contact from "@/assets/menu/contact.svg";
import Image from "next/image";
import { Color } from "@/contants/colors";
import TextLabel1 from "@/primitives/TextLabel1";

const menuItems = [
  {
    name: "About",
    icon: About,
    href: "#about",
  },
  {
    name: "Projects",
    icon: Work,
    href: "#projects",
  },
  {
    name: "Experience",
    icon: Experience,
    href: "#experience",
  },
  {
    name: "Skills",
    icon: Skills,
    href: "#skills",
  },
  {
    name: "Contact",
    icon: Contact,
    href: "#contact",
  },
];

function Menu() {
  return (
    <nav className="flex items-center py-2 border border-t-level5 border-solid fixed bottom-0 w-full bg-white lg:hidden">
      {menuItems.map((item) => (
        <a
          className="flex flex-1 items-center flex-col gap-2 text-level3 hover:text-level1"
          key={item.name}
          href={item.href}
        >
          <Image
            src={item.icon}
            alt={`Icon for of ${item.name} section`}
            width={24}
            height={24}
          />
          <TextLabel1 color={Color.inherit}>{item.name}</TextLabel1>
        </a>
      ))}
    </nav>
  );
}

export default memo(Menu);
