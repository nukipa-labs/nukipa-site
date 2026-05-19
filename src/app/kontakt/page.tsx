import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title:       'Kontakt',
  description: 'Schreib uns. Wir antworten meist innerhalb eines Werktags.',
  alternates: {
    canonical: '/kontakt',
    languages: {
      'de-DE': '/kontakt',
      'en-US': '/en/contact'
    }
  }
};

export default function KontaktPage() {
  return (
    <>
      <Navbar locale="de" currentPath="/kontakt" />
      <main className="bg-[color:var(--surface-page)]">
        <section className="mx-auto max-w-3xl px-5 py-20 lg:px-8 lg:py-28">
          <header>
            <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-[color:var(--brand-primary)]">
              Kontakt
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4vw,3.25rem)] font-semibold tracking-tight leading-[1.1] text-[color:var(--text-primary)]">
              Sag <em className="editorial-italic">Hallo</em>.
            </h1>
            <p className="mt-5 text-[18px] leading-[1.6] text-[color:var(--text-secondary)]">
              Eine Frage zum Produkt, ein Pilotprojekt, ein Sales-Gespräch oder einfach Neugier. Wir antworten meist innerhalb eines Werktags.
            </p>
          </header>

          <div className="mt-12">
            <ContactForm
              copy={{
                name:    'Name',
                email:   'E-Mail',
                company: 'Unternehmen',
                message: 'Worum geht es?',
                submit:     'Nachricht senden',
                submitting: 'Wird gesendet...',
                success: {
                  title: 'Danke, wir haben deine Nachricht.',
                  body:  'Du hörst meist innerhalb eines Werktags von uns. Bei wirklich dringenden Themen schreib uns einfach direkt an contact@nukipalabs.com.'
                },
                errors: {
                  missingRequired: 'Bitte fülle Name, E-Mail und Nachricht aus.',
                  generic:         'Das hat leider nicht geklappt. Versuche es nochmal oder schreib uns direkt eine E-Mail.'
                },
                fallbackEmail: 'contact@nukipalabs.com'
              }}
            />
          </div>

          <p className="mt-12 text-[14px] text-[color:var(--text-muted)]">
            Mit dem Absenden willigst du in die Verarbeitung deiner Angaben zur Bearbeitung deiner Anfrage ein. Mehr dazu in der{' '}
            <a href="/legal/datenschutz" className="text-[color:var(--brand-primary)] hover:underline">
              Datenschutzerklärung
            </a>.
          </p>
        </section>
      </main>
      <Footer locale="de" currentPath="/kontakt" />
    </>
  );
}
