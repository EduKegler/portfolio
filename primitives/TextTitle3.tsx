import { HTMLAttributes, memo } from "react";
import TextBase, { TextBaseProps } from "./TextBase";
import clsx from "clsx";

type TextTitle3Props = TextBaseProps & HTMLAttributes<HTMLSpanElement>;

function TextTitle3({ children, ...props }: TextTitle3Props) {
  return (
    <TextBase
      as="span"
      {...props}
      className={clsx(
        "text-[18px] leading-[22px]",
        "lg:text-[24px] lg:leading-[28px]",
        props.className
      )}
    >
      {children}
    </TextBase>
  );
}
export default memo(TextTitle3);
