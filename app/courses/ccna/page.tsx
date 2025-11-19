import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { courseTemplates } from "@/lib/content";
import { CourseTemplate } from "@/components/layout/course-template";

const data = courseTemplates.find((course) => course.slug === "ccna");

export const metadata: Metadata = {
  title: data?.title ?? "CCNA Course",
  description: data?.description,
};

export default function CcnaPage() {
  if (!data) return notFound();
  return <CourseTemplate {...data} />;
}

