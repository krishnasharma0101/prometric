import type { Metadata } from "next";
import Link from "next/link";
import { PageBanner } from "@/components/ui/page-banner";
import { blogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on Cisco, Cloud, Cybersecurity, DevOps, and enterprise training programs.",
};

export default function BlogPage() {
  return (
    <div className="space-y-12">
      <PageBanner
        title="Insights & Playbooks"
        description="Actionable guidance from mentors delivering modernization programs worldwide."
      />
      <div className="grid gap-8 md:grid-cols-2">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="rounded-[28px] border border-white/30 bg-white/80 p-8 shadow-card transition hover:-translate-y-1 hover:shadow-card"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-primary">
              {post.date}
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900">
              {post.title}
            </h2>
            <p className="mt-4 text-sm text-slate-600">{post.excerpt}</p>
            <p className="mt-6 text-sm font-semibold text-primary">
              {post.author} · Read more →
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

