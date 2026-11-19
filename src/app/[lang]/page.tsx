import { Button } from "@/components/Button";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Work } from "@/components/Work";
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
            <span className="cursor text-accent" aria-hidden="true">
              _
            </span>
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

        <Services dict={dict} />
        <Work dict={dict} />
        <Process dict={dict} />
        <About dict={dict} />
        <Contact dict={dict} />
      </main>

      <Footer dict={dict} />
    </>
  );
}
