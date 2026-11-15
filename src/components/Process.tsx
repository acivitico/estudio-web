import type { Dictionary } from "@/i18n/dictionaries";

export function Process({ dict }: { dict: Dictionary }) {
  const { title, steps, note } = dict.process;
  return (
    <section id="process" className="scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h2>
        <ol className="mt-12 flex flex-col border-t border-line">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="grid gap-3 border-b border-line py-8 md:grid-cols-[6rem_1fr_2fr] md:gap-8"
            >
              <span className="font-mono text-sm text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                {step.title}
              </h3>
              <p className="text-muted sm:text-lg">{step.body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-12 max-w-3xl font-mono text-sm text-muted">
          <span className="text-accent">//</span> {note}
        </p>
      </div>
    </section>
  );
}
