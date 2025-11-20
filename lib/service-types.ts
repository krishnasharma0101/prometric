import type { CourseTreeNode } from "./content";

export type ServiceContent = {
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

