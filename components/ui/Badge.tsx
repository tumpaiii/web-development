import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends ComponentProps<"span"> {
  className?: string;
}

export default function Badge({ className, ...props }: BadgeProps) {
  return (
    <span className={cn("inline-flex items-center", className)} {...props} />
  );
}
