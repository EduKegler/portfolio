import ResumeView from "@/features/resume/components/ResumeView";
import {
  findTailoredVariant,
  loadTailoredVariants,
} from "@/features/resume/data/tailored-variants";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type ResumeVariantPageProps = {
  params: Promise<{ variant: string }>;
};

export const dynamicParams = false;

export function generateStaticParams(): { variant: string }[] {
  return loadTailoredVariants().map((variant) => ({ variant: variant.slug }));
}

export async function generateMetadata({
  params,
}: ResumeVariantPageProps): Promise<Metadata> {
  const variant = findTailoredVariant((await params).variant);
  return { description: variant?.data.summary };
}

export default async function ResumeVariantPage({
  params,
}: ResumeVariantPageProps) {
  const variant = findTailoredVariant((await params).variant);
  if (!variant) {
    notFound();
  }
  return <ResumeView variant={variant} />;
}
