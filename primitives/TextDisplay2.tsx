import { HTMLAttributes, memo } from "react";
import TextBase, { TextBaseProps } from "./TextBase";
import clsx from "clsx";

type TextDisplay2Props = TextBaseProps & HTMLAttributes<HTMLHeadElement>;

function TextDisplay2({ children, as = "h2", ...props }: TextDisplay2Props) {
  return (
    <TextBase
      as={as}
      {...props}
      className={clsx(
        "text-[48px] leading-[52px]",
        "md:text-[52px] md:leading-[60px]",
        "lg:text-[64px] lg:leading-[72px]",
        props.className
      )}
    >
      {children}
    </TextBase>
  );
}
export default memo(TextDisplay2);
