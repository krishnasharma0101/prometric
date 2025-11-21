"use client";

const ENROLLMENT_STORAGE_KEY = "enrolled_courses";

export type EnrolledCourse = {
  courseName: string;
  enrolledAt: string;
  serviceSlug?: string;
};

export const enrollInCourse = (courseName: string, serviceSlug?: string): void => {
  if (typeof window === "undefined") return;
  
  const existing = getEnrolledCourses();
  const alreadyEnrolled = existing.some(
    (course) => course.courseName === courseName
  );
  
  if (alreadyEnrolled) return;
  
  const newCourse: EnrolledCourse = {
    courseName,
    enrolledAt: new Date().toISOString(),
    serviceSlug,
  };
  
  const updated = [...existing, newCourse];
  localStorage.setItem(ENROLLMENT_STORAGE_KEY, JSON.stringify(updated));
  
  // Dispatch custom event for real-time updates
  window.dispatchEvent(new CustomEvent("courseEnrolled", { detail: newCourse }));
};

export const getEnrolledCourses = (): EnrolledCourse[] => {
  if (typeof window === "undefined") return [];
  
  try {
    const stored = localStorage.getItem(ENROLLMENT_STORAGE_KEY);
    if (!stored) return [];
    return JSON.parse(stored) as EnrolledCourse[];
  } catch {
    return [];
  }
};

export const unenrollFromCourse = (courseName: string): void => {
  if (typeof window === "undefined") return;
  
  const existing = getEnrolledCourses();
  const updated = existing.filter((course) => course.courseName !== courseName);
  localStorage.setItem(ENROLLMENT_STORAGE_KEY, JSON.stringify(updated));
  
  // Dispatch custom event for real-time updates
  window.dispatchEvent(new CustomEvent("courseUnenrolled", { detail: courseName }));
};

export const isEnrolled = (courseName: string): boolean => {
  if (typeof window === "undefined") return false;
  return getEnrolledCourses().some((course) => course.courseName === courseName);
};

const ASSESSMENT_COMPLETED_KEY = "assessment_completed";

export const markAssessmentCompleted = (courseName: string): void => {
  if (typeof window === "undefined") return;
  
  const completed = getCompletedAssessments();
  if (!completed.includes(courseName)) {
    completed.push(courseName);
    localStorage.setItem(ASSESSMENT_COMPLETED_KEY, JSON.stringify(completed));
  }
};

export const getCompletedAssessments = (): string[] => {
  if (typeof window === "undefined") return [];
  
  try {
    const stored = localStorage.getItem(ASSESSMENT_COMPLETED_KEY);
    if (!stored) return [];
    return JSON.parse(stored) as string[];
  } catch {
    return [];
  }
};

export const hasCompletedAssessment = (courseName: string): boolean => {
  if (typeof window === "undefined") return false;
  return getCompletedAssessments().includes(courseName);
};

const ASSESSMENT_SCORES_KEY = "assessment_scores";

export const saveAssessmentScore = (
  courseName: string,
  score: number,
  level: string
): void => {
  if (typeof window === "undefined") return;
  
  const scores = getAssessmentScores();
  scores[courseName] = { score, level };
  localStorage.setItem(ASSESSMENT_SCORES_KEY, JSON.stringify(scores));
};

export const getAssessmentScores = (): Record<
  string,
  { score: number; level: string }
> => {
  if (typeof window === "undefined") return {};
  
  try {
    const stored = localStorage.getItem(ASSESSMENT_SCORES_KEY);
    if (!stored) return {};
    return JSON.parse(stored) as Record<string, { score: number; level: string }>;
  } catch {
    return {};
  }
};

