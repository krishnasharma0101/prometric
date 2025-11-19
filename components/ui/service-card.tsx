"use client";

"use client";

import type { ComponentType } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Cloud,
  ShieldCheck,
  Network,
  Layers,
  Briefcase,
  Award,
} from "lucide-react";
import type { ServiceIcon } from "@/lib/content";

const iconMap: Record<ServiceIcon, ComponentType<{ className?: string }>> = {
  network: Network,
  cloud: Cloud,
  shield: ShieldCheck,
  layers: Layers,
  briefcase: Briefcase,
  award: Award,
};

type ServiceCardProps = {
  title: string;
  description: string;
  icon: ServiceIcon;
  href?: string;
  className?: string;
};

export const ServiceCard = ({
  title,
  description,
  icon,
  href = "#",
  className,
}: ServiceCardProps) => {
  const Icon = iconMap[icon];
  const card = (
    <motion.div
      whileHover={{ y: -6 }}
      className={cn(
        "group h-full rounded-3xl border border-white/30 bg-white/80 p-6 shadow-[0_20px_60px_-40px_rgba(0,82,204,0.75)] transition hover:border-primary/40 hover:shadow-card",
        className,
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-6 text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm text-slate-600">{description}</p>
      <span className="mt-6 inline-flex items-center text-sm font-semibold text-primary">
        Learn more →
      </span>
    </motion.div>
  );

  if (!href) return card;

  return <Link href={href}>{card}</Link>;
};

