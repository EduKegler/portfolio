"use client";

import { MotionConfig } from "motion/react";
import { ReactNode } from "react";

type ProvidersProps = {
  children: ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
