import { Logo } from "@/components/Logo";
import { getDictionary } from "@/i18n/dictionaries";

// Portada provisoria: muestra la identidad visual. El menú y la portada
// definitiva llegan en el paso 3.
export default async function Home() {
  const dict = await getDictionary();
  return (
    <main className="flex flex-1 flex-col justify-center gap-8 px-6 py-24 sm:px-12 lg:px-24">
      <Logo className="text-xl" />
      <h1 className="max-w-4xl text-4xl leading-[1.05] font-bold tracking-tight sm:text-6xl lg:text-7xl">
        {dict.home.tagline}
      </h1>
      <p className="font-mono text-sm text-muted">
        <span className="text-accent">//</span> {dict.home.status}
      </p>
      <nav className="flex gap-6 font-mono text-sm">
        <a href="/es" className="text-muted hover:text-accent">
          ES
        </a>
        <a href="/en" className="text-muted hover:text-accent">
          EN
        </a>
      </nav>
    </main>
  );
}
