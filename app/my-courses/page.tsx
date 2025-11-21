"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageBanner } from "@/components/ui/page-banner";
import type { EnrolledCourse } from "@/lib/enrollment";
import {
  getEnrolledCourses,
  unenrollFromCourse,
  hasCompletedAssessment,
  markAssessmentCompleted,
  saveAssessmentScore,
  getAssessmentScores,
} from "@/lib/enrollment";
import { getCourseDescription } from "@/lib/course-utils";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, BookOpen, Headphones } from "lucide-react";

export default function MyCoursesPage() {
  const [enrolledCourses, setEnrolledCourses] = useState<EnrolledCourse[]>([]);
  const [selectedMode, setSelectedMode] = useState<Record<string, string>>({});
  const [assessmentScores, setAssessmentScores] = useState<
    Record<string, { score: number; level: string }>
  >({});

  const loadCourses = () => {
    setEnrolledCourses(getEnrolledCourses());
    // Load persisted assessment scores
    setAssessmentScores(getAssessmentScores());
  };

  useEffect(() => {
    loadCourses();
    
    // Listen for enrollment changes and assessment results
    const handleEnrollment = () => loadCourses();
    const handleAssessmentResult = (event: CustomEvent) => {
      const { course, score, level } = event.detail;
      saveAssessmentScore(course, score, level);
      markAssessmentCompleted(course);
      setAssessmentScores((prev) => ({
        ...prev,
        [course]: { score, level },
      }));
      loadCourses(); // Refresh to update UI
    };
    
    window.addEventListener("courseEnrolled", handleEnrollment);
    window.addEventListener("courseUnenrolled", handleEnrollment);
    window.addEventListener("assessment-completed", handleAssessmentResult as EventListener);
    
    // Listen for postMessage from assessment window
    const handleMessage = (event: MessageEvent) => {
      if (
        typeof window !== "undefined" &&
        event.origin === window.location.origin
      ) {
        const data = event.data;
        if (data?.type === "assessment-result") {
          saveAssessmentScore(data.course, data.score, data.level);
          markAssessmentCompleted(data.course);
          setAssessmentScores((prev) => ({
            ...prev,
            [data.course]: { score: data.score, level: data.level },
          }));
          // Dispatch custom event
          window.dispatchEvent(
            new CustomEvent("assessment-completed", {
              detail: {
                course: data.course,
                score: data.score,
                level: data.level,
              },
            })
          );
        }
      }
    };
    
    window.addEventListener("message", handleMessage);
    
    return () => {
      window.removeEventListener("courseEnrolled", handleEnrollment);
      window.removeEventListener("courseUnenrolled", handleEnrollment);
      window.removeEventListener("assessment-result", handleAssessmentResult as EventListener);
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const handleUnenroll = (courseName: string) => {
    if (confirm(`Are you sure you want to unenroll from ${courseName}?`)) {
      unenrollFromCourse(courseName);
      loadCourses();
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleModeSelect = (courseName: string, mode: string) => {
    setSelectedMode((prev) => ({ ...prev, [courseName]: mode }));
    // Store the selected mode
    if (typeof window !== "undefined") {
      localStorage.setItem(`course_mode_${courseName}`, mode);
    }
    // Here you can add logic to start the course in the selected mode
    console.log(`Starting ${courseName} in ${mode} mode`);
  };

  const getStoredMode = (courseName: string): string | null => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(`course_mode_${courseName}`);
  };

  const openAssessmentWindow = (courseName: string) => {
    const url = `/assessment?course=${encodeURIComponent(courseName)}`;
    window.open(url, "assessment-window", "width=920,height=720");
  };

  const handleStartCourse = (courseName: string) => {
    const mode = selectedMode[courseName] || getStoredMode(courseName);
    if (!mode) {
      alert("Please select a learning mode first.");
      return;
    }
    // Navigate to course page with mode parameter
    window.location.href = `/course/${encodeURIComponent(courseName)}?mode=${mode}`;
  };

  return (
    <div className="space-y-12">
      <PageBanner
        title="My Courses"
        description="View and manage your enrolled courses. Track your learning journey and access course materials."
      />

      {enrolledCourses.length === 0 ? (
        <Card className="p-12 text-center">
          <p className="text-lg font-semibold text-slate-700">
            No courses enrolled yet
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Browse our services and enroll in courses to get started on your
            learning journey.
          </p>
          <Button asChild className="mt-6">
            <Link href="/services">Browse Courses</Link>
          </Button>
        </Card>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {enrolledCourses.map((course, index) => (
            <motion.div
              key={course.courseName}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
                      Enrolled Course
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-slate-900">
                      {course.courseName}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500">
                      Enrolled on {formatDate(course.enrolledAt)}
                    </p>
                    {course.serviceSlug && (
                      <p className="mt-1 text-xs text-slate-400">
                        From {course.serviceSlug
                          .split("-")
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join(" ")}
                      </p>
                    )}
                    <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                      {getCourseDescription(course.courseName, course.serviceSlug)}
                    </p>
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  {!hasCompletedAssessment(course.courseName) ? (
                    <div>
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
                        Complete Assessment to Start
                      </p>
                      <Button
                        onClick={() => openAssessmentWindow(course.courseName)}
                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-400 text-base font-semibold"
                      >
                        Start Assessment
                      </Button>
                    </div>
                  ) : (
                    <>
                      {assessmentScores[course.courseName] && (
                        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3">
                          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
                            Assessment Score
                          </p>
                          <p className="mt-1 text-lg font-semibold text-emerald-900">
                            {assessmentScores[course.courseName].score}% ·{" "}
                            {assessmentScores[course.courseName].level}
                          </p>
                        </div>
                      )}
                      <div>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
                          Choose Learning Mode
                        </p>
                        <div className="grid grid-cols-3 gap-2">
                          <Button
                            onClick={() =>
                              handleModeSelect(course.courseName, "video")
                            }
                            className={`flex flex-col items-center gap-2 py-4 ${
                              (selectedMode[course.courseName] ||
                                getStoredMode(course.courseName)) === "video"
                                ? "bg-gradient-to-r from-primary to-secondary text-white"
                                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                            }`}
                          >
                            <Play className="h-5 w-5" />
                            <span className="text-xs font-semibold">Video</span>
                          </Button>
                          <Button
                            onClick={() =>
                              handleModeSelect(course.courseName, "podcast")
                            }
                            className={`flex flex-col items-center gap-2 py-4 ${
                              (selectedMode[course.courseName] ||
                                getStoredMode(course.courseName)) === "podcast"
                                ? "bg-gradient-to-r from-primary to-secondary text-white"
                                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                            }`}
                          >
                            <Headphones className="h-5 w-5" />
                            <span className="text-xs font-semibold">
                              Podcast
                            </span>
                          </Button>
                          <Button
                            onClick={() =>
                              handleModeSelect(course.courseName, "reading")
                            }
                            className={`flex flex-col items-center gap-2 py-4 ${
                              (selectedMode[course.courseName] ||
                                getStoredMode(course.courseName)) === "reading"
                                ? "bg-gradient-to-r from-primary to-secondary text-white"
                                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                            }`}
                          >
                            <BookOpen className="h-5 w-5" />
                            <span className="text-xs font-semibold">
                              Reading
                            </span>
                          </Button>
                        </div>
                      </div>
                      <Button
                        onClick={() => handleStartCourse(course.courseName)}
                        disabled={
                          !selectedMode[course.courseName] &&
                          !getStoredMode(course.courseName)
                        }
                        className="w-full bg-gradient-to-r from-emerald-600 to-teal-400 text-base font-semibold hover:from-emerald-700 hover:to-teal-500 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Start/Resume Course
                      </Button>
                    </>
                  )}
                  <div className="flex flex-wrap gap-3">
                    {course.serviceSlug ? (
                      <Button
                        asChild
                        variant="outline"
                        className="flex-1"
                      >
                        <Link href={`/services/${course.serviceSlug}`}>
                          View Details
                        </Link>
                      </Button>
                    ) : (
                      <Button
                        asChild
                        variant="outline"
                        className="flex-1"
                      >
                        <Link href="/services">Browse Services</Link>
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      onClick={() => handleUnenroll(course.courseName)}
                      className="flex-1"
                    >
                      Unenroll
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

