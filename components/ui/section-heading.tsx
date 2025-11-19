"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  className?: string;
};

export const SectionHeading = ({
  label,
  title,
  description,
  className,
}: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn("space-y-3 text-center", className)}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
        {label}
      </span>
      <h2 className="font-display text-3xl text-slate-900 sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mx-auto max-w-2xl text-base text-slate-600">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
};

