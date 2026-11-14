import { site } from "@/config/site";

// Logotipo de texto: el nombre en minúsculas y un guion bajo en el color
// de acento, como un cursor. Toma el nombre de src/config/site.ts.
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-mono font-medium tracking-tight lowercase ${className}`}
      aria-label={site.name}
    >
      {site.name}
      <span className="cursor text-accent" aria-hidden="true">
        _
      </span>
    </span>
  );
}
