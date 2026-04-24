import { HTMLAttributes } from "react";
import TextBase, { TextBaseProps } from "./TextBase";
import clsx from "clsx";

type TextLabel2Props = TextBaseProps & HTMLAttributes<HTMLSpanElement>;

export default function TextLabel2({ children, ...props }: TextLabel2Props) {
  return (
    <TextBase
      as="span"
      {...props}
      className={clsx("text-[12px] leading-[14px]", props.className)}
    >
      {children}
    </TextBase>
  );
}
