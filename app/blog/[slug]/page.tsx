import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/content";

type BlogPageProps = {
  params: { slug: string };
};

export function generateMetadata({ params }: BlogPageProps): Metadata {
  const post = blogPosts.find((item) => item.slug === params.slug);
  return {
    title: post ? post.title : "Blog",
    description: post?.excerpt,
  };
}

export default function BlogDetailPage({ params }: BlogPageProps) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) return notFound();

  return (
    <article className="space-y-8 rounded-[32px] border border-white/30 bg-white/80 p-10 shadow-card">
      <p className="text-xs uppercase tracking-[0.4em] text-primary">
        {post.date}
      </p>
      <h1 className="font-display text-4xl text-slate-900">{post.title}</h1>
      <p className="text-sm text-slate-500">By {post.author}</p>
      <div className="space-y-6 text-base leading-relaxed text-slate-700">
        <p>{post.excerpt}</p>
        <p>
          Enterprises across networking, security, and cloud lean on
          Mitralearn’s enablement squads to kickstart modernization. This blog
          template illustrates how you can publish long-form narratives for SEO
          while keeping the UI clean and on-brand.
        </p>
        <p>
          Replace this placeholder body with CMS-powered content or MDX files.
          Add diagrams, callouts, and CTA banners to tie back to services and
          courses.
        </p>
      </div>
    </article>
  );
}

