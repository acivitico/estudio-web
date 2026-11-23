// Configuración central del sitio.
// Nombre, dominio y contacto se cambian solo acá.

export const site = {
  name: "zero9",
  url: "https://zero9.studio",
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
    // Si es null, el correo no se muestra en el sitio.
    email: "info@zero9.studio" as string | null,
  },
} as const;
