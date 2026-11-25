import type { AriaAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends AriaAttributes {
  className?: string;
  href?: string;
  id?: string;
  children: ReactNode;
}

export default function Button({ className, href, children, ...attributes }: ButtonProps) {
  const arrow = (
    <span className="cta-arrow" aria-hidden="true">
      <i className="hi">&#xf1640;</i>
    </span>
  );

  if (href) {
    return (
      <a className={cn("button workshop-cta", className)} href={href} {...attributes}>
        {children} {arrow}
      </a>
    );
  }

  return (
    <button className={className} type="button" {...attributes}>
      <span className="button workshop-cta skill-button-face">
        {children}{arrow}
      </span>
    </button>
  );
}
