import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionBlockProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export const SectionBlock = ({
  children,
  className,
  id,
}: SectionBlockProps) => (
  <section
    id={id}
    className={cn("space-y-10 rounded-[30px] bg-white/80 p-8 shadow-lg", className)}
  >
    {children}
  </section>
);

