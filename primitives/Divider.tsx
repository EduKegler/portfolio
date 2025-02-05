import { memo } from "react";

type DividerProps = {
  className?: string;
};
// TODO: move color to constant
function Divider({ className }: DividerProps) {
  return (
    <div
      className={`w-full  border-t border-level5 ${className ? className : ""}`}
    ></div>
  );
}
export default memo(Divider);
