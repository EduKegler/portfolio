import { HTMLAttributes, memo } from "react";
import TextBase, { TextBaseProps } from "./TextBase";
import clsx from "clsx";

type TextLabel1Props = TextBaseProps & HTMLAttributes<HTMLSpanElement>;

function TextLabel1({ children, ...props }: TextLabel1Props) {
  return (
    <TextBase
      as="span"
      {...props}
      className={clsx(
        "text-[12px] leading-[16px]",
        "lg:text-[16px] lg:leading-[20px]",
        props.className
      )}
    >
      {children}
    </TextBase>
  );
}
export default memo(TextLabel1);
