import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { navItems, services } from "@/lib/content";
import { Linkedin, Twitter, Youtube } from "lucide-react";

const socials = [
  { icon: Linkedin, href: siteConfig.social.linkedin },
  { icon: Twitter, href: siteConfig.social.twitter },
  { icon: Youtube, href: siteConfig.social.youtube },
];

export const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/20 bg-slate-950 text-white">
      <div className="container grid gap-12 py-16 lg:grid-cols-4">
        <div>
          <p className="text-2xl font-bold">{siteConfig.name}</p>
          <p className="mt-3 text-sm text-slate-300">{siteConfig.description}</p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ icon: Icon, href }) => (
              <Link
                key={href}
                href={href}
                aria-label={href}
                className="rounded-full border border-white/20 p-2 transition hover:bg-white hover:text-slate-900"
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold uppercase tracking-widest text-slate-400">
            Quick Links
          </p>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold uppercase tracking-widest text-slate-400">
            Services
          </p>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {services.map((service) => (
              <li key={service.title}>
                <Link href={service.href} className="hover:text-white">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold uppercase tracking-widest text-slate-400">
            Contact
          </p>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <p>{siteConfig.contact.address}</p>
            <p>{siteConfig.contact.phone}</p>
            <p>{siteConfig.contact.email}</p>
            <p>{siteConfig.contact.hours}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
};

