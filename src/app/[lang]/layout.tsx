import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { site } from "@/config/site";
import { locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import "./globals.css";

// Las fuentes se descargan al compilar y se sirven desde el propio sitio.
const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const code = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-code",
});

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary();
  return {
    title: site.name,
    description: dict.meta.description,
    icons: { icon: "/icon.svg" },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  return (
    <html
      lang={lang}
      className={`${display.variable} ${code.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
