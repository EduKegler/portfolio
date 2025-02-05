import { HTMLAttributes, memo } from "react";
import TextBase, { TextBaseProps } from "./TextBase";
import clsx from "clsx";

type TextBodyProps = TextBaseProps &
  (HTMLAttributes<HTMLSpanElement> | HTMLAttributes<HTMLAnchorElement>);

function TextBody({ children, as = "span", ...props }: TextBodyProps) {
  return (
    <TextBase
      as={as}
      {...props}
      className={clsx(
        "text-[16px] leading-[20px]",
        "lg:text-[20px] lg:leading-[24px]",
        props.className
      )}
      {...props}
    >
      {children}
    </TextBase>
  );
}
export default memo(TextBody);
