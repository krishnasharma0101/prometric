import type { Metadata } from "next";
import { PageBanner } from "@/components/ui/page-banner";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatsGrid } from "@/components/ui/stats-grid";
import { teamMembers } from "@/lib/content";
import { TeamCard } from "@/components/ui/team-card";

export const metadata: Metadata = {
  title: "About TechElevate",
  description:
    "TechElevate partners with enterprises to upskill engineers through Cisco, Cloud, Cybersecurity, DevOps, and Linux academies.",
};

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <PageBanner
        title="Purpose-built for Enterprise Enablement"
        description="We are a team of architects, security leaders, and platform engineers who know what it takes to ship production-grade outcomes."
      />

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-[30px] border border-white/30 bg-white/80 p-8 shadow-card">
          <h2 className="text-2xl font-semibold text-slate-900">Our Story</h2>
          <p className="mt-4 text-slate-600">
            TechElevate was founded by former Cisco and cloud learning partner
            leaders who saw that enterprises needed more than static bootcamps.
            We build academies that blend diagnostics, hands-on labs, mentors,
            and ROI dashboards, making training a strategic advantage.
          </p>
        </div>
        <div className="rounded-[30px] border border-white/30 bg-white/80 p-8 shadow-card">
          <h2 className="text-2xl font-semibold text-slate-900">Mission</h2>
          <p className="mt-4 text-slate-600">
            Equip technology teams with the skills, confidence, and support they
            need to deliver modernization programs on time. Every engagement
            aligns to certifications and adoption impact.
          </p>
          <h3 className="mt-6 text-xl font-semibold text-slate-900">Vision</h3>
          <p className="mt-3 text-slate-600">
            Become the most trusted enablement partner for enterprises
            orchestrating large-scale network, security, and cloud evolution.
          </p>
          <h3 className="mt-6 text-xl font-semibold text-slate-900">Values</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>• Design for measurable outcomes</li>
            <li>• Lead with empathy and mentorship</li>
            <li>• Obsess over learner experience</li>
          </ul>
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeading
          label="Impact"
          title="Achievements"
          description="Global reach powered by hybrid delivery and expert mentors."
        />
        <StatsGrid />
      </section>

      <section className="space-y-10">
        <SectionHeading
          label="Leadership"
          title="Meet the Team"
          description="Practitioners who have led complex rollouts in regulated industries."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </section>
    </div>
  );
}

