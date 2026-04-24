import Divider from "@/components/ui/Divider";
import TextLabel1 from "@/components/ui/TextLabel1";
import ThemeToggle from "@/components/common/ThemeToggle";

export default function Header() {
  return (
    <header
      className="flex px-4 lg:px-20 gap-4 lg:gap-10 py-6 items-center"
      id="about"
    >
      <TextLabel1 className="whitespace-nowrap">
        Senior Software Engineer
      </TextLabel1>
      <Divider />
      <div className="flex items-center gap-2 lg:gap-6 shrink-0">
        <nav aria-label="Main navigation" className="hidden lg:flex gap-6">
          <a href="#projects" className="hover:opacity-60">
            <TextLabel1>Projects</TextLabel1>
          </a>
          <a href="#experience" className="hover:opacity-60">
            <TextLabel1>Experience</TextLabel1>
          </a>
          <a href="#skills" className="hover:opacity-60">
            <TextLabel1>Skills</TextLabel1>
          </a>
          <a href="#contact" className="hover:opacity-60">
            <TextLabel1>Contact</TextLabel1>
          </a>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}

