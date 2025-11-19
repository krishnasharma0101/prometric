"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/content";

export const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-r from-[#0E1F4A] to-[#052044] px-8 py-10 text-white shadow-card">
      <AnimatePresence mode="wait">
        <motion.div
          key={testimonials[index].name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <p className="text-lg leading-relaxed text-white/90">
            “{testimonials[index].quote}”
          </p>
          <div>
            <p className="text-base font-semibold">
              {testimonials[index].name}
            </p>
            <p className="text-sm text-white/70">
              {testimonials[index].title}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="mt-8 flex items-center gap-2">
        {testimonials.map((person, i) => (
          <button
            key={person.name}
            onClick={() => setIndex(i)}
            className={`h-2 w-10 rounded-full transition ${
              i === index ? "bg-white" : "bg-white/30"
            }`}
            aria-label={`Show testimonial ${person.name}`}
          />
        ))}
      </div>
    </div>
  );
};

