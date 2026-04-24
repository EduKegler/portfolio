import TextLabel2 from "@/components/ui/TextLabel2";
import { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
};

export default function Tag({ children }: TagProps) {
  return (
    <TextLabel2
      color="level1"
      className="px-2 py-1 bg-level5 rounded-full"
    >
      {children}
    </TextLabel2>
  );
}

