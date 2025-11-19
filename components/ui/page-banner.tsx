"use client";

import { motion } from "framer-motion";

type PageBannerProps = {
  title: string;
  description: string;
};

export const PageBanner = ({ title, description }: PageBannerProps) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-primary to-[#001B44] px-8 py-16 text-white shadow-card"
  >
    <div className="grain-overlay" />
    <p className="text-xs uppercase tracking-[0.5em] text-white/70">Discover</p>
    <h1 className="mt-4 font-display text-4xl">{title}</h1>
    <p className="mt-3 max-w-3xl text-lg text-white/85">{description}</p>
  </motion.section>
);

