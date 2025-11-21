"use client";

import type { FlowchartEdge, FlowchartNode } from "@/lib/flowchart";

type FlowchartVisualizerProps = {
  nodes: FlowchartNode[];
  edges: FlowchartEdge[];
};

export const FlowchartVisualizer = ({
  nodes,
  edges,
}: FlowchartVisualizerProps) => {
  if (!nodes.length) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-200 bg-white/60 p-8 text-center text-slate-500">
        The AI flowchart will appear here after you generate a roadmap.
      </div>
    );
  }

  const outgoingFor = (id: string) =>
    edges.filter((edge) => edge.from.toLowerCase() === id.toLowerCase());

  return (
    <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#040B25] via-[#051B45] to-[#061029] p-8 text-white shadow-[0_40px_120px_rgba(4,12,40,0.55)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-8 top-6 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-8 right-10 h-40 w-40 rounded-full bg-blue-500/20 blur-[120px]" />
      </div>
      <div className="relative space-y-10">
        {nodes.map((node, index) => (
          <div key={node.id} className="flex gap-5">
            <div className="flex flex-col items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/60 bg-white/10 text-sm font-semibold text-white">
                {index + 1}
              </div>
              {index !== nodes.length - 1 && (
                <div className="mt-2 h-full w-px bg-gradient-to-b from-cyan-400/40 via-white/20 to-transparent" />
              )}
            </div>
            <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-200">
                {node.id}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-white">
                {node.title}
              </h3>
              {node.duration ? (
                <p className="text-sm font-semibold text-cyan-200/80">
                  {node.duration}
                </p>
              ) : null}
              <p className="mt-3 text-sm text-white/80">{node.description}</p>

              {outgoingFor(node.id).length ? (
                <div className="mt-4 rounded-xl border border-white/5 bg-white/5 p-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                    Paths Forward
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-white/80">
                    {outgoingFor(node.id).map((edge) => (
                      <li
                        key={`${edge.from}-${edge.to}-${edge.label}`}
                        className="flex items-center gap-2"
                      >
                        <span className="inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        <span>
                          <span className="font-semibold text-white">
                            {edge.to}
                          </span>
                          {edge.label ? ` – ${edge.label}` : ""}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


