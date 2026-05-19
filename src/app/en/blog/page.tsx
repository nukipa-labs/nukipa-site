import type { Metadata } from 'next';
import { getNukipaClient } from '@/lib/nukipa';
import { PostCard } from '@/components/PostCard';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

// Revalidate the listing every minute. Posts are published from the
// Nukipa dashboard, not committed to this repo; ISR keeps the listing
// fresh without redeploying.
//
// The Nukipa SDK does not yet support a locale filter, so this EN
// mirror renders the same posts as `/blog`. Only the chrome differs.
export const revalidate = 60;

export const metadata: Metadata = {
  title:       'Blog',
  description: 'The latest from the Nukipa team: AI marketing, GEO and B2B content automation.',
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
      <Navbar locale="en" currentPath="/en/blog" />
      <main className="bg-[color:var(--surface-page)]">
        <section className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
          <header className="mb-12 max-w-2xl">
            <p className="text-sm font-medium tracking-[0.02em] text-[color:var(--color-accent)]">
              From the blog
            </p>
            <h1 className="mt-3 font-[var(--font-display)] text-4xl font-normal italic leading-[1.05] tracking-tight text-[color:var(--color-fg)] lg:text-6xl">
              Notes from the engine room.
            </h1>
            <p className="mt-5 max-w-prose text-lg leading-[1.6] text-[color:var(--color-muted)]">
              How we build AI agents, automate B2B content and make brands visible in AI search.
            </p>
          </header>

          {posts.length === 0 ? (
            <p className="text-base text-[color:var(--color-muted)]">
              No posts published yet. Check back soon.
            </p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((p) => (
                <PostCard key={p.id} post={p} hrefPrefix="/en" locale="en-US" />
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer locale="en" currentPath="/en/blog" />
    </>
  );
}
