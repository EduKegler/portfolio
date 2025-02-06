import { Color } from "@/contants/colors";
import { CSSProperties, memo, ReactNode } from "react";

export type TextBaseProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  color?: Color;
  as?: "span" | "h1" | "h2" | "h3" | "h4" | "a" | "p";
};

function TextBase({
  children,
  className,
  style,
  color = Color.level2,
  as: Component = "span",
}: TextBaseProps) {
  return (
    <Component className={className} style={{ ...style, color }}>
      {children}
    </Component>
  );
}
export default memo(TextBase);
