import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { courseTemplates } from "@/lib/content";
import { CourseTemplate } from "@/components/layout/course-template";

const data = courseTemplates.find((course) => course.slug === "ccie");

export const metadata: Metadata = {
  title: data?.title ?? "CCIE Course",
  description: data?.description,
};

export default function CciePage() {
  if (!data) return notFound();
  return <CourseTemplate {...data} />;
}

