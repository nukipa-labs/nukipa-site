import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ComparisonMatrix } from '@/components/ComparisonMatrix';

const SIGNUP_HREF = 'https://app.nukipa.com/signup';

export const metadata: Metadata = {
  title:       'Warum Nukipa',
  description: 'Nukipa im direkten Vergleich mit klassischer Agentur, KI-Texttools wie Jasper / Copy.ai und SEO-Tools wie SurferSEO.',
  alternates: {
    canonical: '/warum-nukipa',
    languages: {
      'de-DE': '/warum-nukipa',
      'en-US': '/en/why-nukipa'
    }
  }
};

export default function WarumNukipaPage() {
  return (
    <>
      <Navbar locale="de" currentPath="/warum-nukipa" />
      <main className="bg-[color:var(--surface-page)]">
        <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-[color:var(--brand-primary)]">
              Vergleich
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4vw,3.25rem)] font-semibold tracking-tight leading-[1.1] text-[color:var(--text-primary)]">
              Warum Nukipa, nicht <em className="editorial-italic">irgendein</em> anderes Tool.
            </h1>
            <p className="mt-5 text-[18px] leading-[1.6] text-[color:var(--text-secondary)]">
              Agentur, generisches KI-Texttool, klassisches SEO-Tool. Drei Wege, dein B2B-Marketing zu skalieren. Hier ist, was Nukipa anders macht.
            </p>
          </header>

          <div className="mt-16">
            <ComparisonMatrix
              competitors={[
                { name: 'Klassische Agentur',        blurb: 'Festes Team, monatliches Retainer' },
                { name: 'Generisches KI-Texttool',   blurb: 'z. B. Jasper, Copy.ai'              },
                { name: 'Klassisches SEO-Tool',      blurb: 'z. B. SurferSEO, NeuronWriter'      }
              ]}
              labels={{
                nukipa:  'Nukipa',
                yes:     'Ja',
                partial: 'Teilweise',
                no:      'Nein'
              }}
              rows={[
                { feature: 'KI-Agent schreibt, optimiert und veröffentlicht End-to-End',
                  cells: [true, false, 'partial', false] },
                { feature: 'Sichtbarkeit in Google UND in KI-Suche (ChatGPT, Perplexity, Gemini)',
                  cells: [true, false, false, 'partial'] },
                { feature: 'Eigene Veröffentlichungs-Infrastruktur inklusive',
                  cells: [true, 'partial', false, false] },
                { feature: 'LinkedIn-Posts in deiner Markenstimme',
                  cells: [true, true, 'partial', false] },
                { feature: 'Erste messbare Ergebnisse in 4-8 Wochen',
                  cells: [true, 'partial', false, 'partial'] },
                { feature: 'Deutscher Mittelstand als Fokus',
                  cells: [true, 'partial', false, false] },
                { feature: 'Einstiegspreis',
                  cells: ['0 € (Free) / 490 € pro Monat (Standard)', 'ab 5.000-15.000 € pro Monat', 'ab 49 € pro Monat', 'ab 49 € pro Monat'] }
              ]}
            />
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <Reason
              title="10× Output, 1/10 Agenturkosten."
              body="Bis zu 50 Artikel pro Monat ab 490 €. Eine klassische Agentur liefert dafür drei Posts und eine Rechnung über fünfstellige Beträge."
            />
            <Reason
              title="Gefunden werden, wo gefragt wird."
              body="Wir optimieren parallel für Google und für die Antworten von ChatGPT, Perplexity und Gemini. Klassische SEO-Tools können das eine, KI-Texttools können das andere - keines kann beides."
            />
            <Reason
              title="Ein System, kein Toolzoo."
              body="Strategie, Texte, LinkedIn-Posts, Kalender, Hosting und Reporting in einem System. Statt fünf Tools, die nicht miteinander reden."
            />
          </div>

          <aside className="mt-16 rounded-[18px] border border-[color:var(--border-default)] bg-[color:var(--surface-soft)] p-8 text-center">
            <h2 className="text-[24px] font-semibold tracking-tight text-[color:var(--text-primary)]">
              Bereit, den Vergleich live zu sehen?
            </h2>
            <p className="mt-3 text-[15px] text-[color:var(--text-secondary)]">
              Kein Abo, keine Kreditkarte. Einfach loslegen.
            </p>
            <Link
              href={SIGNUP_HREF}
              className="btn-primary mt-6 inline-flex items-center justify-center rounded-full bg-[color:var(--brand-primary)] px-7 py-3 text-[15px] font-medium text-[color:var(--text-on-brand)] transition-transform duration-200 hover:-translate-y-[2px]"
            >
              Kostenlos starten
            </Link>
          </aside>
        </section>
      </main>
      <Footer locale="de" currentPath="/warum-nukipa" />
    </>
  );
}

function Reason({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-[18px] border border-[color:var(--border-default)] bg-[color:var(--surface-card)] p-6">
      <h3 className="text-[18px] font-semibold tracking-tight text-[color:var(--text-primary)]">
        {title}
      </h3>
      <p className="mt-3 text-[15px] leading-[1.65] text-[color:var(--text-secondary)]">
        {body}
      </p>
    </article>
  );
}
