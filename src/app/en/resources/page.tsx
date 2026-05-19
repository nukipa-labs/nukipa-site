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
  title:       'Resources',
  description: 'Playbooks, guides and updates on AI marketing, GEO and B2B content automation.',
  alternates: {
    canonical: '/en/resources',
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
    title: 'Playbook: B2B content marketing with AI agents',
    body:  'How to set up strategy, briefs and approvals so the AI actually delivers, instead of dying in an approval loop.',
    href:  '/en/blog',
    cta:   'Browse the blog'
  },
  {
    title: 'GEO 101: visibility in ChatGPT, Perplexity and Gemini',
    body:  'What separates Generative Engine Optimization from classic SEO, which signals AI search engines actually weight, and how we measure it.',
    href:  '/en/why-nukipa',
    cta:   'See the comparison'
  },
  {
    title: 'Onboarding in 4-8 weeks, not 6 months',
    body:  'Our setup plan for the first weeks: audit, branding review, topic mapping, first publications, first measurable ranking moves.',
    href:  '/en/pricing',
    cta:   'Pricing & onboarding'
  },
  {
    title: 'Mittelstand briefing: AI marketing without an in-house team',
    body:  'What marketing leads in mid-market B2B companies need to know about AI-driven content marketing before they pick a tool.',
    href:  '/en/about',
    cta:   'About us'
  }
];

export default async function ResourcesPage() {
  const client = await getNukipaClient();
  const posts  = await client.listPosts({ limit: 6 });

  return (
    <>
      <Navbar locale="en" currentPath="/en/resources" />
      <main className="bg-[color:var(--surface-page)]">
        <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
          <header className="max-w-3xl">
            <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-[color:var(--brand-primary)]">
              Resources
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4vw,3.25rem)] font-semibold tracking-tight leading-[1.1] text-[color:var(--text-primary)]">
              What we <em className="editorial-italic">learn</em>, we write down.
            </h1>
            <p className="mt-5 text-[18px] leading-[1.6] text-[color:var(--text-secondary)]">
              Playbooks, guides and updates for marketing leads who take AI seriously without losing the plot of the business.
            </p>
          </header>

          {posts.length > 0 && (
            <section className="mt-16">
              <div className="mb-8 flex items-baseline justify-between">
                <h2 className="text-[20px] font-semibold tracking-tight text-[color:var(--text-primary)]">
                  Fresh from the blog
                </h2>
                <Link
                  href="/en/blog"
                  className="link-underline text-[14px] text-[color:var(--brand-primary)]"
                >
                  All posts →
                </Link>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((p) => (
                  <PostCard key={p.id} post={p} hrefPrefix="/en" locale="en-US" />
                ))}
              </div>
            </section>
          )}

          <section className="mt-20">
            <h2 className="text-[20px] font-semibold tracking-tight text-[color:var(--text-primary)]">
              Topics we cover
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
      <Footer locale="en" currentPath="/en/resources" />
    </>
  );
}
