import { serviceSlugs } from "./content";

export const getCourseDescription = (
  courseName: string,
  serviceSlug?: string
): string => {
  if (!serviceSlug) {
    return `Comprehensive training program for ${courseName}.`;
  }

  const service = serviceSlugs.find((s) => s.slug === serviceSlug);
  if (!service || !service.courseDetails) {
    return `Comprehensive training program for ${courseName}.`;
  }

  const details =
    courseName in service.courseDetails
      ? service.courseDetails[courseName as keyof typeof service.courseDetails]
      : undefined;
  if (!details || details.length === 0) {
    return `Comprehensive training program for ${courseName}.`;
  }

  // Create a summary from the first module's topics
  const firstModule = details[0];
  const summary = firstModule.topics.slice(0, 2).join(", ");
  return `${courseName} covers ${firstModule.title.toLowerCase()}, including ${summary}, and more.`;
};

export const getCourseModules = (
  courseName: string,
  serviceSlug?: string
): { title: string; topics: string[] }[] => {
  if (!serviceSlug) return [];

  const service = serviceSlugs.find((s) => s.slug === serviceSlug);
  if (!service || !service.courseDetails) return [];

  return courseName in service.courseDetails
    ? service.courseDetails[courseName as keyof typeof service.courseDetails] || []
    : [];
};

