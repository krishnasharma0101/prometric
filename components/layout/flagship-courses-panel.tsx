"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import type { CourseTreeNode } from "@/lib/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { PrequalAssessment } from "@/components/layout/prequal-assessment";
import { enrollInCourse, isEnrolled } from "@/lib/enrollment";

type Module = {
  title: string;
  topics: string[];
};

type FlagshipCoursesPanelProps = {
  courses: string[];
  courseDetails?: Record<string, Module[]>;
  courseTree?: CourseTreeNode[];
  serviceSlug?: string;
};

const fallbackModule: Module = {
  title: "Curriculum Overview",
  topics: [
    "Instructor-led sessions tailored to your use cases.",
    "Hands-on labs, design reviews, and mentor checkpoints.",
    "Certification readiness support with mock exams.",
  ],
};

const flattenTree = (nodes: CourseTreeNode[]): string[] =>
  nodes.flatMap((node) => [
    ...(node.courses?.map((course) => course.name) ?? []),
    ...(node.children ? flattenTree(node.children) : []),
  ]);

export const FlagshipCoursesPanel = ({
  courses,
  courseDetails,
  courseTree,
  serviceSlug,
}: FlagshipCoursesPanelProps) => {
  const treeCourses = useMemo(() => {
    if (courseTree?.length) return flattenTree(courseTree);
    return courses;
  }, [courses, courseTree]);

  const [activeCourse, setActiveCourse] = useState<string>(
    treeCourses[0] ?? courses[0],
  );

  useEffect(() => {
    if (treeCourses.length) {
      setActiveCourse((prev) =>
        treeCourses.includes(prev) ? prev : treeCourses[0],
      );
    }
  }, [treeCourses]);

  const modules = courseDetails?.[activeCourse] ?? [fallbackModule];

  const renderTree = (node: CourseTreeNode) => (
    <AccordionItem key={node.label} value={node.label}>
      <AccordionTrigger className="text-left text-sm font-semibold uppercase tracking-[0.3em] text-primary">
        {node.label}
      </AccordionTrigger>
      <AccordionContent className="space-y-4">
        {node.description ? (
          <p className="text-sm text-slate-600">{node.description}</p>
        ) : null}
        {node.children && (
          <Accordion type="multiple" className="space-y-3 pl-2">
            {node.children.map((child) => (
              <AccordionItem key={child.label} value={child.label}>
                <AccordionTrigger className="text-left text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  {child.label}
                </AccordionTrigger>
                <AccordionContent>
                  {child.description ? (
                    <p className="mb-3 text-sm text-slate-500">
                      {child.description}
                    </p>
                  ) : null}
                  {child.courses ? (
                    <div className="flex flex-wrap gap-2">
                      {child.courses.map((course) => {
                        const isActive = course.name === activeCourse;
                        const highlight =
                          course.note?.toLowerCase().includes("core");
                        return (
                          <button
                            key={course.name}
                            type="button"
                            onClick={() => setActiveCourse(course.name)}
                            className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition ${
                              isActive
                                ? "border-transparent bg-gradient-to-r from-primary to-secondary text-white shadow-card"
                                : highlight
                                  ? "border-secondary/40 text-secondary hover:border-secondary"
                                  : "border-primary/30 text-primary hover:border-primary"
                            }`}
                          >
                            {course.name}
                            {course.note ? (
                              <span
                                className={`ml-1 text-xs font-normal ${
                                  isActive
                                    ? "text-white/80"
                                    : highlight
                                      ? "text-secondary"
                                      : "text-primary/70"
                                }`}
                              >
                                {course.note}
                              </span>
                            ) : null}
                          </button>
                        );
                      })}
                    </div>
                  ) : null}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
        {node.courses && !node.children ? (
          <div className="flex flex-wrap gap-2">
            {node.courses.map((course) => {
              const isActive = course.name === activeCourse;
              const highlight = course.note?.toLowerCase().includes("core");
              return (
                <button
                  key={course.name}
                  type="button"
                  onClick={() => setActiveCourse(course.name)}
                  className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition ${
                    isActive
                      ? "border-transparent bg-gradient-to-r from-primary to-secondary text-white shadow-card"
                      : highlight
                        ? "border-secondary/40 text-secondary hover:border-secondary"
                        : "border-primary/30 text-primary hover:border-primary"
                  }`}
                >
                  {course.name}
                  {course.note ? (
                    <span
                      className={`ml-1 text-xs font-normal ${
                        isActive
                          ? "text-white/80"
                          : highlight
                            ? "text-secondary"
                            : "text-primary/70"
                      }`}
                    >
                      {course.note}
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
        ) : null}
      </AccordionContent>
    </AccordionItem>
  );

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
          Flagship Pathways
        </p>
        <p className="mt-2 text-sm text-slate-500">
          Core exams appear with a turquoise outline. Passing a core exam validates foundational
          architecture skills and unlocks advanced concentrations or CCIE eligibility within the same track.
        </p>
        <div className="mt-6 space-y-4">
          {courseTree?.length ? (
            <Accordion type="multiple" className="space-y-3">
              {courseTree.map((node) => renderTree(node))}
            </Accordion>
          ) : (
            <div className="flex flex-wrap gap-2">
              {courses.map((course) => {
                const isActive = course === activeCourse;
                return (
                  <button
                    key={course}
                    type="button"
                    onClick={() => setActiveCourse(course)}
                    className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition ${
                      isActive
                        ? "border-transparent bg-gradient-to-r from-primary to-secondary text-white shadow-card"
                        : "border-primary/30 text-primary hover:border-primary"
                    }`}
                  >
                    {course}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </Card>

      <Card className="p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
          Course Outline — {activeCourse}
        </p>
        <div className="mt-6 space-y-5">
          {modules.map((module) => (
            <div key={module.title}>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                {module.title}
              </p>
              <ul className="mt-2 space-y-2 text-sm text-slate-600">
                {module.topics.map((topic) => (
                  <li key={topic} className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/60" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Button asChild className="mt-8 w-full">
          <Link href={`/contact?course=${encodeURIComponent(activeCourse)}`}>
            Book a Demo for {activeCourse}
          </Link>
        </Button>
        <Button
          onClick={() => {
            enrollInCourse(activeCourse, serviceSlug);
            // Show success feedback
            alert(`Successfully enrolled in ${activeCourse}! Check "My Courses" to view your enrolled courses.`);
          }}
          disabled={isEnrolled(activeCourse)}
          className="mt-3 w-full bg-gradient-to-r from-emerald-600 to-teal-400 text-base font-semibold hover:from-emerald-700 hover:to-teal-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isEnrolled(activeCourse) ? "Already Enrolled" : "Enroll Now"}
        </Button>
        <div className="mt-6">
          <PrequalAssessment course={activeCourse} />
        </div>
      </Card>
    </div>
  );
};

