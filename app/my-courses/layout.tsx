import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Courses",
  description: "View and manage your enrolled courses. Track your learning journey and access course materials.",
};

export default function MyCoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

