@AGENTS.md

# Sitio del estudio de software

Sitio de la software boutique detrás de dCOA y TALG. Entidad legal: Civitico y Cía. Ltda. El estudio tiene identidad propia.

## Estado

- [x] 1. Estructura base: Next.js en Cloudflare Workers, español e inglés.
- [ ] 2. Identidad visual provisoria (colores, tipografía, logotipo de texto, distinta de dCOA).
- [ ] 3. Menú, botones y portada.
- [ ] 4. Secciones y textos (es/en): portada, oferta, trabajos, cómo trabajamos, quiénes somos, contacto.
- [ ] 5. Publicación en workers.dev hasta tener dominio.

## Decisiones

- Nombre provisorio: "Estudio". Nombre, dominio y datos generales viven solo en `src/config/site.ts`.
- Repositorio: `acivitico/estudio-web` (privado, nombre neutro).
- Stack: Next.js 16 + `@opennextjs/cloudflare` + wrangler + Tailwind 4. Sin ESLint por ahora (dependencias livianas).
- Idiomas sin librería: rutas `/es` y `/en`, textos en `src/i18n/dictionaries/*.json`. `src/proxy.ts` redirige `/` según el idioma del navegador (por defecto, español). Para sumar portugués: agregar `"pt"` en `src/i18n/config.ts` y crear `pt.json`.
- `cacheComponents` y `partialPrefetching` desactivados: colgaban el worker en Cloudflare y un sitio estático no los necesita.
- Sin caché R2 ni bindings extra en `wrangler.jsonc`.
- No se publican montos en el sitio.

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

- `npm audit` marca 3 avisos moderados (glob/minimatch) dentro de `@opennextjs/cloudflare`. Solo se usan al armar el sitio, no en el sitio publicado. Revisar cuando el adaptador se actualice.
