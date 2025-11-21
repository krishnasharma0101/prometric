"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type DropdownMenuProps = {
  trigger: React.ReactNode;
  items: { label: string; value: string; icon?: React.ReactNode }[];
  onSelect: (value: string) => void;
  className?: string;
};

export const DropdownMenu = ({
  trigger,
  items,
  onSelect,
  className,
}: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={menuRef} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex w-full items-center justify-between rounded-full border border-primary/30 bg-white px-4 py-2.5 text-sm font-semibold text-primary transition hover:border-primary hover:bg-slate-50"
      >
        <span>{trigger}</span>
        <ChevronDown
          className={cn(
            "ml-2 h-4 w-4 transition-transform",
            isOpen && "rotate-180"
          )}
        />
      </button>
      {isOpen && (
        <div className="absolute z-50 mt-2 w-full rounded-xl border border-slate-200 bg-white shadow-lg">
          <div className="py-1">
            {items.map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => {
                  onSelect(item.value);
                  setIsOpen(false);
                }}
                className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-slate-700 transition hover:bg-slate-50"
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

