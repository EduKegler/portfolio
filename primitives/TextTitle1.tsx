import { HTMLAttributes, memo } from "react";
import TextBase, { TextBaseProps } from "./TextBase";
import clsx from "clsx";

type TextTitle1Props = TextBaseProps & HTMLAttributes<HTMLSpanElement>;

function TextTitle1({ children, ...props }: TextTitle1Props) {
  return (
    <TextBase
      as="span"
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
export default memo(TextTitle1);
