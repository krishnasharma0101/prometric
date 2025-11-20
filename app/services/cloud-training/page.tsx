import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { serviceSlugs } from "@/lib/content";
import { ServiceTemplate } from "@/components/layout/service-template";
import type { ServiceContent } from "@/lib/service-types";

const data = serviceSlugs.find((service) => service.slug === "cloud-training") as ServiceContent | undefined;

export const metadata: Metadata = {
  title: data?.title ?? "Cloud Training",
  description: data?.hero.description,
};

export default function CloudTrainingPage() {
  if (!data) return notFound();
  return <ServiceTemplate data={data} />;
}

