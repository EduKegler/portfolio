import { HTMLAttributes, memo } from "react";
import TextBase, { TextBaseProps } from "./TextBase";
import clsx from "clsx";

type TextTitle2Props = TextBaseProps & HTMLAttributes<HTMLSpanElement>;

function TextTitle2({ children, ...props }: TextTitle2Props) {
  return (
    <TextBase
      as="span"
      {...props}
      className={clsx(
        "text-[24px] leading-[32px]",
        "lg:text-[32px] lg:leading-[38px]",
        props.className
      )}
    >
      {children}
    </TextBase>
  );
}
export default memo(TextTitle2);
