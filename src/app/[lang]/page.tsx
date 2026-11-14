import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { Header, sectionIds } from "@/components/Header";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { notFound } from "next/navigation";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary();

  return (
    <>
      <Header lang={lang} dict={dict} />

      <main className="flex-1">
        {/* Portada */}
        <section className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col justify-center gap-8 px-6 py-24 sm:px-12">
          <p className="font-mono text-sm text-muted">
            <span className="text-accent">//</span> {dict.home.eyebrow}
          </p>
          <h1 className="max-w-5xl text-4xl leading-[1.05] font-bold tracking-tight sm:text-6xl lg:text-7xl 2xl:text-8xl">
            {dict.home.tagline}
          </h1>
          <p className="max-w-2xl text-lg text-muted sm:text-xl">
            {dict.home.intro}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="#contact">{dict.home.ctaPrimary}</Button>
            <Button href="#work" variant="secondary">
              {dict.home.ctaSecondary}
            </Button>
          </div>
        </section>

        {/* Secciones del paso 4: por ahora solo título, para que el menú funcione */}
        {sectionIds.map((id) => (
          <section
            key={id}
            id={id}
            className="scroll-mt-16 border-t border-line"
          >
            <div className="mx-auto max-w-7xl px-6 py-24 sm:px-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                {dict.nav[id]}
              </h2>
              <p className="mt-4 font-mono text-sm text-muted">
                {dict.sections.pending}
              </p>
            </div>
          </section>
        ))}
      </main>

      <Footer dict={dict} />
    </>
  );
}
