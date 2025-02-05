import { HTMLAttributes, memo } from "react";
import TextBase, { TextBaseProps } from "./TextBase";

type TextLabel2Props = TextBaseProps & HTMLAttributes<HTMLSpanElement>;

function TextLabel2({ children, ...props }: TextLabel2Props) {
  return (
    <TextBase
      as="span"
      style={{
        fontSize: "12px",
        lineHeight: "14px",
      }}
      {...props}
    >
      {children}
    </TextBase>
  );
}
export default memo(TextLabel2);
