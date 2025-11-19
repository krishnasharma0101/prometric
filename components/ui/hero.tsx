"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "./button";
import { cn } from "@/lib/utils";

type HeroProps = {
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export const Hero = ({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: HeroProps) => {
  return (
    <section className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-primary via-[#003EA8] to-slate-950 px-6 py-16 text-white shadow-[0_60px_120px_-60px_rgba(0,82,204,0.85)] sm:px-12 lg:px-16">
      <div className="grain-overlay" />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:grid lg:grid-cols-[1.15fr,0.85fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs uppercase tracking-[0.3em]">
            Enterprise Technology Training
          </p>
          <h1 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="text-lg text-slate-100/90 lg:text-xl">{subtitle}</p>
          <div className="flex flex-wrap gap-4 pt-4 lg:hidden">
            <Button asChild size="lg">
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className={cn(
                "border-white/40 text-white hover:bg-white/20 hover:text-white",
              )}
            >
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          </div>
        </motion.div>

        <div className="hidden justify-end lg:flex">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-sm rounded-[32px] border border-white/20 bg-white/10 p-8 text-white shadow-card backdrop-blur-xl"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">
              Start Here
            </p>
            <p className="mt-3 text-2xl font-semibold leading-snug">
              Curated learning journeys for every technology practice.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <Button asChild size="lg">
                <Link href={primaryCta.href}>{primaryCta.label}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/20 hover:text-white"
              >
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-[-10%] hidden w-[55%] lg:block">
        <div className="h-full w-full rounded-[999px] bg-gradient-to-br from-secondary/30 via-transparent to-transparent blur-3xl" />
      </div>
    </section>
  );
};

