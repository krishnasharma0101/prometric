"use client";

import Link from "next/link";
import { useState } from "react";
import { FlowchartVisualizer } from "@/components/layout/flowchart-visualizer";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import type { FlowchartEdge, FlowchartNode } from "@/lib/flowchart";
import { motion } from "framer-motion";

type FlowchartResponse = {
  flowchartText: string;
  nodes: FlowchartNode[];
  edges: FlowchartEdge[];
};

const defaultProfile =
  "Senior network engineer leading SD-WAN rollouts for a banking client.";
const defaultGoal =
  "Design a hybrid Cisco + cloud security curriculum for cross-functional architects.";

const CurriculumDesignerPage = () => {
  const [profile, setProfile] = useState(defaultProfile);
  const [goal, setGoal] = useState(defaultGoal);
  const [constraints, setConstraints] = useState(
    "Need executive-ready milestones every 4 weeks. Blend AI, automation, and compliance labs.",
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<FlowchartResponse | null>(null);

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/curriculum-designer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          profile,
          goal,
          constraints,
        }),
      });

      const data = (await response.json()) as FlowchartResponse & {
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error || "Unable to generate curriculum.");
      }

      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unexpected error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#040B23] via-[#061236] to-[#030817] px-8 py-12 text-white shadow-[0_40px_120px_rgba(3,10,32,0.7)]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-10 top-6 h-40 w-40 rounded-full bg-cyan-500/20 blur-[150px]" />
          <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-blue-500/30 blur-[150px]" />
        </div>
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-cyan-200">
              AI Curriculum Designer
            </p>
            <h1 className="text-3xl font-semibold leading-tight lg:text-4xl">
              Generate personalized, flowchart-ready enablement journeys in
              seconds.
            </h1>
            <p className="text-sm text-white/80">
              Feed the AI concierge with learner profiles, desired outcomes, and
              constraints. You&apos;ll get a text-based flowchart plus a
              visualized roadmap ready for stakeholder reviews.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/10 p-6 text-sm text-white/80 backdrop-blur">
            <p className="font-semibold uppercase tracking-[0.4em] text-cyan-200">
              Output Format
            </p>
            <p className="mt-3 text-white">
              FLOWCHART → Node definitions → Edge mappings → Visual roadmap
            </p>
          </div>
        </div>
      </section>

      <section>
        <motion.form
          layout
          onSubmit={onSubmit}
          className="rounded-3xl border border-slate-200 bg-white p-8 shadow-card"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
            Input Brief
          </p>
          <p className="mt-1 text-sm text-slate-500">
            Describe the learner cohort, desired outcomes, and delivery
            guardrails.
          </p>

          <div className="mt-6 space-y-5">
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-600">
                Profile
              </label>
              <Textarea
                value={profile}
                onChange={(event) => setProfile(event.target.value)}
                className="mt-2 min-h-[100px]"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-600">
                Outcomes
              </label>
              <Textarea
                value={goal}
                onChange={(event) => setGoal(event.target.value)}
                className="mt-2 min-h-[100px]"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-600">
                Constraints (Optional)
              </label>
              <Textarea
                value={constraints}
                onChange={(event) => setConstraints(event.target.value)}
                className="mt-2 min-h-[80px]"
              />
            </div>
          </div>

          {error ? (
            <p className="mt-4 rounded-2xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-600">
              {error}
            </p>
          ) : null}

          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              type="submit"
              disabled={loading}
              className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-400 text-base font-semibold"
            >
              {loading ? "Synthesizing Flowchart..." : "Generate Flowchart"}
            </Button>
          </div>
        </motion.form>
      </section>

      <section className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
          Visual Roadmap
        </p>
        <FlowchartVisualizer
          nodes={result?.nodes ?? []}
          edges={result?.edges ?? []}
        />
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-card">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
              Ready for Learning?
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              Connect with us for an optimized learning path & training rollout.
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              We’ll turn your AI-generated flowchart into blended delivery,
              coaching, labs, and executive reporting tailor-made for your teams.
            </p>
          </div>
          <Button asChild className="w-full max-w-xs bg-gradient-to-r from-blue-600 to-cyan-400 text-base font-semibold">
            <Link href="/contact">Connect With Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CurriculumDesignerPage;


