"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Button } from "./button";

export const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 24);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all",
        isScrolled ? "backdrop-blur-xl" : "",
      )}
    >
      <div className="container">
        <div
          className={cn(
            "mt-4 flex items-center justify-between rounded-full border border-white/20 px-6 py-3 transition-all",
            isScrolled
              ? "bg-white/80 shadow-[0_20px_60px_rgba(0,82,204,0.15)]"
              : "bg-transparent",
          )}
        >
          <Link href="/" className="flex items-center gap-2 text-lg font-bold">
            <span className="rounded-full bg-gradient-to-r from-primary to-secondary px-3 py-1 text-sm text-white">
              ML
            </span>
            Mitralearn
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden gap-3 lg:flex">
            <Button asChild variant="subtle" className="text-sm">
              <Link href="/services">Explore Courses</Link>
            </Button>
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white/90 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <div className="container flex flex-col gap-4 pb-6 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-base font-semibold text-slate-600 transition hover:bg-slate-100",
                    pathname === item.href ? "bg-slate-100 text-primary" : "",
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="w-full">
                <Link href="/contact">Book a Demo</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

