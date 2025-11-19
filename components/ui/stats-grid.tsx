import { achievements } from "@/lib/content";

export const StatsGrid = () => (
  <div className="grid gap-6 md:grid-cols-4">
    {achievements.map((stat) => (
      <div
        key={stat.label}
        className="rounded-3xl border border-white/30 bg-white/80 px-4 py-6 text-center shadow-[0_20px_40px_-40px_rgba(0,82,204,0.85)]"
      >
        <p className="text-4xl font-bold text-primary">{stat.value}</p>
        <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-slate-500">
          {stat.label}
        </p>
      </div>
    ))}
  </div>
);

