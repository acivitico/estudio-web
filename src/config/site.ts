// Configuración central del sitio.
// El nombre y el dominio son provisorios: cuando se definan, se cambian solo acá.

export const site = {
  name: "Estudio",
  url: "https://estudio-web.workers.dev",
  city: "Montevideo",
  legalName: "Civitico y Cía. Ltda.",
  founder: {
    name: "Alfredo Civitico",
    linkedin: "https://www.linkedin.com/in/acivitico/",
  },
  contact: {
    // WhatsApp Business: número en formato internacional, sin + ni espacios.
    whatsapp: "59895411147",
    whatsappDisplay: "+598 95 411 147",
    // Se completa cuando exista el dominio (info@dominio.studio).
    // Mientras sea null, el correo no se muestra en el sitio.
    email: null as string | null,
  },
} as const;
