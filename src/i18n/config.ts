// Idiomas del sitio. Para sumar portugués: agregar "pt" acá
// y crear dictionaries/pt.json con las mismas claves.

export const locales = ["es", "en"] as const;
export const defaultLocale = "es";

export type Locale = (typeof locales)[number];

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);
