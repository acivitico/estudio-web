import { site } from "@/config/site";
import type { Dictionary } from "@/i18n/dictionaries";

export function About({ dict }: { dict: Dictionary }) {
  const { title, paragraphs, founder } = dict.about;
  return (
    <section id="about" className="scroll-mt-16 border-t border-line">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 sm:px-12 lg:grid-cols-[1fr_2fr]">
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h2>
        <div className="flex flex-col gap-6">
          {paragraphs.map((p) => (
            <p key={p} className="text-lg sm:text-xl">
              {p}
            </p>
          ))}
          <p className="font-mono text-sm text-muted">
            <span className="text-accent">//</span>{" "}
            <a
              href={site.founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              {founder} ↗
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
