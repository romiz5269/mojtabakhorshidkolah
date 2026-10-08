import {cn} from "@/lib/utils";
import {ReactNode} from "react";

type BadgeVariant = "default" | "success" | "warning" | "danger" | "info";

type BadgeSize = "sm" | "md" | "lg";

interface BadgeProps {
  children: ReactNode;
  icon?: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

const variants = {
  default: "bg-gray-100 text-gray-700 border-gray-200",
  success: "bg-emerald-50 text-emerald-700 border-emerald-200",
  warning: "bg-yellow-50 text-yellow-700 border-yellow-200",
  danger: "bg-red-50 text-red-700 border-red-200",
  info: "bg-blue-50 text-blue-700 border-blue-200",
};

const sizes = {
  sm: "px-2 py-0.5 text-xs gap-1",
  md: "px-3 py-0.5 text-sm gap-1.5",
  lg: "px-4 py-0.5 text-base gap-2",
};

export default function Badge({
  children,
  icon,
  variant = "default",
  size = "md",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full border font-medium leading-none",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {icon && (
        <span className="flex items-center justify-center shrink-0 [&>svg]:size-4">
          {icon}
        </span>
      )}

      <span className="flex items-center ">{children}</span>
    </span>
  );
}
