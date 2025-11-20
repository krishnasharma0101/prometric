"use client";

import { useMemo, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import type { CourseTreeNode } from "@/lib/content";

type PathStep = {
  title: string;
  description: string;
  courses: string[];
};

type AdaptivePathPlannerProps = {
  courseTree?: CourseTreeNode[];
  availableCourses: string[];
};

const flattenCourses = (nodes?: CourseTreeNode[]): string[] => {
  if (!nodes) return [];
  const stack = [...nodes];
  const result: string[] = [];
  while (stack.length) {
    const node = stack.pop();
    if (!node) continue;
    if (node.courses) {
      node.courses.forEach((course) => {
        if (!result.includes(course.name)) {
          result.push(course.name);
        }
      });
    }
    if (node.children) {
      stack.push(...node.children);
    }
  }
  return result;
};

export const AdaptivePathPlanner = ({
  courseTree,
  availableCourses,
}: AdaptivePathPlannerProps) => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [summary, setSummary] = useState<string | null>(null);
  const [steps, setSteps] = useState<PathStep[]>([]);

  const coursePool = useMemo(() => {
    const fromTree = flattenCourses(courseTree);
    return Array.from(
      new Set([...(availableCourses ?? []), ...fromTree]).values(),
    ).filter(Boolean);
  }, [courseTree, availableCourses]);

  const generatePath = async () => {
    if (!prompt.trim()) {
      setError("Please tell us about your goals or current role.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/path", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, courseList: coursePool }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message ?? "Unable to generate path.");
      }
      setSummary(data.summary ?? null);
      setSteps(data.steps ?? []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unexpected error.");
    } finally {
      setLoading(false);
    }
  };

  const removeCourse = (index: number, course: string) => {
    setSteps((prev) =>
      prev.map((step, idx) =>
        idx === index
          ? { ...step, courses: step.courses.filter((c) => c !== course) }
          : step,
      ),
    );
  };

  const addCourse = (index: number, course: string) => {
    if (!course) return;
    setSteps((prev) =>
      prev.map((step, idx) =>
        idx === index && !step.courses.includes(course)
          ? { ...step, courses: [...step.courses, course] }
          : step,
      ),
    );
  };

  return (
    <section className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#050B1A] via-[#051B45] to-[#031129] p-8 text-white shadow-[0_30px_80px_rgba(3,12,50,0.65)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute inset-y-10 right-[-20%] h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
      </div>
      <div className="relative space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-cyan-300">
              Adaptive Learning Path
            </p>
            <p className="mt-2 text-sm text-white/80">
              Tell our AI concierge about your background or goal and we&apos;ll
              draft a personalized Cisco journey you can remix instantly.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Live AI
          </div>
        </div>
        <Textarea
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          placeholder="Ex: I run SD-WAN projects and need a path into campus troubleshooting + automation leadership."
          rows={4}
          className="border-white/10 bg-white/5 text-white placeholder:text-white/50"
        />
        <Button
          onClick={generatePath}
          disabled={loading}
          className="w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 text-base font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-cyan-400/40"
        >
          {loading ? "Synthesizing Path..." : "Generate My Path"}
        </Button>
        {error ? (
          <p className="text-sm text-rose-300">{error}</p>
        ) : (
          <p className="text-xs text-white/60">
            *Demo mode active: Swap in your OpenAI key to unlock live coaching.
          </p>
        )}

        {summary ? (
          <div className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm text-cyan-100">
            {summary}
          </div>
        ) : null}

        {steps.length ? (
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={step.title + index}
                className="relative rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur"
              >
                <div className="absolute -left-3 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-b from-cyan-400 to-blue-600 text-sm font-semibold text-white shadow-lg">
                  {index + 1}
                </div>
                <h4 className="pl-8 text-lg font-semibold text-white">
                  {step.title}
                </h4>
                <p className="pl-8 text-sm text-white/75">
                  {step.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 pl-8">
                  {step.courses.map((course) => (
                    <span
                      key={course}
                      className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold text-white"
                    >
                      {course}
                      <button
                        type="button"
                        className="text-white/60 hover:text-white"
                        onClick={() => removeCourse(index, course)}
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
                {coursePool.length ? (
                  <div className="mt-4 flex flex-wrap gap-2 pl-8">
                    <select
                      className="rounded-full border border-white/30 bg-transparent px-3 py-1 text-sm text-white"
                      defaultValue=""
                      onChange={(event) => {
                        addCourse(index, event.target.value);
                        event.target.value = "";
                      }}
                    >
                      <option value="" className="text-slate-900">
                        Add a course...
                      </option>
                      {coursePool.map((course) => (
                        <option key={course} value={course} className="text-slate-900">
                          {course}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
};

