import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import {
  serviceSlugs,
  blogPosts,
  courseTemplates,
} from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/services",
    "/contact",
    "/blog",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = serviceSlugs.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified: new Date(),
  }));

  const courseRoutes = courseTemplates.map((course) => ({
    url: `${siteConfig.url}/courses/${course.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(),
  }));

  return [...baseRoutes, ...serviceRoutes, ...courseRoutes, ...blogRoutes];
}

