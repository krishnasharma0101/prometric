import Link from "next/link";
import { ReactNode } from "react";
import { PageBanner } from "@/components/ui/page-banner";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FlagshipCoursesPanel } from "@/components/layout/flagship-courses-panel";
import type { CourseTreeNode } from "@/lib/content";
import { AdaptivePathPlanner } from "@/components/layout/adaptive-path";

type ServiceContent = {
  slug: string;
  title: string;
  hero: {
    title: string;
    description: string;
  };
  coverage: string[];
  courses: string[];
  courseDetails?: Record<string, { title: string; topics: string[] }[]>;
  courseTree?: CourseTreeNode[];
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
  const availableCourses = Array.from(new Set(data.courses));
  return (
    <div className="space-y-12">
      <PageBanner title={data.hero.title} description={data.hero.description} />

      <section className="space-y-8">
        <FlagshipCoursesPanel
          courses={data.courses}
          courseDetails={data.courseDetails}
          courseTree={data.courseTree}
        />
        <AdaptivePathPlanner
          courseTree={data.courseTree}
          availableCourses={availableCourses}
        />
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

