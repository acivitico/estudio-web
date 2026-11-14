// Configuración del adaptador de Cloudflare (OpenNext).
// Sin caché en R2 por ahora: el sitio es casi todo estático.
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({});
