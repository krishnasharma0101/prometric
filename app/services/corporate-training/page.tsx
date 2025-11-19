import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { serviceSlugs } from "@/lib/content";
import { ServiceTemplate } from "@/components/layout/service-template";

const data = serviceSlugs.find(
  (service) => service.slug === "corporate-training",
);

export const metadata: Metadata = {
  title: data?.title ?? "Corporate Training",
  description: data?.hero.description,
};

export default function CorporateTrainingPage() {
  if (!data) return notFound();
  return <ServiceTemplate data={data} />;
}

