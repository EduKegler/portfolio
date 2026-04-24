import type { TextColor } from "@/types/colors";
import clsx from "clsx";
import { CSSProperties, ReactNode } from "react";

export type TextBaseProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  color?: TextColor;
  as?: "span" | "h1" | "h2" | "h3" | "h4" | "a" | "p";
};

const colorClasses: Record<TextColor, string> = {
  level1: "text-level1",
  level2: "text-level2",
  level3: "text-level3",
  level4: "text-level4",
  level5: "text-level5",
  surface: "text-surface",
  inherit: "text-inherit",
};

export default function TextBase({
  children,
  className,
  style,
  color = "level2",
  as: Component = "span",
}: TextBaseProps) {
  return (
    <Component className={clsx(colorClasses[color], className)} style={style}>
      {children}
    </Component>
  );
}
