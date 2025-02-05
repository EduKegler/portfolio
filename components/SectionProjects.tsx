import TextTitle1 from "@/primitives/TextTitle1";
import { memo } from "react";
import Project, { ProjectProps } from "./Project";
import Divider from "@/primitives/Divider";
import AppSwitcher from "@/assets/projects/app-switcher.png";
import SignIn from "@/assets/projects/sign-in.png";
import SignUp from "@/assets/projects/sign-up.png";

const projects: Omit<ProjectProps, "order">[] = [
  {
    name: "App Switcher",
    image: AppSwitcher,
    description:
      "Lorem ipsum dolor sit amet consectetur. Sapien lacus consectetur convallis vestibulum cursus id. Facilisis pretium congue tincidunt pellentesque. Justo sit aliquam mauris aliquam at sollicitudin libero sed venenatis. Sem scelerisque senectus fringilla netus ultrices magna.",
    tags: ["React", "Typescript"],
  },
  {
    name: "Sign In With Wallet",
    image: SignIn,
    description:
      "Lorem ipsum dolor sit amet consectetur. Sapien lacus consectetur convallis vestibulum cursus id. Facilisis pretium congue tincidunt pellentesque. Justo sit aliquam mauris aliquam at sollicitudin libero sed venenatis. Sem scelerisque senectus fringilla netus ultrices magna.",
    tags: ["React", "Typescript", "Web3"],
  },
  {
    name: "Unified Signup",
    image: SignUp,
    description:
      "Lorem ipsum dolor sit amet consectetur. Sapien lacus consectetur convallis vestibulum cursus id. Facilisis pretium congue tincidunt pellentesque. Justo sit aliquam mauris aliquam at sollicitudin libero sed venenatis. Sem scelerisque senectus fringilla netus ultrices magna.",
    tags: ["React", "Typescript"],
  },
];
function SectionProjects() {
  return (
    <section className="px-4 lg:px-20 flex flex-col gap-10 lg:gap-20">
      <TextTitle1>Projects</TextTitle1>
      <div className="flex flex-col">
        {projects.map((project, index) => (
          <div key={project.name} className="flex flex-col">
            {index !== 0 && <Divider className="my-20" />}
            <Project
              name={project.name}
              image={project.image}
              description={project.description}
              tags={project.tags}
              order={index % 2 === 0 ? "left" : "right"}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default memo(SectionProjects);
