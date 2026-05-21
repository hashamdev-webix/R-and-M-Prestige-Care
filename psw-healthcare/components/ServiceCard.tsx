import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col h-full group">
      <div className="w-14 h-14 bg-navy rounded-lg flex items-center justify-center mb-4 group-hover:bg-green transition-colors">
        <Icon className="w-7 h-7 text-white" />
      </div>

      <h3 className="text-xl font-bold text-navy mb-3 font-heading">{title}</h3>

      <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
        {description}
      </p>

      <Link
        href={href}
        className="inline-flex items-center gap-2 text-green font-semibold text-sm hover:gap-3 transition-all"
      >
        Learn More <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
