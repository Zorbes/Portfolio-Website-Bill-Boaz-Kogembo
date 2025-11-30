import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  background?: "white" | "muted" | "dark";
}

export function Section({ id, className, children, background = "white" }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24 px-4 md:px-8",
        background === "muted" && "bg-muted",
        background === "dark" && "bg-primary text-white",
        className
      )}
    >
      <div className="max-w-6xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
}
