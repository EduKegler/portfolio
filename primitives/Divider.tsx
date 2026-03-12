import clsx from "clsx";
import { memo } from "react";

type DividerProps = {
  className?: string;
};

function Divider({ className }: DividerProps) {
  return (
    <div
      className={clsx("w-full border-t border-level5", className)}
    />
  );
}
export default memo(Divider);
