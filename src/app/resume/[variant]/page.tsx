import ResumeView from "@/features/resume/components/ResumeView";
import {
  TAILORED_VARIANTS,
  findVariant,
} from "@/features/resume/data/variants";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type ResumeVariantPageProps = {
  params: Promise<{ variant: string }>;
};

export const dynamicParams = false;

export function generateStaticParams(): { variant: string }[] {
  return TAILORED_VARIANTS.map((variant) => ({ variant: variant.slug }));
}

export async function generateMetadata({
  params,
}: ResumeVariantPageProps): Promise<Metadata> {
  const variant = findVariant((await params).variant);
  return { description: variant?.data.summary };
}

export default async function ResumeVariantPage({
  params,
}: ResumeVariantPageProps) {
  const variant = findVariant((await params).variant);
  if (!variant) {
    notFound();
  }
  return <ResumeView variant={variant} />;
}
