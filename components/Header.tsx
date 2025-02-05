import Divider from "@/primitives/Divider";
import TextLabel1 from "@/primitives/TextLabel1";
import { memo } from "react";

function Header() {
  return (
    <header className="flex px-4 lg:px-20 gap-4 lg:gap-10 py-6 items-center">
      <TextLabel1 className="whitespace-nowrap">
        Senior Software Engineer
      </TextLabel1>
      <Divider />
      <nav className="hidden lg:flex gap-6 ">
        <a href="#projects">
          <TextLabel1>Projects</TextLabel1>
        </a>
        <a href="#experience">
          <TextLabel1>Experience</TextLabel1>
        </a>
        <a href="#skills">
          <TextLabel1>Skills</TextLabel1>
        </a>
        <a href="#contact">
          <TextLabel1>Contact</TextLabel1>
        </a>
      </nav>
    </header>
  );
}

export default memo(Header);
