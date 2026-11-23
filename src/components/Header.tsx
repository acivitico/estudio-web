import { CloseMenuOnClick } from "@/components/CloseMenuOnClick";
import { Logo } from "@/components/Logo";
import { locales, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

// Las secciones viven en la portada; el menú lleva a cada una.
export const sectionIds = [
  "services",
  "work",
  "process",
  "about",
  "contact",
] as const;

type Props = { lang: Locale; dict: Dictionary };

function LanguageSwitch({ lang, label }: { lang: Locale; label: string }) {
  return (
    <div className="flex gap-3 font-mono text-sm" aria-label={label}>
      {locales.map((l) => (
        <a
          key={l}
          href={`/${l}`}
          hrefLang={l}
          aria-current={l === lang ? "true" : undefined}
          className={
            l === lang
              ? "text-accent"
              : "text-muted transition-colors hover:text-fg"
          }
        >
          {l.toUpperCase()}
        </a>
      ))}
    </div>
  );
}

export function Header({ lang, dict }: Props) {
  const links = sectionIds.map((id) => (
    <a
      key={id}
      href={`#${id}`}
      className="text-muted transition-colors hover:text-fg"
    >
      {dict.nav[id]}
    </a>
  ));

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-12">
        <a href={`/${lang}`} className="text-fg">
          <Logo className="h-6 sm:h-7" />
        </a>

        {/* Escritorio y tablet horizontal */}
        <nav className="hidden items-center gap-8 text-sm lg:flex">
          {links}
          <LanguageSwitch lang={lang} label={dict.nav.language} />
        </nav>

        {/* Celular y tablet vertical: menú desplegable sin JavaScript */}
        <details className="group lg:hidden">
          <summary className="cursor-pointer list-none font-mono text-sm text-fg [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">{dict.nav.menu} +</span>
            <span className="hidden group-open:inline">{dict.nav.menu} −</span>
          </summary>
          <CloseMenuOnClick>
            <nav className="absolute inset-x-0 top-16 flex flex-col gap-5 border-b border-line bg-bg px-6 py-6 text-lg sm:px-12">
              {links}
              <LanguageSwitch lang={lang} label={dict.nav.language} />
            </nav>
          </CloseMenuOnClick>
        </details>
      </div>
    </header>
  );
}
