import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { PostBody, renderSourcesList } from '@nukipa/post-renderer-react';
import { getNukipaClient } from '@/lib/nukipa';
import { PostCard } from '@/components/PostCard';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

// Same SDK calls as the DE route - the Nukipa SDK does not yet expose
// a locale filter, so DE and EN render the same content. Only the
// chrome (heading copy, date locale, back-link label) differs.
export const revalidate = 60;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const client   = await getNukipaClient();
  const post     = await client.getPostBySlug(slug);
  if (!post) return {};
  const seo = (post.seo as Record<string, string | undefined>) || {};
  return {
    title:       seo.title       || post.title,
    description: seo.description || post.excerpt || undefined,
    alternates: {
      languages: {
        'de-DE': `/blog/${slug}`,
        'en-US': `/en/blog/${slug}`
      }
    },
    openGraph: {
      title:       seo.title       || post.title,
      description: seo.description || post.excerpt || undefined,
      images:      seo.og_image ? [{ url: seo.og_image }]
                 : (post.cover?.url ? [{ url: post.cover.url }] : undefined),
      type:        'article'
    }
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const client   = await getNukipaClient();
  const post     = await client.getPostBySlug(slug);
  if (!post) notFound();

  // `<PostBody>` hydrates interactive islands (CTA tracking, contact-form
  // submissions, lead-gen forms) - DO NOT replace with
  // dangerouslySetInnerHTML or a markdown-to-html call, that collapses
  // every island to dead HTML and breaks analytics + form submissions.
  const related     = await client.listRelatedPosts(slug, { limit: 3 });
  const sourcesHtml = renderSourcesList(post.sources ?? []);

  return (
    <>
      <Navbar locale="en" currentPath={`/en/blog/${slug}`} />
      <main className="bg-[color:var(--surface-page)]">
        <article className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
          <Link
            href="/en/blog"
        className="group inline-flex items-center gap-1 text-sm font-medium text-[color:var(--color-accent)] transition-colors duration-200"
      >
        <span aria-hidden="true">&larr;</span>
        <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1.5px] bg-left-bottom bg-no-repeat transition-[background-size] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-[length:100%_1.5px]">
          Back to blog
        </span>
      </Link>

      <header className="mt-8 mb-10">
        <h1 className="font-[var(--font-display)] text-4xl font-normal leading-[1.1] tracking-tight text-[color:var(--color-fg)] lg:text-5xl">
          {post.title}
        </h1>
        {post.published_at && (
          <time className="mt-4 block text-sm text-[color:var(--color-muted)]">
            {new Date(post.published_at).toLocaleDateString('en-US', {
              year: 'numeric', month: 'long', day: 'numeric'
            })}
          </time>
        )}
      </header>

      {post.cover?.url && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={post.cover.url}
          alt={post.cover.alt || post.title}
          className="mb-10 w-full rounded-[14px] border border-[color:var(--color-border)]"
        />
      )}

      <div className="prose-body">
        <PostBody
          body={post.body ?? ''}
          components={post.components ?? []}
          sources={post.sources ?? []}
          postId={post.id}
          lang={post.language ?? undefined}
        />
        {sourcesHtml && <div dangerouslySetInnerHTML={{ __html: sourcesHtml }} />}
      </div>

      {related.length > 0 && (
        <section className="mt-20 border-t border-[color:var(--color-border)] pt-12">
          <h2 className="mb-8 text-2xl font-semibold tracking-tight text-[color:var(--color-fg)]">
            Related
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {related.map((r) => <PostCard key={r.id} post={r} hrefPrefix="/en" locale="en-US" />)}
          </div>
        </section>
      )}
        </article>
      </main>
      <Footer locale="en" currentPath={`/en/blog/${slug}`} />
    </>
  );
}
