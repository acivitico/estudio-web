import type { ReactNode } from "react";

// Botón como enlace. "primary": fondo lima. "secondary": solo borde.
type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

const base =
  "inline-flex items-center justify-center gap-2 px-5 py-3 font-mono text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variants = {
  primary: "bg-accent text-bg hover:bg-fg",
  secondary: "border border-line text-fg hover:border-accent hover:text-accent",
};

export function Button({ href, children, variant = "primary" }: Props) {
  return (
    <a href={href} className={`${base} ${variants[variant]}`}>
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}
