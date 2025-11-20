"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getAssessment } from "@/lib/assessment";

type Response = Record<string, string>;

const AssessmentPage = () => {
  const searchParams = useSearchParams();
  const course = searchParams?.get("course") ?? "Flagship Course";
  const questions = useMemo(() => getAssessment(course), [course]);
  const [responses, setResponses] = useState<Response>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    let correct = 0;
    questions.forEach((question) => {
      if (responses[question.id] === question.answer) {
        correct += 1;
      }
    });
    const percentage = Math.round((correct / questions.length) * 100);
    setScore(percentage);
    setSubmitted(true);

    const level =
      percentage >= 80 ? "Ready" : percentage >= 60 ? "Progressing" : "Needs Focus";

    if (window.opener) {
      window.opener.postMessage(
        { type: "assessment-result", score: percentage, level, course },
        window.location.origin,
      );
    }
  };

  const closeWindow = () => {
    window.close();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-8 shadow-[0_20px_80px_rgba(2,6,23,0.6)]">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-300">
                AI Pre-Qualification
              </p>
              <h1 className="mt-2 text-2xl font-semibold">
                {course} Readiness Check
              </h1>
              <p className="mt-2 text-sm text-white/70">
                Answer 10 quick questions. We’ll auto-grade and send the score back
                to your planning workspace.
              </p>
            </div>
            {submitted ? (
              <div className="text-right">
                <p className="text-xs uppercase tracking-[0.4em] text-white/70">
                  Score
                </p>
                <p className="text-3xl font-semibold">{score}%</p>
              </div>
            ) : null}
          </div>

          {submitted ? (
            <div className="mt-10 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-8 text-center">
              <p className="text-lg font-semibold text-emerald-200">
                Assessment submitted
              </p>
              <p className="mt-2 text-sm text-emerald-100/80">
                You can now review your readiness score on the Flagship Planner window.
              </p>
              <button
                type="button"
                onClick={closeWindow}
                className="mt-6 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:border-white/40"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              {questions.map((question, index) => (
                <div
                  key={question.id}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="text-sm font-semibold text-cyan-200">
                    {index + 1}. {question.question}
                  </p>
                  <div className="mt-3 space-y-2">
                    {question.options.map((option) => (
                      <label
                        key={option.value}
                        className="flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:border-cyan-400"
                      >
                        <input
                          type="radio"
                          name={question.id}
                          value={option.value}
                          checked={responses[question.id] === option.value}
                          onChange={(event) =>
                            setResponses((prev) => ({
                              ...prev,
                              [question.id]: event.target.value,
                            }))
                          }
                          className="text-cyan-400 focus:ring-cyan-500"
                          required
                        />
                        <span>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
              <div className="flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="flex-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30"
                >
                  Submit Assessment
                </button>
                <button
                  type="button"
                  onClick={closeWindow}
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white"
                >
                  Close
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AssessmentPage;

