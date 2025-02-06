import { HTMLAttributes, memo } from "react";
import TextBase, { TextBaseProps } from "./TextBase";
import clsx from "clsx";

type TextDisplay1Props = TextBaseProps & HTMLAttributes<HTMLHeadElement>;

function TextDisplay1({ children, as = "h2", ...props }: TextDisplay1Props) {
  return (
    <TextBase
      as={as}
      {...props}
      className={clsx(
        "text-[24vw] leading-[24vw] font-semibold",
        "sm:text-[100px] sm:leading-[106px]",
        "md:text-[112px] sm:leading-[120px]",
        "lg:text-[134px] lg:leading-[140px] ",
        props.className
      )}
    >
      {children}
    </TextBase>
  );
}
export default memo(TextDisplay1);
