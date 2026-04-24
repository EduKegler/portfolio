import { HTMLAttributes } from "react";
import TextBase, { TextBaseProps } from "./TextBase";
import clsx from "clsx";

type TextBodyProps = TextBaseProps &
  (HTMLAttributes<HTMLSpanElement> | HTMLAttributes<HTMLAnchorElement>);

export default function TextBody({ children, as = "p", className, ...props }: TextBodyProps) {
  return (
    <TextBase
      as={as}
      {...props}
      className={clsx(
        "text-[16px] leading-[20px]",
        "lg:text-[20px] lg:leading-[24px]",
        className
      )}
    >
      {children}
    </TextBase>
  );
}
