import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { serviceSlugs } from "@/lib/content";
import { ServiceTemplate } from "@/components/layout/service-template";
import type { ServiceContent } from "@/lib/service-types";

const data = serviceSlugs.find((service) => service.slug === "cybersecurity") as ServiceContent | undefined;

export const metadata: Metadata = {
  title: data?.title ?? "Cybersecurity Services",
  description: data?.hero.description,
};

export default function CybersecurityPage() {
  if (!data) return notFound();
  return <ServiceTemplate data={data} />;
}

