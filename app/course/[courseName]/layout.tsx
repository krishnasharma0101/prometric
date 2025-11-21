import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { courseName: string };
}): Promise<Metadata> {
  const courseName = decodeURIComponent(params.courseName);
  
  return {
    title: `${courseName} - Complete Learning | Prometric`,
    description: `Comprehensive training program for ${courseName}. Access text, podcast, and video content with detailed table of contents.`,
  };
}

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

