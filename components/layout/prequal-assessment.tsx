"use client";

import { useEffect, useMemo, useState } from "react";

type PrequalAssessmentProps = {
  course: string;
};

export const PrequalAssessment = ({ course }: PrequalAssessmentProps) => {
  const [score, setScore] = useState<number | null>(null);
  const [level, setLevel] = useState<string | null>(null);

  useEffect(() => {
    setScore(null);
    setLevel(null);
  }, [course]);

  useEffect(() => {
    const handler = (event: MessageEvent) => {
      if (
        typeof window !== "undefined" &&
        event.origin !== window.location.origin
      ) {
        return;
      }
      const data = event.data;
      if (data?.type === "assessment-result" && data?.course === course) {
        setScore(data.score);
        setLevel(data.level);
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, [course]);

  const badgeColor = useMemo(() => {
    if (score === null) return "border-white/20 text-white/70";
    if (score >= 80) return "border-emerald-400/40 bg-emerald-500/20 text-emerald-200";
    if (score >= 60) return "border-amber-400/40 bg-amber-500/20 text-amber-200";
    return "border-rose-400/40 bg-rose-500/20 text-rose-200";
  }, [score]);

  const openAssessmentWindow = () => {
    const url = `/assessment?course=${encodeURIComponent(course)}`;
    window.open(url, "assessment-window", "width=920,height=720");
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
              AI Pre-Qualification
            </p>
            <p className="mt-2 text-sm text-white/80">
              Launch a 10-question adaptive quiz in a new window. We grade your
              readiness across core prerequisite domains for {course}.
            </p>
          </div>
          <div className="flex items-center gap-3">
            {score !== null ? (
              <div
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] ${badgeColor}`}
              >
                {score}% · {level}
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                Live AI
              </div>
            )}
          </div>
        </div>
        <button
          type="button"
          onClick={openAssessmentWindow}
          className="w-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:shadow-cyan-400/40"
        >
          Start Assessment
        </button>
        {score !== null ? (
          <div className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm text-cyan-100">
            Assessment completed. Your readiness score has been calculated across
            prerequisite domains for {course}.
          </div>
        ) : (
          <p className="text-xs text-white/60">
            *Complete the quiz to receive your readiness score and personalized
            recommendations.
          </p>
        )}
      </div>
    </section>
  );
};
