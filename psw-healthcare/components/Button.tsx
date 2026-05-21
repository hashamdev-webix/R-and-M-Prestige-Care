import Link from "next/link";
import { type ReactNode } from "react";

interface ButtonProps {
  href?: string;
  variant?: "blue" | "green" | "white";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
  label?: string;
  onClick?: () => void;
}

export function Button({
  href,
  variant = "blue",
  size = "md",
  children,
  className = "",
  label,
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex flex-col items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    blue: "bg-navy hover:bg-navy-700 text-white focus:ring-navy-500",
    green: "bg-green hover:bg-green-600 text-white focus:ring-green-500",
    white:
      "bg-white hover:bg-gray-50 text-navy border-2 border-navy focus:ring-navy-500",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {label && <span className="text-xs mt-0.5 opacity-90">{label}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
