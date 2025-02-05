import { Color } from "@/contants/colors";
import TextLabel2 from "@/primitives/TextLabel2";
import { memo, ReactNode } from "react";

type TagProps = {
  children: ReactNode;
};

function Tag({ children }: TagProps) {
  return (
    <TextLabel2
      color={Color.foreground}
      className="px-2 py-1 bg-background-light rounded-full"
    >
      {children}
    </TextLabel2>
  );
}

export default memo(Tag);
