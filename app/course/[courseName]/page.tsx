"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageBanner } from "@/components/ui/page-banner";
import { getCourseTOC } from "@/lib/course-toc";
import { serviceSlugs } from "@/lib/content";
import { generateTrainingContent, getContentForItem } from "@/lib/content-generator";
import type {
  CourseTableOfContents,
  TableOfContentsSection,
  ContentItem,
} from "@/lib/course-content";
import { ChevronRight, FileText, Headphones, Play } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function CourseContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const courseName = decodeURIComponent(params.courseName as string);
  const modeParam = searchParams.get("mode");
  const [toc, setToc] = useState<CourseTableOfContents | null>(null);
  const [selectedContent, setSelectedContent] = useState<ContentItem | null>(
    null
  );
  const [selectedMode, setSelectedMode] = useState<"text" | "podcast" | "video">(
    (modeParam as "text" | "podcast" | "video") || "text"
  );
  const [generatedContent, setGeneratedContent] = useState<string>("");

  useEffect(() => {
    // Find the service that contains this course
    let courseModules;
    let foundServiceSlug;
    
    for (const service of serviceSlugs) {
      if (service.courseDetails && courseName in service.courseDetails) {
        courseModules = service.courseDetails[courseName as keyof typeof service.courseDetails];
        foundServiceSlug = service.slug;
        break;
      }
    }

    // Extract exam code from course name if it exists (e.g., "300-720 SESA")
    const examCodeMatch = courseName.match(/^\d{3}-\d{3}/);
    const examCode = examCodeMatch ? examCodeMatch[0] : undefined;

    const generatedTOC = getCourseTOC(courseName, examCode, courseModules, foundServiceSlug);
    setToc(generatedTOC);
  }, [courseName]);

  useEffect(() => {
    if (selectedContent) {
      const content = getContentForItem(selectedContent);
      if (selectedMode === "text") {
        setGeneratedContent(content.text);
      } else if (selectedMode === "video") {
        setGeneratedContent(content.videoScript);
      } else {
        setGeneratedContent(content.podcastScript);
      }
    }
  }, [selectedContent, selectedMode]);

  const renderSection = (section: TableOfContentsSection, level = 0): React.ReactNode => {
    const hasSubsections = section.subsections && section.subsections.length > 0;
    const hasContent = section.contentItems && section.contentItems.length > 0;

    if (hasSubsections) {
      return (
        <AccordionItem key={section.id} value={section.id} className="border-none">
          <AccordionTrigger className="text-left py-2.5 px-0 hover:no-underline group">
            <span className="text-sm font-semibold text-slate-800 group-hover:text-primary transition-colors leading-relaxed">
              {section.title}
            </span>
          </AccordionTrigger>
          <AccordionContent className="pt-1 pb-2 px-0">
            <div className="space-y-0.5 pl-3 border-l-2 border-slate-200/80">
              {section.subsections?.map((subsection) =>
                renderSection(subsection, level + 1)
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      );
    }

    if (hasContent) {
      const filteredItems = section.contentItems?.filter(
        (item) => item.type === selectedMode
      ) || [];
      
      if (filteredItems.length === 0) return null;
      
      // Extract the topic name from the title (remove the content type suffix)
      const getTopicName = (title: string) => {
        return title
          .replace(" - Reading Material", "")
          .replace(" - Audio Podcast", "")
          .replace(" - Video Tutorial", "")
          .trim();
      };
      
      return (
        <div key={section.id} className="space-y-2 py-1.5">
          <p className="text-xs font-semibold text-slate-800 mb-2 leading-tight">
            {section.title}
          </p>
          <div className="space-y-1">
            {filteredItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedContent(item)}
                className="w-full text-left p-2 rounded-md border border-slate-200/80 hover:border-primary/60 hover:bg-primary/5 transition-all group"
              >
                <div className="flex items-start gap-2">
                  {item.type === "text" && (
                    <FileText className="h-3.5 w-3.5 text-primary mt-0.5 flex-shrink-0" />
                  )}
                  {item.type === "podcast" && (
                    <Headphones className="h-3.5 w-3.5 text-primary mt-0.5 flex-shrink-0" />
                  )}
                  {item.type === "video" && (
                    <Play className="h-3.5 w-3.5 text-primary mt-0.5 flex-shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-slate-800 group-hover:text-primary transition-colors leading-relaxed">
                      {getTopicName(item.title)}
                    </p>
                    {item.duration && (
                      <p className="text-[10px] text-slate-500 mt-0.5 font-normal">
                        {item.duration}
                      </p>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div key={section.id} className="py-1.5">
        <p className="text-sm font-semibold text-slate-800 leading-relaxed">{section.title}</p>
      </div>
    );
  };

  if (!toc) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Loading course content...</p>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <PageBanner
        title={`${toc.courseName} Complete Learning`}
        description={toc.overview.about}
      />

      <div className="grid gap-8 lg:grid-cols-4">
        {/* Table of Contents Sidebar */}
        <div className="lg:col-span-1">
          <Card className="sticky top-24 p-5 bg-white shadow-sm border border-slate-200/60">
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-primary mb-4">
              Table of Contents
            </p>
            <div className="space-y-3">
              <div className="flex gap-1.5 p-1 bg-slate-50 rounded-lg">
                <Button
                  onClick={() => setSelectedMode("text")}
                  variant={selectedMode === "text" ? "default" : "subtle"}
                  size="sm"
                  className="flex-1 text-xs font-medium"
                >
                  <FileText className="mr-1.5 h-3.5 w-3.5" />
                  Text
                </Button>
                <Button
                  onClick={() => setSelectedMode("podcast")}
                  variant={selectedMode === "podcast" ? "default" : "subtle"}
                  size="sm"
                  className="flex-1 text-xs font-medium"
                >
                  <Headphones className="mr-1.5 h-3.5 w-3.5" />
                  Audio
                </Button>
                <Button
                  onClick={() => setSelectedMode("video")}
                  variant={selectedMode === "video" ? "default" : "subtle"}
                  size="sm"
                  className="flex-1 text-xs font-medium"
                >
                  <Play className="mr-1.5 h-3.5 w-3.5" />
                  Video
                </Button>
              </div>
              <div className="mt-4 max-h-[calc(100vh-280px)] overflow-y-auto pr-1 custom-scrollbar">
                <Accordion type="multiple" className="space-y-0">
                  {toc.sections.map((section) => renderSection(section))}
                </Accordion>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-3">
          {selectedContent ? (
            <Card className="p-8">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
                    {selectedContent.type.toUpperCase()} CONTENT
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold">
                    {selectedContent.title}
                  </h2>
                </div>
                <Button
                  variant="outline"
                  onClick={() => setSelectedContent(null)}
                >
                  Back to TOC
                </Button>
              </div>
              <div className="prose max-w-none prose-slate">
                {selectedContent.type === "text" && (
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-6 border border-primary/20">
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        Comprehensive Training Material
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        This content is based on official provider documentation and enhanced with 15+ years of training expertise. Structured for optimal learning and ready for conversion to video scripts and podcast formats.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div 
                        className="text-slate-700 leading-relaxed prose prose-slate max-w-none"
                        dangerouslySetInnerHTML={{ 
                          __html: generatedContent 
                            .replace(/\n/g, "<br />")
                            .replace(/# (.*?)\n/g, "<h1>$1</h1>")
                            .replace(/## (.*?)\n/g, "<h2>$1</h2>")
                            .replace(/### (.*?)\n/g, "<h3>$1</h3>")
                            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                            .replace(/\*(.*?)\*/g, "<em>$1</em>")
                        }}
                      />
                    </div>
                  </div>
                )}
                {selectedContent.type === "video" && (
                  <div className="space-y-6">
                    <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20 flex items-center justify-center">
                      <div className="text-center">
                        <Play className="h-16 w-16 text-primary mx-auto mb-4" />
                        <p className="text-slate-700 font-medium">
                          Video Content: {selectedContent.title.replace(" - Video Tutorial", "")}
                        </p>
                        <p className="text-sm text-slate-500 mt-2">
                          {selectedContent.duration || "20-30 min"}
                        </p>
                      </div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                      <h3 className="text-lg font-semibold text-slate-900 mb-3">
                        Video Script
                      </h3>
                      <div 
                        className="text-slate-700 leading-relaxed whitespace-pre-line font-mono text-sm"
                        dangerouslySetInnerHTML={{ 
                          __html: generatedContent.replace(/\n/g, "<br />")
                        }}
                      />
                    </div>
                  </div>
                )}
                {selectedContent.type === "podcast" && (
                  <div className="space-y-6">
                    <div className="rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20 p-12 flex items-center justify-center">
                      <div className="text-center">
                        <Headphones className="h-16 w-16 text-primary mx-auto mb-4" />
                        <p className="text-slate-700 font-medium">
                          Podcast Episode: {selectedContent.title.replace(" - Audio Podcast", "")}
                        </p>
                        <p className="text-sm text-slate-500 mt-2">
                          {selectedContent.duration || "15-20 min"}
                        </p>
                      </div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                      <h3 className="text-lg font-semibold text-slate-900 mb-3">
                        Podcast Script
                      </h3>
                      <div 
                        className="text-slate-700 leading-relaxed whitespace-pre-line font-mono text-sm"
                        dangerouslySetInnerHTML={{ 
                          __html: generatedContent.replace(/\n/g, "<br />")
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ) : (
            <div className="space-y-6">
              {/* Overview */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold">Exam Overview</h3>
                <p className="mt-2 text-slate-600">{toc.overview.about}</p>
                {toc.overview.skillsMeasured.length > 0 && (
                  <div className="mt-4">
                    <p className="font-semibold">Skills Measured:</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
                      {toc.overview.skillsMeasured.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </Card>

              {/* Study Plan */}
              {toc.studyPlan && (
                <Card className="p-6">
                  <h3 className="text-lg font-semibold">
                    {toc.studyPlan.weeks}-Week Study Plan
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {toc.studyPlan.plan.map((week, index) => (
                      <li key={index} className="flex gap-3 text-sm text-slate-600">
                        <span className="font-semibold text-primary">
                          Week {index + 1}:
                        </span>
                        <span>{week}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )}

              {/* References */}
              {toc.references && toc.references.length > 0 && (
                <Card className="p-6">
                  <h3 className="text-lg font-semibold">References</h3>
                  <ul className="mt-4 space-y-2">
                    {toc.references.map((ref, index) => (
                      <li key={index} className="text-sm text-slate-600">
                        {ref}
                      </li>
                    ))}
                  </ul>
                </Card>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CoursePage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center">Loading...</div>}>
      <CourseContent />
    </Suspense>
  );
}

