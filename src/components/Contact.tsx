import { Button } from "@/components/Button";
import { site } from "@/config/site";
import type { Dictionary } from "@/i18n/dictionaries";

export function Contact({ dict }: { dict: Dictionary }) {
  const c = dict.contact;
  const { whatsapp, whatsappDisplay, email } = site.contact;
  const waLink = `https://wa.me/${whatsapp}?text=${encodeURIComponent(c.whatsappMessage)}`;

  return (
    <section id="contact" className="scroll-mt-16 border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-24 sm:px-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
          {c.title}
        </h2>
        <p className="max-w-2xl text-lg text-muted sm:text-xl">{c.lead}</p>
        {/* Orden: correo, número y, debajo, el botón de WhatsApp */}
        <dl className="grid gap-4 font-mono text-sm sm:grid-cols-[8rem_1fr]">
          {email && (
            <>
              <dt className="text-muted">{c.email}</dt>
              <dd>
                <a href={`mailto:${email}`} className="hover:text-accent">
                  {email}
                </a>
              </dd>
            </>
          )}
          <dt className="text-muted">WhatsApp</dt>
          <dd>
            <a href={waLink} className="hover:text-accent">
              {whatsappDisplay}
            </a>
          </dd>
        </dl>
        <div>
          <Button href={waLink}>{c.whatsapp}</Button>
        </div>
        <p className="font-mono text-sm text-muted">
          <span className="text-accent">//</span> {c.location}
        </p>
      </div>
    </section>
  );
}
