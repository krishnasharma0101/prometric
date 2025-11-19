import Link from "next/link";
import { ReactNode } from "react";
import { PageBanner } from "@/components/ui/page-banner";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type ServiceContent = {
  slug: string;
  title: string;
  hero: {
    title: string;
    description: string;
  };
  coverage: string[];
  courses: string[];
};

type ServiceTemplateProps = {
  data: ServiceContent;
  syllabusSections?: { title: string; content: ReactNode }[];
};

const defaultSyllabus = [
  {
    title: "Strategy & Readiness",
    content:
      "Stakeholder discovery, skill assessments, and curriculum mapping aligned to enterprise goals.",
  },
  {
    title: "Hands-on Delivery",
    content:
      "Live instructor sessions, on-demand labs, capstone projects, and mentor reviews.",
  },
  {
    title: "Certification Support",
    content:
      "Mock exams, readiness checks, and exam logistics handled by our success concierge.",
  },
];

export const ServiceTemplate = ({
  data,
  syllabusSections = defaultSyllabus,
}: ServiceTemplateProps) => {
  return (
    <div className="space-y-12">
      <PageBanner title={data.hero.title} description={data.hero.description} />

      <section className="grid gap-8 md:grid-cols-2">
        <Card className="p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
            What&apos;s Included
          </p>
          <ul className="mt-6 space-y-4 text-sm text-slate-600">
            {data.coverage.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary/60" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
        <Card className="p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
            Flagship Courses
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {data.courses.map((course) => (
              <span
                key={course}
                className="rounded-full border border-primary/20 px-4 py-2 text-sm font-medium text-primary"
              >
                {course}
              </span>
            ))}
          </div>
          <Button className="mt-8 w-full" asChild>
            <Link href="/contact">Book a Demo</Link>
          </Button>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900">
          Detailed Syllabus
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {syllabusSections.map((section) => (
            <AccordionItem key={section.title} value={section.title}>
              <AccordionTrigger>{section.title}</AccordionTrigger>
              <AccordionContent>{section.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
};

