import { CiviticoMark } from "@/components/CiviticoMark";
import { Logo } from "@/components/Logo";
import { site } from "@/config/site";
import type { Dictionary } from "@/i18n/dictionaries";

export function Footer({ dict }: { dict: Dictionary }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-12">
        {/* En celular el logo ya está en el menú: solo se muestra en pantallas medianas y grandes */}
        <Logo className="hidden h-6 text-fg sm:block" />
        <div className="group flex items-center gap-3">
          <CiviticoMark className="h-7 w-auto shrink-0 transition-colors group-hover:text-accent" />
          <p>
            © {year} {site.legalName} · {site.city}. {dict.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
