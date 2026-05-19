import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const SIGNUP_HREF = 'https://app.nukipa.com/signup';

export const metadata: Metadata = {
  title:       'Über uns',
  description: 'Nukipa Labs GmbH ist ein Münchner Produkt-Studio aus drei Gründern mit Erfahrung in Strategie, Finanzen, Marketing, Sales, Product und Technologie.',
  alternates: {
    canonical: '/ueber-uns',
    languages: {
      'de-DE': '/ueber-uns',
      'en-US': '/en/about'
    }
  }
};

export default function UeberUnsPage() {
  return (
    <>
      <Navbar locale="de" currentPath="/ueber-uns" />
      <main className="bg-[color:var(--surface-page)]">
        <section className="mx-auto max-w-3xl px-5 py-20 lg:px-8 lg:py-28">
          <header>
            <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-[color:var(--brand-primary)]">
              Über uns
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4vw,3.25rem)] font-semibold tracking-tight leading-[1.1] text-[color:var(--text-primary)]">
              Ein Produkt-Studio aus München. Drei Gründer. <em className="editorial-italic">Viel KI.</em>
            </h1>
            <p className="mt-6 text-[18px] leading-[1.6] text-[color:var(--text-secondary)]">
              Nukipa Labs GmbH ist ein kleines Team mit großem Anspruch. Wir bauen Software, die der deutsche Mittelstand wirklich nutzen kann, statt eines weiteren Tools, das im Pitch-Deck überzeugt und im Alltag verstaubt.
            </p>
          </header>

          <div className="mt-16 space-y-12 text-[17px] leading-[1.7] text-[color:var(--text-primary)]">
            <section>
              <h2 className="text-[24px] font-semibold tracking-tight text-[color:var(--text-primary)]">
                Was uns angetrieben hat
              </h2>
              <p className="mt-4">
                B2B-Unternehmen haben Weltklasse-Produkte, aber <em className="editorial-italic">null</em> Online-Sichtbarkeit. Wir haben das in jeder Branche gesehen, in der wir vorher gearbeitet haben. Marketing-Verantwortliche im Mittelstand jonglieren Kampagnen, Messen und Sales-Support. Konstantes Veröffentlichen rutscht hinten runter, oder wird an eine Agentur ausgelagert, die nach drei Posts und einer fünfstelligen Rechnung wieder weg ist.
              </p>
              <p className="mt-4">
                Gleichzeitig verändert die KI-Suche, wie Käufer überhaupt nach Lösungen suchen. Eure Kunden fragen ChatGPT und Perplexity vor Google. Wer dort nicht zitiert wird, existiert für die nächste Käufergeneration einfach nicht.
              </p>
            </section>

            <section>
              <h2 className="text-[24px] font-semibold tracking-tight text-[color:var(--text-primary)]">
                Unsere Mission
              </h2>
              <p className="mt-4">
                Nukipa macht KI-Marketing so einfach, dass kein B2B-Unternehmen den Anschluss verliert. KI-Agenten planen, schreiben, veröffentlichen und optimieren Inhalte für klassische Suche und KI-Suche. Du genehmigst, die KI liefert. Ergebnisse in 4 bis 8 Wochen, nicht in einem halben Jahr Beratervertrag.
              </p>
            </section>

            <section>
              <h2 className="text-[24px] font-semibold tracking-tight text-[color:var(--text-primary)]">
                Drei Gründer, ein Anspruch
              </h2>
              <p className="mt-4">
                Wir sind drei Gründer mit langjähriger Erfahrung in Strategie, Finanzen, Marketing, Sales, Product und Technologie. Wir haben Unternehmen aufgebaut, Marketing-Funktionen geleitet, Software gebaut und Vertriebsorganisationen skaliert. Die Bandbreite ist Programm: Nukipa funktioniert nur, wenn wir alle Seiten verstehen, von der ersten Kampagnenidee bis zum letzten Performance-Report.
              </p>
              <p className="mt-4">
                Wir nutzen KI nicht nur als Feature unserer Plattform, wir leben sie. Große Teams sind nicht mehr nötig, um ein Unternehmen zu führen. Mit den richtigen Werkzeugen und KI an der Seite kann ein kleines Team mehr erreichen als je zuvor. Diesen Hebel geben wir an unsere Kunden weiter.
              </p>
            </section>

            <section>
              <h2 className="text-[24px] font-semibold tracking-tight text-[color:var(--text-primary)]">
                Wo wir sitzen
              </h2>
              <p className="mt-4">
                München. Wir lieben die Mischung aus DAX-Mittelstand vor der Tür und einer wachsenden KI-Szene direkt nebenan. Wenn du in der Nähe bist und auf einen Espresso vorbeikommen willst: <a href="mailto:hello@nukipa.com" className="link-underline text-[color:var(--brand-primary)]">hello@nukipa.com</a>.
              </p>
            </section>
          </div>

          <aside className="mt-16 rounded-[18px] border border-[color:var(--border-default)] bg-[color:var(--surface-soft)] p-8">
            <p className="text-[18px] leading-[1.5] text-[color:var(--text-primary)]">
              Bereit, dein Marketing auf <em className="editorial-italic">Autopilot</em> zu setzen?
            </p>
            <p className="mt-2 text-[15px] text-[color:var(--text-secondary)]">
              Kein Abo, keine Kreditkarte. Einfach loslegen.
            </p>
            <Link
              href={SIGNUP_HREF}
              className="btn-primary mt-6 inline-flex items-center justify-center rounded-full bg-[color:var(--brand-primary)] px-6 py-3 text-[15px] font-medium text-[color:var(--text-on-brand)] transition-transform duration-200 hover:-translate-y-[2px]"
            >
              Kostenlos starten
            </Link>
          </aside>
        </section>
      </main>
      <Footer locale="de" currentPath="/ueber-uns" />
    </>
  );
}
