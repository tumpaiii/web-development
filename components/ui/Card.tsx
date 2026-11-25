import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends ComponentProps<"article"> {
  className?: string;
}

export default function Card({ className, ...props }: CardProps) {
  return <article className={cn("min-w-0", className)} {...props} />;
}
