import Link from "next/link";
import { PageBanner } from "@/components/ui/page-banner";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

type CourseTemplateProps = {
  title: string;
  description: string;
  audience: string[];
  syllabus: string[];
  duration: string;
  fee: string;
};

export const CourseTemplate = ({
  title,
  description,
  audience,
  syllabus,
  duration,
  fee,
}: CourseTemplateProps) => (
  <div className="space-y-12">
    <PageBanner title={title} description={description} />
    <section className="grid gap-8 md:grid-cols-2">
      <div className="rounded-3xl border border-white/30 bg-white/80 p-8 shadow-card">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
          Who Should Attend
        </p>
        <ul className="mt-4 space-y-4 text-sm text-slate-600">
          {audience.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary/60" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-3xl border border-white/30 bg-white/80 p-8 shadow-card">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
          Program Details
        </p>
        <div className="mt-4 space-y-3 text-sm text-slate-600">
          <p>
            <span className="font-semibold text-slate-900">Duration:</span>{" "}
            {duration}
          </p>
          <p>
            <span className="font-semibold text-slate-900">Investment:</span>{" "}
            {fee}
          </p>
        </div>
        <Button className="mt-8 w-full" asChild>
          <Link href="/contact">Enroll Now</Link>
        </Button>
      </div>
    </section>
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-slate-900">
        Detailed Curriculum
      </h2>
      <Accordion type="single" collapsible className="space-y-4">
        {syllabus.map((topic) => (
          <AccordionItem key={topic} value={topic}>
            <AccordionTrigger>{topic}</AccordionTrigger>
            <AccordionContent>
              Take-home labs, solution walk-throughs, and readiness checkpoints
              contextualize this track for enterprise teams.
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  </div>
);

