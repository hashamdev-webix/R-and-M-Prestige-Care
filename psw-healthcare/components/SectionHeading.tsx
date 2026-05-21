import { type ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string | ReactNode;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <p className="text-green font-semibold text-sm uppercase tracking-wide mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-navy font-heading mb-4">
        {title}
      </h2>
      {subtitle && (
        <div className="text-lg text-slate-600 max-w-3xl">{subtitle}</div>
      )}
    </div>
  );
}
