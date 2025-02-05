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
        "text-[24vw] leading-[24vw]",
        "sm:text-[100px] sm:leading-[106px]",
        "lg:text-[160px] lg:leading-[170px] font-semibold",
        props.className
      )}
    >
      {children}
    </TextBase>
  );
}
export default memo(TextDisplay1);
