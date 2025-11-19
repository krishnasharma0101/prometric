import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/ui/hero";
import { PartnerMarquee } from "@/components/ui/partner-marquee";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/ui/service-card";
import { TestimonialSlider } from "@/components/ui/testimonial-slider";
import { StatsGrid } from "@/components/ui/stats-grid";
import { Button } from "@/components/ui/button";
import {
  services,
  trainingCategories,
  differentiators,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Technology Training & Certification Company",
  description:
    "Enterprise-ready Cisco, Cloud, Cybersecurity, DevOps, and Linux enablement programs with labs, coaching, and certification support.",
};

export default function Home() {
  return (
    <>
      <Hero
        title="Technology Training for Enterprise Transformation"
        subtitle="Blended learning journeys that combine live experts, rack-grade labs, and outcomes reporting so your teams can deploy faster."
        primaryCta={{ label: "Explore Courses", href: "/services" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />
      <PartnerMarquee />

      <section className="space-y-10">
        <SectionHeading
          label="What We Deliver"
          title="Immersive Services for Hybrid Teams"
          description="Mix and match learning paths, modular labs, and certification support for every tech stack."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="space-y-10 rounded-[32px] bg-gradient-to-b from-white via-white to-transparent p-8">
        <SectionHeading
          label="Training Catalog"
          title="Category Tiles"
          description="Purpose-built pathways curated for Cisco, Cloud, Security, DevOps, and Linux teams."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {trainingCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl border border-white/20 bg-white/80 p-6 shadow-card"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
                {category.title}
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                {category.title} Programs
              </h3>
              <p className="mt-3 text-sm text-slate-600">{category.summary}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeading
          label="Why Choose Us"
          title="Designed for Adoption, Not Just Exams"
          description="Every program blends business goals with measurable enablement outcomes."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/30 bg-white/80 p-6 shadow-card"
            >
              <p className="text-lg font-semibold text-slate-900">{item.title}</p>
              <p className="mt-3 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
        <div className="space-y-8 rounded-[32px] border border-white/30 bg-white/80 p-8 shadow-card">
          <SectionHeading
            label="Enterprise Confidence"
            title="Outcomes That Scale"
            description="Track readiness with dashboards and personalized mentor support."
            className="text-left"
          />
          <StatsGrid />
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/about">About TechElevate</Link>
            </Button>
            <Button asChild variant="ghost" className="border border-primary/30 text-primary">
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
        <TestimonialSlider />
      </section>
    </>
  );
}
