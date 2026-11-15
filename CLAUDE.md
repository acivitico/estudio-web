@AGENTS.md

# Sitio del estudio de software

Sitio de la software boutique detrás de dCOA y TALG. Entidad legal: Civitico y Cía. Ltda. El estudio tiene identidad propia.

## Estado

- [x] 1. Estructura base: Next.js en Cloudflare Workers, español e inglés.
- [x] 2. Identidad visual provisoria: oscuro técnico (fondo #0C0E0D, texto #E8EAE6, gris #6B706C, acento lima #C8F031), Space Grotesk + JetBrains Mono, logotipo `estudio_`. Todo en `globals.css` y `components/Logo.tsx`.
- [x] 3. Menú, botones y portada.
- [ ] 4. Secciones y textos (es/en). Hechas: Servicios (con oferta para galerías), Trabajos (solo dCOA), Cómo trabajamos, Contacto. Falta: Estudio.
- [ ] 5. Publicación en workers.dev hasta tener dominio.

## Decisiones

- Nombre provisorio: "Estudio". Nombre, dominio y datos generales viven solo en `src/config/site.ts`.
- Repositorio: `acivitico/estudio-web` (privado, nombre neutro).
- Stack: Next.js 16 + `@opennextjs/cloudflare` + wrangler + Tailwind 4. Sin ESLint por ahora (dependencias livianas).
- Idiomas sin librería: rutas `/es` y `/en`, textos en `src/i18n/dictionaries/*.json`. `src/proxy.ts` redirige `/` según el idioma del navegador (por defecto, español). Para sumar portugués: agregar `"pt"` en `src/i18n/config.ts` y crear `pt.json`.
- `cacheComponents` y `partialPrefetching` desactivados: colgaban el worker en Cloudflare y un sitio estático no los necesita.
- Sin caché R2 ni bindings extra en `wrangler.jsonc`.
- No se publican montos en el sitio.
- Oferta destacada: plataforma para galerías (en Servicios). Portada genérica.
- Servicios: consultoría con informe escrito (2 reuniones base, extras se cotizan), desarrollo a medida llave en mano con manual de uso y documentación técnica, mantenimiento con abono.
- Trabajos: solo dCOA (dcoa.art y app.dcoa.art). TALG se suma cuando esté migrado.
- Contacto: WhatsApp Business +598 95 411 147 (en `site.ts`). El correo `info@dominio` se completa en `site.ts` cuando exista el dominio; mientras sea null no se muestra.
- No se nombra a Wix ni WordPress: se habla de "sin plantillas ni constructores de sitios".
- Escudo de Civitico (`components/CiviticoMark.tsx`) solo en el pie, como entidad legal.
- Sitio de una sola página con secciones por ancla (`#services`, `#work`, `#process`, `#about`, `#contact`). Los ids están en `components/Header.tsx`.
- Menú de celular con `<details>` y un componente cliente mínimo que lo cierra al tocar un enlace.
- Advertencia anotada: lo oscuro y técnico puede sentirse menos cercano para pymes; reevaluar con los textos.

## Forma de trabajar

- Responder en español. Textos del sitio con tuteo neutro (tú), sin voseo.
- Sin emojis en interfaz, commits ni documentación.
- Mostrar cambios y pedir confirmación antes de cada commit y push. `git status` y archivos por nombre; nunca `git add -A`, `git add .` ni carpetas enteras.
- Revisión de secretos antes de cada commit. Credenciales solo en `.env.local` / `.dev.vars`, o como secretos de Cloudflare.
- Preguntar antes de instalar dependencias o cambiar la estructura. Evitar dependencias pesadas.
- Avanzar de a una sección y avisar cuando se puede ver en `localhost:3000` (también vista de celular).
- Respuestas cortas.

## Comandos

- `npm run dev`: desarrollo en `localhost:3000`.
- `npm run preview`: arma y prueba como en Cloudflare.
- `npm run deploy`: publica en Cloudflare.

## Pendientes conocidos

- Sección Estudio: borrador propuesto (estudio en Montevideo, más de 30 años en tecnología, técnica y negocio). Falta decidir si va el nombre de Alfredo con LinkedIn y si se mencionan países.
- Dominio corto (commit.studio es candidato; comprobar en Cloudflare).
- Después de publicar: asistente de IA (tech advisor) y WhatsApp con IA, siempre identificándose como asistente, sin dar precios ni plazos, derivando a Alfredo.
- Paso 5: publicar en workers.dev.

- `npm audit` marca 3 avisos moderados (glob/minimatch) dentro de `@opennextjs/cloudflare`. Solo se usan al armar el sitio, no en el sitio publicado. Revisar cuando el adaptador se actualice.
