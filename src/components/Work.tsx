import type { Dictionary } from "@/i18n/dictionaries";

export function Work({ dict }: { dict: Dictionary }) {
  const { title, items, labels } = dict.work;
  return (
    <section id="work" className="scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h2>

        <div className="mt-12 flex flex-col gap-12">
          {items.map((item) => (
            <article
              key={item.name}
              className="grid gap-10 border border-line p-8 sm:p-12 lg:grid-cols-[2fr_3fr]"
            >
              <div className="flex flex-col gap-4">
                <p className="font-mono text-sm text-accent">
                  // {item.eyebrow}
                </p>
                <h3 className="text-4xl font-bold tracking-tight sm:text-6xl">
                  {item.name}
                </h3>
                <p className="text-lg text-muted">{item.summary}</p>
                <ul className="mt-2 flex flex-wrap gap-2 font-mono text-xs text-muted">
                  {item.stack.map((s) => (
                    <li key={s} className="border border-line px-2 py-1">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-6">
                <div>
                  <p className="font-mono text-xs text-muted uppercase">
                    {labels.problem}
                  </p>
                  <p className="mt-2 sm:text-lg">{item.problem}</p>
                </div>
                <div>
                  <p className="font-mono text-xs text-muted uppercase">
                    {labels.solution}
                  </p>
                  <p className="mt-2 sm:text-lg">{item.solution}</p>
                </div>
                <div className="flex flex-wrap gap-6 font-mono text-sm">
                  {item.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-fg"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
