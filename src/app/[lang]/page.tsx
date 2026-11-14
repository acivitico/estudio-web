import { site } from "@/config/site";
import { getDictionary } from "@/i18n/dictionaries";

// Portada provisoria: solo confirma que la estructura y los idiomas funcionan.
export default async function Home() {
  const dict = await getDictionary();
  return (
    <main className="flex flex-1 flex-col justify-center gap-4 px-6 py-24 sm:px-12">
      <h1 className="text-4xl font-semibold sm:text-6xl">{site.name}</h1>
      <p className="max-w-xl text-lg sm:text-xl">{dict.home.tagline}</p>
      <p className="text-sm opacity-60">{dict.home.status}</p>
      <nav className="flex gap-4 text-sm underline">
        <a href="/es">Español</a>
        <a href="/en">English</a>
      </nav>
    </main>
  );
}
