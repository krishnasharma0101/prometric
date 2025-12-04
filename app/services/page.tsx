import type { Metadata } from "next";
import Link from "next/link";
import { PageBanner } from "@/components/ui/page-banner";
import { services } from "@/lib/content";
import { ServiceCard } from "@/components/ui/service-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "All Services",
  description:
    "Browse Cisco, Cloud, Cybersecurity, DevOps, Corporate Training, and Certification Support services from Mitralearn.",
};

export default function ServicesPage() {
  return (
    <div className="space-y-16">
      <PageBanner
        title="End-to-end Services Portfolio"
        description="Select specialized academies or blend modules to match your operating model."
      />
      <SectionHeading
        label="Catalog"
        title="Training & Enablement"
        description="Every service includes diagnostics, delivery, labs, and certification guidance."
      />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
      <div className="rounded-[32px] border border-primary/20 bg-gradient-to-r from-primary to-secondary p-10 text-white">
        <h3 className="text-3xl font-semibold">Need a bespoke academy?</h3>
        <p className="mt-3 text-white/80">
          We co-design outcomes, labs, and reporting with your practice leads.
        </p>
        <Button
          asChild
          className="mt-6 bg-white text-primary hover:bg-white/90"
        >
          <Link href="/contact">Design My Program</Link>
        </Button>
      </div>
    </div>
  );
}

