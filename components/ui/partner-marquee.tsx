import { partners } from "@/lib/content";

export const PartnerMarquee = () => (
  <div className="relative mt-12 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/90 py-6 text-white">
    <div className="animate-marquee flex min-w-full gap-16">
      {[...partners, ...partners].map((partner, index) => (
        <p
          key={`${partner}-${index}`}
          className="text-xl font-semibold tracking-[0.25em] text-white/80"
        >
          {partner}
        </p>
      ))}
    </div>
    <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-900" />
    <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-900" />
  </div>
);

