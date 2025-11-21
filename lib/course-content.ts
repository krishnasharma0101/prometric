export type ContentType = "text" | "podcast" | "video";

export type ContentItem = {
  id: string;
  title: string;
  type: ContentType;
  duration?: string;
  url?: string;
  placeholder?: string;
};

export type TableOfContentsSection = {
  id: string;
  title: string;
  subsections?: TableOfContentsSection[];
  contentItems?: ContentItem[];
};

export type CourseTableOfContents = {
  courseName: string;
  examCode?: string;
  overview: {
    about: string;
    skillsMeasured: string[];
    targetAudience: string[];
  };
  sections: TableOfContentsSection[];
  studyPlan?: {
    weeks: number;
    plan: string[];
  };
  references?: string[];
};

// Helper function to generate TOC for a course
export const generateCourseTOC = (
  courseName: string,
  examCode?: string
): CourseTableOfContents => {
  // This will be populated with actual TOC data
  return {
    courseName,
    examCode,
    overview: {
      about: `Comprehensive training program for ${courseName}.`,
      skillsMeasured: [],
      targetAudience: [],
    },
    sections: [],
    studyPlan: {
      weeks: 4,
      plan: [],
    },
  };
};

// Placeholder content generator
export const generatePlaceholderContent = (
  courseName: string,
  moduleTitle: string,
  topic: string
): ContentItem[] => {
  return [
    {
      id: `${courseName}-${moduleTitle}-${topic}-text`,
      title: `${topic} - Reading Material`,
      type: "text",
      placeholder: `Comprehensive text-based learning material covering ${topic} for ${courseName}.`,
    },
    {
      id: `${courseName}-${moduleTitle}-${topic}-podcast`,
      title: `${topic} - Audio Podcast`,
      type: "podcast",
      duration: "15-20 min",
      placeholder: `Audio podcast episode discussing ${topic} in detail.`,
    },
    {
      id: `${courseName}-${moduleTitle}-${topic}-video`,
      title: `${topic} - Video Tutorial`,
      type: "video",
      duration: "20-30 min",
      placeholder: `Video tutorial with hands-on demonstrations of ${topic}.`,
    },
  ];
};

