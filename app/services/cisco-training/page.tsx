import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { serviceSlugs } from "@/lib/content";
import { ServiceTemplate } from "@/components/layout/service-template";
import type { ServiceContent } from "@/lib/service-types";

const data = serviceSlugs.find((service) => service.slug === "cisco-training") as ServiceContent | undefined;

export const metadata: Metadata = {
  title: data?.title ?? "Cisco Training",
  description: data?.hero.description,
};

export default function CiscoTrainingPage() {
  if (!data) return notFound();
  return <ServiceTemplate data={data} />;
}

