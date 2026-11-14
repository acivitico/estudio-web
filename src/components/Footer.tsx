import { Logo } from "@/components/Logo";
import { site } from "@/config/site";
import type { Dictionary } from "@/i18n/dictionaries";

export function Footer({ dict }: { dict: Dictionary }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-10 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-12">
        <Logo className="text-sm text-fg" />
        <p>
          © {year} {site.legalName} · {site.city}. {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
}
