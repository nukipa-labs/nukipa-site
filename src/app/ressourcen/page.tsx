import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PostCard } from '@/components/PostCard';
import { getNukipaClient } from '@/lib/nukipa';

// Latest posts on top of curated topics. ISR-cached for a minute so new
// posts surface without a redeploy.
export const revalidate = 60;

export const metadata: Metadata = {
  title:       'Ressourcen',
  description: 'Guides, Spielbücher und Updates rund um KI-Marketing, GEO und B2B-Content-Automatisierung.',
  alternates: {
    canonical: '/ressourcen',
    languages: {
      'de-DE': '/ressourcen',
      'en-US': '/en/resources'
    }
  }
};

interface Topic {
  title: string;
  body:  string;
  href:  string;
  cta:   string;
}

const topics: Topic[] = [
  {
    title: 'Spielbuch: B2B-Content-Marketing mit KI-Agenten',
    body:  'Wie man Strategie, Briefings und Genehmigungen so aufsetzt, dass die KI tatsächlich liefert, statt im Approval-Loop zu sterben.',
    href:  '/blog',
    cta:   'Zur Blog-Übersicht'
  },
  {
    title: 'GEO 101: Sichtbarkeit in ChatGPT, Perplexity und Gemini',
    body:  'Was Generative Engine Optimization von klassischem SEO unterscheidet, welche Signale die KI-Suchen tatsächlich gewichten, und wie wir es messen.',
    href:  '/warum-nukipa',
    cta:   'Vergleich ansehen'
  },
  {
    title: 'Onboarding in 4-8 Wochen, nicht in 6 Monaten',
    body:  'Unser Setup-Plan für die ersten Wochen: Inventur, Branding-Audit, Themen-Mapping, erste Veröffentlichungen, erste messbare Ranking-Bewegungen.',
    href:  '/preise',
    cta:   'Preise & Onboarding'
  },
  {
    title: 'Mittelstand-Briefing: KI-Marketing ohne eigenes Team',
    body:  'Was Marketing-Verantwortliche in mittelständischen B2B-Unternehmen über KI-gestütztes Content-Marketing wissen müssen, bevor sie ein Tool auswählen.',
    href:  '/ueber-uns',
    cta:   'Über uns'
  }
];

export default async function RessourcenPage() {
  const client = await getNukipaClient();
  const posts  = await client.listPosts({ limit: 6 });

  return (
    <>
      <Navbar locale="de" currentPath="/ressourcen" />
      <main className="bg-[color:var(--surface-page)]">
        <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
          <header className="max-w-3xl">
            <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-[color:var(--brand-primary)]">
              Ressourcen
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4vw,3.25rem)] font-semibold tracking-tight leading-[1.1] text-[color:var(--text-primary)]">
              Was wir <em className="editorial-italic">lernen</em>, schreiben wir auf.
            </h1>
            <p className="mt-5 text-[18px] leading-[1.6] text-[color:var(--text-secondary)]">
              Spielbücher, Guides und Updates für Marketing-Verantwortliche, die KI ernst nehmen, ohne den Anschluss an ihr Geschäft zu verlieren.
            </p>
          </header>

          {posts.length > 0 && (
            <section className="mt-16">
              <div className="mb-8 flex items-baseline justify-between">
                <h2 className="text-[20px] font-semibold tracking-tight text-[color:var(--text-primary)]">
                  Neu im Blog
                </h2>
                <Link
                  href="/blog"
                  className="link-underline text-[14px] text-[color:var(--brand-primary)]"
                >
                  Alle Beiträge →
                </Link>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((p) => (
                  <PostCard key={p.id} post={p} locale="de-DE" />
                ))}
              </div>
            </section>
          )}

          <section className="mt-20">
            <h2 className="text-[20px] font-semibold tracking-tight text-[color:var(--text-primary)]">
              Themen, die wir abdecken
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {topics.map((t) => (
                <article
                  key={t.title}
                  className="flex flex-col rounded-[18px] border border-[color:var(--border-default)] bg-[color:var(--surface-card)] p-6 transition-shadow duration-200 hover:shadow-[0_12px_40px_-8px_rgba(0,84,201,0.10)]"
                >
                  <h3 className="text-[18px] font-semibold tracking-tight text-[color:var(--text-primary)]">
                    {t.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[15px] leading-[1.65] text-[color:var(--text-secondary)]">
                    {t.body}
                  </p>
                  <Link
                    href={t.href}
                    className="link-underline mt-5 inline-block self-start text-[15px] font-medium text-[color:var(--brand-primary)]"
                  >
                    {t.cta} →
                  </Link>
                </article>
              ))}
            </div>
          </section>
        </section>
      </main>
      <Footer locale="de" currentPath="/ressourcen" />
    </>
  );
}
