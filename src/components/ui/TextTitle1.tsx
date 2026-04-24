import { HTMLAttributes } from "react";
import TextBase, { TextBaseProps } from "./TextBase";
import clsx from "clsx";

type TextTitle1Props = TextBaseProps & HTMLAttributes<HTMLSpanElement>;

export default function TextTitle1({ children, ...props }: TextTitle1Props) {
  return (
    <TextBase
      as="h3"
      {...props}
      className={clsx(
        "text-[24px] leading-[28px]",
        "lg:text-[40px] lg:leading-[48px]",
        props.className
      )}
    >
      {children}
    </TextBase>
  );
}
