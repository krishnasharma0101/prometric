"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type TeamCardProps = {
  name: string;
  role: string;
  bio: string;
  className?: string;
};

export const TeamCard = ({ name, role, bio, className }: TeamCardProps) => (
  <motion.div
    whileHover={{ y: -8 }}
    className={cn(
      "rounded-3xl border border-white/20 bg-white/80 p-6 text-slate-800 shadow-[0_30px_70px_-50px_rgba(0,82,204,0.85)]",
      className,
    )}
  >
    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/80 to-secondary/80" />
    <p className="mt-6 text-xl font-semibold">{name}</p>
    <p className="text-sm font-medium uppercase tracking-widest text-primary">
      {role}
    </p>
    <p className="mt-4 text-sm text-slate-600">{bio}</p>
  </motion.div>
);

