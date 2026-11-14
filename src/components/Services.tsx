import type { Dictionary } from "@/i18n/dictionaries";

export function Services({ dict }: { dict: Dictionary }) {
  const { title, items } = dict.services;
  return (
    <section id="services" className="scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h2>
        <ol className="mt-12 grid gap-px border border-line bg-line md:grid-cols-3">
          {items.map((item, i) => (
            <li key={item.title} className="flex flex-col gap-4 bg-bg p-8">
              <span className="font-mono text-sm text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                {item.title}
              </h3>
              <p className="text-muted">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
