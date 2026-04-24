import clsx from "clsx";

type DividerProps = {
  className?: string;
};

export default function Divider({ className }: DividerProps) {
  return (
    <div
      className={clsx("w-full border-t border-level5", className)}
    />
  );
}
