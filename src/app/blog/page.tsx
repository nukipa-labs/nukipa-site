import type { Metadata } from 'next';
import { getNukipaClient } from '@/lib/nukipa';
import { PostCard } from '@/components/PostCard';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

// Revalidate the listing every minute. Posts are published from the
// Nukipa dashboard, not committed to this repo; ISR keeps the listing
// fresh without redeploying.
export const revalidate = 60;

export const metadata: Metadata = {
  title:       'Blog',
  description: 'Aktuelle Beiträge aus dem Nukipa-Team: KI-Marketing, GEO und B2B-Content-Automatisierung.',
  alternates: {
    languages: {
      'de-DE': '/blog',
      'en-US': '/en/blog'
    }
  }
};

export default async function BlogIndex() {
  const client = await getNukipaClient();
  const posts  = await client.listPosts({ limit: 50 });

  return (
    <>
      <Navbar locale="de" currentPath="/blog" />
      <main className="bg-[color:var(--surface-page)]">
        <section className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
          <header className="mb-12 max-w-2xl">
            <p className="text-sm font-medium tracking-[0.02em] text-[color:var(--color-accent)]">
              Aus dem Blog
            </p>
            <h1 className="mt-3 font-[var(--font-display)] text-4xl font-normal italic leading-[1.05] tracking-tight text-[color:var(--color-fg)] lg:text-6xl">
              Notizen aus dem Maschinenraum.
            </h1>
            <p className="mt-5 max-w-prose text-lg leading-[1.6] text-[color:var(--color-muted)]">
              Wie wir KI-Agenten bauen, B2B-Inhalte automatisieren und Marken in der KI-Suche sichtbar machen.
            </p>
          </header>

          {posts.length === 0 ? (
            <p className="text-base text-[color:var(--color-muted)]">
              Noch keine Beitr&auml;ge ver&ouml;ffentlicht. Schau bald wieder vorbei.
            </p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((p) => (
                <PostCard key={p.id} post={p} locale="de-DE" />
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer locale="de" currentPath="/blog" />
    </>
  );
}
